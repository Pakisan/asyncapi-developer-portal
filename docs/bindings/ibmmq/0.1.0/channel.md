---
title: IBM MQ Channel Binding v0.1.0 - Queue & Topic Configuration
description: This document details the v0.1.0 of the IBM MQ channel binding. Learn to configure an AsyncAPI channel as an IBM MQ Queue or Topic, with properties for exclusivity, partitioning, and durability.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: IBM MQ channel binding, AsyncAPI, IBM MQ queue, IBM MQ topic, queue manager, destination, durable subscription, enterprise messaging
  - - meta
    - property: og:title
      content: IBM MQ Channel Binding v0.1.0 - Queue & Topic Configuration
  - - meta
    - property: og:description
      content: This document details the v0.1.0 of the IBM MQ channel binding. Learn to configure an AsyncAPI channel as an IBM MQ Queue or Topic, with properties for exclusivity, partitioning, and durability.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/ibmmq/0.1.0/channel.html
  - - meta
    - name: og:image
      content: /bindings/ibmmq/0.1.0/channel.png
  - - meta
    - name: twitter:title
      content: IBM MQ Channel Binding v0.1.0 - Queue & Topic Configuration
  - - meta
    - name: twitter:description
      content: This document details the v0.1.0 of the IBM MQ channel binding. Learn to configure an AsyncAPI channel as an IBM MQ Queue or Topic, with properties for exclusivity, partitioning, and durability.
---

# IBM MQ Channel Binding v0.1.0

The IBM MQ channel binding defines how an AsyncAPI channel maps to a destination within an IBM MQ queue manager. This destination can be either a `Queue` (for point-to-point messaging) or a `Topic` (for publish-subscribe messaging).

## Overview

This binding object is highly flexible, allowing you to specify detailed properties for both queues and topics, ensuring that your API definition accurately reflects the configuration of your IBM MQ infrastructure.

## Channel Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`). |
| `destinationType` | string | No | The type of destination. Can be `topic` or `queue`. Defaults to `topic`. |
| `queue` | object | No | A queue object. Required if `destinationType` is `queue`. |
| `topic` | object | No | A topic object. |
| `maxMsgLength` | integer | No | Maximum physical message length (in bytes) for the destination. |

---

## Queue Object Properties

These properties apply when `destinationType` is `queue`.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `objectName` | string | **Yes** | The name of the IBM MQ queue. |
| `isPartitioned` | boolean | No | Defines if the queue is a cluster queue. Defaults to `false`. |
| `exclusive` | boolean | No | Specifies if the queue should be opened exclusively. Defaults to `false`. |

### Queue Property Details

- **`objectName`**: The name of the queue as it is defined in the queue manager.
- **`isPartitioned`**: Set to `true` if the queue is part of a cluster, which may affect how applications bind to it.
- **`exclusive`**: If `true`, it recommends that a consuming application opens the queue for exclusive input, preventing other consumers from accessing it.

---

## Topic Object Properties

These properties apply when `destinationType` is `topic`.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `string` | string | No | The topic string to be used (e.g., `news/sports/football`). |
| `objectName` | string | No | The name of a predefined topic object in the queue manager. |
| `durablePermitted` | boolean | No | Whether durable subscriptions are allowed. Defaults to `true`. |
| `lastMsgRetained` | boolean | No | Whether the broker should retain the last message on this topic. Defaults to `false`. |

### Topic Property Details

- **`string` / `objectName`**: You can define a topic in two ways. Use `string` to specify the topic hierarchy directly. Use `objectName` to refer to an administrative topic object defined in the queue manager, which can provide a base for the topic string and control other attributes.
- **`durablePermitted`**: If `true`, clients can create durable subscriptions, allowing them to receive messages that were published while they were disconnected.
- **`lastMsgRetained`**: If `true`, the queue manager will save the most recent message published to the topic and deliver it to new subscribers as soon as they subscribe.

## Examples

### Point-to-Point (Queue)

This example defines a channel that maps to an exclusive, partitioned cluster queue for processing orders.

```yaml
channels:
  orderProcessing:
    bindings:
      ibmmq:
        bindingVersion: '0.1.0'
        destinationType: 'queue'
        queue:
          objectName: 'APP.ORDERS.IN'
          isPartitioned: true
          exclusive: true
```

### Publish-Subscribe (Topic)

This example defines a channel for a public news feed topic where durable subscriptions are not allowed.

```yaml
channels:
  publicNewsFeed:
    bindings:
      ibmmq:
        bindingVersion: '0.1.0'
        destinationType: 'topic'
        topic:
          string: 'news/public/...'
          durablePermitted: false
```

## Changelog

### Version 0.1.0
- Initial release of the IBM MQ channel binding.
- Added comprehensive properties for both `queue` and `topic` destination types.