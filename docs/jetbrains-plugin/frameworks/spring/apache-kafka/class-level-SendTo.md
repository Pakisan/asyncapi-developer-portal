# Class Level @SendTo

## When `@SendTo` will be handled?

If `@SendTo` is present on valid class with class-level `@KafkaListener` or `@KafkaListeners`, and non-void `@KafkaHandler` is present on one of its methods

```java
@KafkaListener(topics = {"messages.blue"})
@KafkaListener(topics = {"messages.green"})
@SendTo({"messages.*.replies", "messages.*.replies-2"})
public class MultiMessagesListener {

    @KafkaHandler
    public String listen(Object message) {}

}
```

## When `@SendTo` will be ignored?

### Empty `@SendTo`

When `@SendTo` annotation is empty

```java
@KafkaListener(topics = {"messages.blue"})
@KafkaListener(topics = {"messages.green"})
@SendTo
public class MultiMessagesListener {

    @KafkaHandler
    public String listen(Object message) {}

}
```

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