---
title: Google Cloud Pub/Sub Bindings - Scalable & Reliable Eventing
description: The complete guide to AsyncAPI Google Cloud Pub/Sub bindings. Learn to configure topics, subscriptions, schemas, and message attributes for Google's global messaging service.
layout: doc
head:
  - - meta
    - name: keywords
      content: Google Cloud Pub/Sub, Google PubSub, AsyncAPI, event-driven, messaging, topic, subscription, schema, push, pull, channel binding, operation binding, message binding, server binding
  - - meta
    - property: og:title
      content: Google Cloud Pub/Sub Bindings - Scalable & Reliable Eventing
  - - meta
    - property: og:description
      content: The complete guide to AsyncAPI Google Cloud Pub/Sub bindings. Learn to configure topics, subscriptions, schemas, and message attributes for Google's global messaging service.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/googlepubsub/
  - - meta
    - name: "og:image"
      content: "/public/asyncapi.png"
---

# Google Cloud Pub/Sub Bindings

Google Cloud Pub/Sub is a fully-managed, real-time messaging service that allows you to send and receive messages between independent applications. It is designed for high-throughput, reliable, and scalable event ingestion and delivery. The AsyncAPI Google Cloud Pub/Sub bindings provide a detailed, standardized way to define your event-driven architectures built on this powerful service.

## Google Cloud Pub/Sub Overview

Pub/Sub provides a global, durable messaging backbone that is central to many event-driven systems on Google Cloud Platform (GCP).

Key concepts include:
- **Topic**: A named resource to which publishers send messages.
- **Subscription**: A named resource representing the stream of messages from a single, specific topic, to be delivered to a subscribing application.
- **Publisher**: An application that creates and sends messages to one or more topics.
- **Subscriber**: An application with a subscription to a topic, which receives messages from it. Subscribers can receive messages via **push** (Pub/Sub sends a `POST` request to a pre-configured webhook) or **pull** (the subscriber actively requests messages from the service).
- **Schema**: An optional, formal definition of the message data structure. Pub/Sub can validate that messages published to a topic conform to a pre-defined schema (Avro or Protocol Buffers).
- **Attributes**: Key-value pairs that a publisher can attach to a message, used for filtering or metadata.

## AsyncAPI Google Cloud Pub/Sub Bindings

The Pub/Sub bindings allow you to map AsyncAPI concepts to specific Pub/Sub resource configurations.

### Binding Types

| Binding Type | Purpose | Description |
|--------------|---------|-------------|
| **Channel Binding** | Topic Configuration | Defines an AsyncAPI channel as a Pub/Sub Topic, specifying properties like `messageRetentionDuration` and `schemaSettings`. |
| **Operation Binding** | (Placeholder) | Reserved for future Pub/Sub-specific operation properties. |
| **Message Binding** | Message-Level Configuration | Defines the schema for a message and allows for specifying attributes and an `orderingKey`. |
| **Server Binding** | (Placeholder) | Marks the server as a Pub/Sub endpoint. |

### Supported Versions

| Version | Status | Key Features |
|---------|--------|--------------|
| **0.2.0** | Latest | Adds `schemaSettings` to the channel binding. |
| **0.1.0** | Legacy | Initial version with basic topic and message settings. |

## Core Google Cloud Pub/Sub Concepts in AsyncAPI

### Topics and Channels

An AsyncAPI `channel` maps to a Google Cloud Pub/Sub `Topic`. The `channel` binding allows you to define topic-level settings.

```yaml
channels:
  userEvents:
    address: 'user-signed-up-topic'
    bindings:
      googlepubsub:
        bindingVersion: '0.2.0'
        messageRetentionDuration: '604800s' # 7 days
        schemaSettings:
          encoding: 'json'
          name: 'projects/my-gcp-project/schemas/UserSignedUp'
```

### Message Schemas and Ordering

The `message` binding is used to associate a message with a Pub/Sub schema and to specify an `orderingKey`. Using an `orderingKey` ensures that messages with the same key are delivered to subscribers in the order that they were received by the service.

```yaml
messages:
  userSignup:
    bindings:
      googlepubsub:
        bindingVersion: '0.2.0'
        orderingKey: 'userId'
        schema:
          name: 'projects/my-gcp-project/schemas/UserSignedUp'
```

## Binding Documentation

### Channel Bindings
- [Google Pub/Sub Channel Binding v0.2.0](./0.2.0/channel.md)

### Operation Bindings
- [Google Pub/Sub Operation Binding v0.2.0](./0.2.0/operation.md)

### Message Bindings
- [Google Pub/Sub Message Binding v0.2.0](./0.2.0/message.md)

### Server Bindings
- [Google Pub/Sub Server Binding v0.2.0](./0.2.0/server.md) 