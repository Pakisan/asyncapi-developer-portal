---
title: MQTT Channel Binding v0.1.0 - Topic Configuration
description: This document details the legacy v0.1.0 of the MQTT channel binding, which maps an AsyncAPI channel to an MQTT topic. It is recommended to use the latest version.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: MQTT channel binding, legacy, AsyncAPI, MQTT topics, topic configuration, IoT messaging, M2M, event-driven architecture
  - - meta
    - property: og:title
      content: MQTT Channel Binding v0.1.0 - Topic Configuration
  - - meta
    - property: og:description
      content: This document details the legacy v0.1.0 of the MQTT channel binding, which maps an AsyncAPI channel to an MQTT topic. It is recommended to use the latest version.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/mqtt/0.1.0/channel.html
  - - meta
    - name: og:image
      content: /bindings/mqtt/0.1.0/channel.png
  - - meta
    - name: twitter:title
      content: MQTT Channel Binding v0.1.0 - Topic Configuration
  - - meta
    - name: twitter:description
      content: This document details the legacy v0.1.0 of the MQTT channel binding, which maps an AsyncAPI channel to an MQTT topic. It is recommended to use the latest version.
---

# MQTT Channel Binding v0.1.0

The MQTT channel binding v0.1.0 defines how an AsyncAPI channel maps to an MQTT topic. This version of the binding is a placeholder and does not define any specific properties.

## Overview

This binding's presence indicates that the channel's address corresponds to an MQTT topic, which is the fundamental endpoint for publishing and subscribing to messages in an MQTT environment.

## Channel Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`) |

## Example

This example defines a channel that maps to the MQTT topic `user/signedup`.

```yaml
channels:
  userSignup:
    address: 'user/signedup'
    bindings:
      mqtt:
        bindingVersion: '0.1.0'
```

## Changelog

### Version 0.1.0
- Initial legacy release of the MQTT channel binding.
- The binding is a placeholder with no specific properties.