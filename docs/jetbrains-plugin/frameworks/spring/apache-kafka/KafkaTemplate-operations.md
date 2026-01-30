# KafkaTemplate

KafkaTemplate is used to send and receive messages from Kafka topics. It provides methods to send messages synchronously and asynchronously, as well as to receive messages from topics.

## Registration process

Each `KafkaTemplate` onvocation is considered as a separate operation

Operations registration process depends on a used topic.

### Registered invocations

All invocations related with `send` method where topic is a String, are registered as separate operations.

```java
@Service
@RequiredArgsConstructor
public class MessagesRouter {

    private final KafkaTemplate<String, SendPublicMessageRequest> kafkaTemplate;

    public void send(SendPublicMessageRequest message) {
        kafkaTemplate.send("topic-name", message).whenComplete((_, _) -> {});
    }

}
```

### Ignored invocations

#### sendDefault

All invocations related with `sendDefault` method are ignored - it's impossible to determine the topic for which the message is sent.

```java
@Service
@RequiredArgsConstructor
public class MessagesRouter {

    private final KafkaTemplate<String, SendPublicMessageRequest> kafkaTemplate;

    public void send(SendPublicMessageRequest message) {
        kafkaTemplate.sendDefault(message).whenComplete((_, _) -> {});
    }

}
```

#### Non-string topic name

All invocations related with `send` method where topic is not a String are ignored.

This behavior will be changed in the future.

```java
@Service
@RequiredArgsConstructor
public class MessagesRouter {

    @Value("${kafka.messages.replies.topic-name}")
    private String sendTo;

    private final KafkaTemplate<String, SendPublicMessageRequest> kafkaTemplate;

    public void send(SendPublicMessageRequest message) {
        kafkaTemplate.send(sendTo, message).whenComplete((_, _) -> {});
    }

}
```