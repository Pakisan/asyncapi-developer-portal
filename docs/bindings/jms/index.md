---
title: JMS Bindings - Enterprise Messaging with Java
description: The complete guide to AsyncAPI JMS bindings. Learn to configure JMS destinations, messages, and connection factories for robust, enterprise-grade Java applications.
layout: doc
head:
  - - meta
    - name: keywords
      content: JMS, Java Message Service, AsyncAPI, enterprise messaging, message broker, point-to-point, publish-subscribe, queue, topic, connection factory, channel binding, operation binding, message binding, server binding
  - - meta
    - property: og:title
      content: JMS Bindings - Enterprise Messaging with Java
  - - meta
    - property: og:description
      content: The complete guide to AsyncAPI JMS bindings. Learn to configure JMS destinations, messages, and connection factories for robust, enterprise-grade Java applications.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/jms/
  - - meta
    - name: twitter:title
      content: JMS Bindings - Enterprise Messaging with Java
  - - meta
    - name: twitter:description
      content: The complete guide to AsyncAPI JMS bindings. Learn to configure JMS destinations, messages, and connection factories for robust, enterprise-grade Java applications.
  - - meta
    - name: "og:image"
      content: "/public/asyncapi.png"
---

# JMS (Java Message Service) Bindings

The Java Message Service (JMS) is a Java API that allows applications to create, send, receive, and read messages. It provides a common way for Java programs to create portable, message-based applications for the enterprise. The AsyncAPI JMS bindings allow you to describe the configuration of your JMS-based systems in a standardized way.

## JMS Protocol Overview

JMS is a specification, not an implementation. It defines a set of interfaces that message-oriented middleware (MOM) vendors implement. This allows for loose coupling between applications and the messaging system.

Key concepts include:
- **Destinations**: The objects that applications send messages to and receive messages from. JMS defines two types:
  - **Queues (Point-to-Point)**: Each message has only one consumer.
  - **Topics (Publish/Subscribe)**: Each message can have multiple subscribers.
- **ConnectionFactory**: An object that encapsulates connection configuration information, which a client uses to create a connection to a JMS provider.
- **Messages**: Composed of headers (metadata), properties (application-specific), and a body (the payload).
- **Producers & Consumers**: Clients that send messages to and receive messages from destinations.

## AsyncAPI JMS Bindings

The JMS bindings provide a way to map AsyncAPI concepts to specific JMS provider configurations.

### Binding Types

| Binding Type | Purpose | Description |
|--------------|---------|-------------|
| **Channel Binding** | Destination Configuration | Defines a channel as a JMS Queue and specifies its properties. |
| **Operation Binding** | (Placeholder) | Reserved for future JMS-specific operation properties. |
| **Message Binding** | Header & Property Configuration | Defines JMS-specific headers (like `JMSCorrelationID`) and properties for a message. |
| **Server Binding** | Connection Factory Configuration | Specifies the JMS `ConnectionFactory` class and its properties, including the `clientID`. |

### Supported Versions

| Version | Status | Key Features |
|---------|--------|--------------|
| **0.0.1** | Latest | Provides initial, comprehensive support for defining JMS destinations, messages, and connection factories. |

## Core JMS Concepts in AsyncAPI

### Destinations and Channels

An AsyncAPI `channel` maps to a JMS `Destination`. The `channel` binding allows you to specify whether the destination is a standard `queue` or a `fifo-queue` for providers that support strict ordering.

```yaml
channels:
  orderProcessingQueue:
    bindings:
      jms:
        bindingVersion: '0.0.1'
        destination: 'orders'
        destinationType: 'queue'
```

### JMS Headers

The `message` binding is crucial for defining the standard JMS headers that provide metadata for routing and tracking. This includes headers like `JMSMessageID`, `JMSCorrelationID`, and `JMSReplyTo`, which are essential for implementing patterns like request/reply.

```yaml
messages:
  orderRequest:
    bindings:
      jms:
        headers:
          type: object
          properties:
            JMSReplyTo:
              type: string
```

### Connection Factory

The `server` binding is used to configure the client's entry point to the JMS provider: the `ConnectionFactory`. You must specify the Java class for the factory and can provide additional provider-specific properties.

```yaml
servers:
  activemq:
    url: tcp://broker.example.com:61616
    protocol: jms
    bindings:
      jms:
        bindingVersion: '0.0.1'
        jmsConnectionFactory: 'org.apache.activemq.ActiveMQConnectionFactory'
        clientID: 'my-app-1'
```

## Binding Documentation

### Channel Bindings
- [JMS Channel Binding v0.0.1](./0.0.1/channel.md) - Destination (Queue) configuration.

### Operation Bindings
- [JMS Operation Binding v0.0.1](./0.0.1/operation.md) - Placeholder for future operation settings.

### Message Bindings
- [JMS Message Binding v0.0.1](./0.0.1/message.md) - JMS header and property configuration.

### Server Bindings
- [JMS Server Binding v0.0.1](./0.0.1/server.md) - ConnectionFactory configuration. 