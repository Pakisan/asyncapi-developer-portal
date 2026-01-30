# Class Level @SendTo

## Selection Criteria

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

## Registration process

When listener is registered with `@SendTo` annotation, one-to-many operation will be created for each `@KafkaHandler` method.

```java
@KafkaListener(topics = {"messages.blue"})
@KafkaListener(topics = {"messages.green", "messages.yellow"}, groupId = "group-id")
@SendTo({"messages.replies.1", "messages.replies.2"})
public class MultiMessagesListener {

    @KafkaHandler
    public String listen(Object message) {}

}
```

The next operations will be created:
1. receive `Object` from `messages.blue` and reply to `messages.replies.1` with `String`
2. receive `Object` from `messages.blue` and reply to `messages.replies.2` with `String`
3. receive `Object` from `messages.green` with groupId `group-id` and reply to `messages.replies.1` with `String`
4. receive `Object` from `messages.green` with groupId `group-id` and reply to `messages.replies.2` with `String`
5. receive `Object` from `messages.yellow` with groupId `group-id` and reply to `messages.replies.1` with `String`
6. receive `Object` from `messages.yellow` with groupId `group-id` and reply to `messages.replies.2` with `String`

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