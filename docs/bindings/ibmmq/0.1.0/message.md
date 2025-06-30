---
title: IBM MQ Message Binding v0.1.0 - Type & Expiry Configuration
description: This document details the v0.1.0 of the IBM MQ message binding. Learn to configure the message type (`string`, `jms`, `binary`), headers, and expiry for enterprise messaging.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: IBM MQ message binding, AsyncAPI, IBM MQ message type, message expiry, TTL, JMS, enterprise messaging, event-driven architecture
  - - meta
    - property: og:title
      content: IBM MQ Message Binding v0.1.0 - Type & Expiry Configuration
  - - meta
    - property: og:description
      content: This document details the v0.1.0 of the IBM MQ message binding. Learn to configure the message type (`string`, `jms`, `binary`), headers, and expiry for enterprise messaging.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/ibmmq/0.1.0/message.html
  - - meta
    - name: og:image
      content: /bindings/ibmmq/0.1.0/message.png
  - - meta
    - name: twitter:title
      content: IBM MQ Message Binding v0.1.0 - Type & Expiry Configuration
  - - meta
    - name: twitter:description
      content: This document details the v0.1.0 of the IBM MQ message binding. Learn to configure the message type (`string`, `jms`, `binary`), headers, and expiry for enterprise messaging.
---

# IBM MQ Message Binding v0.1.0

The IBM MQ message binding allows for defining message-specific properties, such as the message type and its time-to-live (expiry).

## Overview

This binding is used to provide guidance to application developers on how to handle the message payload and its metadata. It helps ensure that messages are produced and consumed correctly within an IBM MQ environment.

## Message Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`). |
| `type` | string | No | The type of the message. Can be `string`, `jms`, or `binary`. Defaults to `string`. |
| `headers` | string | No | A comma-separated list of IBM MQ message headers to include. |
| `description` | string | No | Additional information about the message type or format. |
| `expiry` | integer | No | The recommended time-to-live (TTL) for the message in milliseconds. Defaults to `0` (unlimited). |

## Property Details

### `type`

This property informs the application about the expected format of the message body.
- **`string` (default)**: The payload is a simple string.
- **`jms`**: The payload is a JMS message type, which requires the consumer to use the JMS API to interpret it. The message will include an `RFH2` header.
- **`binary`**: The payload is raw binary data (`byte[]`).

### `headers`

This field allows you to specify which IBM MQ headers (e.g., `MQRFH2`, `MQMD`) should be included with the message. This is important for interoperability, especially when communicating with non-JMS applications.

### `expiry`

This sets the recommended "Time-To-Live" for the message. The queue manager will discard the message if it has not been delivered to a consumer within this time period. The value is in milliseconds. A value of `0` indicates that the message should not expire. Note that different IBM MQ APIs (like the low-level MQI vs. JMS) may handle the default "unlimited" value differently, so it is good practice to be explicit.

## Examples

### JMS Message

This defines a message that is expected to be in JMS format and should not expire.

```yaml
messages:
  userUpdateEvent:
    bindings:
      ibmmq:
        bindingVersion: '0.1.0'
        type: 'jms'
        description: 'A standard JMS message representing a user update.'
        expiry: 0
```

### Time-Sensitive Binary Message

This defines a message with a binary payload that is only valid for 5 minutes.

```yaml
messages:
  stockTickerPrice:
    bindings:
      ibmmq:
        bindingVersion: '0.1.0'
        type: 'binary'
        description: 'A binary-encoded stock price update.'
        expiry: 300000
```

## Changelog

### Version 0.1.0
- Initial release of the IBM MQ message binding.
- Added `type`, `headers`, `description`, and `expiry` properties.