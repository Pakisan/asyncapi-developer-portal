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

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/kafka/0.3.0/message.json"/>

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
    "bindingVersion": "0.3.0"
}
```

## Migration guide

### Added

#### schemaIdLocation

If a Schema Registry is used when performing this operation, tells where the id of schema is stored.

```json
{
    "schemaIdLocation": { // [!code ++]
      "type": "string", // [!code ++]
      "description": "If a Schema Registry is used when performing this operation, tells where the id of schema is stored.", // [!code ++]
      "enum": ["header", "payload"] // [!code ++]
    } // [!code ++]
}
```

#### schemaIdPayloadEncoding

Number of bytes or vendor specific values when schema id is encoded in payload.

```json
{
    "schemaIdPayloadEncoding": { // [!code ++]
      "type": "string", // [!code ++]
      "description": "Number of bytes or vendor specific values when schema id is encoded in payload." // [!code ++]
    } // [!code ++]
}
```

#### schemaLookupStrategy

Freeform string for any naming strategy class to use. Clients should default to the vendor default if not supplied.

```json
{
    "schemaLookupStrategy": { // [!code ++]
      "type": "string", // [!code ++]
      "description": "Freeform string for any naming strategy class to use. Clients should default to the vendor default if not supplied." // [!code ++]
    } // [!code ++]
}
```