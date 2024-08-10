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

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/kafka/0.4.0/message.json"/>

## Examples

```json
{
    "key": {
        "type": "string",
        "enum": [
            "myKey"
        ]
    },
    "schemaIdLocation": "payload",
    "schemaIdPayloadEncoding": "apicurio-new",
    "schemaLookupStrategy": "TopicIdStrategy",
    "bindingVersion": "0.4.0"
}
```

## Migration guide

Bad news, this version contains property changes

### key

Key type was extended

```json
{
    "key": {
        "anyOf": [ // [!code ++]
            { // [!code ++]
                "$ref": "http://asyncapi.com/definitions/3.0.0/Reference.json" // [!code ++]
            }, // [!code ++]
            { // [!code ++]
                "$ref": "http://asyncapi.com/definitions/3.0.0/schema.json"
            }, // [!code ++]
            { // [!code ++]
                "$ref": "http://asyncapi.com/definitions/3.0.0/avroSchema_v1.json" // [!code ++]
            } // [!code ++]
        ], // [!code ++]
        "description": "The message key."
    }
}
```