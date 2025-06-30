---
title: MQTT Operation Binding v0.2.0 - QoS and Retain Configuration
description: Learn to configure MQTT operation bindings with AsyncAPI v0.2.0. Define Quality of Service (QoS) and the retain flag for publish operations in universal IoT and real-time applications.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: MQTT operation binding, AsyncAPI, MQTT QoS, retain flag, publish-subscribe, IoT messaging, message broker, event-driven architecture
  - - meta
    - property: og:title
      content: MQTT Operation Binding v0.2.0 - QoS and Retain Configuration
  - - meta
    - property: og:description
      content: Learn to configure MQTT operation bindings with AsyncAPI v0.2.0. Define Quality of Service (QoS) and the retain flag for publish operations in universal IoT and real-time applications.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/mqtt/0.2.0/operation.html
  - - meta
    - name: og:image
      content: /bindings/mqtt/0.2.0/operation.png
  - - meta
    - name: twitter:title
      content: MQTT Operation Binding v0.2.0 - QoS and Retain Configuration
  - - meta
    - name: twitter:description
      content: Learn to configure MQTT operation bindings with AsyncAPI v0.2.0. Define Quality of Service (QoS) and the retain flag for publish operations in universal IoT and real-time applications.
---

# MQTT Operation Binding v0.2.0

The MQTT operation binding allows for defining behavior specific to an MQTT publish or subscribe operation. It includes configurations for Quality of Service (QoS) and the `retain` flag.

## Overview

This binding provides crucial, operation-level control over how messages are handled by the MQTT broker. It allows an application designer to specify the delivery guarantees and message retention policies required for a particular business process.

## Operation Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.2.0`) |
| `qos` | integer | No | Defines the Quality of Service level for the message. Must be `0`, `1`, or `2`. Defaults to `0`. |
| `retain` | boolean | No | Whether the message should be retained by the broker. Defaults to `false`. |
| `messageExpiryInterval` | integer or [Schema Object](https://www.asyncapi.com/docs/specifications/v2.6.0#schemaObject) | No | Lifetime of the message in seconds. |

## Property Details

### `qos`

**Quality of Service (QoS)** determines the level of guarantee for a message delivery.

- **`0` (At most once)**: The message is sent, but with no acknowledgment. It's fast but unreliable. Best for non-critical, high-volume data where some loss is acceptable.
- **`1` (At least once)**: Guarantees the message is delivered, but it might arrive more than once. The sender retries until it gets a `PUBACK` from the receiver. Best for commands or important notifications where duplicate handling is possible.
- **`2` (Exactly once)**: The most reliable level, guaranteeing the message is delivered exactly once using a four-part handshake. It has the highest latency. Best for critical systems like billing or financial transactions.

### `retain`

If `true`, the MQTT broker will store this message as the "last known good" value for its topic. When a new client subscribes to that topic, it will immediately receive the last retained message. This is extremely useful for state information (e.g., a device's on/off status) but should not be used for event streams.

### `messageExpiryInterval`

A feature from MQTT 5, this defines the lifetime of the message in seconds. If the message is not delivered to a matching subscriber within this interval, the broker will discard it. This is useful for time-sensitive commands that become invalid after a certain period.

## Examples

### Publish Operation with QoS 1 and Retain

This operation sends a device status message that is guaranteed to arrive and will be retained by the broker to give immediate status to new subscribers.

```yaml
operations:
  publishDeviceStatus:
    action: send
    channel:
      $ref: '#/channels/deviceStatus'
    bindings:
      mqtt:
        bindingVersion: '0.2.0'
        qos: 1
        retain: true
```

### Subscribe Operation Requesting QoS 2

This operation defines a subscriber that requires the highest level of reliability for incoming messages. The effective QoS will be the minimum of the publisher's QoS and the subscriber's QoS.

```yaml
operations:
  receiveCriticalCommand:
    action: receive
    channel:
      $ref: '#/channels/criticalCommands'
    bindings:
      mqtt:
        bindingVersion: '0.2.0'
        qos: 2
```

### Time-Sensitive Publish Operation

This message will be discarded by the broker if it cannot be delivered within 5 minutes.

```yaml
operations:
  sendTimedOffer:
    action: send
    channel:
      $ref: '#/channels/specialOffers'
    bindings:
      mqtt:
        bindingVersion: '0.2.0'
        qos: 1
        messageExpiryInterval: 300
```

## Changelog

### Version 0.2.0
- Initial release of the generic MQTT operation binding.
- Added `qos`, `retain`, and `messageExpiryInterval` properties.
- Schema validation for all properties.