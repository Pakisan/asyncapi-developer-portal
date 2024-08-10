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

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/kafka/0.3.0/channel.json"/>

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

Good news, nothing was deprecated or changed