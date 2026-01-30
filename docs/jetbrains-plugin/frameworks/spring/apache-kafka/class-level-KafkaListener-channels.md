# Class Level @KafkaListener

## Selection Criteria

Found class will be selected for further processing only if:

It has `@KafkaHandler` annotation on one of its methods

> When you use @KafkaListener at the class-level, you must specify @KafkaHandler at the method level.
> If no @KafkaHandler on any methods of this class or its sub-classes, the framework will reject such a configuration.

Spring Documentation: [Class level KafkaListener](https://docs.spring.io/spring-kafka/reference/kafka/receiving-messages/class-level-kafkalistener.html)

## Registration process

Each `@KafkaListener` annotation is considered as a separate channel

Operations registration process depends on `@SendTo` annotation usage.

#### Without @SendTo

```java
@KafkaListener(topics = "messages.1", groupId = "group_1")
@KafkaListener(topics = {"messages.2", "messages.3"}, groupId = "group_2")
public class MultiMessagesListener {}
```

The next channels will be registered:
- `messages.1`
- `messages.2`
- `messages.3`

#### With @SendTo

```java
@KafkaListener(topics = "messages.1", groupId = "group_1")
@KafkaListener(topics = {"messages.2", "messages.3"}, groupId = "group_2")
@SendTo("messages.replies")
public class MultiMessagesListener {}
```

The next channels will be registered:
- `messages.1`
- `messages.2`
- `messages.3`
- `messages.replies`

#### Messages registration

#### Without @SendTo

When class contains only `void` methods annotated with `@KafkaHandler`, than each incoming message will be associated with chanel from `@KafkaListener` annotation

When class contains `void` and non-`void` methods annotated with `@KafkaHandler`, than only incoming messages will be associated with chanel from `@KafkaListener` annotation

#### With @SendTo

When class contains only `void` methods annotated with `@KafkaHandler`, than each incoming message will be associated with chanel from `@KafkaListener` annotation

When class contains `void` and non-`void` methods annotated with `@KafkaHandler`, than:
- incoming messages will be associated with chanel from `@KafkaListener` annotation
- outgoing messages will be associated with chanel from `@SendTo` annotation