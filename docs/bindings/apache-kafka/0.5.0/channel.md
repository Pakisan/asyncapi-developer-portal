---
title: Apache Kafka Channel Binding v0.5.0 - Topic Configuration
description: Configure Apache Kafka channel bindings v0.5.0 for AsyncAPI. Define topics, partitions, replicas, and advanced topic settings for scalable event streaming.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Apache Kafka channel binding, AsyncAPI, Kafka topic, partitions, replicas, topic configuration, event streaming, data streaming
  - - meta
    - property: og:title
      content: Apache Kafka Channel Binding v0.5.0 - Topic Configuration
  - - meta
    - property: og:description
      content: Configure Apache Kafka channel bindings v0.5.0 for AsyncAPI. Define topics, partitions, replicas, and advanced topic settings for scalable event streaming.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/apache-kafka/0.5.0/channel.html
  - - meta
    - name: og:image
      content: /bindings/apache-kafka/0.5.0/channel.png
  - - meta
    - name: twitter:title
      content: Apache Kafka Channel Binding v0.5.0 - Topic Configuration
  - - meta
    - name: twitter:description
      content: Configure Apache Kafka channel bindings v0.5.0 for AsyncAPI. Define topics, partitions, replicas, and advanced topic settings for scalable event streaming.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/apache-kafka/0.5.0/channel.html
---

# Apache Kafka Channel Binding v0.5.0

The Apache Kafka channel binding object allows you to define Kafka-specific information for an AsyncAPI channel. This binding is essential for configuring Kafka topics, including the number of partitions, replicas, and other topic-level settings.

## Overview

The Kafka channel binding provides a detailed description of a Kafka topic, enabling you to manage its configuration directly within your AsyncAPI specification. This ensures that your applications and other stakeholders have a clear and consistent understanding of the topic's setup.

## Channel Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `topic` | string | No | The name of the Kafka topic. If not specified, the channel name will be used. |
| `partitions` | integer | No | The number of partitions for the topic. Must be a positive integer. |
| `replicas` | integer | No | The number of replicas for the topic. Must be a positive integer. |
| `topicConfiguration` | object | No | An object containing advanced topic configuration properties. |
| `bindingVersion` | string | No | The version of the Kafka channel binding. Defaults to `latest`. |

### `topicConfiguration` Object

The `topicConfiguration` object allows you to specify advanced settings for the Kafka topic.

| Property | Type | Description |
|----------|------|-------------|
| `cleanup.policy` | array[string] | The topic's cleanup policy. Can be `compact` or `delete`. See [Kafka documentation](https://kafka.apache.org/documentation/#topicconfigs_cleanup.policy). |
| `retention.ms` | integer | The retention period for messages in milliseconds. See [Kafka documentation](https://kafka.apache.org/documentation/#topicconfigs_retention.ms). |
| `retention.bytes` | integer | The maximum size of the log segment. See [Kafka documentation](https://kafka.apache.org/documentation/#topicconfigs_retention.bytes). |
| `delete.retention.ms` | integer | The retention period for deleted records. See [Kafka documentation](https://kafka.apache.org/documentation/#topicconfigs_delete.retention.ms). |
| `max.message.bytes` | integer | The maximum size of a message. See [Kafka documentation](https://kafka.apache.org/documentation/#topicconfigs_max.message.bytes). |
| `confluent.key.schema.validation` | boolean | Whether to enable schema validation for the message key (Confluent-specific). |
| `confluent.key.subject.name.strategy` | string | The schema lookup strategy for the message key (Confluent-specific). |
| `confluent.value.schema.validation` | boolean | Whether to enable schema validation for the message value (Confluent-specific). |
| `confluent.value.subject.name.strategy`| string | The schema lookup strategy for the message value (Confluent-specific). |

## Examples

### Basic Topic Configuration

This example defines a Kafka topic with a specific number of partitions and replicas.

```yaml
channels:
  user-signup:
    bindings:
      kafka:
        topic: user-signup-topic
        partitions: 10
        replicas: 3
        bindingVersion: '0.5.0'
```

### Advanced Topic Configuration

This example demonstrates how to set advanced topic properties, such as cleanup policy and retention settings.

```yaml
channels:
  order-events:
    bindings:
      kafka:
        topic: order-events-topic
        partitions: 20
        replicas: 3
        topicConfiguration:
          cleanup.policy: ["compact", "delete"]
          retention.ms: 86400000
          max.message.bytes: 1048576
        bindingVersion: '0.5.0'
```

### Confluent Schema Registry Integration

This example shows how to configure Confluent-specific schema validation settings.

```yaml
channels:
  product-updates:
    bindings:
      kafka:
        topic: product-updates-topic
        topicConfiguration:
          confluent.key.schema.validation: true
          confluent.value.schema.validation: true
          confluent.value.subject.name.strategy: "io.confluent.kafka.serializers.subject.TopicRecordNameStrategy"
        bindingVersion: '0.5.0'
```

## Use Cases

### High-Throughput Data Streaming

Configure a topic with a high number of partitions to handle a large volume of incoming data from multiple producers.

```yaml
channels:
  iot-sensor-data:
    bindings:
      kafka:
        topic: iot-data
        partitions: 50
        replicas: 3
        bindingVersion: '0.5.0'
```

### Event Sourcing

Use a compacted topic to store the full history of events for a specific entity, ensuring that only the latest state is retained.

```yaml
channels:
  customer-profile-events:
    bindings:
      kafka:
        topic: customer-profiles
        partitions: 5
        replicas: 3
        topicConfiguration:
          cleanup.policy: ["compact"]
        bindingVersion: '0.5.0'
```

### Log Aggregation

Configure a topic with a specific retention period to store logs for a defined amount of time.

```yaml
channels:
  application-logs:
    bindings:
      kafka:
        topic: app-logs
        partitions: 10
        replicas: 2
        topicConfiguration:
          retention.ms: 604800000 # 7 days
        bindingVersion: '0.5.0'
```