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

## Migration guide

Good news, new property was introduced

### messageExpiryInterval

```json
{
    "qos": {
        "type": "integer",
        "enum": [
            0,
            1,
            2
        ],
        "description": "Defines the Quality of Service (QoS) levels for the message flow between client and server. Its value MUST be either 0 (At most once delivery), 1 (At least once delivery), or 2 (Exactly once delivery)."
    },
    "retain": {
        "type": "boolean",
        "description": "Whether the broker should retain the message or not."
    },
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