---
title: MQTT 5.0 Channel Binding v0.1.0 - Topic Configuration
description: Configure MQTT 5.0 channel bindings for topic-based messaging. Define how AsyncAPI channels map to MQTT topics with examples and best practices.
ogImage: /bindings/mqtt5/0.1.0/channel.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: MQTT 5.0 channel binding v0.1.0, AsyncAPI, MQTT topics, topic configuration, IoT messaging, M2M, publish-subscribe
heading: "MQTT 5.0 Channel Binding v0.1.0"
---

> [!WARNING]
> This is a legacy version of the MQTT 5.0 channel binding. It is recommended to use the [latest version (v0.2.0)](/bindings/mqtt5/0.2.0/channel.html) for up-to-date features and compatibility.

The MQTT 5.0 channel binding v0.1.0 defines how an AsyncAPI channel maps to an MQTT topic. This version of the binding is a placeholder and does not define any specific properties.

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
      mqtt5:
        bindingVersion: '0.1.0'
```

## Changelog

### Version 0.1.0
- Initial legacy release of the MQTT 5.0 channel binding.
- The binding is a placeholder with no specific properties.