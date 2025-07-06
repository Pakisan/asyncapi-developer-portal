---
title: JMS Channel Binding v0.0.1 - Destination Configuration
description: Configure JMS channel bindings for destination configuration. Define queue and fifo-queue types for enterprise messaging with examples and best practices.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: JMS channel binding v0.0.1, AsyncAPI, JMS destination, queue, fifo-queue, point-to-point, enterprise messaging
  - - meta
    - property: og:title
      content: JMS Channel Binding v0.0.1 - Destination Configuration
  - - meta
    - property: og:description
      content: Configure JMS channel bindings for destination configuration. Define queue and fifo-queue types for enterprise messaging with examples and best practices.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/jms/0.0.1/channel.html
  - - meta
    - name: og:image
      content: /bindings/jms/0.0.1/channel.png
  - - meta
    - name: twitter:title
      content: JMS Channel Binding v0.0.1 - Destination Configuration
  - - meta
    - name: twitter:description
      content: Configure JMS channel bindings for destination configuration. Define queue and fifo-queue types for enterprise messaging with examples and best practices.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/jms/0.0.1/channel.html
---

# JMS Channel Binding v0.0.1

The JMS channel binding defines how an AsyncAPI channel maps to a JMS `Destination`, which is typically a queue.

## Overview

This binding object allows you to specify the name and type of a JMS destination. It's used for point-to-point messaging where a message is sent to a specific queue and consumed by a single receiver.

## Channel Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.0.1`). |
| `destination` | string | No | The name of the JMS destination (queue). Defaults to the channel name. |
| `destinationType` | string | No | The type of destination. Can be `queue` or `fifo-queue`. Defaults to `queue`. |

## Property Details

### `destination`

This field specifies the actual name of the queue in the JMS provider. You should use this property if the AsyncAPI channel name is not a valid queue name for your provider or if you want to use a different naming convention. If omitted, the channel name is used as the queue name.

### `destinationType`

This property defines the messaging model for the channel.
- **`queue` (default)**: Standard point-to-point messaging. Message order is not guaranteed across multiple consumers.
- **`fifo-queue`**: "First-In, First-Out". Guarantees strict message ordering. This should only be used if the target JMS provider supports it (e.g., AWS SQS with FIFO queues).

## Examples

### Basic Queue Definition

Defines a channel that maps to a JMS queue named `user-signup-events`.

```yaml
channels:
  userSignupEvents:
    bindings:
      jms:
        bindingVersion: '0.0.1'
        destinationType: 'queue'
```

### FIFO Queue with a Custom Name

Defines a channel that maps to a FIFO queue with a specific name that differs from the channel key.

```yaml
channels:
  financialTransactions:
    address: 'transactions.fifo' # The address here is illustrative
    bindings:
      jms:
        bindingVersion: '0.0.1'
        destination: 'critical-transactions.fifo'
        destinationType: 'fifo-queue'
```

## Changelog

### Version 0.0.1
- Initial release of the JMS channel binding.
- Added `destination` and `destinationType` properties to configure JMS queues.