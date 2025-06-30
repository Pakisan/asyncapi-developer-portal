---
title: MQTT 5.0 Operation Binding v0.2.0 - Publish/Subscribe Options
description: Learn how to configure MQTT 5.0 operation bindings using AsyncAPI v0.2.0. Define publish and subscribe behaviors like Quality of Service (QoS) for IoT and real-time messaging applications.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: MQTT 5.0 operation binding, AsyncAPI, MQTT QoS, publish-subscribe, IoT messaging, M2M, real-time applications, event-driven architecture
  - - meta
    - property: og:title
      content: MQTT 5.0 Operation Binding v0.2.0 - Publish/Subscribe Options
  - - meta
    - property: og:description
      content: Learn how to configure MQTT 5.0 operation bindings using AsyncAPI v0.2.0. Define publish and subscribe behaviors like Quality of Service (QoS) for IoT and real-time messaging applications.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/mqtt5/0.2.0/operation.html
  - - meta
    - name: twitter:title
      content: MQTT 5.0 Operation Binding v0.2.0 - Publish/Subscribe Options
  - - meta
    - name: twitter:description
      content: Learn how to configure MQTT 5.0 operation bindings using AsyncAPI v0.2.0. Define publish and subscribe behaviors like Quality of Service (QoS) for IoT and real-time messaging applications.
  - - meta
    - name: "og:image"
      content: "/bindings/mqtt5/0.2.0/operation.png"
---

# MQTT 5.0 Operation Binding v0.2.0

> [!WARNING]
> MQTT version 5 specific bindings are deprecated in favor of [MQTT channel binding](../../mqtt/0.2.0/channel) that are not version specific.

The MQTT 5.0 operation binding describes the behavior of a publish or subscribe operation within the MQTT protocol. This binding is currently a placeholder and does not define any specific properties, but it's where future operation-specific configurations, such as Quality of Service (QoS), would be defined.

## Overview

In MQTT, operations are either publishing a message to a topic or subscribing to a topic to receive messages. The operation binding provides a hook to define specific parameters for these actions, most notably the Quality of Service (QoS) level, which is a critical aspect of MQTT communication.

## Operation Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.2.0`) |

## Property Details

### Binding Version

Specifies the version of the MQTT 5.0 operation binding being used.

**Default:** `0.2.0`

**Note:** This binding object is currently empty and reserved for future properties like `qos`.

## MQTT Operation Concepts

### Quality of Service (QoS)

While not yet a formal property in the binding, QoS is the most important concept for MQTT operations:

- **QoS 0 (At most once)**: The message is sent once without acknowledgment. This is the fastest but least reliable level. Use for non-critical, high-volume sensor data.
- **QoS 1 (At least once)**: The message is guaranteed to be delivered at least once. The sender stores the message until it receives a `PUBACK` from the receiver. Duplicates can occur. Use for commands or important notifications.
- **QoS 2 (Exactly once)**: The message is guaranteed to be delivered exactly once. This is the most reliable but slowest level, involving a four-part handshake. Use for critical operations like financial transactions.

### Retain Flag

When publishing a message, a client can set the `retain` flag. If set, the broker stores the message for the topic. Any new client that subscribes to that topic will immediately receive the last retained message. This is useful for providing initial state or status information.

### Clean Start and Session Expiry

These session-related properties, though defined at the server level, heavily influence publish/subscribe operations by determining if a client's subscriptions and queued messages persist across disconnections.

## Examples

The following examples show how an operation binding might be used, anticipating future additions like a `qos` property.

### Publish Operation with QoS 1

This operation publishes a message with a "guaranteed at least once" delivery level.

```yaml
operations:
  sendLightMeasurement:
    action: send
    channel:
      $ref: '#/channels/lightMeasured'
    bindings:
      mqtt5:
        # qos: 1  <-- This property is anticipated in a future version
        bindingVersion: '0.2.0'
```

### Subscribe Operation with QoS 2

This operation subscribes to a topic, requesting that messages be delivered with "exactly once" semantics.

```yaml
operations:
  receiveCriticalAlert:
    action: receive
    channel:
      $ref: '#/channels/criticalAlert'
    bindings:
      mqtt5:
        # qos: 2  <-- This property is anticipated in a future version
        bindingVersion: '0.2.0'
```

## Best Practices

### Choosing QoS Levels
- Match the QoS level to the business requirement. Don't use QoS 2 if a small chance of duplicate messages is acceptable.
- Be aware that higher QoS levels increase network traffic and latency.
- Ensure both publisher and subscriber can handle the chosen QoS level. The effective QoS is the lower of the two.

### Using the Retain Flag
- Use the `retain` flag sparingly. It's excellent for slowly changing state data (e.g., a device's online/offline status) but can cause issues if used for event streams.
- To clear a retained message, publish a message with an empty payload and the `retain` flag set to `true` to the same topic.

## Changelog

### Version 0.2.0
- Initial release of the MQTT 5.0 operation binding.
- The binding is currently a placeholder for future enhancements, such as `qos`.
- Schema validation for `bindingVersion`.