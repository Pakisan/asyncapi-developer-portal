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

Good news, this version introduces new properties

### schemaIdLocation
```json
{
    "key": {
      "$ref": "http://asyncapi.com/definitions/3.0.0/schema.json",
      "description": "The message key."
    },
    "schemaIdLocation": { // [!code ++]
      "type": "string", // [!code ++]
      "description": "If a Schema Registry is used when performing this operation, tells where the id of schema is stored.", // [!code ++]
      "enum": ["header", "payload"] // [!code ++]
    }, // [!code ++]
    "schemaIdPayloadEncoding": {
      "type": "string",
      "description": "Number of bytes or vendor specific values when schema id is encoded in payload."
    },
    "schemaLookupStrategy": {
      "type": "string",
      "description": "Freeform string for any naming strategy class to use. Clients should default to the vendor default if not supplied."
    },
    "bindingVersion": {
      "type": "string",
      "enum": [
        "0.3.0"
      ],
      "description": "The version of this binding. If omitted, 'latest' MUST be assumed."
    }
}
```

### schemaIdPayloadEncoding

```json
{
    "key": {
      "$ref": "http://asyncapi.com/definitions/3.0.0/schema.json",
      "description": "The message key."
    },
    "schemaIdLocation": {
      "type": "string",
      "description": "If a Schema Registry is used when performing this operation, tells where the id of schema is stored.",
      "enum": ["header", "payload"]
    },
    "schemaIdPayloadEncoding": { // [!code ++]
      "type": "string", // [!code ++]
      "description": "Number of bytes or vendor specific values when schema id is encoded in payload." // [!code ++]
    }, // [!code ++]
    "schemaLookupStrategy": {
      "type": "string",
      "description": "Freeform string for any naming strategy class to use. Clients should default to the vendor default if not supplied."
    },
    "bindingVersion": {
      "type": "string",
      "enum": [
        "0.3.0"
      ],
      "description": "The version of this binding. If omitted, 'latest' MUST be assumed."
    }
}
```

### schemaLookupStrategy

```json
{
    "key": {
      "$ref": "http://asyncapi.com/definitions/3.0.0/schema.json",
      "description": "The message key."
    },
    "schemaIdLocation": {
      "type": "string",
      "description": "If a Schema Registry is used when performing this operation, tells where the id of schema is stored.",
      "enum": ["header", "payload"]
    },
    "schemaIdPayloadEncoding": {
      "type": "string",
      "description": "Number of bytes or vendor specific values when schema id is encoded in payload."
    },
    "schemaLookupStrategy": { // [!code ++]
      "type": "string", // [!code ++]
      "description": "Freeform string for any naming strategy class to use. Clients should default to the vendor default if not supplied." // [!code ++]
    }, // [!code ++]
    "bindingVersion": {
      "type": "string",
      "enum": [
        "0.3.0"
      ],
      "description": "The version of this binding. If omitted, 'latest' MUST be assumed."
    }
}
```