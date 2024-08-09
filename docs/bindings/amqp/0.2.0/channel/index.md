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

Good news, nothing was deprecated

### Exchange

Now you can describe virtual host for your `exchanges`

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "maxLength": 255,
      "description": "The name of the exchange. It MUST NOT exceed 255 characters long."
    },
    "type": {
      "type": "string",
      "enum": ["topic", "direct", "fanout", "default", "headers"],
      "description": "The type of the exchange. Can be either 'topic', 'direct', 'fanout', 'default' or 'headers'."
    },
    "durable": {
      "type": "boolean",
      "description": "Whether the exchange should survive broker restarts or not."
    },
    "autoDelete": {
      "type": "boolean",
      "description": "Whether the exchange should be deleted when the last queue is unbound from it."
    },
    "vhost": { // [!code ++]
      "type": "string", // [!code ++]
      "default": "/", // [!code ++]
      "description": "The virtual host of the exchange. Defaults to '/'." // [!code ++]
    } // [!code ++]
  },
  "description": "When is=routingKey, this object defines the exchange properties."
}
```

### Queue

Now you can describe virtual host for your `queues`

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "maxLength": 255,
      "description": "The name of the queue. It MUST NOT exceed 255 characters long."
    },
    "durable": {
      "type": "boolean",
      "description": "Whether the queue should survive broker restarts or not."
    },
    "exclusive": {
      "type": "boolean",
      "description": "Whether the queue should be used only by one connection or not."
    },
    "autoDelete": {
      "type": "boolean",
      "description": "Whether the queue should be deleted when the last consumer unsubscribes."
    },
    "vhost": { // [!code ++]
      "type": "string", // [!code ++]
      "default": "/", // [!code ++]
      "description": "The virtual host of the queue. Defaults to '/'." // [!code ++]
    } // [!code ++]
  },
  "description": "When is=queue, this object defines the queue properties."
}
```