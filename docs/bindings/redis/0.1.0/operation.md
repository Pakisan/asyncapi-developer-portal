---
title: Redis Operation Binding v0.1.0 - Message Operations
description: Configure Redis operation bindings for publish and subscribe operations. Define in-memory messaging operations with AsyncAPI examples and best practices.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Redis operation binding v0.1.0, AsyncAPI, Redis operations, publish subscribe, in-memory database, message broker, key-value store, Redis pub/sub
  - - meta
    - property: og:title
      content: Redis Operation Binding v0.1.0 - Message Operations
  - - meta
    - property: og:description
      content: Configure Redis operation bindings for publish and subscribe operations. Define in-memory messaging operations with AsyncAPI examples and best practices.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/redis/0.1.0/operation.html
  - - meta
    - name: og:image
      content: /bindings/redis/0.1.0/operation.png
  - - meta
    - name: twitter:title
      content: Redis Operation Binding v0.1.0 - Message Operations
  - - meta
    - name: twitter:description
      content: Configure Redis operation bindings for publish and subscribe operations. Define in-memory messaging operations with AsyncAPI examples and best practices.
  - - meta
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/redis/0.1.0/operation.html
---

# Redis Operation Binding v0.1.0

The Redis operation binding defines how AsyncAPI operations (publish and subscribe) are implemented over the Redis pub/sub protocol. This binding configures how messages are sent and received using Redis channels and commands.

## Overview

Redis operation bindings configure the behavior of publish and subscribe operations within the Redis pub/sub messaging system. Operations define how messages flow between publishers and subscribers using Redis's simple and efficient pub/sub protocol.

## Operation Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`) |

## Property Details

### Binding Version

Specifies the version of the Redis operation binding being used.

**Default:** `0.1.0`

**Note:** This is the only property currently defined in the Redis operation binding schema. The binding is designed to be minimal and focused on the core Redis pub/sub capabilities.

## Redis Operation Concepts

### Publish Operations

Publish operations in Redis represent sending messages to channels:

- **PUBLISH Command**: Used to send messages to specific Redis channels
- **Channel Routing**: Messages are broadcast to all subscribers of the channel
- **No Persistence**: Messages are not stored and are lost if no subscribers are active
- **Simple Protocol**: Straightforward command structure for message publishing

### Subscribe Operations

Subscribe operations in Redis represent receiving messages from channels:

- **SUBSCRIBE Command**: Used to listen to messages on specific channels
- **Pattern Subscriptions**: PSUBSCRIBE for wildcard channel patterns
- **No Acknowledgment**: No confirmation of message receipt
- **Real-time Delivery**: Messages delivered immediately to active subscribers

### Redis Commands

Redis operations use these main commands:

- **PUBLISH**: Send message to a channel
- **SUBSCRIBE**: Listen to messages on a channel
- **PSUBSCRIBE**: Subscribe to channels matching a pattern
- **UNSUBSCRIBE**: Stop listening to channels
- **PUNSUBSCRIBE**: Stop listening to pattern subscriptions

## Examples

### Basic Operation Configuration

```yaml
operations:
  sendMessage:
    bindings:
      redis:
        bindingVersion: '0.1.0'
```

### Publish Operation

```yaml
operations:
  publishEvent:
    action: publish
    bindings:
      redis:
        bindingVersion: '0.1.0'
    message:
      $ref: '#/components/messages/UserEvent'
```

### Subscribe Operation

```yaml
operations:
  subscribeToEvents:
    action: subscribe
    bindings:
      redis:
        bindingVersion: '0.1.0'
    message:
      $ref: '#/components/messages/UserEvent'
```

### Bidirectional Chat Operations

```yaml
channels:
  chatChannel:
    publish:
      operationId: sendChatMessage
      bindings:
        redis:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/ChatMessage'
    subscribe:
      operationId: receiveChatMessage
      bindings:
        redis:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/ChatMessage'
```

### System Event Broadcasting

```yaml
channels:
  systemEvents:
    publish:
      operationId: broadcastSystemEvent
      bindings:
        redis:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/SystemEvent'
    subscribe:
      operationId: receiveSystemEvent
      bindings:
        redis:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/SystemEvent'
```

### IoT Device Communication

```yaml
channels:
  deviceChannel:
    publish:
      operationId: sendDeviceCommand
      bindings:
        redis:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/DeviceCommand'
    subscribe:
      operationId: receiveDeviceStatus
      bindings:
        redis:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/DeviceStatus'
```

### Real-Time Notifications

```yaml
channels:
  notifications:
    publish:
      operationId: sendNotification
      bindings:
        redis:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/Notification'
    subscribe:
      operationId: receiveNotification
      bindings:
        redis:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/Notification'
```

## Use Cases

### Real-Time News Broadcasting

```yaml
channels:
  newsChannel:
    publish:
      operationId: publishNews
      bindings:
        redis:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/NewsUpdate'
    subscribe:
      operationId: receiveNews
      bindings:
        redis:
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
        redis:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/DashboardUpdate'
    subscribe:
      operationId: receiveUpdate
      bindings:
        redis:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/DashboardUpdate'
```

### User Activity Tracking

```yaml
channels:
  userActivity:
    publish:
      operationId: trackActivity
      bindings:
        redis:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/UserActivity'
    subscribe:
      operationId: monitorActivity
      bindings:
        redis:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/UserActivity'
```

### Sensor Data Streaming

```yaml
channels:
  sensorData:
    publish:
      operationId: streamSensorData
      bindings:
        redis:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/SensorData'
    subscribe:
      operationId: processSensorData
      bindings:
        redis:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/SensorData'
```

## Best Practices

### Message Operations
- Use appropriate channel names for your use case
- Implement proper error handling for failed operations
- Handle connection failures gracefully
- Consider message size and frequency

### Connection Management
- Implement proper connection lifecycle handling
- Use connection pooling for high-throughput applications
- Handle reconnection scenarios gracefully
- Monitor connection health and performance

### Performance Optimization
- Use appropriate message sizes
- Implement connection pooling
- Monitor operation performance and throughput
- Consider channel partitioning for high-volume scenarios

### Security Considerations
- Use secure Redis connections (Redis over SSL/TLS)
- Implement proper authentication and authorization
- Validate all message content
- Protect against common messaging vulnerabilities

### Error Handling
- Implement proper error handling for failed operations
- Handle connection failures gracefully
- Log operation failures for debugging
- Implement retry mechanisms when appropriate

### Subscription Management
- Use unique subscription identifiers for tracking
- Implement proper subscription cleanup
- Handle subscription failures gracefully
- Monitor subscription health and performance

## Redis Command Examples

### PUBLISH Command (Publish)
```
PUBLISH user:events '{"userId": "123", "event": "login", "timestamp": "2023-01-01T12:00:00Z"}'
```

### SUBSCRIBE Command (Subscribe)
```
SUBSCRIBE user:events
```

### PSUBSCRIBE Command (Pattern Subscribe)
```
PSUBSCRIBE user:*
```

### UNSUBSCRIBE Command
```
UNSUBSCRIBE user:events
```

### PUNSUBSCRIBE Command
```
PUNSUBSCRIBE user:*
```

## Operation Patterns

### Simple Pub/Sub
```yaml
channels:
  simpleChannel:
    publish:
      operationId: publish
      bindings:
        redis:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/SimpleMessage'
    subscribe:
      operationId: subscribe
      bindings:
        redis:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/SimpleMessage'
```

### Pattern-Based Subscriptions
```yaml
channels:
  patternChannel:
    publish:
      operationId: publishToPattern
      bindings:
        redis:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/PatternMessage'
    subscribe:
      operationId: subscribeToPattern
      bindings:
        redis:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/PatternMessage'
```

### Multi-Channel Operations
```yaml
channels:
  multiChannel:
    publish:
      operationId: publishToMultiple
      bindings:
        redis:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/MultiChannelMessage'
    subscribe:
      operationId: subscribeToMultiple
      bindings:
        redis:
          bindingVersion: '0.1.0'
      message:
        $ref: '#/components/messages/MultiChannelMessage'
```

## Changelog

### Version 0.1.0
- Initial release with basic Redis operation binding support
- Support for publish and subscribe operations
- Minimal configuration focused on core Redis capabilities
- Schema validation for binding version