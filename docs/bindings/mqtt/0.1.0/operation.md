---
title: MQTT Operation Binding v0.1.0 - QoS and Retain Configuration
description: Configure MQTT operation bindings for QoS levels and retain flags. Define publish and subscribe behaviors with examples and best practices.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: MQTT operation binding v0.1.0, AsyncAPI, MQTT QoS, retain flag, publish-subscribe, IoT messaging
  - - meta
    - property: og:title
      content: MQTT Operation Binding v0.1.0 - QoS and Retain Configuration
  - - meta
    - property: og:description
      content: Configure MQTT operation bindings for QoS levels and retain flags. Define publish and subscribe behaviors with examples and best practices.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/mqtt/0.1.0/operation.html
  - - meta
    - name: og:image
      content: /bindings/mqtt/0.1.0/operation.png
  - - meta
    - name: twitter:title
      content: MQTT Operation Binding v0.1.0 - QoS and Retain Configuration
  - - meta
    - name: twitter:description
      content: Configure MQTT operation bindings for QoS levels and retain flags. Define publish and subscribe behaviors with examples and best practices.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/mqtt/0.1.0/operation.html
---

# MQTT Operation Binding v0.1.0

The MQTT operation binding v0.1.0 allows for defining behavior specific to an MQTT publish or subscribe operation, including Quality of Service (QoS) and the `retain` flag.

## Overview

This binding provides operation-level control over how messages are handled by the MQTT broker, which is essential for defining the reliability and storage policies for a specific interaction.

## Operation Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`) |
| `qos` | integer | No | Defines the Quality of Service level. Must be `0`, `1`, or `2`. Defaults to `0`. |
| `retain` | boolean | No | Whether the message should be retained by the broker. Defaults to `false`. |

## Property Details

### `qos`

**Quality of Service (QoS)** determines the guarantee of message delivery.
- `0`: At most once.
- `1`: At least once.
- `2`: Exactly once.

### `retain`

If `true`, the MQTT broker will store this message as the "last known good" value for its topic. New subscribers will receive this message immediately upon subscribing.

## Example

This operation sends a device status message with QoS 1 and instructs the broker to retain it.

```yaml
operations:
  publishDeviceStatus:
    action: send
    channel:
      $ref: '#/channels/deviceStatus'
    bindings:
      mqtt:
        bindingVersion: '0.1.0'
        qos: 1
        retain: true
```

## Changelog

### Version 0.1.0
- Initial legacy release of the MQTT operation binding.
- Added `qos` and `retain` properties.