---
title: JMS Server Binding v0.0.1 - ConnectionFactory Configuration
description: Configure JMS server bindings for ConnectionFactory setup. Define clientID, connection properties, and provider-specific configurations for enterprise messaging.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: JMS server binding v0.0.1, AsyncAPI, JMS ConnectionFactory, clientID, enterprise messaging, Java
  - - meta
    - property: og:title
      content: JMS Server Binding v0.0.1 - ConnectionFactory Configuration
  - - meta
    - property: og:description
      content: Configure JMS server bindings for ConnectionFactory setup. Define clientID, connection properties, and provider-specific configurations for enterprise messaging.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/jms/0.0.1/server.html
  - - meta
    - name: og:image
      content: /bindings/jms/0.0.1/server.png
  - - meta
    - name: twitter:title
      content: JMS Server Binding v0.0.1 - ConnectionFactory Configuration
  - - meta
    - name: twitter:description
      content: Configure JMS server bindings for ConnectionFactory setup. Define clientID, connection properties, and provider-specific configurations for enterprise messaging.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/jms/0.0.1/server.html
---

# JMS Server Binding v0.0.1

The JMS server binding defines the configuration for connecting to a JMS provider, centered around the `ConnectionFactory`.

## Overview

In JMS, the `ConnectionFactory` is the entry point for a client application. It's an object that encapsulates all the necessary configuration to create a connection to the JMS provider (the message broker). This binding object allows you to specify the `ConnectionFactory` implementation class and set its properties.

## Server Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.0.1`). |
| `jmsConnectionFactory` | string | **Yes** | The fully qualified class name of the JMS `ConnectionFactory` implementation. |
| `clientID` | string | No | A unique identifier for the client connection. |
| `properties` | array | No | An array of additional key-value properties to set on the `ConnectionFactory`. |

## Property Details

### `jmsConnectionFactory`

This is the most critical property. It must contain the Java class name of the `ConnectionFactory` provided by your JMS vendor. For example, for ActiveMQ, this would be `org.apache.activemq.ActiveMQConnectionFactory`.

### `clientID`

This sets a unique identifier on the connection. It is primarily used for durable subscriptions to topics, allowing a subscriber to disconnect and later reconnect to receive messages that arrived while it was offline. For queues, its use is less common, and some providers may restrict a `clientID` to a single active connection.

### `properties`

This is an array of objects, where each object has a `name` and a `value`. This provides a generic way to configure any additional, provider-specific settings on the `ConnectionFactory` object that are not covered by the other binding properties.

## Example

### Connection to an ActiveMQ Broker

This example defines a server connection to an Apache ActiveMQ broker. It specifies the `ConnectionFactory` class and sets a `clientID`. It also includes a custom property to configure a "trust all packages" policy, which is specific to ActiveMQ.

```yaml
servers:
  activemq-prod:
    url: tcp://broker.example.com:61616
    protocol: jms
    description: Production ActiveMQ Broker
    bindings:
      jms:
        bindingVersion: '0.0.1'
        jmsConnectionFactory: 'org.apache.activemq.ActiveMQConnectionFactory'
        clientID: 'data-processor-app-1'
        properties:
          - name: 'trustAllPackages'
            value: true
```

## Changelog

### Version 0.0.1
- Initial release of the JMS server binding.
- Added `jmsConnectionFactory`, `clientID`, and `properties` to allow for detailed configuration of the JMS connection.