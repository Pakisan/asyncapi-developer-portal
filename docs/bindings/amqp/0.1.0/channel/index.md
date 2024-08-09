---
title: AMQP 0-9-1 channel binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "AMQP 0-9-1 channel binding"
  - - meta
    - name: "og:description"
      content: "How to use AMQP 0-9-1 with AsyncAPI channel binding"
  - - meta
    - name: "og:image"
      content: "/bindings/amqp.png"
---

# {{ $frontmatter.title }}

Contains information about the channel representation in AMQP.

## Structure

<Json url="/bindings/amqp-channel.0.1.0.json" />

## Examples

### Routing Key

```json
{
  "is": "routingKey", // [!code focus]
  "exchange": {
    "name": "myExchange",
    "type": "topic",
    "durable": true,
    "autoDelete": false
  },
  "bindingVersion": "0.1.0"
}
```

### Queue

```json
{
  "is": "queue", // [!code focus]
  "queue": {
    "name": "my-queue-name",
    "durable": true,
    "exclusive": true,
    "autoDelete": false
  },
  "bindingVersion": "0.1.0"
}
```

## Migration guide

Good news, nothing was deprecated or changed