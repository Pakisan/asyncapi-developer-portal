---
title: AMQP Operation Binding v0.3.0 – Message Routing & Delivery
description: Configure AMQP 0-9-1 operation bindings v0.3.0 in AsyncAPI. Set message expiration, delivery modes, routing keys, priority, reply-to, and acknowledgments.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: AMQP operation binding v0.3.0, AsyncAPI, RabbitMQ, message routing, delivery mode, message priority, message expiration, CC, BCC, message acknowledgment
  - - meta
    - property: og:title
      content: AMQP Operation Binding v0.3.0 – Message Routing & Delivery
  - - meta
    - property: og:description
      content: Configure AMQP 0-9-1 operation bindings v0.3.0 in AsyncAPI. Set message expiration, delivery modes, routing keys, priority, reply-to, and acknowledgments.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/amqp/0.3.0/operation.html
  - - meta
    - property: og:image
      content: /bindings/amqp/0.3.0/operation.png
  - - meta
    - name: twitter:title
      content: AMQP Operation Binding v0.3.0 – Message Routing & Delivery
  - - meta
    - name: twitter:description
      content: Configure AMQP 0-9-1 operation bindings v0.3.0 in AsyncAPI. Set message expiration, delivery modes, routing keys, priority, reply-to, and acknowledgments.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/amqp/0.3.0/operation.html
---

# AMQP 0-9-1 Operation Binding v0.3.0

The AMQP operation binding provides detailed control over message routing and delivery behavior in AMQP 0-9-1. It allows you to configure properties such as message expiration, priority, delivery mode, and routing destinations.

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
| `timestamp` | boolean | If `true`, the message MUST include a timestamp property. |
| `ack` | boolean | If `true`, the consumer should acknowledge the message. |
| `bindingVersion` | string | The version of this binding. For `v0.3.0`, this MUST be `0.3.0`. |

## Examples

### Persistent, High-Priority Message

This example shows a message that is durable, has a high priority, and must be routed.

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
        bindingVersion: '0.3.0'
```

### Message with Expiration and CC Routing

This example defines a transient message that expires after 60 seconds and is routed to specific logging and analytics queues via the `cc` property.

```yaml
operations:
  userSignup:
    bindings:
      amqp:
        expiration: 60000 # 1 minute
        deliveryMode: 1 # Transient
        cc:
          - user.logs
          - user.analytics
        userId: 'system'
        ack: true
        bindingVersion: '0.3.0'
```

### Blind Carbon Copy (BCC) for Auditing

This example uses `bcc` to route a copy of the message to an audit trail without the consumer's knowledge.

```yaml
operations:
  processPayment:
    bindings:
      amqp:
        deliveryMode: 2 # Persistent
        bcc:
          - external.audit.trail
        mandatory: true
        ack: true
        bindingVersion: '0.3.0'
```

## Use Cases

### Task Queues with Priority
Set the `priority` property to ensure high-priority tasks (e.g., password resets) are processed before lower-priority ones (e.g., batch processing).

### Reliable Messaging
For critical messages, set `deliveryMode` to `2` (persistent), `mandatory` to `true`, and require consumer acknowledgments with `ack: true` to ensure guaranteed delivery.

### Event Auditing
Use the `bcc` field to silently send copies of events to a separate, secure queue or exchange for auditing and compliance purposes, without altering the primary message flow.

### Temporary Notifications
Use the `expiration` property for time-sensitive notifications that should be discarded if not consumed quickly, preventing stale data from being processed.

## Versioning

This binding is for version `0.3.0` of the AMQP binding specification.

## Related Links

- [AMQP 0-9-1 Specification](https://www.rabbitmq.com/amqp-0-9-1-reference.html)
- [RabbitMQ Documentation](https://www.rabbitmq.com/documentation.html)
- [AsyncAPI AMQP Bindings Documentation](/bindings/amqp/)