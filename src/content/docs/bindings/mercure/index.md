---
title: Mercure Bindings - AsyncAPI Real-Time Updates
description: Master AsyncAPI Mercure bindings for real-time updates with Server-Sent Events. Configure channels, operations, and messages for modern web applications.
ogImage: /bindings/mercure/mercure.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: Mercure bindings, AsyncAPI, Server-Sent Events, SSE, real-time updates, event-driven architecture
heading: "Mercure Bindings"
---

Mercure is an open protocol and implementation for real-time communication, built on top of Server-Sent Events (SSE). It provides a simple yet powerful way to push data from a server to web browsers and other HTTP clients. AsyncAPI's Mercure bindings allow you to formally describe your event-driven APIs that use this protocol.

## Mercure Protocol Overview

Mercure is designed to be a modern and easy-to-use replacement for webhooks and polling. It uses a central "Hub" that receives messages from backend applications (publishers) and dispatches them to authorized clients (subscribers) over persistent HTTP connections.

Key features include:
- **Server-Sent Events (SSE)**: Built on the standard, browser-native SSE protocol, which provides a simple, unidirectional flow of data from server to client.
- **Simplicity**: Publishing is as easy as sending a `POST` request to the Hub. Subscribing is done by making a `GET` request.
- **Authorization**: Uses JSON Web Tokens (JWT) to control which clients can subscribe to which topics.
- **Automatic Reconnection**: Clients automatically attempt to reconnect if the connection is lost, with the Hub able to replay missed messages.
- **Topic-Based Communication**: Messages are published to specific "topics," which are identified by URLs.

## AsyncAPI Mercure Bindings

The Mercure bindings for AsyncAPI map its core concepts to Mercure-specific patterns. As of `v0.1.0`, these bindings are informational placeholders, indicating that the API components are designed for Mercure.

### Binding Types

| Binding Type | Purpose | Description |
|--------------|---------|-------------|
| **Channel Binding** | Topic Mapping | Specifies that an AsyncAPI channel corresponds to a Mercure topic URL. |
| **Operation Binding** | Publish Behavior | Describes a publish operation to a Mercure topic. |
| **Message Binding** | Event Data | Represents the data payload of a Server-Sent Event. |
| **Server Binding** | Hub Connection | Defines the connection details for the Mercure Hub. |

## Core Mercure Concepts in AsyncAPI

### Topics and Channels

An AsyncAPI `channel` directly maps to a Mercure `topic`, which is a URL. Clients subscribe to this URL to receive updates.

```yaml
channels:
  userUpdates:
    address: 'https://example.com/users/{userId}'
    parameters:
      userId:
        schema:
          type: string
```

### Publishing Updates

A `publish` operation in AsyncAPI represents the `POST` request made to the Mercure Hub to send an update. The `channel` address is the target topic.

### Receiving Updates

A `subscribe` operation represents a client connecting to the Mercure Hub via a `GET` request to receive Server-Sent Events for one or more topics.

## Getting Started

A minimal example for a Mercure Hub server and a publish operation:

```yaml
servers:
  mercureHub:
    url: https://hub.example.com/.well-known/mercure
    protocol: mercure
    bindings:
      mercure:
        bindingVersion: '0.1.0'

operations:
  sendGreeting:
    action: send
    channel:
      $ref: '#/channels/greetings'
    message:
      payload:
        type: object
        properties:
          message:
            type: string
            example: "Hello, world!"
```

The publisher would send a `POST` request to `https://hub.example.com/.well-known/mercure` with the following form data:
- `topic`: The URL of the target topic (e.g., `https://example.com/greetings`).
- `data`: The message payload (e.g., `{"message": "Hello, world!"}`).
