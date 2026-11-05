---
title: AsyncAPI Protocol Bindings – Supported Message Broker Integrations
description: Explore AsyncAPI protocol bindings for Kafka, AMQP, MQTT, SQS, SNS, and more. Learn to define channel, operation, message, and server bindings for event-driven APIs.
ogImage: /bindings/bindings.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: AsyncAPI protocol bindings, message broker integrations, Kafka binding, AMQP binding, MQTT binding, SQS binding, SNS binding, event-driven API, channel binding, operation binding, message binding, server binding
heading: "AsyncAPI Protocol Bindings"
---

:::tip[Need the JSON Schemas?]
Every binding is also published as a JSON Schema in the [registry](https://schemas.asyncapi.pavelon.dev/draft-07/bindings/), for validation and autocompletion. See [how to use it](/schemas/registry.html).
:::

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

- [AMQP](/bindings/amqp/)
- [AMQP 1.0](/bindings/amqp1/)
- [Anypoint MQ](/bindings/anypointmq/)
- [Apache Kafka](/bindings/apache-kafka/)
- [Apache Pulsar](/bindings/apache-pulsar/)
- [Amazon SNS](/bindings/amazon-sns/)
- [Amazon SQS](/bindings/amazon-sqs/)
- [Google Cloud Pub/Sub](/bindings/googlepubsub/)
- [HTTP](/bindings/http/)
- [IBM MQ](/bindings/ibmmq/)
- [JMS](/bindings/jms/)
- [Mercure](/bindings/mercure/)
- [MQTT](/bindings/mqtt/)
- [MQTT 5](/bindings/mqtt5/)
- [NATS](/bindings/nats/)
- [Redis](/bindings/redis/)
- [Solace](/bindings/solace/)
- [STOMP](/bindings/stomp/)
- [WebSockets](/bindings/websockets/)