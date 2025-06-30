---
title: AsyncAPI Protocol Bindings - The Complete Guide
description: Your complete guide to AsyncAPI protocol bindings. Learn how to use channel, operation, message, and server bindings to define protocol-specific information for Kafka, AMQP, MQTT, SQS, and more.
layout: doc
head:
  - - meta
    - name: keywords
      content: AsyncAPI, bindings, protocol bindings, Kafka, AMQP, MQTT, SQS, SNS, WebSocket, HTTP, Solace, NATS
  - - meta
    - property: og:title
      content: AsyncAPI Protocol Bindings - The Complete Guide
  - - meta
    - property: og:description
      content: Your complete guide to AsyncAPI protocol bindings. Learn how to use channel, operation,message, and server bindings to define protocol-specific information for Kafka, AMQP, MQTT, SQS, and more.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/
  - - meta
    - name: twitter:title
      content: AsyncAPI Protocol Bindings - The Complete Guide
  - - meta
    - name: twitter:description
      content: Your complete guide to AsyncAPI protocol bindings. Learn how to use channel, operation, message, and server bindings to define protocol-specific information for Kafka, AMQP, MQTT, SQS, and more.
---

# AsyncAPI Protocol Bindings

An AsyncAPI **binding** is a mechanism that defines protocol-specific information for different components of your event-driven architecture. Bindings allow you to describe details that are not part of the core AsyncAPI specification but are essential for interacting with a specific message broker or protocol.

## Binding Types

There are four types of bindings, each targeting a different component of your AsyncAPI document.

| Binding Type | Purpose | Description |
|--------------|---------|-------------|
| **Server Binding** | Define server-specific configurations | Specifies connection details for a message broker, such as security credentials, schema registry URLs (e.g., for Kafka), or virtual hosts (e.g., for AMQP). |
| **Channel Binding** | Define channel-specific properties | Describes the configuration of a specific channel or topic, such as the topic's retention policy (Kafka), a queue's durability (AMQP), or whether a topic is FIFO (SNS). |
| **Operation Binding**| Define producer/consumer configurations | Specifies how an application interacts with a channel, such as consumer group settings (Kafka), subscription filter policies (SNS), or quality of service (QoS) levels (MQTT). |
| **Message Binding** | Define message-specific metadata | Describes protocol-level details for a message, such as a message key (Kafka), content type, or other message headers specific to the protocol. |

## Available Bindings

Here is a list of all the currently supported protocol bindings. Each link will take you to a detailed guide for that specific protocol, including all available versions and their properties.

- [AMQP](./amqp/)
- [AMQP 1.0](./amqp1/)
- [Anypoint MQ](./anypointmq/)
- [Apache Kafka](./apache-kafka/)
- [Apache Pulsar](./apache-pulsar/)
- [Amazon SNS](./amazon-sns/)
- [Amazon SQS](./amazon-sqs/)
- [Google Cloud Pub/Sub](./googlepubsub/)
- [HTTP](./http/)
- [IBM MQ](./ibmmq/)
- [JMS](./jms/)
- [Mercure](./mercure/)
- [MQTT](./mqtt/)
- [MQTT 5](./mqtt5/)
- [NATS](./nats/)
- [Redis](./redis/)
- [Solace](./solace/)
- [STOMP](./stomp/)
- [WebSockets](./websockets/)