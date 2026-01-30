# Method Level @SendTo

## Selection Criteria

If `@SendTo` is present on valid method with `@KafkaListener` or `@KafkaListeners`, and non-void return type

```java
@Component
public class MultiMessagesListener {

    @KafkaListener(topics = {"messages.blue"})
    @KafkaListener(topics = {"messages.green"})
    @SendTo({"messages.*.replies", "messages.*.replies-2"})
    public String listen(Object message) {}

}
```

## Registration process

When listener is registered with `@SendTo` annotation, one-to-many operation will be created for each `@KafkaListener` annotation.

```java
@Component
public class MultiMessagesListener {

    @KafkaListener(topics = {"messages.blue"})
    @KafkaListener(topics = {"messages.green", "messages.yellow"}, groupId = "group-id")
    @SendTo({"messages.replies.1", "messages.replies.2"})
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
@Component
public class MultiMessagesListener {

    @KafkaListener(topics = {"messages.blue"})
    @KafkaListener(topics = {"messages.green"})
    @SendTo
    public String listen(Object message) {}

}
```

### Void method

When method is void

```java
@Component
public class MultiMessagesListener {

    @KafkaListener(topics = {"messages.blue"})
    @KafkaListener(topics = {"messages.green"})
    @SendTo({"messages.*.replies", "messages.*.replies-2"})
    public void listen(Object message) {}

}
```