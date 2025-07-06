---
title: STOMP Operation Binding v0.1.0 - Message Operations
description: Configure STOMP operation bindings for publish and subscribe operations. Define text-based messaging operations with AsyncAPI examples and best practices.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: STOMP operation binding v0.1.0, AsyncAPI, STOMP operations, publish subscribe, text-based messaging, Simple Text Oriented Messaging Protocol, message operations, STOMP frames
  - - meta
    - property: og:title
      content: STOMP Operation Binding v0.1.0 - Message Operations
  - - meta
    - property: og:description
      content: Configure STOMP operation bindings for publish and subscribe operations. Define text-based messaging operations with AsyncAPI examples and best practices.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/stomp/0.1.0/operation.html
  - - meta
    - name: og:image
      content: /bindings/stomp/0.1.0/operation.png
  - - meta
    - name: twitter:title
      content: STOMP Operation Binding v0.1.0 - Message Operations
  - - meta
    - name: twitter:description
      content: Configure STOMP operation bindings for publish and subscribe operations. Define text-based messaging operations with AsyncAPI examples and best practices.
  - - meta
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/stomp/0.1.0/operation.html
---

# STOMP Operation Binding v0.1.0

The STOMP operation binding defines how AsyncAPI operations (publish and subscribe) are implemented over the STOMP protocol. This binding configures how messages are sent and received using STOMP frames and destinations.

## Overview

STOMP operation bindings configure the behavior of publish and subscribe operations within the STOMP messaging system. Operations define how messages flow between publishers and subscribers using STOMP's frame-based protocol and destination-based routing.

## Operation Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`) |

## Property Details

### Binding Version

Specifies the version of the STOMP operation binding being used.

**Default:** `0.1.0`

**Note:** This is the only property currently defined in the STOMP operation binding schema. The binding is designed to be minimal and focused on the core STOMP protocol capabilities.

## STOMP Operation Concepts

### Publish Operations

Publish operations in STOMP represent sending messages to destinations:

- **SEND Frame**: Used to send messages to specific destinations
- **Destination Routing**: Messages are routed based on destination type (topic/queue)
- **Message Headers**: STOMP headers provide metadata for message handling
- **Content Types**: Support for various content types (JSON, XML, text, binary)

### Subscribe Operations

Subscribe operations in STOMP represent receiving messages from destinations:

- **SUBSCRIBE Frame**: Used to subscribe to destinations for message consumption
- **Subscription Management**: Unique subscription IDs for message tracking
- **Acknowledgment Modes**: Different acknowledgment strategies (auto, client, client-individual)
- **Message Filtering**: Support for selective message consumption

### STOMP Frame Types

STOMP operations use these main frame types:

- **CONNECT**: Establish connection to STOMP broker
- **SEND**: Send message to destination
- **SUBSCRIBE**: Subscribe to destination
- **UNSUBSCRIBE**: Unsubscribe from destination
- **ACK/NACK**: Acknowledge or reject messages
- **BEGIN/COMMIT/ABORT**: Transaction management
- **DISCONNECT**: Close connection

## Examples

### Basic Operation Configuration

```yaml
operations:
  sendMessage:
    bindings:
      stomp:
        bindingVersion: '0.1.0'
```

### Publish Operation

```yaml
operations:
  publishNews:
    action: publish
    bindings:
      stomp:
        bindingVersion: '0.1.0'
    message:
      $ref: '#/components/messages/NewsMessage'
```

### Subscribe Operation

```yaml
operations:
  subscribeToNews:
    action: subscribe
    bindings:
      stomp:
        bindingVersion: '0.1.0'
    message:
      $ref: '#/components/messages/NewsMessage'
```

### Bidirectional Chat Operations

```yaml
channels:
  chatChannel:
    publish:
      operationId: sendChatMessage
      bindings:
        stomp:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/ChatMessage'
    subscribe:
      operationId: receiveChatMessage
      bindings:
        stomp:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/ChatMessage'
```

### Order Processing Operations

```yaml
channels:
  orderChannel:
    publish:
      operationId: submitOrder
      bindings:
        stomp:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/Order'
    subscribe:
      operationId: processOrder
      bindings:
        stomp:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/Order'
```

### System Event Broadcasting

```yaml
channels:
  systemEvents:
    publish:
      operationId: broadcastEvent
      bindings:
        stomp:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/SystemEvent'
    subscribe:
      operationId: receiveEvent
      bindings:
        stomp:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/SystemEvent'
```

### Request-Reply Pattern

```yaml
channels:
  apiRequest:
    publish:
      operationId: sendRequest
      bindings:
        stomp:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/ApiRequest'
    subscribe:
      operationId: receiveResponse
      bindings:
        stomp:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/ApiResponse'
```

## Use Cases

### Real-Time News Broadcasting

```yaml
channels:
  newsChannel:
    publish:
      operationId: publishNews
      bindings:
        stomp:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/NewsUpdate'
    subscribe:
      operationId: receiveNews
      bindings:
        stomp:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/NewsUpdate'
```

### Live Dashboard Updates

```yaml
channels:
  dashboardChannel:
    publish:
      operationId: sendUpdate
      bindings:
        stomp:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/DashboardUpdate'
    subscribe:
      operationId: receiveUpdate
      bindings:
        stomp:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/DashboardUpdate'
```

### IoT Device Communication

```yaml
channels:
  deviceChannel:
    publish:
      operationId: sendCommand
      bindings:
        stomp:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/DeviceCommand'
    subscribe:
      operationId: receiveStatus
      bindings:
        stomp:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/DeviceStatus'
```

### Financial Trading Platform

```yaml
channels:
  tradingChannel:
    publish:
      operationId: sendOrder
      bindings:
        stomp:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/TradeOrder'
    subscribe:
      operationId: receiveMarketData
      bindings:
        stomp:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/MarketData'
```

## Best Practices

### Message Operations
- Use appropriate acknowledgment modes for your use case
- Implement proper error handling for failed operations
- Handle message ordering when required by your application
- Use transactions for critical message operations

### Connection Management
- Implement proper connection lifecycle handling
- Use connection pooling for high-throughput applications
- Handle reconnection scenarios gracefully
- Monitor connection health and performance

### Performance Optimization
- Use appropriate acknowledgment modes (auto vs client)
- Implement message batching when possible
- Monitor operation performance and throughput
- Optimize message payload size

### Security Considerations
- Use secure STOMP connections (STOMP over SSL/TLS)
- Implement proper authentication and authorization
- Validate all message content and headers
- Protect against common messaging vulnerabilities

### Error Handling
- Implement proper error handling for failed operations
- Use transactions for critical message operations
- Handle message delivery failures gracefully
- Log operation failures for debugging

### Subscription Management
- Use unique subscription IDs for tracking
- Implement proper subscription cleanup
- Handle subscription failures gracefully
- Monitor subscription health and performance

## STOMP Frame Examples

### SEND Frame (Publish)
```
SEND
destination:/topic/news
content-type:application/json
content-length:123

{"headline":"Breaking News","content":"Important update..."}
```

### SUBSCRIBE Frame (Subscribe)
```
SUBSCRIBE
id:news-subscription
destination:/topic/news
ack:auto

```

### ACK Frame (Acknowledgment)
```
ACK
id:message-123
subscription:news-subscription

```

### NACK Frame (Negative Acknowledgment)
```
NACK
id:message-123
subscription:news-subscription

```

## Changelog

### Version 0.1.0
- Initial release with basic STOMP operation binding support
- Support for publish and subscribe operations
- Minimal configuration focused on core STOMP capabilities
- Schema validation for binding version