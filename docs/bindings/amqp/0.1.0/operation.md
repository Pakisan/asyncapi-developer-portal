---
title: AMQP Operation Binding v0.1.0 – Message Routing & Delivery
description: Configure AMQP 0-9-1 operation bindings v0.1.0 in AsyncAPI. Set message expiration, delivery modes, routing keys, priority, reply-to, and acknowledgments.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: AMQP operation binding v0.1.0, AsyncAPI, RabbitMQ, message routing, delivery mode, message priority, replyTo, message expiration, CC, BCC, message acknowledgment, legacy binding
  - - meta
    - property: og:title
      content: AMQP Operation Binding v0.1.0 – Message Routing & Delivery
  - - meta
    - property: og:description
      content: Configure AMQP 0-9-1 operation bindings v0.1.0 in AsyncAPI. Set message expiration, delivery modes, routing keys, priority, reply-to, and acknowledgments.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/amqp/0.1.0/operation.html
  - - meta
    - property: og:image
      content: /bindings/amqp/0.1.0/operation.png
  - - meta
    - name: twitter:title
      content: AMQP Operation Binding v0.1.0 – Message Routing & Delivery
  - - meta
    - name: twitter:description
      content: Configure AMQP 0-9-1 operation bindings v0.1.0 in AsyncAPI. Set message expiration, delivery modes, routing keys, priority, reply-to, and acknowledgments.

---

# AMQP 0-9-1 Operation Binding v0.1.0

The AMQP operation binding v0.1.0 provides detailed control over message routing and delivery behavior in AMQP 0-9-1. It allows you to configure properties such as message expiration, priority, delivery mode, and routing destinations.

## Overview

This binding allows you to define AMQP-specific properties for publish and subscribe operations. These properties give you fine-grained control over how messages are handled by the broker.

## Operation Properties

| Property | Type | Description |
|---|---|---|
| `expiration` | integer | TTL (Time-To-Live) for the message in milliseconds. It MUST be greater than or equal to zero. |
| `userId` | string | Identifies the user who has sent the message. |
| `cc` | [string] | The routing keys the message should be routed to at the time of publishing. |
| `priority` | integer | A priority for the message. Higher numbers indicate higher priority. |
| `deliveryMode` | integer | Delivery mode of the message. `1` for transient, `2` for persistent. |
| `mandatory` | boolean | If `true`, the message is returned to the publisher if it cannot be routed to any queue. |
| `bcc` | [string] | Like `cc` but the routing keys are not passed to the consumer. |
| `replyTo` | string | Name of the queue where the consumer should send the response. |
| `timestamp` | boolean | If `true`, the message MUST include a timestamp property. |
| `ack` | boolean | If `true`, the consumer should acknowledge the message. |
| `bindingVersion` | string | The version of this binding. For `v0.1.0`, this MUST be `0.1.0`. |

## Examples

### Persistent, High-Priority Message

```yaml
operations:
  highPriorityTask:
    bindings:
      amqp:
        deliveryMode: 2 # Persistent
        priority: 10
        mandatory: true
        timestamp: true
        ack: true
        bindingVersion: '0.1.0'
```

### Request-Reply Pattern with `replyTo`

```yaml
operations:
  getUserProfile:
    bindings:
      amqp:
        replyTo: 'user.profile.response.queue'
        deliveryMode: 1 # Transient is fine for RPC
        userId: 'api-gateway'
        ack: true
        bindingVersion: '0.1.0'
```

## Migration Guide to v0.2.0

No breaking changes were introduced between `v0.1.0` and `v0.2.0` of this binding. It is fully compatible with v0.2.0.