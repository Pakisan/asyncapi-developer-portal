# KafkaAdmin - TODO

KafkaAdmin is used to manage Kafka topics, brokers, and other resources. It provides methods to create, delete, and modify topics, as well as to retrieve information about existing topics and brokers.

That's why it's important to extract channels from it

```java
@Configuration
public class KafkaTopicConfig {

    @Bean
    public NewTopic myTopic() {
        return TopicBuilder.name("myTopic")
                .partitions(10)
                .replicas(2)
                .build();
    }

}
```