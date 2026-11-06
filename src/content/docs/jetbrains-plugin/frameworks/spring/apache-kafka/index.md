---
title: "Spring Kafka to AsyncAPI: Listeners, @SendTo and KafkaTemplate"
description: How the AsyncAPI plugin turns Spring for Apache Kafka code into an AsyncAPI document. Servers from application properties, channels from @KafkaListener, operations from @KafkaHandler, @SendTo and KafkaTemplate, with examples.
head:
  - tag: meta
    attrs:
      name: keywords
      content: spring kafka asyncapi, generate asyncapi from spring boot kafka, kafkalistener asyncapi, sendto asyncapi, kafkatemplate asyncapi, spring kafka documentation
heading: "Spring for Apache Kafka to AsyncAPI"
---

The [AsyncAPI plugin](/jetbrains-plugin/) reads Spring for Apache Kafka code in the _AsyncAPI: Spring_ tool window and exports it as an AsyncAPI document. This page shows what it reads and what each piece of code becomes:

| Code | AsyncAPI |
| --- | --- |
| `spring.kafka.bootstrap-servers` in application properties | [Servers](#servers), one set per Spring profile |
| `@KafkaListener` on a method or a class, `@KafkaListeners` | [Channels](#channels) and [receive operations](#receive-operations) |
| `@SendTo` on a listener | [Reply channels and receive-and-reply operations](#receive-and-reply-with-sendto) |
| `KafkaTemplate.send(...)` | [Send operations](#send-operations-with-kafkatemplate) |

Mistakes in listener code that would make the document wrong, or the application misbehave, are flagged by the free [Kafka inspections](/jetbrains-plugin/frameworks/spring/apache-kafka/inspections.html). Limits that apply to all Spring frameworks, such as SpEL expressions, are on the [Spring Messaging overview](/jetbrains-plugin/frameworks/).

## Servers

Servers come from `spring.kafka.bootstrap-servers` in the application configuration files. Every profile gets its own servers, named after the profile.

`application.properties`

```properties
spring.kafka.bootstrap-servers=kafka.dc-1.lo:9092,kafka.dc-2.lo:9092
```

`application-test.properties`

```properties
spring.kafka.bootstrap-servers=kafka-test.dc-1.lo:9092,kafka-test.dc-2.lo:9092
```

Registered servers:

- `kafka.dc-1.lo:9092`
- `kafka.dc-2.lo:9092`
- `kafka-test.dc-1.lo:9092`, profile `test`
- `kafka-test.dc-2.lo:9092`, profile `test`

## Channels

Every topic in a `@KafkaListener` becomes a channel, and so does every topic in `@SendTo`.

### @KafkaListener on a method

A method is used when its `@KafkaListener` names at least one topic. Repeated annotations each add their topics:

```java
@Component
public class MultiMessagesListener {

    @KafkaListener(topics = "messages.1", groupId = "group_1")
    @KafkaListener(topics = {"messages.2", "messages.3"}, groupId = "group_2")
    @SendTo("messages.replies")
    public String listen(Object message) {}

}
```

Registered channels: `messages.1`, `messages.2`, `messages.3` and, from `@SendTo`, `messages.replies`.

Messages:

- what the method receives belongs to the `@KafkaListener` channels;
- what a non-`void` method returns belongs to the `@SendTo` channels. A `void` method has no outgoing message, even with `@SendTo`.

### @KafkaListener on a class

A class-level `@KafkaListener` needs at least one `@KafkaHandler` method: Spring rejects the class otherwise ([Spring documentation](https://docs.spring.io/spring-kafka/reference/kafka/receiving-messages/class-level-kafkalistener.html)), and the plugin skips it.

```java
@KafkaListener(topics = "messages.1", groupId = "group_1")
@KafkaListener(topics = {"messages.2", "messages.3"}, groupId = "group_2")
@SendTo("messages.replies")
public class MultiMessagesListener {

    @KafkaHandler
    public String onText(String message) {}

    @KafkaHandler
    public void onAny(Object message) {}

}
```

Channels are the same as for a method: `messages.1`, `messages.2`, `messages.3` and `messages.replies`. What every `@KafkaHandler` receives belongs to the listener channels; what the non-`void` handlers return belongs to the `@SendTo` channels.

### @KafkaListeners

`@KafkaListeners` holds several `@KafkaListener` annotations, for code where repeatable annotations are not available. It is read exactly like the repeated annotations above, on a method or on a class. An empty `@KafkaListeners` is skipped, and [an inspection](/jetbrains-plugin/frameworks/spring/apache-kafka/inspections.html#empty-kafkalisteners) flags it.

### KafkaAdmin topics (planned)

Topics declared as `NewTopic` beans for `KafkaAdmin` are not read yet. When they are, their partitions and replicas will go into the channel bindings:

```java
@Configuration
public class KafkaTopicConfig {

    @Bean
    public NewTopic myTopic() {
        return TopicBuilder.name("myTopic")
                .partitions(10)
                .replicas(2)
                .build();
    }

}
```

## Receive operations

Without `@SendTo`, each topic of each `@KafkaListener` becomes one receive operation, with the listener's `groupId`. On a class, this happens for every `@KafkaHandler` method.

```java
@Component
public class MultiMessagesListener {

    @KafkaListener(topics = {"messages.blue"})
    @KafkaListener(topics = {"messages.green", "messages.yellow"}, groupId = "group-id")
    public void listen(Object message) {}

}
```

Created operations:

1. receive `Object` from `messages.blue`
2. receive `Object` from `messages.green` with groupId `group-id`
3. receive `Object` from `messages.yellow` with groupId `group-id`

## Receive and reply with @SendTo

With `@SendTo` and a non-`void` method or `@KafkaHandler`, every pair of a listener topic and a reply topic becomes a receive operation with a reply.

```java
@Component
public class MultiMessagesListener {

    @KafkaListener(topics = {"messages.blue"})
    @KafkaListener(topics = {"messages.green", "messages.yellow"}, groupId = "group-id")
    @SendTo({"messages.replies.1", "messages.replies.2"})
    public String listen(Object message) {}

}
```

Created operations:

1. receive `Object` from `messages.blue`, reply to `messages.replies.1` with `String`
2. receive `Object` from `messages.blue`, reply to `messages.replies.2` with `String`
3. receive `Object` from `messages.green` with groupId `group-id`, reply to `messages.replies.1` with `String`
4. receive `Object` from `messages.green` with groupId `group-id`, reply to `messages.replies.2` with `String`
5. receive `Object` from `messages.yellow` with groupId `group-id`, reply to `messages.replies.1` with `String`
6. receive `Object` from `messages.yellow` with groupId `group-id`, reply to `messages.replies.2` with `String`

The same annotations on a class with a non-`void` `@KafkaHandler` give the same operations, for that handler.

`@SendTo` is ignored, and plain [receive operations](#receive-operations) are created, when:

- `@SendTo` has no topics;
- the method is `void`, or every `@KafkaHandler` of the class is `void`.

## Send operations with KafkaTemplate

Every `KafkaTemplate.send(...)` call whose topic is a string literal becomes a send operation:

```java
@Service
@RequiredArgsConstructor
public class MessagesRouter {

    private final KafkaTemplate<String, SendPublicMessageRequest> kafkaTemplate;

    public void send(SendPublicMessageRequest message) {
        kafkaTemplate.send("topic-name", message);
    }

}
```

Not registered:

- `sendDefault(...)`: the topic is not in the code;
- `send(...)` with a topic from a variable or field, such as an `@Value("${...}")` property.

## What is skipped

| Code | Why |
| --- | --- |
| `@KafkaListener` with no topics | There is no channel to describe |
| Empty `@KafkaListeners` | There is no listener in it |
| Class-level `@KafkaListener` without `@KafkaHandler` | Spring rejects it too |
| `@KafkaHandler` with no parameters | There is no message to describe |
| `@KafkaHandler` with several parameters and no way to tell the payload | The message type would be a guess |

```java
@KafkaListener(topics = {"messages.green"})
public class MultiMessagesListener {

    @KafkaHandler
    public void noMessage() {}                          // no parameters

    @KafkaHandler
    public void unclear(Object obj1, Object obj2) {}    // which one is the payload?

}
```
