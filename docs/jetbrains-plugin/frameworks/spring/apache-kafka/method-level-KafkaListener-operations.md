# Method Level @KafkaListener

## Selection Criteria

Found method will be selected for further processing only if:

It has `@KafkaListener` annotation on one of its methods and has valid arguments.

## Registration process

Operations registration process depends on `@SendTo` annotation usage.

### With `@SendTo`

See [Receive & Reply Operations](method-level-SendTo-operations.md#registration-process)

### Without `@SendTo`

When listener is registered without `@SendTo` annotation, one-to-one operation will be created for each `@KafkaListener` annotation.

```java
@Component
public class MultiMessagesListener {

    @KafkaListener(topics = {"messages.blue"})
    @KafkaListener(topics = {"messages.green", "messages.yellow"}, groupId = "group-id")
    public void listen(Object message) {}

}
```

The next operations will be created:
1. receive `Object` from `messages.blue`
2. receive `Object` from `messages.green` with groupId `group-id`
3. receive `Object` from `messages.yellow` with groupId `group-id`

## When method will be ignored?

Here are the examples of methods which will be ignored:

### Method with empty `@KafkaListener` annotation

This class will be ignored because it has empty `@KafkaListener` annotation.

```java
@Component
public class MultiMessagesListener {

    @KafkaListener
    public void listen(Object message) {}

}
```