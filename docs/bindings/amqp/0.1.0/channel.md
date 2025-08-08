---
title: AMQP Channel Binding v0.1.0 – Exchange & Queue Configuration
description: Configure AMQP 0-9-1 channels v0.1.0 in AsyncAPI. Define exchanges, queues, and routing keys for RabbitMQ and other AMQP brokers.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: AMQP channel binding v0.1.0, AsyncAPI, RabbitMQ, exchange configuration, queue configuration, routing key, legacy binding
  - - meta
    - property: og:title
      content: AMQP Channel Binding v0.1.0 – Exchange & Queue Configuration
  - - meta
    - property: og:description
      content: Configure AMQP 0-9-1 channels v0.1.0 in AsyncAPI. Define exchanges, queues, and routing keys for RabbitMQ and other AMQP brokers.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/amqp/0.1.0/channel.html
  - - meta
    - property: og:image
      content: /bindings/amqp/0.1.0/channel.png
  - - meta
    - name: twitter:title
      content: AMQP Channel Binding v0.1.0 – Exchange & Queue Configuration
  - - meta
    - name: twitter:description
      content: Configure AMQP 0-9-1 channels v0.1.0 in AsyncAPI. Define exchanges, queues, and routing keys for RabbitMQ and other AMQP brokers.

---

# AMQP 0-9-1 Channel Binding v0.1.0

The AMQP channel binding v0.1.0 defines how AsyncAPI channels map to AMQP 0-9-1 exchanges and queues. This is a legacy version of the binding that supports basic exchange and queue configuration.

## Overview

AMQP channel bindings support two main channel types:

- **Routing Key Channels** (`is: routingKey`): Define exchange configurations for message routing.
- **Queue Channels** (`is: queue`): Define queue configurations for message storage.

## Channel Types

### Routing Key Channels

Defines an exchange for message routing.

#### Exchange Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `type` | string | Yes | Exchange type: `topic`, `direct`, `fanout`, `default`, or `headers`. |
| `name` | string | Yes | The name of the exchange (max 255 characters). |
| `durable` | boolean | No | Whether the exchange survives broker restarts. |
| `autoDelete` | boolean | No | Whether the exchange is deleted when the last queue is unbound from it. |

### Queue Channels

Defines a queue for message storage.

#### Queue Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | Yes | The name of the queue (max 255 characters). |
| `durable` | boolean | No | Whether the queue survives broker restarts. |
| `exclusive` | boolean | No | Whether the queue is used by only one connection. |
| `autoDelete` | boolean | No | Whether the queue is deleted when the last consumer unsubscribes. |

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
        bindingVersion: '0.1.0'
```

### Durable Queue

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
        bindingVersion: '0.1.0'
```

## Migration Guide to v0.2.0

Version `0.2.0` introduced the `vhost` property for both `exchange` and `queue` objects. This allows for specifying the virtual host, which provides a way to segregate applications using the same AMQP broker.