---
title: MQTT 5.0 Channel Binding v0.2.0 - Topic Configuration
description: Learn how to configure MQTT 5.0 channel bindings using AsyncAPI v0.2.0. Define how AsyncAPI channels map to MQTT topics for IoT, mobile, and real-time messaging applications.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: MQTT 5.0 channel binding, AsyncAPI, MQTT topics, topic configuration, IoT messaging, M2M, publish-subscribe, event-driven architecture
  - - meta
    - property: og:title
      content: MQTT 5.0 Channel Binding v0.2.0 - Topic Configuration
  - - meta
    - property: og:description
      content: Learn how to configure MQTT 5.0 channel bindings using AsyncAPI v0.2.0. Define how AsyncAPI channels map to MQTT topics for IoT, mobile, and real-time messaging applications.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/mqtt5/0.2.0/channel.html
  - - meta
    - name: og:image
      content: /bindings/mqtt5/0.2.0/channel.png
  - - meta
    - name: twitter:title
      content: MQTT 5.0 Channel Binding v0.2.0 - Topic Configuration
  - - meta
    - name: twitter:description
      content: Learn how to configure MQTT 5.0 channel bindings using AsyncAPI v0.2.0. Define how AsyncAPI channels map to MQTT topics for IoT, mobile, and real-time messaging applications.
---

# MQTT 5.0 Channel Binding v0.2.0

> [!WARNING]
> MQTT version 5 specific bindings are deprecated in favor of [MQTT channel binding](../../mqtt/0.2.0/channel) that are not version specific.

The MQTT 5.0 channel binding defines how an AsyncAPI channel maps to the MQTT protocol, specifically focusing on MQTT topics. This binding is currently a placeholder and does not define any specific properties but serves to indicate that the channel is represented by an MQTT topic.

## Overview

In MQTT, all messages are published to a topic. The channel binding in AsyncAPI signifies that the channel's address is an MQTT topic. This allows for clear definition of the communication endpoint within an MQTT-based event-driven architecture.

## Channel Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.2.0`) |

## Property Details

### Binding Version

Specifies the version of the MQTT 5.0 channel binding being used.

**Default:** `0.2.0`

**Note:** This binding object is currently empty and reserved for future properties. Its presence indicates that the channel is an MQTT topic.

## MQTT Channel Concepts

### Topics

MQTT topics are string-based identifiers that act as endpoints for messages:

- **Hierarchical Structure**: Topics are structured in a hierarchy using the forward slash (`/`) as a separator (e.g., `company/building1/floor3/temperature`).
- **Case-sensitive**: `home/temp` and `Home/Temp` are two different topics.
- **Dynamic Creation**: Topics are typically created by the broker when a client first publishes or subscribes to them.

### Wildcards

Clients can subscribe to topic patterns using wildcards:

- **Single-level wildcard (`+`)**: Matches a single topic level. For example, `sensors/+/temperature` would match `sensors/livingroom/temperature` and `sensors/bedroom/temperature`, but not `sensors/livingroom/ac/temperature`.
- **Multi-level wildcard (`#`)**: Matches multiple topic levels at the end of a topic. For example, `sensors/livingroom/#` would match everything from `sensors/livingroom/temperature` to `sensors/livingroom/ac/power`. It must be the last character in a topic string.

## Examples

### Basic Channel Definition

This example defines a channel that maps to the MQTT topic `user/signedup`.

```yaml
channels:
  userSignup:
    address: 'user/signedup'
    bindings:
      mqtt5:
        bindingVersion: '0.2.0'
    messages:
      userSignedUp:
        $ref: '#/components/messages/UserSignedUp'
```

### Channel with Topic Parameter

This example shows a channel with a parameter in the topic, allowing for dynamic topic definitions.

```yaml
channels:
  userUpdate:
    address: 'user/{userId}/update'
    parameters:
      userId:
        description: The ID of the user.
        schema:
          type: string
    bindings:
      mqtt5:
        bindingVersion: '0.2.0'
    messages:
      updateMessage:
        $ref: '#/components/messages/UpdateMessage'
```

### Channel for Wildcard Subscription

This defines a channel that a client could use to subscribe to all updates for a specific user.

```yaml
channels:
  userAllUpdates:
    address: 'user/{userId}/#'
    parameters:
      userId:
        description: The ID of the user.
        schema:
          type: string
    bindings:
      mqtt5:
        bindingVersion: '0.2.0'
```

## Best Practices

### Topic Naming
- Use a clear and consistent hierarchical structure.
- Be specific. `building/floor1/room3/temperature` is better than `temp`.
- Use a unique prefix for your organization to avoid topic clashes (e.g., `acme/services/orders`).
- Avoid using wildcards (`+` and `#`) in topic names when publishing. They are only for subscriptions.

## Changelog

### Version 0.2.0
- Initial release of the MQTT 5.0 channel binding.
- The binding is currently a placeholder for future enhancements.
- Schema validation for `bindingVersion`.