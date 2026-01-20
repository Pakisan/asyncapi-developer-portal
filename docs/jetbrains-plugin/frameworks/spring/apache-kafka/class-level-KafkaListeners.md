# Class Level @KafkaListeners

## How classes with `@KafkaListeners` annotation are selected?

Found class will be selected for further processing only if:

1) `@KafkaListeners` is no empty
2) It has `@KafkaHandler` annotation on one of its methods - Spring Documentation: [Class level KafkaListener](https://docs.spring.io/spring-kafka/reference/kafka/receiving-messages/class-level-kafkalistener.html)

> When you use @KafkaListener at the class-level, you must specify @KafkaHandler at the method level.
> If no @KafkaHandler on any methods of this class or its sub-classes, the framework will reject such a configuration.

## When class will be ignored?

Here are the examples of classes which will be ignored:

### Class without `@KafkaHandler` annotations

This class will be ignored because it has no `@KafkaHandler` annotation on any of its methods.

```java
@KafkaListeners({
        @KafkaListener(topics = {"messages.blue"}),
        @KafkaListener(topics = {"messages.green"})
})
public class MultiMessagesListener {
    
    public void listen(Object message) {}

}
```

### Class with empty `@KafkaListeners` annotation

This class will be ignored because it has empty `@KafkaListeners` annotation.

```java
@KafkaListeners
public class MultiMessagesListener {

    @KafkaHandler
    public void listen(Object message) {}

}
```

### Class with not configured `@KafkaListener`

When class was annotated properly, but one of `@KafkaListener` is not configured, class will be ignored. Because such configuraiton on
method level will throw an exception – `java.lang.IllegalStateException: topics, topicPattern, or topicPartitions must be provided`

```java
@KafkaListeners({
        @KafkaListener,
        @KafkaListener(topics = {"messages.green"})
})
public class MultiMessagesListener {

    @KafkaHandler
    public void stringMessage(String string) {}

    @KafkaHandler
    public void integerMessage(Integer integer) {}

    @KafkaHandler
    public void publicMessage(SendPublicMessageRequest message) {}

}
```

### Class with unclear @KafkaHandler

When class contains `@KafkaHandler` with unclear message schema

```java
@KafkaListeners({
        @KafkaListener(topics = {"messages.green"})
})
public class MultiMessagesListener {

    // (1)
    @KafkaHandler
    public void stringMessage() {}

    // (2)
    @KafkaHandler
    public void integerMessage(Object obj1, Object obj2) {}

}
```

- (1) - handler doesn't have any arguments
- (2) - handler has one or more arguments, so it's impossible to understand which argument is message and header, for example