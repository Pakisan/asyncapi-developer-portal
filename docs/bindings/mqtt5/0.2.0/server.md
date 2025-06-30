---
title: MQTT 5.0 Server Binding v0.2.0 - Session Configuration
description: Learn how to configure MQTT 5.0 server bindings using AsyncAPI v0.2.0. Define server-level behaviors like session expiry for persistent sessions in IoT and real-time messaging.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: MQTT 5.0 server binding, AsyncAPI, session expiry, persistent sessions, clean start, IoT messaging, M2M, event-driven architecture
  - - meta
    - property: og:title
      content: MQTT 5.0 Server Binding v0.2.0 - Session Configuration
  - - meta
    - property: og:description
      content: Learn how to configure MQTT 5.0 server bindings using AsyncAPI v0.2.0. Define server-level behaviors like session expiry for persistent sessions in IoT and real-time messaging.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/mqtt5/0.2.0/server.html
  - - meta
    - name: og:image
      content: /bindings/mqtt5/0.2.0/server.png
  - - meta
    - name: twitter:title
      content: MQTT 5.0 Server Binding v0.2.0 - Session Configuration
  - - meta
    - name: twitter:description
      content: Learn how to configure MQTT 5.0 server bindings using AsyncAPI v0.2.0. Define server-level behaviors like session expiry for persistent sessions in IoT and real-time messaging.
---

# MQTT 5.0 Server Binding v0.2.0

> [!WARNING]
> MQTT version 5 specific bindings are deprecated in favor of [MQTT channel binding](../../mqtt/0.2.0/channel) that are not version specific.

The MQTT 5.0 server binding defines server-level configurations for MQTT connections, focusing on session management. It allows for specifying properties like the `sessionExpiryInterval`.

## Overview

MQTT 5.0 introduced significant enhancements to session management, allowing clients to persist their sessions on the broker even after disconnecting. The server binding provides the mechanism to configure these session-related parameters for all clients connecting to the server.

## Server Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.2.0`) |
| `sessionExpiryInterval` | integer or [Schema Object](https://www.asyncapi.com/docs/specifications/v2.6.0#schemaObject) | No | Session Expiry Interval in seconds. |

## Property Details

### Binding Version

Specifies the version of the MQTT 5.0 server binding being used.

**Default:** `0.2.0`

### Session Expiry Interval

The `sessionExpiryInterval` is the duration in seconds that the broker will store the session information for a client after it has disconnected. If the client reconnects within this interval, it can resume its session, including all its subscriptions and queued messages.

- **Value `0` or not present**: The session ends when the client disconnects.
- **Value `> 0`**: The session is persistent for the specified number of seconds.
- **Value `0xFFFFFFFF` (Maximum)**: The session never expires.

This property is crucial for devices that may disconnect frequently (e.g., mobile or IoT devices) but need to receive all messages that were sent while they were offline.

## MQTT 5.0 Server Concepts

### Clean Start

When a client connects, it sets a `cleanStart` flag.

- **`cleanStart: true`**: The client requests a new session. Any previous session on the broker is discarded.
- **`cleanStart: false`**: The client requests to resume a previous session, if one exists.

The interplay between `cleanStart` and `sessionExpiryInterval` defines the session's behavior. A client can only resume a session if one was persisted by a non-zero `sessionExpiryInterval`.

### Last Will and Testament (LWT)

A key server-side feature is the LWT. A client can register a "will" message with the broker during connection. If the client disconnects ungracefully (e.g., network failure), the broker will publish this message to a specified topic, allowing other clients to be notified of the failure.

## Examples

### Server with 10-Minute Session Expiry

This configuration tells the broker to maintain sessions for clients for 600 seconds after they disconnect.

```yaml
servers:
  productionBroker:
    url: mqtts://api.example.com
    protocol: mqtt
    bindings:
      mqtt5:
        bindingVersion: '0.2.0'
        sessionExpiryInterval: 600
```

### Server where Session Never Expires

This is useful for critical devices that must not lose their session state.

```yaml
servers:
  criticalDeviceBroker:
    url: mqtts://api.example.com
    protocol: mqtt
    bindings:
      mqtt5:
        bindingVersion: '0.2.0'
        sessionExpiryInterval: 4294967295 # 0xFFFFFFFF
```

### Server with Dynamic Session Expiry (Schema Object)

The `sessionExpiryInterval` can also be defined by a Schema Object, allowing for more complex or externally defined values.

```yaml
servers:
  flexibleBroker:
    url: mqtts://api.example.com
    protocol: mqtt
    bindings:
      mqtt5:
        bindingVersion: '0.2.0'
        sessionExpiryInterval:
          type: integer
          description: Session expiry must be at least 5 minutes.
          minimum: 300
```

## Best Practices

- **Use Persistent Sessions for Unreliable Connections**: For any client that might lose its connection but needs to receive messages sent during that time, use a non-zero `sessionExpiryInterval` and have the client connect with `cleanStart: false`.
- **Balance Expiry Interval**: A very long `sessionExpiryInterval` can consume significant resources on the broker. Choose a value that meets the business requirements without overburdening the server.
- **Always Use LWT for Critical Devices**: Implement a Last Will and Testament for any device where its connection status is important to the rest of the system.

## Changelog

### Version 0.2.0
- Initial release of the MQTT 5.0 server binding.
- Added `sessionExpiryInterval` property to control session persistence.
- Schema validation for `bindingVersion`.