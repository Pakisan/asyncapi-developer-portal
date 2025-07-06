---
title: Solace Bindings - AsyncAPI Enterprise Event Mesh
description: Master AsyncAPI Solace bindings for enterprise event mesh. Configure destinations, queues, and connections for Solace PubSub+ with comprehensive examples.
layout: doc
head:
  - - meta
    - name: keywords
      content: Solace bindings, AsyncAPI, PubSub+, event mesh, enterprise messaging, message broker, queue, topic, Message VPN
  - - meta
    - property: og:title
      content: Solace Bindings - AsyncAPI Enterprise Event Mesh
  - - meta
    - property: og:description
      content: Master AsyncAPI Solace bindings for enterprise event mesh. Configure destinations, queues, and connections for Solace PubSub+ with comprehensive examples.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/solace/
  - - meta
    - name: og:image
      content: /bindings/solace/solace.png
  - - meta
    - name: twitter:title
      content: Solace Bindings - AsyncAPI Enterprise Event Mesh
  - - meta
    - name: twitter:description
      content: Master AsyncAPI Solace bindings for enterprise event mesh. Configure destinations, queues, and connections for Solace PubSub+ with comprehensive examples.
  - - meta
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/solace/
---

# Solace Bindings

Solace PubSub+ is an advanced event broker that supports publish-subscribe, queuing, request-reply, and streaming, all within a single platform. It is the foundation for building an "event mesh," a network layer for distributing events in real time across hybrid and multi-cloud environments. The AsyncAPI Solace bindings provide a rich, detailed way to define your event-driven APIs that leverage the power of Solace.

## Solace Protocol Overview

Solace PubSub+ is designed for high-performance, high-availability, and secure event distribution. It is not a protocol itself but a multi-protocol event broker that supports open standards like AMQP, MQTT, and REST, as well as its own efficient SMF protocol.

Key concepts include:
- **Event Mesh**: An architecture layer created by a network of interconnected event brokers that enables dynamic routing of events between producer and consumer applications, wherever they are deployed.
- **Message VPN (Virtual Private Network)**: A virtual message broker within a PubSub+ event broker. It provides a logically separate namespace, allowing for multi-tenancy and isolation of topics, queues, and client connections.
- **Topics**: A hierarchical metadata string attached to every message. Solace topics are not pre-configured; they are defined by publishing applications, and consuming applications use topic subscriptions (which support wildcards) to receive messages.
- **Queues**: Endpoints that provide guaranteed message delivery. Messages published to a topic can be spooled to a queue if it has a matching topic subscription.
- **Delivery Modes**: Solace supports two main delivery modes:
  - **Direct Messaging**: Low-latency, at-most-once delivery.
  - **Persistent Messaging (Guaranteed)**: At-least-once delivery, where messages are spooled to a queue or topic endpoint.

## AsyncAPI Solace Bindings

The Solace bindings allow you to map AsyncAPI concepts to the specific entities and behaviors of the Solace PubSub+ platform.

### Binding Types

| Binding Type | Purpose | Description |
|--------------|---------|-------------|
| **Channel Binding** | (Placeholder) | Marks the channel as a Solace topic. |
| **Operation Binding** | Destination & Behavior Configuration | Defines the Solace destinations (queues or topics) for an operation, including delivery modes and topic subscriptions. This is the most detailed binding. |
| **Message Binding** | (Placeholder) | Reserved for future Solace-specific message properties. |
| **Server Binding** | Connection Configuration | Specifies the Message VPN and client name for connecting to the Solace broker. |

### Supported Versions

| Version | Status | Key Features |
|---------|--------|--------------|
| **0.4.0** | Latest | Comprehensive support for defining multiple operation destinations (queues/topics), delivery modes, and topic subscriptions. |
| **0.3.0** | Legacy | Older version. |
| **0.2.0** | Legacy | Older version. |
| **0.1.0** | Legacy | Initial version. |

## Core Solace Concepts in AsyncAPI

### Connecting to a Message VPN

The `server` binding is used to define the connection to a specific Message VPN on the Solace broker.

```yaml
servers:
  solace_broker:
    url: solace.example.com
    protocol: solace
    bindings:
      solace:
        bindingVersion: '0.4.0'
        msgVpn: 'production-vpn'
```

### Defining Destinations in Operations

The `operation` binding is where the core Solace logic is defined. An operation can have multiple destinations. A consumer, for example, might bind to a durable queue that subscribes to one or more topics.

```yaml
operations:
  receiveOrderEvent:
    action: receive
    bindings:
      solace:
        bindingVersion: '0.4.0'
        destinations:
          - destinationType: 'queue'
            deliveryMode: 'persistent'
            queue:
              name: 'q_orders'
              topicSubscriptions:
                - 'orders/v1/us/new'
                - 'orders/v1/ca/new'
```

## Binding Documentation

### Channel Bindings
- [Solace Channel Binding v0.4.0](./0.4.0/channel.md)

### Operation Bindings
- [Solace Operation Binding v0.4.0](./0.4.0/operation.md)

### Message Bindings
- [Solace Message Binding v0.4.0](./0.4.0/message.md)

### Server Bindings
- [Solace Server Binding v0.4.0](./0.4.0/server.md) 