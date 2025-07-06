---
title: MQTT 5.0 Operation Binding v0.1.0 - Publish/Subscribe Options
description: Configure MQTT 5.0 operation bindings for publish and subscribe behaviors. Define QoS levels and operation settings with examples and best practices.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: MQTT 5.0 operation binding v0.1.0, AsyncAPI, MQTT QoS, publish-subscribe, IoT messaging, M2M
  - - meta
    - property: og:title
      content: MQTT 5.0 Operation Binding v0.1.0 - Publish/Subscribe Options
  - - meta
    - property: og:description
      content: Configure MQTT 5.0 operation bindings for publish and subscribe behaviors. Define QoS levels and operation settings with examples and best practices.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/mqtt5/0.1.0/operation.html
  - - meta
    - name: twitter:title
      content: MQTT 5.0 Operation Binding v0.1.0 - Publish/Subscribe Options
  - - meta
    - name: twitter:description
      content: Configure MQTT 5.0 operation bindings for publish and subscribe behaviors. Define QoS levels and operation settings with examples and best practices.
  - - meta
    - name: "og:image"
      content: "/bindings/mqtt5/0.1.0/operation.png"
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/mqtt5/0.1.0/operation.html
---

# MQTT 5.0 Operation Binding v0.1.0

> [!WARNING]
> This is a legacy version of the MQTT 5.0 operation binding. It is recommended to use the [latest version (v0.2.0)](../0.2.0/operation.md) for up-to-date features and compatibility.

The MQTT 5.0 operation binding v0.1.0 describes the behavior of a publish or subscribe operation. This version of the binding is a placeholder and does not define any specific properties.

## Overview

This binding is used to signify an MQTT-specific operation, where future configurations like Quality of Service (QoS) would be defined. In this legacy version, its presence is purely informational.

## Operation Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`) |

## Example

This example shows a publish operation with the legacy binding.

```yaml
operations:
  sendLightMeasurement:
    action: send
    channel:
      $ref: '#/channels/lightMeasured'
    bindings:
      mqtt5:
        bindingVersion: '0.1.0'
```

## Changelog

### Version 0.1.0
- Initial legacy release of the MQTT 5.0 operation binding.
- The binding is a placeholder with no specific properties.