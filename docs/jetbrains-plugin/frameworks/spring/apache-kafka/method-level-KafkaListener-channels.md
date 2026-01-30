# Method Level @KafkaListener

## Selection Criteria

Found methods will be selected for further processing only if `@KafkaListener` annotation is not empty.

## Registration process

Each `@KafkaListener` annotation is considered as a separate channel

Operations registration process depends on `@SendTo` annotation usage.

#### Without @SendTo

```java
@Component
public class MultiMessagesListener {

    @KafkaListener(topics = "messages.1", groupId = "group_1")
    @KafkaListener(topics = {"messages.2", "messages.3"}, groupId = "group_2")
    public void listen(Object message) {}

}
```

The next channels will be registered:
- `messages.1`
- `messages.2`
- `messages.3`

#### With @SendTo

```java
@Component
public class MultiMessagesListener {

    @KafkaListener(topics = "messages.1", groupId = "group_1")
    @KafkaListener(topics = {"messages.2", "messages.3"}, groupId = "group_2")
    @SendTo("messages.replies")
    public void listen(Object message) {}

}
```

The next channels will be registered:
- `messages.1`
- `messages.2`
- `messages.3`
- `messages.replies`

#### Messages registration

#### Without @SendTo

Each incoming message will be associated with chanel from `@KafkaListener` annotation

#### With @SendTo

When method is `void`, than each incoming message will be associated with chanel from `@KafkaListener` annotation

When method is non-`void`, than:
- incoming messages will be associated with chanel from `@KafkaListener` annotation
- outgoing messages will be associated with chanel from `@SendTo` annotation