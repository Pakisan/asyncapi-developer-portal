---
title: MQTT Message Binding v0.1.0 - Message Property Configuration
description: This document details the legacy v0.1.0 of the MQTT message binding. It is recommended to use the latest version for more comprehensive features like request/reply support.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: MQTT message binding, legacy, AsyncAPI, MQTT message properties, IoT messaging, event-driven architecture
  - - meta
    - property: og:title
      content: MQTT Message Binding v0.1.0 - Message Property Configuration
  - - meta
    - property: og:description
      content: This document details the legacy v0.1.0 of the MQTT message binding. It is recommended to use the latest version for more comprehensive features like request/reply support.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/mqtt/0.1.0/message.html
  - - meta
    - name: og:image
      content: /bindings/mqtt/0.1.0/message.png
  - - meta
    - name: twitter:title
      content: MQTT Message Binding v0.1.0 - Message Property Configuration
  - - meta
    - name: twitter:description
      content: This document details the legacy v0.1.0 of the MQTT message binding. It is recommended to use the latest version for more comprehensive features like request/reply support.
---

# MQTT Message Binding v0.1.0

The MQTT message binding v0.1.0 describes properties of a message specific to the MQTT protocol. This version of the binding is a placeholder and does not define any specific properties.

## Overview

This binding is used to signify message-level configurations for an MQTT message. In this legacy version, its presence is purely informational.

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
      mqtt:
        bindingVersion: '0.1.0'
```

## Changelog

### Version 0.1.0
- Initial legacy release of the MQTT message binding.
- The binding is a placeholder with no specific properties.