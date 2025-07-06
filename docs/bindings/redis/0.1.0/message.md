---
title: Redis Message Binding v0.1.0 - Message Formatting
description: Configure Redis message bindings for message representation and formatting. Define in-memory message structure with AsyncAPI examples and best practices.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Redis message binding v0.1.0, AsyncAPI, Redis messages, message representation, in-memory database, message broker, key-value store, Redis pub/sub
  - - meta
    - property: og:title
      content: Redis Message Binding v0.1.0 - Message Formatting
  - - meta
    - property: og:description
      content: Configure Redis message bindings for message representation and formatting. Define in-memory message structure with AsyncAPI examples and best practices.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/redis/0.1.0/message.html
  - - meta
    - name: og:image
      content: /bindings/redis/0.1.0/message.png
  - - meta
    - name: twitter:title
      content: Redis Message Binding v0.1.0 - Message Formatting
  - - meta
    - name: twitter:description
      content: Configure Redis message bindings for message representation and formatting. Define in-memory message structure with AsyncAPI examples and best practices.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/redis/0.1.0/message.html
---

# Redis Message Binding v0.1.0

The Redis message binding defines how AsyncAPI messages are represented and formatted within the Redis pub/sub protocol. This binding configures the message structure and content format used for communication over Redis channels.

## Overview

Redis message bindings configure how messages are structured and transmitted over the Redis pub/sub protocol. Redis uses a simple string-based message format that can contain various data types, making it flexible for different messaging scenarios.

## Message Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`) |

## Property Details

### Binding Version

Specifies the version of the Redis message binding being used.

**Default:** `0.1.0`

**Note:** This is the only property currently defined in the Redis message binding schema. The binding is designed to be minimal and focused on the core Redis pub/sub capabilities.

## Redis Message Concepts

### Message Format

Redis pub/sub messages are simple strings:

- **String-based**: All messages are transmitted as strings
- **No Structure**: No built-in message structure or headers
- **Content Flexibility**: Can contain any string content (JSON, XML, plain text, etc.)
- **No Metadata**: No built-in message metadata or properties

### Message Content Types

Redis messages can contain various content types:

- **JSON**: Structured data exchange
- **XML**: Document-based messaging
- **Plain Text**: Simple text messages
- **Binary Data**: Base64 encoded binary content
- **Custom Formats**: Any string-based format

### Message Structure

Redis messages typically follow these patterns:

- **Event-Based**: Messages with event type and payload
- **Notification**: Simple notification messages
- **Data Updates**: Real-time data updates
- **Commands**: Action commands and instructions

## Examples

### Basic Message Configuration

```yaml
messages:
  userEvent:
    bindings:
      redis:
        bindingVersion: '0.1.0'
    payload:
      type: object
      properties:
        userId:
          type: string
        event:
          type: string
        timestamp:
          type: string
          format: date-time
```

### JSON Message Format

```yaml
messages:
  userEvent:
    bindings:
      redis:
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

### Plain Text Message Format

```yaml
messages:
  notificationMessage:
    bindings:
      redis:
        bindingVersion: '0.1.0'
    payload:
      type: string
      description: Plain text notification message
```

### Event-Based Message Structure

```yaml
messages:
  systemEvent:
    bindings:
      redis:
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

### Chat Application Messages

```yaml
messages:
  chatMessage:
    bindings:
      redis:
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

### IoT Device Messages

```yaml
messages:
  sensorData:
    bindings:
      redis:
        bindingVersion: '0.1.0'
    payload:
      type: object
      properties:
        sensorId:
          type: string
        sensorType:
          type: string
          enum: ['temperature', 'humidity', 'pressure', 'motion']
        value:
          type: number
        unit:
          type: string
        timestamp:
          type: string
          format: date-time
```

### Financial Trading Messages

```yaml
messages:
  marketData:
    bindings:
      redis:
        bindingVersion: '0.1.0'
    payload:
      type: object
      properties:
        symbol:
          type: string
        price:
          type: number
        volume:
          type: number
        change:
          type: number
        timestamp:
          type: string
          format: date-time
```

### System Notification Messages

```yaml
messages:
  systemNotification:
    bindings:
      redis:
        bindingVersion: '0.1.0'
    payload:
      type: object
      properties:
        notificationId:
          type: string
        type:
          type: string
          enum: ['info', 'warning', 'error', 'success']
        title:
          type: string
        message:
          type: string
        target:
          type: string
          enum: ['all', 'admin', 'user']
        timestamp:
          type: string
          format: date-time
```

## Use Cases

### Real-Time News Broadcasting

```yaml
channels:
  newsChannel:
    publish:
      message:
        $ref: '#/components/messages/NewsMessage'
        bindings:
          redis:
            bindingVersion: '0.1.0'
    subscribe:
      message:
        $ref: '#/components/messages/NewsMessage'
        bindings:
          redis:
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
          redis:
            bindingVersion: '0.1.0'
    subscribe:
      message:
        $ref: '#/components/messages/DashboardUpdate'
        bindings:
          redis:
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
          redis:
            bindingVersion: '0.1.0'
    subscribe:
      message:
        $ref: '#/components/messages/DeviceCommand'
        bindings:
          redis:
            bindingVersion: '0.1.0'
```

### User Activity Tracking

```yaml
channels:
  userActivity:
    publish:
      message:
        $ref: '#/components/messages/UserActivity'
        bindings:
          redis:
            bindingVersion: '0.1.0'
    subscribe:
      message:
        $ref: '#/components/messages/UserActivity'
        bindings:
          redis:
            bindingVersion: '0.1.0'
```

## Best Practices

### Message Design
- Use consistent message structure across your application
- Include message identifiers for tracking and debugging
- Add timestamps for message ordering and logging
- Use appropriate data types for different message content

### Content Type Selection
- Use JSON for structured data exchange
- Use plain text for simple notifications
- Use appropriate encoding for binary data
- Keep message sizes reasonable for performance

### Message Validation
- Validate message structure and content
- Implement proper error handling for malformed messages
- Use schema validation for message payloads
- Handle missing or invalid message fields gracefully

### Performance Optimization
- Minimize message payload size
- Use efficient data formats
- Consider message compression when appropriate
- Monitor message throughput and performance

### Security Considerations
- Sanitize all message content
- Validate message origins and permissions
- Implement rate limiting for message frequency
- Use secure message encoding when needed

### Error Handling
- Provide meaningful error messages for invalid messages
- Handle message delivery failures gracefully
- Log message processing for debugging and monitoring
- Implement retry mechanisms when appropriate

### Message Ordering
- Consider message ordering requirements for your application
- Implement sequence numbers when order matters
- Handle out-of-order message delivery
- Use appropriate message types for different scenarios

## Redis Command Examples

### PUBLISH with JSON Message
```
PUBLISH user:events '{"userId": "123", "event": "login", "timestamp": "2023-01-01T12:00:00Z"}'
```

### PUBLISH with Plain Text Message
```
PUBLISH notifications 'System maintenance scheduled for tonight'
```

### PUBLISH with Simple Event
```
PUBLISH system:events '{"event": "startup", "timestamp": "2023-01-01T12:00:00Z"}'
```

### PUBLISH with Sensor Data
```
PUBLISH sensor:temperature '{"sensorId": "temp-001", "value": 23.5, "unit": "celsius", "timestamp": "2023-01-01T12:00:00Z"}'
```

## Message Patterns

### Simple Event Message
```json
{
  "event": "user.login",
  "userId": "12345",
  "timestamp": "2023-01-01T12:00:00Z"
}
```

### Complex Event Message
```json
{
  "eventId": "evt-001",
  "eventType": "order.created",
  "orderId": "ord-123",
  "userId": "user-456",
  "amount": 99.99,
  "currency": "USD",
  "timestamp": "2023-01-01T12:00:00Z"
}
```

### Notification Message
```json
{
  "notificationId": "notif-001",
  "type": "info",
  "title": "System Update",
  "message": "System will be updated in 5 minutes",
  "target": "all",
  "timestamp": "2023-01-01T12:00:00Z"
}
```

### Sensor Data Message
```json
{
  "sensorId": "sensor-001",
  "sensorType": "temperature",
  "value": 22.5,
  "unit": "celsius",
  "location": "room-101",
  "timestamp": "2023-01-01T12:00:00Z"
}
```

## Changelog

### Version 0.1.0
- Initial release with basic Redis message binding support
- Support for message representation in Redis protocol
- Minimal configuration focused on core Redis capabilities
- Schema validation for binding version