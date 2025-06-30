---
title: MQTT Server Binding v0.1.0 - Connection and Session Configuration
description: This document details the legacy v0.1.0 of the MQTT server binding. Learn to configure client ID, session type, keep-alives, and the Last Will and Testament.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: MQTT server binding, legacy, AsyncAPI, Last Will and Testament, LWT, clean session, keep-alive, client ID, MQTT, IoT
  - - meta
    - property: og:title
      content: MQTT Server Binding v0.1.0 - Connection and Session Configuration
  - - meta
    - property: og:description
      content: This document details the legacy v0.1.0 of the MQTT server binding. Learn to configure client ID, session type, keep-alives, and the Last Will and Testament.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/mqtt/0.1.0/server.html
  - - meta
    - name: og:image
      content: /bindings/mqtt/0.1.0/server.png
  - - meta
    - name: twitter:title
      content: MQTT Server Binding v0.1.0 - Connection and Session Configuration
  - - meta
    - name: twitter:description
      content: This document details the legacy v0.1.0 of the MQTT server binding. Learn to configure client ID, session type, keep-alives, and the Last Will and Testament.
---

# MQTT Server Binding v0.1.0

The MQTT server binding v0.1.0 provides configuration for the connection between a client and an MQTT broker, including session parameters and the Last Will and Testament (LWT).

## Overview

This binding object defines the core characteristics of an MQTT connection, such as the client's identity, session persistence, and a fail-safe message (LWT) for ungraceful disconnections.

## Server Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`). |
| `clientId` | string | No | The client identifier. |
| `cleanSession` | boolean | No | Whether the broker should establish a persistent session. Defaults to `true`. |
| `lastWill` | object | No | Last Will and Testament configuration. |
| `keepAlive` | integer | No | Keep alive interval in seconds. Defaults to `60`. |

## Property Details

### `clientId`
A unique identifier for the client. A stable `clientId` is required for persistent sessions.

### `cleanSession`
- **`true` (default)**: The broker creates a temporary session that is deleted when the client disconnects.
- **`false`**: The broker creates a persistent session, storing subscriptions and queued messages for the client across disconnections.

### `lastWill`
An object defining the Last Will and Testament message, which the broker publishes if the client disconnects ungracefully.
- `topic` (string, required): The topic for the LWT message.
- `qos` (integer): The QoS for the LWT message.
- `message` (string): The payload of the LWT message.
- `retain` (boolean): Whether the LWT message should be retained.

### `keepAlive`
The maximum interval in seconds that the client and broker can go without sending a message.

## Example

This server configuration defines a client with a Last Will and a persistent session.

```yaml
servers:
  device-farm:
    url: mqtt://api.example.com
    protocol: mqtt
    bindings:
      mqtt:
        bindingVersion: '0.1.0'
        clientId: 'temp-sensor-123'
        cleanSession: false
        keepAlive: 60
        lastWill:
          topic: /devices/status
          qos: 1
          message: '{"deviceId": "temp-sensor-123", "status": "offline"}'
          retain: true
```

## Changelog

### Version 0.1.0
- Initial legacy release of the MQTT server binding.
- Added `clientId`, `cleanSession`, `lastWill`, and `keepAlive` properties.