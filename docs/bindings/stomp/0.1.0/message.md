---
title: STOMP Message Binding v0.1.0 - Message Formatting
description: Configure STOMP message bindings for message representation and formatting. Define text-based message structure with AsyncAPI examples and best practices.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: STOMP message binding v0.1.0, AsyncAPI, STOMP messages, message representation, text-based messaging, Simple Text Oriented Messaging Protocol, message formatting, STOMP frames
  - - meta
    - property: og:title
      content: STOMP Message Binding v0.1.0 - Message Formatting
  - - meta
    - property: og:description
      content: Configure STOMP message bindings for message representation and formatting. Define text-based message structure with AsyncAPI examples and best practices.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/stomp/0.1.0/message.html
  - - meta
    - name: og:image
      content: /bindings/stomp/0.1.0/message.png
  - - meta
    - name: twitter:title
      content: STOMP Message Binding v0.1.0 - Message Formatting
  - - meta
    - name: twitter:description
      content: Configure STOMP message bindings for message representation and formatting. Define text-based message structure with AsyncAPI examples and best practices.
  - - meta
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/stomp/0.1.0/message.html
---

# STOMP Message Binding v0.1.0

The STOMP message binding defines how AsyncAPI messages are represented and formatted within the STOMP protocol. This binding configures the message structure, headers, and body format used for communication over STOMP connections.

## Overview

STOMP message bindings configure how messages are structured and transmitted over the STOMP protocol. STOMP uses a frame-based format with headers and body, supporting various content types and message patterns for text-oriented messaging.

## Message Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`) |

## Property Details

### Binding Version

Specifies the version of the STOMP message binding being used.

**Default:** `0.1.0`

**Note:** This is the only property currently defined in the STOMP message binding schema. The binding is designed to be minimal and focused on the core STOMP protocol capabilities.

## STOMP Message Concepts

### STOMP Frame Structure

STOMP messages are transmitted as frames with this structure:

```
COMMAND
header1:value1
header2:value2

BODY
```

### Message Components

STOMP messages consist of:

- **Command**: The STOMP frame type (SEND, MESSAGE, etc.)
- **Headers**: Key-value pairs providing metadata
- **Body**: The actual message content (optional)

### Content Types

STOMP supports various content types:

- **JSON**: Structured data exchange
- **XML**: Document-based messaging
- **Plain Text**: Simple text messages
- **Binary**: Raw binary data (base64 encoded)

### Message Headers

Common STOMP message headers include:

- **destination**: Target destination for the message
- **content-type**: MIME type of message body
- **content-length**: Size of message body
- **message-id**: Unique message identifier
- **subscription**: Subscription identifier
- **ack**: Acknowledgment mode

## Examples

### Basic Message Configuration

```yaml
messages:
  newsMessage:
    bindings:
      stomp:
        bindingVersion: '0.1.0'
    payload:
      type: object
      properties:
        headline:
          type: string
        content:
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
      stomp:
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

### XML Message Format

```yaml
messages:
  orderMessage:
    bindings:
      stomp:
        bindingVersion: '0.1.0'
    payload:
      type: string
      contentMediaType: application/xml
      description: XML order data
```

### Text Message Format

```yaml
messages:
  notificationMessage:
    bindings:
      stomp:
        bindingVersion: '0.1.0'
    payload:
      type: string
      description: Plain text notification
```

### Binary Message Format

```yaml
messages:
  fileMessage:
    bindings:
      stomp:
        bindingVersion: '0.1.0'
    payload:
      type: string
      format: binary
      description: Binary file data
```

### Event-Based Message Structure

```yaml
messages:
  systemEvent:
    bindings:
      stomp:
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
      stomp:
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

### Chat Application Messages

```yaml
messages:
  chatMessage:
    bindings:
      stomp:
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

### Financial Trading Messages

```yaml
messages:
  tradeOrder:
    bindings:
      stomp:
        bindingVersion: '0.1.0'
    payload:
      type: object
      properties:
        orderId:
          type: string
        symbol:
          type: string
        side:
          type: string
          enum: ['buy', 'sell']
        quantity:
          type: number
        price:
          type: number
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
          stomp:
            bindingVersion: '0.1.0'
    subscribe:
      message:
        $ref: '#/components/messages/NewsMessage'
        bindings:
          stomp:
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
          stomp:
            bindingVersion: '0.1.0'
    subscribe:
      message:
        $ref: '#/components/messages/DashboardUpdate'
        bindings:
          stomp:
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
          stomp:
            bindingVersion: '0.1.0'
    subscribe:
      message:
        $ref: '#/components/messages/DeviceCommand'
        bindings:
          stomp:
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
          stomp:
            bindingVersion: '0.1.0'
    subscribe:
      message:
        $ref: '#/components/messages/MarketData'
        bindings:
          stomp:
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
- Use XML for document-based messaging
- Use plain text for simple notifications
- Use binary format for file transfers

### Message Headers
- Include appropriate content-type headers
- Use meaningful message IDs for tracking
- Set proper content-length headers
- Include destination headers when needed

### Performance Optimization
- Minimize message payload size
- Use appropriate content types for data
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

## STOMP Frame Examples

### SEND Frame with JSON
```
SEND
destination:/topic/news
content-type:application/json
content-length:123

{"headline":"Breaking News","content":"Important update...","timestamp":"2023-01-01T12:00:00Z"}
```

### MESSAGE Frame with XML
```
MESSAGE
destination:/topic/orders
content-type:application/xml
message-id:msg-123
subscription:order-sub
content-length:89

<order><id>12345</id><items><item>product1</item></items></order>
```

### SEND Frame with Text
```
SEND
destination:/topic/notifications
content-type:text/plain
content-length:45

System maintenance scheduled for tonight
```

## Changelog

### Version 0.1.0
- Initial release with basic STOMP message binding support
- Support for message representation in STOMP protocol
- Minimal configuration focused on core STOMP capabilities
- Schema validation for binding version