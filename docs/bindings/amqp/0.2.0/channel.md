---
title: AMQP Channel Binding v0.2.0 – Exchange & Queue Configuration
description: Configure AMQP 0-9-1 channels v0.2.0 in AsyncAPI. Define exchanges, queues, and routing keys for RabbitMQ and other AMQP brokers.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: AMQP channel binding v0.2.0, AsyncAPI, RabbitMQ, exchange configuration, queue configuration, routing key, virtual host, topic exchange, direct exchange, fanout exchange, message routing
  - - meta
    - property: og:title
      content: AMQP Channel Binding v0.2.0 – Exchange & Queue Configuration
  - - meta
    - property: og:description
      content: Configure AMQP 0-9-1 channels v0.2.0 in AsyncAPI. Define exchanges, queues, and routing keys for RabbitMQ and other AMQP brokers.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/amqp/0.2.0/channel.html
  - - meta
    - property: og:image
      content: /bindings/amqp/0.2.0/channel.png
  - - meta
    - name: twitter:title
      content: AMQP Channel Binding v0.2.0 – Exchange & Queue Configuration
  - - meta
    - name: twitter:description
      content: Configure AMQP 0-9-1 channels v0.2.0 in AsyncAPI. Define exchanges, queues, and routing keys for RabbitMQ and other AMQP brokers.

---

# AMQP 0-9-1 Channel Binding v0.2.0

The AMQP channel binding defines how AsyncAPI channels map to AMQP 0-9-1 exchanges and queues. This binding allows you to specify exchange types, queue configurations, routing keys, and virtual hosts for your message broker setup.

## Overview

AMQP channel bindings support two main channel types:

- **Routing Key Channels** (`is: routingKey`): Define exchange configurations for message routing
- **Queue Channels** (`is: queue`): Define queue configurations for message storage

## Channel Types

### Routing Key Channels

Routing key channels define exchange configurations for message routing. They are used when you want to publish messages to exchanges that route to multiple queues based on routing keys.

#### Exchange Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `type` | string | Yes | Exchange type: `topic`, `direct`, `fanout`, `default`, or `headers` |
| `name` | string | Yes | Exchange name (max 255 characters) |
| `durable` | boolean | No | Whether exchange survives broker restarts |
| `autoDelete` | boolean | No | Whether exchange is deleted when last queue unbound |
| `vhost` | string | No | Virtual host (defaults to `/`) |

#### Exchange Types

- **Topic Exchange**: Routes messages using wildcard patterns (e.g., `user.*.created`)
- **Direct Exchange**: Routes messages using exact routing key matches
- **Fanout Exchange**: Broadcasts messages to all bound queues
- **Headers Exchange**: Routes messages based on message headers
- **Default Exchange**: Direct routing using queue names as routing keys

### Queue Channels

Queue channels define queue configurations for message storage. They are used when you want to consume messages directly from specific queues.

#### Queue Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | Yes | Queue name (max 255 characters) |
| `durable` | boolean | No | Whether queue survives broker restarts |
| `exclusive` | boolean | No | Whether queue is used by only one connection |
| `autoDelete` | boolean | No | Whether queue is deleted when last consumer unsubscribes |
| `vhost` | string | No | Virtual host (defaults to `/`) |

## Examples

### Topic Exchange with Routing Key

```yaml
channels:
  userEvents:
    bindings:
      amqp:
        is: routingKey
        exchange:
          name: user-events
          type: topic
          durable: true
          autoDelete: false
          vhost: /
        bindingVersion: '0.2.0'
```

### Durable Queue for Reliable Message Storage

```yaml
channels:
  orderQueue:
    bindings:
      amqp:
        is: queue
        queue:
          name: order-processing-queue
          durable: true
          exclusive: false
          autoDelete: false
          vhost: /
        bindingVersion: '0.2.0'
```

## Migration Guide

### Added in v0.2.0

#### `vhost`

The `vhost` property was added to both `exchange` and `queue` objects in version `0.2.0`. It allows you to specify the virtual host for the exchange or queue. It defaults to `/`.

```json
{
    "vhost": { // [!code ++]
      "type": "string", // [!code ++]
      "default": "/", // [!code ++]
      "description": "The virtual host of the exchange. Defaults to '/'." // [!code ++]
    } // [!code ++]
}
```