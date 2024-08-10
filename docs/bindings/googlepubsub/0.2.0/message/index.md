---
title: Google Cloud Pub/Sub message binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "Google Cloud Pub/Sub message binding"
  - - meta
    - name: "og:description"
      content: "How to use Google Cloud Pub/Sub with AsyncAPI message binding"
  - - meta
    - name: "og:image"
      content: "/bindings/googlepubsub.png"
---

# {{ $frontmatter.title }}

Contains information about the message representation in Google Cloud Pub/Sub.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/googlepubsub/0.2.0/message.json"/>

## Examples

```json
{
    "schema": {
        "name": "projects/your-project-id/schemas/your-avro-schema-id"
    }
}
```

## Migration guide

Bad news, property was removed

```json
{
    "bindingVersion": {
      "type": "string",
      "enum": [
        "0.1.0"
      ],
      "description": "The version of this binding."
    },
    "attributes": {
      "type": "object"
    },
    "orderingKey": {
      "type": "string"
    },
    "schema": {
      "type": "object",
      "additionalItems": false,
      "properties": {
        "name": {
          "type": "string"
        },
        "type": { // [!code --]
          "type": "string" // [!code --]
        } // [!code --]
      },
      "required": ["name", "type"] // [!code --]
      "required": ["name"] // [!code ++]
    }
}
```