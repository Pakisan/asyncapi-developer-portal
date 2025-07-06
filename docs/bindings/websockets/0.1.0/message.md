---
title: WebSocket Message Binding v0.1.0 - Message Formatting
description: Configure WebSocket message bindings for message representation and formatting. Define message structure for real-time bidirectional communication with AsyncAPI.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: WebSocket message binding, AsyncAPI, WebSocket messages, message representation, real-time messaging, bidirectional communication, WebSocket protocol, message formatting
  - - meta
    - property: og:title
      content: WebSocket Message Binding v0.1.0 - Message Formatting
  - - meta
    - property: og:description
      content: Configure WebSocket message bindings for message representation and formatting. Define message structure for real-time bidirectional communication with AsyncAPI.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/websockets/0.1.0/message.html
  - - meta
    - name: og:image
      content: /bindings/websockets/0.1.0/message.png
  - - meta
    - name: twitter:title
      content: WebSocket Message Binding v0.1.0 - Message Formatting
  - - meta
    - name: twitter:description
      content: Configure WebSocket message bindings for message representation and formatting. Define message structure for real-time bidirectional communication with AsyncAPI.
  - - meta
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/websockets/0.1.0/message.html
---

# WebSockets Message Binding v0.1.0

The WebSockets message binding defines how AsyncAPI messages are represented and formatted within the WebSocket protocol. This binding configures the message structure and encoding used for communication over the WebSocket connection.

## Overview

WebSocket message bindings configure how messages are structured and transmitted over the WebSocket protocol. Since WebSockets support both text and binary message types, this binding defines the message representation format.

## Message Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`) |

## Property Details

### Binding Version

Specifies the version of the WebSocket message binding being used.

**Default:** `0.1.0`

**Note:** This is the only property currently defined in the WebSocket message binding schema. The binding is designed to be minimal and focused on the core WebSocket protocol capabilities.

## WebSocket Message Concepts

### Message Types

WebSocket supports different message types for data transmission:

- **Text Messages**: UTF-8 encoded text data (JSON, XML, plain text)
- **Binary Messages**: Raw binary data (images, files, binary protocols)
- **Control Frames**: Connection management (ping, pong, close)

### Message Formatting

WebSocket messages can be formatted in various ways:

- **JSON**: Structured data exchange
- **XML**: Document-based messaging
- **Protocol Buffers**: Efficient binary serialization
- **MessagePack**: Compact binary format
- **Plain Text**: Simple text-based communication

### Message Structure

WebSocket messages typically follow these patterns:

- **Event-Based**: Messages with event type and payload
- **Request-Response**: Messages with request ID and response data
- **Streaming**: Continuous data flow messages
- **Notification**: One-way notification messages

## Examples

### Basic Message Configuration

```yaml
messages:
  chatMessage:
    bindings:
      websockets:
        bindingVersion: '0.1.0'
    payload:
      type: object
      properties:
        message:
          type: string
        timestamp:
          type: string
          format: date-time
        userId:
          type: string
```

### JSON Message Format

```yaml
messages:
  userEvent:
    bindings:
      websockets:
        bindingVersion: '0.1.0'
    payload:
      type: object
      properties:
        eventType:
          type: string
          enum: ['user.login', 'user.logout', 'user.update']
        userId:
          type: string
        data:
          type: object
          additionalProperties: true
        timestamp:
          type: string
          format: date-time
```

### Binary Message Format

```yaml
messages:
  fileUpload:
    bindings:
      websockets:
        bindingVersion: '0.1.0'
    payload:
      type: string
      format: binary
      description: Binary file data
```

### Event-Based Message Structure

```yaml
messages:
  systemNotification:
    bindings:
      websockets:
        bindingVersion: '0.1.0'
    payload:
      type: object
      properties:
        event:
          type: string
          enum: ['notification', 'alert', 'warning', 'error']
        title:
          type: string
        message:
          type: string
        priority:
          type: string
          enum: ['low', 'medium', 'high', 'critical']
        timestamp:
          type: string
          format: date-time
```

### Request-Response Message Pattern

```yaml
messages:
  apiRequest:
    bindings:
      websockets:
        bindingVersion: '0.1.0'
    payload:
      type: object
      properties:
        requestId:
          type: string
          description: Unique request identifier
        method:
          type: string
          enum: ['GET', 'POST', 'PUT', 'DELETE']
        path:
          type: string
        data:
          type: object
          additionalProperties: true
```

### Streaming Data Message

```yaml
messages:
  sensorData:
    bindings:
      websockets:
        bindingVersion: '0.1.0'
    payload:
      type: object
      properties:
        sensorId:
          type: string
        readings:
          type: array
          items:
            type: object
            properties:
              timestamp:
                type: string
                format: date-time
              value:
                type: number
              unit:
                type: string
```

### Chat Application Messages

```yaml
messages:
  chatMessage:
    bindings:
      websockets:
        bindingVersion: '0.1.0'
    payload:
      type: object
      properties:
        messageId:
          type: string
        roomId:
          type: string
        userId:
          type: string
        username:
          type: string
        content:
          type: string
        messageType:
          type: string
          enum: ['text', 'image', 'file', 'system']
        timestamp:
          type: string
          format: date-time
```

### Gaming Messages

```yaml
messages:
  gameAction:
    bindings:
      websockets:
        bindingVersion: '0.1.0'
    payload:
      type: object
      properties:
        playerId:
          type: string
        action:
          type: string
          enum: ['move', 'attack', 'defend', 'use_item']
        coordinates:
          type: object
          properties:
            x:
              type: number
            y:
              type: number
        timestamp:
          type: string
          format: date-time
```

## Use Cases

### Real-Time Chat Application

```yaml
channels:
  chatChannel:
    publish:
      message:
        $ref: '#/components/messages/ChatMessage'
        bindings:
          websockets:
            bindingVersion: '0.1.0'
    subscribe:
      message:
        $ref: '#/components/messages/ChatMessage'
        bindings:
          websockets:
            bindingVersion: '0.1.0'
```

### Live Dashboard Updates

```yaml
channels:
  dashboardChannel:
    publish:
      message:
        $ref: '#/components/messages/DashboardUpdate'
        bindings:
          websockets:
            bindingVersion: '0.1.0'
    subscribe:
      message:
        $ref: '#/components/messages/DashboardUpdate'
        bindings:
          websockets:
            bindingVersion: '0.1.0'
```

### IoT Device Communication

```yaml
channels:
  deviceChannel:
    publish:
      message:
        $ref: '#/components/messages/DeviceStatus'
        bindings:
          websockets:
            bindingVersion: '0.1.0'
    subscribe:
      message:
        $ref: '#/components/messages/DeviceCommand'
        bindings:
          websockets:
            bindingVersion: '0.1.0'
```

### Financial Trading Platform

```yaml
channels:
  tradingChannel:
    publish:
      message:
        $ref: '#/components/messages/TradeOrder'
        bindings:
          websockets:
            bindingVersion: '0.1.0'
    subscribe:
      message:
        $ref: '#/components/messages/MarketData'
        bindings:
          websockets:
            bindingVersion: '0.1.0'
```

## Best Practices

### Message Design
- Use consistent message structure across your application
- Include message identifiers for tracking and debugging
- Add timestamps for message ordering and logging
- Use appropriate data types for different message content

### Performance Optimization
- Minimize message payload size
- Use binary messages for large data transfers
- Implement message compression when appropriate
- Consider message batching for high-frequency updates

### Message Validation
- Validate message structure and content
- Implement proper error handling for malformed messages
- Use schema validation for message payloads
- Handle missing or invalid message fields gracefully

### Security Considerations
- Sanitize all message content
- Validate message origins and permissions
- Implement rate limiting for message frequency
- Use secure message encoding and encryption when needed

### Error Handling
- Provide meaningful error messages for invalid messages
- Implement message acknowledgment when required
- Handle message delivery failures gracefully
- Log message processing for debugging and monitoring

### Message Ordering
- Consider message ordering requirements for your application
- Implement sequence numbers when order matters
- Handle out-of-order message delivery
- Use appropriate message types for different scenarios

## Changelog

### Version 0.1.0
- Initial release with basic WebSocket message binding support
- Support for message representation in WebSocket protocol
- Minimal configuration focused on core WebSocket capabilities
- Schema validation for binding version