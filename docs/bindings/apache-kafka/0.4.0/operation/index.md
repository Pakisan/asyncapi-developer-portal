---
title: Apache Kafka operation binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "Apache Kafka operation binding"
  - - meta
    - name: "og:description"
      content: "How to use Apache Kafka with AsyncAPI operation binding"
  - - meta
    - name: "og:image"
      content: "/bindings/apache-kafka.png"
---

# {{ $frontmatter.title }}

Contains information about the operation representation in Apache Kafka.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/kafka/0.4.0/operation.json"/>

## Examples

```json
{
    "groupId": {
        "type": "string",
        "enum": [
            "myGroupId"
        ]
    },
    "clientId": {
        "type": "string",
        "enum": [
            "myClientId"
        ]
    },
    "bindingVersion": "0.4.0"
}
```

## Migration guide

Good news, nothing was deprecated or changed