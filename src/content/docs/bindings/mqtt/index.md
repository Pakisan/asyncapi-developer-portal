---
title: MQTT Bindings - AsyncAPI Universal IoT Messaging
description: Master AsyncAPI MQTT bindings for universal IoT and real-time messaging. Configure channels, operations, messages, and servers with comprehensive examples.
ogImage: /bindings/mqtt/mqtt.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: MQTT bindings, AsyncAPI, IoT, M2M, publish-subscribe, message broker, QoS, retained messages, last will, clean session, session expiry
heading: "MQTT Bindings"
---

MQTT (Message Queuing Telemetry Transport) is a lightweight, publish-subscribe network protocol designed for constrained devices and low-bandwidth, high-latency, or unreliable networks. It is the de-facto standard for IoT messaging. The generic AsyncAPI MQTT bindings provide a version-agnostic way to define your event-driven APIs, encompassing features from both MQTT v3.1.1 and v5.0.

## MQTT Protocol Overview

MQTT is built on a publish-subscribe model, which decouples message producers (publishers) from message consumers (subscribers). The central point of communication is the MQTT broker.

Key features include:
- **Lightweight and Efficient**: Designed to minimize network bandwidth and device resource requirements.
- **Publish-Subscribe Model**: Decouples clients, enabling scalable and flexible architectures.
- **Quality of Service (QoS)**: Three levels of message delivery guarantees (0, 1, and 2).
- **Session Awareness**: Support for persistent sessions to ensure message delivery to intermittently connected clients.
- **Last Will and Testament (LWT)**: A crucial feature for device monitoring, allowing clients to be notified of an ungraceful disconnection.
- **Retained Messages**: New subscribers to a topic can immediately receive the last known good value.

## AsyncAPI MQTT Bindings

These bindings allow you to map AsyncAPI concepts to MQTT-specific configurations. They are designed to be general-purpose, covering the most important features across MQTT versions.

### Binding Types

| Binding Type | Purpose | Description |
|--------------|---------|-------------|
| **Channel Binding** | Topic Definition | Specifies that an AsyncAPI channel maps to an MQTT topic. |
| **Operation Binding** | Publish/Subscribe Behavior | Defines Quality of Service (QoS) and whether a message is retained. |
| **Message Binding** | Message-Level Properties | Configures message metadata like correlation data and response topics for request/reply patterns. |
| **Server Binding** | Connection & Session Behavior | Defines connection parameters like Client ID, Clean Session, Session Expiry, and the Last Will and Testament. |

## Core MQTT Concepts in AsyncAPI

### Topics and Channels

An AsyncAPI `channel` directly maps to an MQTT `topic`. The channel's address is the topic string, which can include parameters to define a topic hierarchy.

```yaml
channels:
  smart-home/living-room/{sensorId}/temperature:
    parameters:
      sensorId:
        schema:
          type: string
```

### Quality of Service (QoS)

Defined in the `operation` binding, QoS determines the guarantee of message delivery.

- **`qos: 0`**: At most once.
- **`qos: 1`**: At least once.
- **`qos: 2`**: Exactly once.

### Last Will and Testament (LWT)

Configured in the `server` binding, the `lastWill` object ensures that a predefined message is sent by the broker if a client disconnects unexpectedly. This is vital for monitoring device status.

```yaml
servers:
  production:
    bindings:
      mqtt:
        lastWill:
          topic: /devices/status
          qos: 1
          message: '{"deviceId": "thermostat-123", "status": "offline"}'
          retain: true
```

### Persistent Sessions

The combination of `cleanSession: false` (from MQTT v3, called Clean Start in v5) and `sessionExpiryInterval` (from MQTT v5) in the `server` binding allows clients to maintain their subscriptions and receive queued messages after a disconnection.

## Getting Started

A minimal example for a server and a publish operation:

```yaml
servers:
  productionBroker:
    url: mqtt://api.example.com
    protocol: mqtt
    bindings:
      mqtt:
        bindingVersion: '0.2.0'
        clientId: 'my-app-123'
        cleanSession: false

operations:
  publishTemperature:
    action: send
    channel:
      $ref: '#/channels/temperature'
    bindings:
      mqtt:
        bindingVersion: '0.2.0'
        qos: 1
        retain: false
```

## When to Use Generic vs. MQTT 5.0 Bindings

- **Use these generic MQTT bindings** when you need to support a range of MQTT versions or when your requirements are covered by the common features of v3 and v5. They provide the most flexibility.
- **Use the [MQTT 5.0 specific bindings](/bindings/mqtt5/)** only if you need to enforce that an application *must* use MQTT 5.0 and there are v5-specific properties that are not yet available in the generic binding.
