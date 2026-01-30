# Inspections

This section contains inspection rules for Apache Kafka to implement

## @KafkaListeners

This annotation is used to configure the Kafka listener. It allows you to define multiple `@KafkaListener` when repeateable annotations are not supported

### Empty @KafkaListeners

This inspection checks if the `@KafkaListeners` annotation is empty, which means no `@KafkaListener` is defined. In such a case, the application will ignore:

#### Method Level

```java
public class Example {

    /**
     * This is a listener for ConsumerRecords messages
     */
    @KafkaListeners
    public void listen(ConsumerRecords<String, SendPublicMessageRequest> records) {}

}
```

#### Class Level

```java
@KafkaListeners
public class Example {

    /**
     * This is a listener for ConsumerRecords messages
     */
    @KafkaHandler
    public void listen(ConsumerRecords<String, SendPublicMessageRequest> records) {}

}
```

That means that application behavior will be affected, as no Kafka listeners will be registered and messages will not be processed

*Error Level*: <span style="color:yellow">Warning</span>

## @KafkaListener

This annotation is used to configure a Kafka listener. It allows you to define multiple `@KafkaListener` when repeateable annotations are supported

### Empty @KafkaListener

This inspection checks if the `@KafkaListener` annotation is empty. In such a case, the application will throw an exception:

```
java.lang.IllegalStateException: topics, topicPattern, or topicPartitions must be provided
```

#### Method Level

```java
public class Example {

    /**
     * This is a listener for ConsumerRecords messages
     */
    @KafkaListener
    public void listen(ConsumerRecords<String, SendPublicMessageRequest> records) {}

}
```

#### Class Level

```java
@KafkaListener
public class Example {

    /**
     * This is a listener for ConsumerRecords messages
     */
    @KafkaHandler
    public void listen(ConsumerRecords<String, SendPublicMessageRequest> records) {}

}
```

That means that application won't start

*Error Level*: <span style="color:red">Error</span>

### @KafkaListener with non unique group ID

This inspection checks if the `@KafkaListener` annotation has a non-unique group ID

While it is possible to have multiple `@KafkaListener` on a same topic it's important to have a unique group ID for each listener

#### Method Level

```java
public class Example {

    /**
     * This is a listener #1 for ConsumerRecords messages
     */
    @KafkaListener(topics = "messages.1", groupId = "group_1")
    public void listen(ConsumerRecords<String, SendPublicMessageRequest> records) {}

    /**
     * This is a listener #2 for ConsumerRecords messages
     */
    @KafkaListener(topics = "messages.1", groupId = "group_1")
    public String listenAndReply(ConsumerRecords<String, SendPublicMessageRequest> records) {}

}
```

#### Class Level

```java
@KafkaListener(topics = "messages.1", groupId = "group_1")
@KafkaListener(topics = "messages.1", groupId = "group_1")
public class Example {

    /**
     * This is a listener #1 for ConsumerRecords messages
     */
    @KafkaHandler
    public void listen(ConsumerRecords<String, SendPublicMessageRequest> records) {}

}
```

Otherwise, application behavior will be different from expected

*Error Level*: <span style="color:yellow">Warning</span>

### @KafkaListener with ambiguous configuration

This inspection checks if the `@KafkaListener` annotation has ambiguous configuration

It's important to respect the framework configuration processing guidelines to avoid unexpected behavior

> Spring `@KafkaListener` configuration processing guidelines:
> - `topics` mutually exclusive with `topicPattern` and `topicPartitions`
> - `topicPattern` mutually exclusive with `topics` and `topicPartitions`
> - `topicPartitions` mutually exclusive with `topics` and `topicPattern`

#### Method Level

```java
public class Example {

    /**
     * This is a listener #1 for ConsumerRecords messages
     */
    @KafkaListener(topics = "messages.1", groupId = "group_1", topicPattern = "messages.*")
    public void listen(ConsumerRecords<String, SendPublicMessageRequest> records) {}

}
```

#### Class Level

```java
@KafkaListener(topics = "messages.1", groupId = "group_1", topicPattern = "messages.*")
public class Example {

    /**
     * This is a listener #1 for ConsumerRecords messages
     */
    @KafkaHandler
    public void listen(ConsumerRecords<String, SendPublicMessageRequest> records) {}

}
```

Otherwise, application behavior will be different from expected

*Error Level*: <span style="color:yellow">Warning</span>

## @KafkaHandler

This annotation is used to define a method that will be invoked when a message is received. This inspection is applicable to both configuration variants:
- Class Level `@KafkaListeners`
- Class Level repeatable or one `@KafkaListener`

### Empty @KafkaHandler

This inspection checks if the `@KafkaHandler` annotation is empty.

```java
@KafkaListener(topics = "messages.1")
public class Example {

    /**
     * This is a listener #1 for ConsumerRecords messages
     */
    @KafkaHandler
    public void listen() {}

}
```

*Error Level*: <span style="color:red">Error</span>

### @KafkaHandler with an ambiguous payload type

> It is important to understand that when a message arrives, the method selection depends on the payload type. 
> The type is matched with a single non-annotated parameter, or one that is annotated with `@Payload`. 
> There must be no ambiguity - the system must be able to select exactly one method based on the payload type.

#### Multiple arguments without `@Payload` annotation

```java
@KafkaListener(topics = "messages.1")
public class Example {

    /**
     * This is a listener #1 for ConsumerRecords messages
     */
    @KafkaHandler
    public void listen(String message, MessageHeaders headers) {}

}
```

*Error Level*: <span style="color:red">Error</span>

#### More than one argument with `@Payload` annotation

```java
@KafkaListener(topics = "messages.1")
public class Example {

    /**
     * This is a listener #1 for ConsumerRecords messages
     */
    @KafkaHandler
    public void listen(@Payload String message1, @Payload String message2) {}

}
```

*Error Level*: <span style="color:red">Error</span>

#### @ConsumerRecord or @ConsumerRecords with multiple arguments

```java
@KafkaListener(topics = "messages.1")
public class Example {

    /**
     * This is a listener #1 for ConsumerRecord messages
     */
    @KafkaHandler
    public void listen(ConsumerRecord<String,  SendPublicMessageRequest> record, @Headers Map<String, Object> headers) {}

    /**
     * This is a listener #2 for ConsumerRecords messages
     */
    @KafkaHandler
    public void listen(ConsumerRecords<String,  SendPublicMessageRequest> records, @Headers Map<String, Object> headers) {}

}
```

*Error Level*: <span style="color:red">Error</span>

#### Identical @KafkaHandler methods

```java
@KafkaListener(topics = "messages.1")
public class Example {

    /**
     * This is a listener #1 for ConsumerRecord messages
     */
    @KafkaHandler
    public void listen(ConsumerRecord<String, SendPublicMessageRequest> record) {}

    /**
     * This is a listener #2 for ConsumerRecord messages
     */
    @KafkaHandler
    public void listen(ConsumerRecord<String,  SendPublicMessageRequest> record) {}

}
```

*Error Level*: <span style="color:red">Error</span>

## @SendTo

TODO: finish analysis of incorrect or missed `@Bean`s required for `@SendTo` support

### Only void `@KafkaHandler`

When all `@KafkaHandler` methods are void

```java
@KafkaListener(topics = {"messages.blue"})
@KafkaListener(topics = {"messages.green"})
@SendTo({"messages.*.replies", "messages.*.replies-2"})
public class MultiMessagesListener {

    @KafkaHandler
    public void listen(Object message) {}

}
```

*Error Level*: <span style="color:yellow">Warning</span>

## Topics

Topic name inspection checks if the topic name is valid

### Invalid topic name

Topic name is invalid when it violates this pattern: `[a-zA-Z0-9\\._\\-]`

*Error Level*: <span style="color:red">Error</span>