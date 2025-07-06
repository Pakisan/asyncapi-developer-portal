---
title: WebSocket Operation Binding v0.1.0 - Message Operations
description: Configure WebSocket operation bindings for publish and subscribe operations. Define real-time bidirectional communication with AsyncAPI examples and best practices.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: WebSocket operation binding v0.1.0, AsyncAPI, WebSocket operations, publish subscribe, real-time messaging, bidirectional communication, WebSocket protocol, message operations
  - - meta
    - property: og:title
      content: WebSocket Operation Binding v0.1.0 - Message Operations
  - - meta
    - property: og:description
      content: Configure WebSocket operation bindings for publish and subscribe operations. Define real-time bidirectional communication with AsyncAPI examples and best practices.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/websockets/0.1.0/operation.html
  - - meta
    - name: og:image
      content: /bindings/websockets/0.1.0/operation.png
  - - meta
    - name: twitter:title
      content: WebSocket Operation Binding v0.1.0 - Message Operations
  - - meta
    - name: twitter:description
      content: Configure WebSocket operation bindings for publish and subscribe operations. Define real-time bidirectional communication with AsyncAPI examples and best practices.
  - - meta
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/websockets/0.1.0/operation.html
---

# WebSockets Operation Binding v0.1.0

The WebSockets operation binding defines how AsyncAPI operations (publish and subscribe) are implemented over the WebSocket protocol. This binding configures how messages are sent and received through the persistent WebSocket connection.

## Overview

WebSocket operation bindings configure the behavior of publish and subscribe operations within the WebSocket connection. Since WebSockets provide a persistent bidirectional channel, operations define how messages flow between clients and servers.

## Operation Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`) |

## Property Details

### Binding Version

Specifies the version of the WebSocket operation binding being used.

**Default:** `0.1.0`

**Note:** This is the only property currently defined in the WebSocket operation binding schema. The binding is designed to be minimal and focused on the core WebSocket protocol capabilities.

## WebSocket Operation Concepts

### Publish Operations

Publish operations in WebSockets represent sending messages from the client to the server or from the server to the client:

- **Client to Server**: Messages sent by clients (e.g., user actions, commands)
- **Server to Client**: Messages sent by servers (e.g., notifications, responses)

### Subscribe Operations

Subscribe operations in WebSockets represent receiving messages from the other party:

- **Client Subscribing**: Client receives messages from server
- **Server Subscribing**: Server receives messages from client

### Bidirectional Communication

WebSocket operations support true bidirectional communication:

- Both parties can publish and subscribe simultaneously
- Messages can flow in both directions over the same connection
- No need for separate channels or connections for different directions

## Examples

### Basic Operation Configuration

```yaml
operations:
  sendMessage:
    bindings:
      websockets:
        bindingVersion: '0.1.0'
```

### Client Publishing Message

```yaml
operations:
  userAction:
    action: publish
    bindings:
      websockets:
        bindingVersion: '0.1.0'
    message:
      $ref: '#/components/messages/UserAction'
```

### Server Publishing Notification

```yaml
operations:
  systemNotification:
    action: publish
    bindings:
      websockets:
        bindingVersion: '0.1.0'
    message:
      $ref: '#/components/messages/SystemNotification'
```

### Client Subscribing to Updates

```yaml
operations:
  receiveUpdates:
    action: subscribe
    bindings:
      websockets:
        bindingVersion: '0.1.0'
    message:
      $ref: '#/components/messages/LiveUpdate'
```

### Server Subscribing to Client Events

```yaml
operations:
  handleClientEvent:
    action: subscribe
    bindings:
      websockets:
        bindingVersion: '0.1.0'
    message:
      $ref: '#/components/messages/ClientEvent'
```

### Bidirectional Chat Operations

```yaml
channels:
  chatRoom:
    publish:
      operationId: sendChatMessage
      bindings:
        websockets:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/ChatMessage'
    subscribe:
      operationId: receiveChatMessage
      bindings:
        websockets:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/ChatMessage'
```

### Real-Time Gaming Operations

```yaml
channels:
  gameSession:
    publish:
      operationId: sendGameAction
      bindings:
        websockets:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/GameAction'
    subscribe:
      operationId: receiveGameUpdate
      bindings:
        websockets:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/GameUpdate'
```

### IoT Device Operations

```yaml
channels:
  deviceControl:
    publish:
      operationId: sendDeviceCommand
      bindings:
        websockets:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/DeviceCommand'
    subscribe:
      operationId: receiveDeviceStatus
      bindings:
        websockets:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/DeviceStatus'
```

## Use Cases

### Real-Time Chat Application

```yaml
channels:
  chatChannel:
    publish:
      operationId: sendMessage
      bindings:
        websockets:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/ChatMessage'
    subscribe:
      operationId: receiveMessage
      bindings:
        websockets:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/ChatMessage'
```

### Live Dashboard Updates

```yaml
channels:
  dashboardChannel:
    publish:
      operationId: requestUpdate
      bindings:
        websockets:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/UpdateRequest'
    subscribe:
      operationId: receiveUpdate
      bindings:
        websockets:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/DashboardUpdate'
```

### Collaborative Document Editing

```yaml
channels:
  documentChannel:
    publish:
      operationId: sendEdit
      bindings:
        websockets:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/DocumentEdit'
    subscribe:
      operationId: receiveEdit
      bindings:
        websockets:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/DocumentEdit'
```

### Financial Trading Platform

```yaml
channels:
  tradingChannel:
    publish:
      operationId: sendOrder
      bindings:
        websockets:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/TradeOrder'
    subscribe:
      operationId: receiveMarketData
      bindings:
        websockets:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/MarketData'
```

## Best Practices

### Message Handling
- Implement proper message validation and sanitization
- Handle message ordering when required by your application
- Use appropriate message types (text vs binary)
- Implement message acknowledgment when needed

### Connection Management
- Handle connection lifecycle events properly
- Implement reconnection logic for dropped connections
- Use heartbeat mechanisms to detect connection health
- Gracefully handle connection errors and timeouts

### Performance Optimization
- Minimize message payload size
- Use binary messages for large data transfers
- Implement message compression when appropriate
- Batch messages when possible to reduce overhead

### Security Considerations
- Validate all incoming messages
- Implement proper authentication and authorization
- Use secure WebSocket connections (WSS) in production
- Protect against common WebSocket vulnerabilities

### Error Handling
- Implement proper error handling for failed operations
- Provide meaningful error messages to clients
- Log operation failures for debugging
- Implement retry mechanisms when appropriate

## Changelog

### Version 0.1.0
- Initial release with basic WebSocket operation binding support
- Support for publish and subscribe operations
- Minimal configuration focused on core WebSocket capabilities
- Schema validation for binding version