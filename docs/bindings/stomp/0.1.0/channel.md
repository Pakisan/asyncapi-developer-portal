---
title: STOMP Channel Binding v0.1.0 - Destination and Routing Configuration
description: Learn how to configure STOMP channel bindings using AsyncAPI v0.1.0. Define destination configurations and routing for STOMP-based messaging with comprehensive examples and best practices for text-oriented messaging protocols.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: STOMP channel binding, AsyncAPI, STOMP destinations, message routing, text-based messaging, Simple Text Oriented Messaging Protocol, message broker, pub/sub, topic routing, queue routing
  - - meta
    - property: og:title
      content: STOMP Channel Binding v0.1.0 - Destination and Routing Configuration
  - - meta
    - property: og:description
      content: Learn how to configure STOMP channel bindings using AsyncAPI v0.1.0. Define destination configurations and routing for STOMP-based messaging with comprehensive examples and best practices for text-oriented messaging protocols.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/stomp/0.1.0/channel.html
  - - meta
    - name: og:image
      content: /bindings/stomp/0.1.0/channel.png
  - - meta
    - name: twitter:title
      content: STOMP Channel Binding v0.1.0 - Destination and Routing Configuration
  - - meta
    - name: twitter:description
      content: Learn how to configure STOMP channel bindings using AsyncAPI v0.1.0. Define destination configurations and routing for STOMP-based messaging with comprehensive examples and best practices for text-oriented messaging protocols.
---

# STOMP Channel Binding v0.1.0

The STOMP channel binding defines how AsyncAPI channels map to STOMP destinations. This binding configures how messages are routed through STOMP destinations, which can be topics for publish-subscribe messaging or queues for point-to-point messaging.

## Overview

STOMP channel bindings configure the destination-based routing system used by STOMP. Channels in AsyncAPI map to STOMP destinations, which determine how messages are distributed to subscribers. STOMP supports both topic-based (pub/sub) and queue-based (point-to-point) messaging patterns.

## Channel Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`) |

## Property Details

### Binding Version

Specifies the version of the STOMP channel binding being used.

**Default:** `0.1.0`

**Note:** This is the only property currently defined in the STOMP channel binding schema. The binding is designed to be minimal and focused on the core STOMP protocol capabilities, with room for future expansion.

## STOMP Channel Concepts

### Destinations

STOMP uses destinations for message routing:

- **Topic Destinations** (`/topic/name`): Publish-subscribe messaging where multiple subscribers receive the same message
- **Queue Destinations** (`/queue/name`): Point-to-point messaging where only one subscriber receives each message
- **Temporary Destinations**: Dynamic destinations created for request-reply patterns
- **User Destinations** (`/user/name`): User-specific destinations for personal messages

### Destination Patterns

STOMP supports various destination patterns:

- **Exact Match**: `/topic/news` - matches only this specific destination
- **Wildcard Subscriptions**: `/topic/news/*` - matches all news subtopics
- **Hierarchical Routing**: `/topic/region/country/city` - geographic message routing
- **Dynamic Destinations**: `/temp-queue/request-123` - temporary destinations

### Message Routing

STOMP routing behavior depends on destination type:

- **Topics**: Messages sent to topics are broadcast to all subscribers
- **Queues**: Messages sent to queues are delivered to one subscriber (load balancing)
- **Temporary Queues**: Used for request-reply patterns with unique response destinations

## Examples

### Basic Topic Channel

```yaml
channels:
  newsUpdates:
    bindings:
      stomp:
        bindingVersion: '0.1.0'
    publish:
      message:
        $ref: '#/components/messages/NewsUpdate'
    subscribe:
      message:
        $ref: '#/components/messages/NewsUpdate'
```

### Queue Channel for Point-to-Point Messaging

```yaml
channels:
  orderProcessing:
    bindings:
      stomp:
        bindingVersion: '0.1.0'
    publish:
      message:
        $ref: '#/components/messages/Order'
    subscribe:
      message:
        $ref: '#/components/messages/Order'
```

### User-Specific Channel

```yaml
channels:
  userNotifications:
    bindings:
      stomp:
        bindingVersion: '0.1.0'
    publish:
      message:
        $ref: '#/components/messages/UserNotification'
    subscribe:
      message:
        $ref: '#/components/messages/UserNotification'
```

### Temporary Queue for Request-Reply

```yaml
channels:
  apiRequest:
    bindings:
      stomp:
        bindingVersion: '0.1.0'
    publish:
      message:
        $ref: '#/components/messages/ApiRequest'
    subscribe:
      message:
        $ref: '#/components/messages/ApiResponse'
```

### Hierarchical Topic Structure

```yaml
channels:
  regionalNews:
    bindings:
      stomp:
        bindingVersion: '0.1.0'
    publish:
      message:
        $ref: '#/components/messages/RegionalNews'
    subscribe:
      message:
        $ref: '#/components/messages/RegionalNews'
```

### System Events Channel

```yaml
channels:
  systemEvents:
    bindings:
      stomp:
        bindingVersion: '0.1.0'
    publish:
      message:
        $ref: '#/components/messages/SystemEvent'
    subscribe:
      message:
        $ref: '#/components/messages/SystemEvent'
```

## Use Cases

### Real-Time News Broadcasting

```yaml
channels:
  breakingNews:
    bindings:
      stomp:
        bindingVersion: '0.1.0'
    publish:
      message:
        $ref: '#/components/messages/BreakingNews'
    subscribe:
      message:
        $ref: '#/components/messages/BreakingNews'
```

### Order Processing System

```yaml
channels:
  orderQueue:
    bindings:
      stomp:
        bindingVersion: '0.1.0'
    publish:
      message:
        $ref: '#/components/messages/Order'
    subscribe:
      message:
        $ref: '#/components/messages/Order'
```

### Chat Application

```yaml
channels:
  chatRoom:
    bindings:
      stomp:
        bindingVersion: '0.1.0'
    publish:
      message:
        $ref: '#/components/messages/ChatMessage'
    subscribe:
      message:
        $ref: '#/components/messages/ChatMessage'
```

### IoT Device Management

```yaml
channels:
  deviceCommands:
    bindings:
      stomp:
        bindingVersion: '0.1.0'
    publish:
      message:
        $ref: '#/components/messages/DeviceCommand'
    subscribe:
      message:
        $ref: '#/components/messages/DeviceCommand'
```

### Financial Trading Platform

```yaml
channels:
  marketData:
    bindings:
      stomp:
        bindingVersion: '0.1.0'
    publish:
      message:
        $ref: '#/components/messages/MarketData'
    subscribe:
      message:
        $ref: '#/components/messages/MarketData'
```

## Best Practices

### Destination Naming
- Use descriptive and hierarchical destination names
- Follow consistent naming conventions across your application
- Use appropriate prefixes (`/topic/`, `/queue/`, `/user/`)
- Avoid overly long destination names

### Message Routing
- Choose appropriate destination types for your use case
- Use topics for broadcast scenarios
- Use queues for load-balanced processing
- Implement proper error handling for routing failures

### Performance Optimization
- Monitor destination performance and throughput
- Use appropriate acknowledgment modes
- Implement message filtering when possible
- Consider destination partitioning for high-volume scenarios

### Security Considerations
- Implement proper access control for destinations
- Validate destination names and patterns
- Use secure connections for sensitive data
- Monitor for unauthorized access attempts

### Error Handling
- Handle destination creation failures gracefully
- Implement proper cleanup for temporary destinations
- Monitor destination health and availability
- Log routing operations for debugging

### Scalability Planning
- Design destinations for horizontal scaling
- Consider destination partitioning strategies
- Implement proper load balancing for queues
- Plan for destination migration and updates

## STOMP Frame Examples

### SEND Frame to Topic
```
SEND
destination:/topic/news
content-type:application/json
content-length:123

{"headline":"Breaking News","content":"Important update..."}
```

### SUBSCRIBE Frame
```
SUBSCRIBE
id:news-subscription
destination:/topic/news
ack:auto

```

### SEND Frame to Queue
```
SEND
destination:/queue/orders
content-type:application/json
content-length:89

{"orderId":"12345","items":["item1","item2"]}
```

## Changelog

### Version 0.1.0
- Initial release with basic STOMP channel binding support
- Support for destination-based message routing
- Minimal configuration focused on core STOMP capabilities
- Schema validation for binding version
- Reserved for future destination-specific STOMP configurations