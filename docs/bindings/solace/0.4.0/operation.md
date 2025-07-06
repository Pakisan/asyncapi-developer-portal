---
title: Solace Operation Binding v0.4.0 - Destination Configuration
description: Configure Solace operation bindings for multiple destinations. Define queues, topics, delivery modes, and topic subscriptions with AsyncAPI examples.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Solace operation binding v0.4.0, AsyncAPI, Solace destination, queue, topic subscription, delivery mode, persistent, direct, event mesh
  - - meta
    - property: og:title
      content: Solace Operation Binding v0.4.0 - Destination Configuration
  - - meta
    - property: og:description
      content: Configure Solace operation bindings for multiple destinations. Define queues, topics, delivery modes, and topic subscriptions with AsyncAPI examples.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/solace/0.4.0/operation.html
  - - meta
    - name: og:image
      content: /bindings/solace/0.4.0/operation.png
  - - meta
    - name: twitter:title
      content: Solace Operation Binding v0.4.0 - Destination Configuration
  - - meta
    - name: twitter:description
      content: Configure Solace operation bindings for multiple destinations. Define queues, topics, delivery modes, and topic subscriptions with AsyncAPI examples.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/solace/0.4.0/operation.html
---

# Solace Operation Binding v0.4.0

The Solace operation binding is the most detailed and important binding for defining behavior in a Solace-based API. It specifies the array of destinations that a message will be sent to or received from.

## Overview

This binding allows you to define a list of destinations for a single operation. Each destination can be a `queue` or a direct `topic` subscription. This is critical for describing common Solace patterns, such as publishing a message that is consumed by multiple durable queues and also by direct, real-time subscribers.

## Operation Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.4.0`). |
| `destinations` | array | No | An array of destination objects. |
| `timeToLive` | integer | No | Lifetime of the message in milliseconds. |
| `priority` | integer | No | Message priority from `0` to `255`. |
| `dmqEligible` | boolean | No | If `true`, the message can be moved to a Dead Message Queue. Defaults to `false`. |

---

## Destination Object

Each object in the `destinations` array defines a single destination.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `destinationType` | string | **Yes** | `queue` or `topic`. |
| `deliveryMode` | string | No | `direct` or `persistent`. Defaults to `direct`. |
| `queue` | object | No | A queue object, required if `destinationType` is `queue`. |
| `topicSubscriptions` | array | No | A list of topic subscriptions for a `topic` destination. |

### Destination Property Details

- **`destinationType`**:
  - `queue`: The destination is a durable queue that spools messages.
  - `topic`: The destination is a direct topic subscription for non-durable, real-time delivery.
- **`deliveryMode`**:
  - `direct`: At-most-once delivery. Low latency, high throughput.
  - `persistent`: At-least-once delivery (guaranteed). Messages are spooled to the destination.

---

## Queue Object

The `queue` object is used when `destinationType` is `queue`.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | No | The name of the queue. |
| `topicSubscriptions` | array | No | A list of topic subscriptions that the queue listens to. |
| `accessType` | string | No | `exclusive` or `nonexclusive`. Defines how consumers access the queue. |
| `maxMsgSpoolUsage` | string | No | Maximum spool usage for the queue (e.g., "100MB"). |
| `maxTtl` | string | No | Maximum time-to-live for messages spooled to the queue (e.g., "3600s"). |

---

## Examples

### Guaranteed Publishing to a Queue

This operation sends a persistent message to a queue named `q_user_updates`, which subscribes to a specific topic.

```yaml
operations:
  sendUserUpdate:
    action: send
    bindings:
      solace:
        bindingVersion: '0.4.0'
        destinations:
          - destinationType: 'queue'
            deliveryMode: 'persistent'
            queue:
              name: 'q_user_updates'
              topicSubscriptions:
                - 'user/signedup'
```

### Consuming from Multiple Destinations

This operation describes a consumer that binds to a durable queue for guaranteed delivery but *also* subscribes directly to a topic for real-time, non-persistent alerts.

```yaml
operations:
  receiveCriticalEvents:
    action: receive
    bindings:
      solace:
        bindingVersion: '0.4.0'
        destinations:
          - destinationType: 'queue'
            deliveryMode: 'persistent'
            queue:
              name: 'q_critical_events'
              topicSubscriptions:
                - 'events/critical/>'
          - destinationType: 'topic'
            deliveryMode: 'direct'
            topicSubscriptions:
                - 'events/alerts/realtime'
```

## Changelog

### Version 0.4.0
- Refined the structure for `destinations` array.
- Clarified the relationship between `destinationType`, `deliveryMode`, `queue`, and `topicSubscriptions`.