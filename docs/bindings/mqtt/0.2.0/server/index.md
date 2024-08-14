---
title: MQTT server binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "MQTT server binding"
  - - meta
    - name: "og:description"
      content: "How to use MQTT with AsyncAPI server binding"
  - - meta
    - name: "og:image"
      content: "/bindings/mqtt.png"
---

# {{ $frontmatter.title }}

Contains information about the server representation in MQTT.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/mqtt/0.2.0/server.json"/>

## Examples

```json
{
    "clientId": "guest",
    "cleanSession": true,
    "lastWill": {
        "topic": "/last-wills",
        "qos": 2,
        "message": "Guest gone offline.",
        "retain": false
    },
    "keepAlive": 60,
    "sessionExpiryInterval": 120,
    "maximumPacketSize": 1024,
    "bindingVersion": "0.2.0"
}
```

## Changelog

### Added

#### sessionExpiryInterval

Interval time in seconds or a Schema Object containing the definition of the interval. 

The broker maintains a session for a disconnected client until this interval expires.

```json
{
    "sessionExpiryInterval": { //   [!code ++]
        "oneOf": [ //   [!code ++]
            { //   [!code ++]
                "type": "integer", //   [!code ++]
                "minimum": 0 //   [!code ++]
            }, //   [!code ++]
            { //   [!code ++]
                "$ref": "http://asyncapi.com/definitions/3.0.0/schema.json" //   [!code ++]
            }, //   [!code ++]
            { //   [!code ++]
                "$ref": "http://asyncapi.com/definitions/3.0.0/Reference.json" //   [!code ++]
            } //   [!code ++]
        ], //   [!code ++]
        "description": "Interval time in seconds or a Schema Object containing the definition of the interval.  The broker maintains a session for a disconnected client until this interval expires." //   [!code ++]
    }//   [!code ++]
}
```

#### maximumPacketSize

Number of bytes or a Schema Object representing the Maximum Packet Size the Client is willing to accept.

```json
{
    "maximumPacketSize": { //   [!code ++]
        "oneOf": [ //   [!code ++]
            { //   [!code ++]
                "type": "integer", //   [!code ++]
                "minimum": 1, //   [!code ++]
                "maximum": 4294967295 //   [!code ++]
            }, //   [!code ++]
            { //   [!code ++]
                "$ref": "http://asyncapi.com/definitions/3.0.0/schema.json" //   [!code ++]
            }, //   [!code ++]
            { //   [!code ++]
                "$ref": "http://asyncapi.com/definitions/3.0.0/Reference.json" //   [!code ++]
            } //   [!code ++]
        ], //   [!code ++]
        "description": "Number of bytes or a Schema Object representing the Maximum Packet Size the Client is willing to accept." //   [!code ++]
    } //   [!code ++]
}
```