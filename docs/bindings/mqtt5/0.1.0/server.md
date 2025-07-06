---
title: MQTT 5.0 Server Binding v0.1.0 - Session Configuration
description: Configure MQTT 5.0 server bindings for session management. Define server-level settings for IoT and real-time messaging with examples.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: MQTT 5.0 server binding v0.1.0, AsyncAPI, session configuration, persistent sessions, IoT messaging, M2M
  - - meta
    - property: og:title
      content: MQTT 5.0 Server Binding v0.1.0 - Session Configuration
  - - meta
    - property: og:description
      content: Configure MQTT 5.0 server bindings for session management. Define server-level settings for IoT and real-time messaging with examples.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/mqtt5/0.1.0/server.html
  - - meta
    - name: twitter:title
      content: MQTT 5.0 Server Binding v0.1.0 - Session Configuration
  - - meta
    - name: twitter:description
      content: Configure MQTT 5.0 server bindings for session management. Define server-level settings for IoT and real-time messaging with examples.
  - - meta
    - name: "og:image"
      content: "/bindings/mqtt5/0.1.0/server.png"
  - - meta
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/mqtt5/0.1.0/server.html
---

# MQTT 5.0 Server Binding v0.1.0

> [!WARNING]
> This is a legacy version of the MQTT 5.0 server binding. It is recommended to use the [latest version (v0.2.0)](../0.2.0/server.md) to get access to key features like `sessionExpiryInterval`.

The MQTT 5.0 server binding v0.1.0 defines server-level configurations for MQTT connections. This version of the binding is a placeholder and does not define any specific properties.

## Overview

This binding is used to signify server-level configurations for an MQTT broker. In this legacy version, its presence is purely informational. Unlike the newer `0.2.0` version, it does not include properties for managing session persistence.

## Server Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`) |

## Example

This example shows a server defined with the legacy binding.

```yaml
servers:
  productionBroker:
    url: mqtts://api.example.com
    protocol: mqtt
    bindings:
      mqtt5:
        bindingVersion: '0.1.0'
```

## Changelog

### Version 0.1.0
- Initial legacy release of the MQTT 5.0 server binding.
- The binding is a placeholder with no specific properties. Upgrading to `0.2.0` is recommended for session management features.