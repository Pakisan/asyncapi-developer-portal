---
title: MQTT Server Binding v0.2.0 - Connection and Session Configuration
description: Configure MQTT server bindings for connection and session management. Define client ID, session types, and Last Will and Testament with examples.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: MQTT server binding v0.2.0, AsyncAPI, Last Will and Testament, LWT, clean session, session expiry, keep-alive, client ID, MQTT, IoT
  - - meta
    - property: og:title
      content: MQTT Server Binding v0.2.0 - Connection and Session Configuration
  - - meta
    - property: og:description
      content: Configure MQTT server bindings for connection and session management. Define client ID, session types, and Last Will and Testament with examples.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/mqtt/0.2.0/server.html
  - - meta
    - name: og:image
      content: /bindings/mqtt/0.2.0/server.png
  - - meta
    - name: twitter:title
      content: MQTT Server Binding v0.2.0 - Connection and Session Configuration
  - - meta
    - name: twitter:description
      content: Configure MQTT server bindings for connection and session management. Define client ID, session types, and Last Will and Testament with examples.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/mqtt/0.2.0/server.html
---

# MQTT Server Binding v0.2.0

The MQTT server binding provides detailed configuration for the connection between a client and an MQTT broker, including session parameters and the critical Last Will and Testament (LWT) feature.

## Overview

This binding object is essential for defining the characteristics of an MQTT connection. It allows you to specify a client's identity, how its session should be handled by the broker upon disconnection, and a fail-safe message (the LWT) to be sent if the client disconnects ungracefully.

## Server Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.2.0`). |
| `clientId` | string | No | The client identifier. |
| `cleanSession` | boolean | No | Whether the broker should establish a persistent session. Defaults to `true`. |
| `lastWill` | object | No | Last Will and Testament configuration. |
| `keepAlive` | integer | No | Keep alive interval in seconds. Defaults to `60`. |
| `sessionExpiryInterval` | integer or [Schema Object](https://asyncapi.pavelon.dev/schemas/schema.json) | No | Lifetime of the session in seconds after a disconnect. |
| `maximumPacketSize` | integer or [Schema Object](https://asyncapi.pavelon.dev/schemas/schema.json) | No | Maximum packet size the client is willing to accept. |

## Property Details

### `clientId`
A unique identifier for the client. If not provided, the broker will typically assign a random one. For persistent sessions, a stable `clientId` is required.

### `cleanSession`
This is the MQTT v3.1.1 term for managing sessions.
- **`true` (default)**: The broker creates a new, temporary session for the client. When the client disconnects, the session and any subscriptions are deleted.
- **`false`**: The broker creates or resumes a persistent session. If the client disconnects, the broker stores its subscriptions and any QoS 1 or 2 messages that arrive until the client reconnects. Requires a stable `clientId`. In MQTT v5, this is equivalent to `cleanStart: true` and `sessionExpiryInterval: 0`.

### `sessionExpiryInterval`
This is the MQTT v5 equivalent of `cleanSession: false`. It specifies the number of seconds the broker should maintain a session after a client disconnects. A value greater than `0` creates a persistent session. If both `cleanSession` and `sessionExpiryInterval` are present, `sessionExpiryInterval` takes precedence.

### `lastWill`
An object defining the Last Will and Testament message. This is a critical feature for monitoring device connectivity. If the client disconnects ungracefully (without sending a `DISCONNECT` packet), the broker will publish this message on its behalf. The `lastWill` object has the following properties:
- `topic` (string, required): The topic for the LWT message.
- `qos` (integer): The QoS for the LWT message.
- `message` (string): The payload of the LWT message.
- `retain` (boolean): Whether the LWT message should be retained.

### `keepAlive`
The maximum interval in seconds that the client and broker can go without sending a message to each other. It prevents the connection from being closed by network equipment for inactivity.

### `maximumPacketSize`
A feature from MQTT 5, this defines the maximum packet size in bytes that the client can handle.

## Examples

### Server with a Last Will and Testament

This server configuration defines a client that, upon an unexpected disconnection, will cause the broker to publish a JSON message to the `/devices/status` topic.

```yaml
servers:
  device-farm:
    url: mqtt://api.example.com
    protocol: mqtt
    bindings:
      mqtt:
        bindingVersion: '0.2.0'
        clientId: 'temp-sensor-123'
        cleanSession: false
        keepAlive: 60
        lastWill:
          topic: /devices/status
          qos: 1
          message: '{"deviceId": "temp-sensor-123", "status": "offline"}'
          retain: true
```

### Server using MQTT 5 Session Expiry

This configuration uses the MQTT 5 `sessionExpiryInterval` to create a persistent session that lasts for 10 minutes after disconnection.

```yaml
servers:
  mobile-app-broker:
    url: mqtts://api.example.com
    protocol: mqtt
    bindings:
      mqtt:
        bindingVersion: '0.2.0'
        clientId: 'user-app-xyz'
        sessionExpiryInterval: 600
```

## Changelog

### Version 0.2.0
- Initial release of the generic MQTT server binding.
- Added `clientId`, `cleanSession`, `lastWill`, `keepAlive`, `sessionExpiryInterval`, and `maximumPacketSize`.
- Schema validation for all properties.