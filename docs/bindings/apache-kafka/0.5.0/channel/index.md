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

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/kafka/0.5.0/channel.json"/>

## Examples

```json
{
    "topic": "my-specific-topic",
    "partitions": 20,
    "replicas": 3,
    "bindingVersion": "0.5.0"
}
```

## Migration guide

Good news, new property was extended

### topicConfiguration

```json
{
    "description": "Topic configuration properties that are relevant for the API.",
    "type": "object",
    "additionalProperties": false, // [!code --]
    "additionalProperties": true, // [!code ++]
    "properties": {
        "cleanup.policy": {
            "description": "The [`cleanup.policy`](https://kafka.apache.org/documentation/#topicconfigs_cleanup.policy) configuration option.",
            "type": "array",
            "items":{
                "type": "string",
                "enum": ["compact", "delete"]
            }
        },
        "retention.ms": {
            "description": "The [`retention.ms`](https://kafka.apache.org/documentation/#topicconfigs_retention.ms) configuration option.",
            "type": "integer",
            "minimum": -1
        },
        "retention.bytes": {
            "description": "The [`retention.bytes`](https://kafka.apache.org/documentation/#topicconfigs_retention.bytes) configuration option.",
            "type": "integer",
            "minimum": -1
        },
        "delete.retention.ms": {
            "description": "The [`delete.retention.ms`](https://kafka.apache.org/documentation/#topicconfigs_delete.retention.ms) configuration option.",
            "type": "integer",
            "minimum": 0
        },
        "max.message.bytes": {
            "description": "The [`max.message.bytes`](https://kafka.apache.org/documentation/#topicconfigs_max.message.bytes) configuration option.",
            "type": "integer",
            "minimum": 0
        },
        "confluent.key.schema.validation": { // [!code ++]
            "description": "It shows whether the schema validation for the message key is enabled. Vendor specific config. For more details: (https://docs.confluent.io/platform/current/installation/configuration/topic-configs.html#confluent-key-schema-validation)", // [!code ++]
            "type": "boolean" // [!code ++]
        }, // [!code ++]
        "confluent.key.subject.name.strategy": { // [!code ++]
            "description": "The name of the schema lookup strategy for the message key. Vendor specific config. For more details: (https://docs.confluent.io/platform/current/installation/configuration/topic-configs.html#confluent-key-subject-name-strategy)", // [!code ++]
            "type": "string" // [!code ++]
        }, // [!code ++]
        "confluent.value.schema.validation": { // [!code ++]
            "description": "It shows whether the schema validation for the message value is enabled. Vendor specific config. For more details: (https://docs.confluent.io/platform/current/installation/configuration/topic-configs.html#confluent-value-schema-validation)", // [!code ++]
            "type": "boolean" // [!code ++]
        }, // [!code ++]
        "confluent.value.subject.name.strategy": { // [!code ++]
            "description": "The name of the schema lookup strategy for the message value. Vendor specific config. For more details: (https://docs.confluent.io/platform/current/installation/configuration/topic-configs.html#confluent-value-subject-name-strategy)", // [!code ++]
            "type": "string" // [!code ++]
        } // [!code ++]
    }
}
```