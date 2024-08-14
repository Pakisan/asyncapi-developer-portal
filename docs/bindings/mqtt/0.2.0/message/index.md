---
title: MQTT message binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "MQTT message binding"
  - - meta
    - name: "og:description"
      content: "How to use MQTT with AsyncAPI message binding"
  - - meta
    - name: "og:image"
      content: "/bindings/mqtt.png"
---

# {{ $frontmatter.title }}

Contains information about the message representation in MQTT.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/mqtt/0.2.0/message.json"/>

## Examples

```json
{
    "contentType": "application/json",
    "correlationData": {
        "type": "string",
        "format": "uuid"
    },
    "responseTopic": "application/responses",
    "bindingVersion": "0.2.0"
}
```

## Changelog

Good news, nothing was changed