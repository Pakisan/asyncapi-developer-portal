---
title: Solace Operation Binding v0.2.0 - Destination Configuration
description: Configure Solace operation bindings for multiple destinations. Define queues, topics, delivery modes, and topic subscriptions with AsyncAPI examples.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Solace operation binding v0.2.0, AsyncAPI, Solace destination, queue, topic subscription, delivery mode, persistent, direct, event mesh
  - - meta
    - property: og:title
      content: Solace Operation Binding v0.2.0 - Destination Configuration
  - - meta
    - property: og:description
      content: Configure Solace operation bindings for multiple destinations. Define queues, topics, delivery modes, and topic subscriptions with AsyncAPI examples.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/solace/0.2.0/operation.html
  - - meta
    - name: og:image
      content: /bindings/solace/0.2.0/operation.png
  - - meta
    - name: twitter:title
      content: Solace Operation Binding v0.2.0 - Destination Configuration
  - - meta
    - name: twitter:description
      content: Configure Solace operation bindings for multiple destinations. Define queues, topics, delivery modes, and topic subscriptions with AsyncAPI examples.
---

# Solace Operation Binding v0.2.0

The Solace operation binding `v0.2.0` specifies the array of destinations that a message will be sent to or received from.

## Overview

This binding allows you to define a list of destinations for an operation, where each destination can be a `queue` or a direct `topic` subscription.

## Operation Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.2.0`). |
| `destinations` | array | No | An array of destination objects. |

---

## Destination Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `destinationType` | string | **Yes** | `queue` or `topic`. |
| `deliveryMode` | string | No | `direct` or `persistent`. Defaults to `direct`. |
| `queue` | object | No | A queue object, required if `destinationType` is `queue`. |
| `topicSubscriptions` | array | No | A list of topic subscriptions for a `topic` destination. |

---

## Queue Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | No | The name of the queue. |
| `topicSubscriptions` | array | No | A list of topic subscriptions that the queue listens to. |
| `accessType` | string | No | `exclusive` or `nonexclusive`. |

---

## Example

```yaml
operations:
  receiveOrderEvent:
    action: receive
    bindings:
      solace:
        bindingVersion: '0.2.0'
        destinations:
          - destinationType: 'queue'
            deliveryMode: 'persistent'
            queue:
              name: 'q_orders'
              topicSubscriptions:
                - 'orders/v1/us/new'
```

## Changelog

### Version 0.2.0
- Added `accessType` to the queue object.