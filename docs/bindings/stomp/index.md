---
title: STOMP Bindings - AsyncAPI Text Messaging Protocol
description: Master AsyncAPI STOMP bindings for text-oriented messaging. Configure channels, operations, messages, and servers with comprehensive examples and best practices.
layout: doc
head:
  - - meta
    - name: keywords
      content: STOMP bindings, AsyncAPI, Simple Text Oriented Messaging Protocol, text-based messaging, message broker, pub/sub, message routing, STOMP protocol
  - - meta
    - property: og:title
      content: STOMP Bindings - AsyncAPI Text Messaging Protocol
  - - meta
    - property: og:description
      content: Master AsyncAPI STOMP bindings for text-oriented messaging. Configure channels, operations, messages, and servers with comprehensive examples and best practices.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/stomp/
  - - meta
    - name: og:image
      content: /bindings/stomp/stomp.png
  - - meta
    - name: twitter:title
      content: STOMP Bindings - AsyncAPI Text Messaging Protocol
  - - meta
    - name: twitter:description
      content: Master AsyncAPI STOMP bindings for text-oriented messaging. Configure channels, operations, messages, and servers with comprehensive examples and best practices.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/stomp/
---

# STOMP (Simple Text Oriented Messaging Protocol) Bindings

STOMP (Simple Text Oriented Messaging Protocol) is a text-based messaging protocol that provides an interoperable wire format for messaging systems. AsyncAPI provides comprehensive bindings for STOMP, allowing you to define how your event-driven APIs interact with STOMP-based message brokers and clients.

## What is STOMP?

STOMP is a simple, text-oriented protocol designed for messaging systems. It provides:

- **Text-based protocol** that's easy to read and debug
- **Interoperable messaging** across different platforms and languages
- **Simple command structure** with clear, human-readable frames
- **Flexible routing** through destinations and subscriptions
- **Reliable message delivery** with acknowledgments and transactions
- **Cross-platform compatibility** with various messaging brokers

## AsyncAPI STOMP Bindings Overview

AsyncAPI STOMP bindings define how your API specification maps to STOMP protocol concepts:

### Binding Types

| Binding Type | Purpose | Description |
|--------------|---------|-------------|
| **Channel Binding** | Define destination configurations | Specifies how channels map to STOMP destinations and routing |
| **Operation Binding** | Configure message operations | Defines how publish and subscribe operations work with STOMP |
| **Message Binding** | Message-level configurations | Defines message representation in STOMP protocol |
| **Server Binding** | Server-level configurations | Reserved for future server-specific STOMP configurations |

### Supported Versions

| Version | Status | Key Features |
|---------|--------|--------------|
| **0.1.0** | Latest | Full STOMP support with basic configuration |

## Key STOMP Concepts

### STOMP Frames

STOMP uses a frame-based protocol with these main frame types:

- **CONNECT**: Establish connection to broker
- **SEND**: Send message to destination
- **SUBSCRIBE**: Subscribe to destination
- **UNSUBSCRIBE**: Unsubscribe from destination
- **ACK/NACK**: Acknowledge or reject messages
- **BEGIN/COMMIT/ABORT**: Transaction management
- **DISCONNECT**: Close connection

### Destinations and Routing

STOMP uses destinations for message routing:

- **Topic Destinations**: Publish-subscribe messaging (e.g., `/topic/news`)
- **Queue Destinations**: Point-to-point messaging (e.g., `/queue/orders`)
- **Temporary Destinations**: Dynamic destinations for request-reply patterns
- **Wildcard Subscriptions**: Pattern-based message filtering

### Message Headers

STOMP messages include headers for metadata:

- **destination**: Target destination for the message
- **content-type**: MIME type of message body
- **content-length**: Size of message body
- **message-id**: Unique message identifier
- **subscription**: Subscription identifier
- **ack**: Acknowledgment mode

## Use Cases

STOMP bindings are ideal for:

### Enterprise Messaging
- **Application Integration**: Connecting different enterprise systems
- **Service Communication**: Inter-service messaging in microservices
- **Event Broadcasting**: System-wide event distribution
- **Workflow Orchestration**: Coordinating business processes

### Web Applications
- **Real-Time Updates**: Live data updates to web clients
- **Chat Applications**: Instant messaging and group communications
- **Live Dashboards**: Real-time monitoring and visualization
- **Collaborative Tools**: Multi-user collaboration features

### IoT and Device Communication
- **Device Management**: Remote device control and monitoring
- **Sensor Data**: Collecting and distributing sensor readings
- **Fleet Management**: Vehicle tracking and communication
- **Smart Home**: Home automation and control systems

### Financial Applications
- **Trading Systems**: Real-time market data distribution
- **Payment Processing**: Transaction notifications and updates
- **Risk Management**: Real-time risk monitoring and alerts
- **Compliance Reporting**: Regulatory reporting and monitoring

## Getting Started

### Basic Channel Configuration

```yaml
channels:
  newsUpdates:
    bindings:
      stomp:
        bindingVersion: '0.1.0'
```

### Basic Operation Configuration

```yaml
operations:
  publishNews:
    bindings:
      stomp:
        bindingVersion: '0.1.0'
```

### Basic Message Configuration

```yaml
messages:
  newsMessage:
    bindings:
      stomp:
        bindingVersion: '0.1.0'
```

### Basic Server Configuration

```yaml
servers:
  stompServer:
    url: stomp://broker.example.com:61613
    protocol: stomp
    bindings:
      stomp:
        bindingVersion: '0.1.0'
```

## STOMP vs Other Protocols

### STOMP vs AMQP
- **STOMP**: Text-based, simple, human-readable
- **AMQP**: Binary, feature-rich, high-performance

### STOMP vs MQTT
- **STOMP**: Full-featured messaging with transactions
- **MQTT**: Lightweight, IoT-focused, QoS levels

### STOMP vs JMS
- **STOMP**: Protocol-agnostic, text-based
- **JMS**: Java-specific, object-oriented

## Best Practices

### Message Design
- Use descriptive destination names
- Implement proper message acknowledgment
- Handle message ordering when required
- Use appropriate content types for messages

### Connection Management
- Implement proper connection lifecycle handling
- Use connection pooling for high-throughput applications
- Handle reconnection scenarios gracefully
- Monitor connection health and performance

### Security Considerations
- Use secure STOMP connections (STOMP over SSL/TLS)
- Implement proper authentication and authorization
- Validate all message content and headers
- Protect against common messaging vulnerabilities

### Performance Optimization
- Use appropriate acknowledgment modes
- Implement message batching when possible
- Monitor destination performance and throughput
- Optimize message payload size

### Error Handling
- Implement proper error handling for failed operations
- Use transactions for critical message operations
- Handle message delivery failures gracefully
- Log messaging operations for debugging

## STOMP Brokers and Clients

### Popular STOMP Brokers
- **Apache ActiveMQ**: Enterprise-grade messaging broker
- **RabbitMQ**: High-performance message broker with STOMP plugin
- **Apache Apollo**: Lightweight STOMP broker
- **HornetQ**: High-performance messaging from JBoss

### Client Libraries
- **JavaScript**: stompjs, @stomp/stompjs
- **Python**: stomp.py, stomp-connect
- **Java**: Spring STOMP, ActiveMQ client
- **C#**: StompNet, NMS.ActiveMQ
- **Go**: go-stomp, stomp

### Web Client Support
- **WebSocket**: STOMP over WebSocket for web browsers
- **SockJS**: Fallback transport for WebSocket
- **STOMP.js**: JavaScript STOMP client library

## Related Resources

- [STOMP Protocol Specification](https://stomp.github.io/stomp-specification-1.2.html)
- [Apache ActiveMQ Documentation](https://activemq.apache.org/stomp.html)
- [RabbitMQ STOMP Plugin](https://www.rabbitmq.com/stomp.html)
- [AsyncAPI Specification](https://www.asyncapi.com/docs/reference/specification/v3.0.0)

## Binding Documentation

### Channel Bindings
- [STOMP Channel Binding v0.1.0](./0.1.0/channel.md) - Destination and routing configuration

### Operation Bindings
- [STOMP Operation Binding v0.1.0](./0.1.0/operation.md) - Message operation configuration

### Message Bindings
- [STOMP Message Binding v0.1.0](./0.1.0/message.md) - Message representation in STOMP protocol

### Server Bindings
- [STOMP Server Binding v0.1.0](./0.1.0/server.md) - Server-level STOMP configurations