---
title: Amazon SQS Bindings - Complete Guide
description: Your complete guide to AsyncAPI Amazon SQS bindings. Learn to configure channels, operations, messages, and servers for AWS SQS with detailed examples and best practices for standard and FIFO queues.
layout: doc
head:
  - - meta
    - name: keywords
      content: Amazon SQS, AWS, AsyncAPI, message queuing, event-driven architecture, message broker, channel binding, operation binding, message binding, server binding, FIFO queues, standard queues
  - - meta
    - property: og:title
      content: Amazon SQS Bindings - Complete Guide
  - - meta
    - property: og:description
      content: Your complete guide to AsyncAPI Amazon SQS bindings. Learn to configure channels, operations, messages, and servers for AWS SQS with detailed examples and best practices for standard and FIFO queues.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/amazon-sqs/
  - - meta
    - name: twitter:title
      content: Amazon SQS Bindings - Complete Guide
  - - meta
    - name: twitter:description
      content: Your complete guide to AsyncAPI Amazon SQS bindings. Learn to configure channels, operations, messages, and servers for AWS SQS with detailed examples and best practices for standard and FIFO queues.
---

# Amazon SQS Bindings

Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. AsyncAPI provides bindings for SQS to define how your event-driven APIs interact with SQS queues.

## What is Amazon SQS?

SQS offers two types of message queues:

- **Standard Queues**: Offer maximum throughput, best-effort ordering, and at-least-once delivery.
- **FIFO (First-In-First-Out) Queues**: Designed to guarantee that messages are processed exactly once, in the exact order that they are sent.

## AsyncAPI SQS Bindings Overview

AsyncAPI SQS bindings map your API specification to SQS concepts:

### Binding Types

| Binding Type | Purpose | Description |
|--------------|---------|-------------|
| **Channel Binding** | Define SQS queue properties | Specifies queue type (standard or FIFO), visibility timeouts, and other queue-level settings. |
| **Operation Binding** | Configure message producers and consumers | Defines how to interact with a specific queue, including policies. |
| **Message Binding** | Message-level configurations | Defines message attributes like delay and deduplication identifiers. |
| **Server Binding** | Server-level configurations | Reserved for future server-specific SQS configurations. |

### Supported Versions

| Version | Status | Key Features |
|---------|--------|--------------|
| **0.3.0** | Latest | Full feature set, including tag support. |
| **0.2.0** | Stable | Adds support for message-level identifiers. |
| **0.1.0** | Legacy | Basic support for queue configuration. |

## Key SQS Concepts

### Queues
The fundamental resource in SQS. A queue stores messages until they are processed and deleted.

### Message Attributes
SQS lets you include structured metadata (such as timestamps, geospatial data, signatures, and identifiers) with messages. Message attributes are optional and separate from, but sent along with, the message body.

### Dead-Letter Queues (DLQs)
A queue that other (source) queues can target for messages that can't be processed (consumed) successfully. DLQs are useful for debugging your application or messaging system because they let you isolate unconsumed messages to determine why their processing failed.

## Getting Started

### Basic Channel Configuration (FIFO)

```yaml
channels:
  userSignup:
    bindings:
      sqs:
        queue:
          name: user-signup.fifo
          fifo: true
          visibilityTimeout: 60
        bindingVersion: '0.2.0'
```

### Basic Operation Configuration

```yaml
operations:
  sendWelcomeEmail:
    bindings:
      sqs:
        queue:
          policy:
            statements:
              - effect: Allow
                principal: 'arn:aws:iam::123456789012:user/some-user'
                action: 'sqs:SendMessage'
        bindingVersion: '0.2.0'
```

## Binding Documentation

### Channel Bindings
- [SQS Channel Binding v0.2.0](./0.2.0/channel.md)
- [SQS Channel Binding v0.1.0](./0.1.0/channel.md)

### Operation Bindings
- [SQS Operation Binding v0.2.0](./0.2.0/operation.md)
- [SQS Operation Binding v0.1.0](./0.1.0/operation.md)

### Message Bindings
- [SQS Message Binding v0.2.0](./0.2.0/message.md)
- [SQS Message Binding v0.1.0](./0.1.0/message.md)

### Server Bindings
- [SQS Server Binding v0.1.0](./0.1.0/server.md)