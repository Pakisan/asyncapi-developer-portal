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

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/mqtt/0.1.0/server.json"/>

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
    "bindingVersion": "0.1.0"
}
```

## Changelog

Good news, nothing was changed