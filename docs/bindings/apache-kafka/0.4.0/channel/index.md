---
title: Apache Kafka channel binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "Apache Kafka channel binding"
  - - meta
    - name: "og:description"
      content: "How to use Apache Kafka with AsyncAPI channel binding"
  - - meta
    - name: "og:image"
      content: "/bindings/apache-kafka.png"
---

# {{ $frontmatter.title }}

Contains information about the message representation in Apache Kafka.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/kafka/0.4.0/channel.json"/>

## Examples

```json
{
    "topic": "my-specific-topic",
    "partitions": 20,
    "replicas": 3,
    "bindingVersion": "0.3.0"
}
```

## Migration guide

Good news, new property was introduces

### topicConfiguration

```json
{
    "topic": {
        "type": "string",
        "description": "Kafka topic name if different from channel name."
    },
    "partitions": {
        "type": "integer",
        "minimum": 1,
        "description": "Number of partitions configured on this topic."
    },
    "replicas": {
        "type": "integer",
        "minimum": 1,
        "description": "Number of replicas configured on this topic."
    },
    "topicConfiguration" : { // [!code ++]
        "description": "Topic configuration properties that are relevant for the API.", // [!code ++]
        "type": "object", // [!code ++]
        "additionalProperties": false, // [!code ++]
        "properties": { // [!code ++]
            "cleanup.policy": { // [!code ++]
                "description": "The [`cleanup.policy`](https://kafka.apache.org/documentation/#topicconfigs_cleanup.policy) configuration option.", // [!code ++]
                "type": "array", // [!code ++]
                "items":{ // [!code ++]
                    "type": "string", // [!code ++]
                    "enum": ["compact", "delete"] // [!code ++]
                } // [!code ++]
            }, // [!code ++]
            "retention.ms": { // [!code ++]
                "description": "The [`retention.ms`](https://kafka.apache.org/documentation/#topicconfigs_retention.ms) configuration option.", // [!code ++]
                "type": "integer", // [!code ++]
                "minimum": -1 // [!code ++]
            }, // [!code ++]
            "retention.bytes": { // [!code ++]
                "description": "The [`retention.bytes`](https://kafka.apache.org/documentation/#topicconfigs_retention.bytes) configuration option.", // [!code ++]
                "type": "integer", // [!code ++]
                "minimum": -1 // [!code ++]
            }, // [!code ++]
            "delete.retention.ms": { // [!code ++]
                "description": "The [`delete.retention.ms`](https://kafka.apache.org/documentation/#topicconfigs_delete.retention.ms) configuration option.", // [!code ++]
                "type": "integer", // [!code ++]
                "minimum": 0 // [!code ++]
            }, // [!code ++]
            "max.message.bytes": { // [!code ++]
                "description": "The [`max.message.bytes`](https://kafka.apache.org/documentation/#topicconfigs_max.message.bytes) configuration option.", // [!code ++]
                "type": "integer", // [!code ++]
                "minimum": 0 // [!code ++]
            } // [!code ++]
        } // [!code ++]
    }, // [!code ++]
    "bindingVersion": {
        "type": "string",
        "enum": [
            "0.4.0"
        ],
        "description": "The version of this binding. If omitted, 'latest' MUST be assumed."
    }
}
```