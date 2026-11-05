---
title: MQTT 5.0 Message Binding v0.1.0 - Message Properties
description: Configure MQTT 5.0 message bindings for message properties and formatting. Define message structure and content type with examples and best practices.
ogImage: /bindings/mqtt5/0.1.0/message.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: MQTT 5.0 message binding v0.1.0, AsyncAPI, MQTT message properties, IoT messaging, M2M
heading: "MQTT 5.0 Message Binding v0.1.0"
---

> [!WARNING]
> This is a legacy version of the MQTT 5.0 message binding. It is recommended to use the [latest version (v0.2.0)](/bindings/mqtt5/0.2.0/message.html) for up-to-date features and compatibility.

The MQTT 5.0 message binding v0.1.0 describes properties of a message specific to the MQTT protocol. This version of the binding is a placeholder and does not define any specific properties.

## Overview

This binding is used to signify message-level configurations for an MQTT message. In this legacy version, its presence is purely informational, but it lays the groundwork for future properties like Message Expiry.

## Message Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`) |

## Example

This example shows a message defined with the legacy binding.

```yaml
messages:
  userSignedUp:
    payload:
      type: object
      properties:
        displayName:
          type: string
          description: Name of the user
    bindings:
      mqtt5:
        bindingVersion: '0.1.0'
```

## Changelog

### Version 0.1.0
- Initial legacy release of the MQTT 5.0 message binding.
- The binding is a placeholder with no specific properties.