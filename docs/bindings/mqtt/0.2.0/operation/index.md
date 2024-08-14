---
title: MQTT operation binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "MQTT operation binding"
  - - meta
    - name: "og:description"
      content: "How to use MQTT with AsyncAPI operation binding"
  - - meta
    - name: "og:image"
      content: "/bindings/mqtt.png"
---

# {{ $frontmatter.title }}

Contains information about the server operation in MQTT.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/mqtt/0.2.0/operation.json"/>

## Examples

```json
{
    "qos": 2,
    "retain": true,
    "messageExpiryInterval": 60,
    "bindingVersion": "0.2.0"
}
```

## Changelog

### Added

#### messageExpiryInterval

Lifetime of the message in seconds

```json
{
    "messageExpiryInterval": { // [!code ++]
        "oneOf": [ // [!code ++]
            { // [!code ++]
                "type": "integer", // [!code ++]
                "minimum": 0, // [!code ++]
                "maximum": 4294967295 // [!code ++]
            }, // [!code ++]
            { // [!code ++]
                "$ref": "http://asyncapi.com/definitions/3.0.0/schema.json" // [!code ++]
            }, // [!code ++]
            { // [!code ++]
                "$ref": "http://asyncapi.com/definitions/3.0.0/Reference.json" // [!code ++]
            } // [!code ++]
        ], // [!code ++]
        "description": "Lifetime of the message in seconds" // [!code ++]
    } // [!code ++]
}
```