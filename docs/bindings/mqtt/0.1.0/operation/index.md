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

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/mqtt/0.1.0/operation.json"/>

## Examples

```json
{
    "qos": 2,
    "retain": true,
    "bindingVersion": "0.1.0"
}
```

## Migration guide

Good news, nothing was deprecated or changed