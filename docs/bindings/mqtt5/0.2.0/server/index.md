---
title: MQTT v5 server binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "MQTT v5 server binding"
  - - meta
    - name: "og:description"
      content: "How to use MQTT v5 with AsyncAPI server binding"
  - - meta
    - name: "og:image"
      content: "/bindings/mqtt.png"
---

# {{ $frontmatter.title }}

> [!WARNING]
> MQTT version 5 specific bindings are deprecated in favor of [MQTT operation binding](../../../mqtt/0.2.0/server/index.md) that are not version specific.

Contains information about the server representation in MQTT.

## Structure

<Json url="/bindings/mqtt5-server.0.2.0.json" />

## Examples

```json
{
    "sessionExpiryInterval": 60,
    "bindingVersion": "0.2.0"
}
```

```json
{
    "sessionExpiryInterval": {
        "type": "integer",
        "minimum": 100
    },
    "bindingVersion": "0.2.0"
}
```

## Changelog

Good news, nothing was changed