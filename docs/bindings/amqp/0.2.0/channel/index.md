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

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/amqp/0.2.0/channel.json" />

## Examples

### Routing Key

```json
{
  "is": "routingKey", // [!code focus]
  "exchange": {
    "name": "myExchange",
    "type": "topic",
    "durable": true,
    "autoDelete": false,
    "vhost": "/"
  },
  "bindingVersion": "0.2.0"
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
    "autoDelete": false,
    "vhost": "/"
  },
  "bindingVersion": "0.2.0"
}
```

## Migration guide

### Added

#### vhost

The virtual host of the exchange or queue. Defaults to `/`.

```json
{
    "vhost": { // [!code ++]
      "type": "string", // [!code ++]
      "default": "/", // [!code ++]
      "description": "The virtual host of the exchange. Defaults to '/'." // [!code ++]
    } // [!code ++]
}
```