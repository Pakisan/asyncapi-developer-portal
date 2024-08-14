---
title: Apache Kafka message binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "Apache Kafka message binding"
  - - meta
    - name: "og:description"
      content: "How to use Apache Kafka with AsyncAPI message binding"
  - - meta
    - name: "og:image"
      content: "/bindings/apache-kafka.png"
---

# {{ $frontmatter.title }}

Contains information about the message representation in Apache Kafka.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/kafka/0.1.0/message.json"/>

## Examples

```json
{
    "key": {
        "type": "string",
        "enum": [
            "myKey"
        ]
    },
    "bindingVersion": "0.1.0"
}
```

## Changelog

Good news, nothing was changed