---
title: MQTT Channel Binding v0.2.0 - Topic Configuration
description: Learn how to configure MQTT channel bindings using AsyncAPI v0.2.0. This binding maps an AsyncAPI channel to an MQTT topic for universal IoT and real-time messaging applications.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: MQTT channel binding, AsyncAPI, MQTT topics, topic configuration, IoT messaging, publish-subscribe, event-driven architecture
  - - meta
    - property: og:title
      content: MQTT Channel Binding v0.2.0 - Topic Configuration
  - - meta
    - property: og:description
      content: Learn how to configure MQTT channel bindings using AsyncAPI v0.2.0. This binding maps an AsyncAPI channel to an MQTT topic for universal IoT and real-time messaging applications.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/mqtt/0.2.0/channel.html
  - - meta
    - name: og:image
      content: /bindings/mqtt/0.2.0/channel.png
  - - meta
    - name: twitter:title
      content: MQTT Channel Binding v0.2.0 - Topic Configuration
  - - meta
    - name: twitter:description
      content: Learn how to configure MQTT channel bindings using AsyncAPI v0.2.0. This binding maps an AsyncAPI channel to an MQTT topic for universal IoT and real-time messaging applications.
---

# MQTT Channel Binding v0.2.0

The MQTT channel binding defines how an AsyncAPI channel maps to the MQTT protocol, specifically representing an MQTT topic. This version of the binding is a placeholder and does not define any properties itself.

## Overview

In the MQTT protocol, all communication happens over topics. The presence of this channel binding signifies that the channel's `address` is an MQTT topic string. This is the fundamental link between the abstract AsyncAPI channel and the concrete MQTT infrastructure.

## Channel Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.2.0`) |

## Property Details

### Binding Version

Specifies the version of the MQTT channel binding being used.

**Default:** `0.2.0`

**Note:** This binding object is currently empty and reserved for future properties. Its presence is informational, indicating the channel represents an MQTT topic.

## MQTT Channel Concepts

### Topics

MQTT topics are hierarchical strings that the broker uses to filter and route messages to subscribed clients.

- **Hierarchy**: Topic levels are separated by a forward slash (`/`), creating a tree-like structure (e.g., `company/building1/floor3/temperature`).
- **Case-Sensitivity**: Topics are case-sensitive. `home/Temp` and `home/temp` are distinct topics.
- **Dynamic Creation**: Brokers typically create topics dynamically as clients publish or subscribe to them.

### Wildcards for Subscriptions

Clients can subscribe to patterns using wildcards, which is a powerful feature for receiving messages from multiple topics.

- **Single-Level (`+`)**: Matches exactly one topic level. `sensors/+/temperature` matches `sensors/room1/temperature` but not `sensors/room1/ac/temperature`.
- **Multi-Level (`#`)**: Matches one or more topic levels at the end of a topic string. `sensors/room1/#` matches both `sensors/room1/temperature` and `sensors/room1/ac/power`. It must be the last character in the topic.

## Examples

### Basic Channel Definition

Defines a channel that maps to the static MQTT topic `user/signedup`.

```yaml
channels:
  userSignup:
    address: 'user/signedup'
    bindings:
      mqtt:
        bindingVersion: '0.2.0'
```

### Channel with Topic Parameters

This example uses parameters to define a dynamic topic structure, a common pattern in IoT.

```yaml
channels:
  deviceUpdate:
    address: 'devices/{deviceId}/events/{eventType}'
    parameters:
      deviceId:
        description: The unique ID of the device.
        schema:
          type: string
      eventType:
        description: The type of event being reported.
        schema:
          type: string
          enum: ['telemetry', 'status', 'alert']
    bindings:
      mqtt:
        bindingVersion: '0.2.0'
```

## Changelog

### Version 0.2.0
- Initial release of the generic MQTT channel binding.
- The binding currently serves as a placeholder to indicate an MQTT topic.
- Schema validation for `bindingVersion`.