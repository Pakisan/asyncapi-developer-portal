# Class Level @KafkaListener

## How classes with `@KafkaListener` annotation are selected?

Found class will be selected for further processing only if:

It has `@KafkaHandler` annotation on one of its methods - Spring Documentation: [Class level KafkaListener](https://docs.spring.io/spring-kafka/reference/kafka/receiving-messages/class-level-kafkalistener.html)

> When you use @KafkaListener at the class-level, you must specify @KafkaHandler at the method level.
> If no @KafkaHandler on any methods of this class or its sub-classes, the framework will reject such a configuration.

## When class will be ignored?

Here are the examples of classes which will be ignored:

### Class without `@KafkaHandler` annotations

This class will be ignored because it has no `@KafkaHandler` annotation on any of its methods.

```java
@KafkaListener(topics = {"messages.blue"})
@KafkaListener(topics = {"messages.green"})
public class MultiMessagesListener {

    public void listen(Object message) {}

}
```

### Class with empty `@KafkaListener` annotation

This class will be ignored because it has empty `@KafkaListener` annotation.

```java
@KafkaListener
public class MultiMessagesListener {

    @KafkaHandler
    public void listen(Object message) {}

}
```

### Class with unclear @KafkaHandler

When class contains `@KafkaHandler` with unclear message schema

```java
@KafkaListener(topics = {"messages.green"})
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