---
title: Anypoint MQ Message Binding v0.0.1 - Header Configuration
description: A comprehensive guide to the Anypoint MQ message binding v0.0.1 in AsyncAPI. Learn to define and use message headers for advanced routing and message processing in your MuleSoft applications.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Anypoint MQ, AsyncAPI, message binding, headers, MuleSoft, message-driven, protocol headers, message properties
  - - meta
    - property: og:title
      content: Anypoint MQ Message Binding v0.0.1 - Header Configuration
  - - meta
    - property: og:description
      content: A comprehensive guide to the Anypoint MQ message binding v0.0.1 in AsyncAPI. Learn to define and use message headers for advanced routing and message processing in your MuleSoft applications.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/anypointmq/0.0.1/message.html
  - - meta
    - name: og:image
      content: /bindings/anypointmq/0.0.1/message.png
  - - meta
    - name: twitter:title
      content: Anypoint MQ Message Binding v0.0.1 - Header Configuration
  - - meta
    - name: twitter:description
      content: A comprehensive guide to the Anypoint MQ message binding v0.0.1 in AsyncAPI. Learn to define and use message headers for advanced routing and message processing in your MuleSoft applications.
---

# Anypoint MQ Message Binding v0.0.1

The Anypoint MQ message binding object allows you to define Anypoint MQ-specific information for a message, such as protocol headers.

## Overview

This binding is used to describe message-level configurations that are specific to the Anypoint MQ protocol. Its primary purpose is to define the structure of the headers that will be included with the message.

## Message Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `headers` | [Schema Object](https://asyncapi.pavelon.dev/schemas/schema.json) \| [Reference Object](https://asyncapi.pavelon.dev/schemas/reference.json) | No | A schema defining the Anypoint MQ-specific headers. This must be a schema of type `object` with a `properties` key. |
| `bindingVersion` | string | No | The version of the Anypoint MQ message binding. For this version, the value is `0.0.1`. |

## Example

This example demonstrates how to define custom headers for a message. The headers include a `correlationId` for tracking and a `priority` for message prioritization.

```yaml
messages:
  user-signup:
    payload:
      type: object
      properties:
        userId:
          type: string
        email:
          type: string
          format: email
    bindings:
      anypointmq:
        headers:
          type: object
          properties:
            correlationId:
              type: string
              description: 'A unique ID for tracking the message'
            priority:
              type: string
              enum: ['high', 'medium', 'low']
        bindingVersion: '0.0.1'
```

## Use Cases

### Message Tracking and Correlation

By defining a `correlationId` in the headers, you can trace a message as it flows through different systems and services, which is invaluable for debugging and monitoring distributed applications.

### Content-Based Routing

You can use custom headers to implement content-based routing. For example, a message broker or an intermediary service can inspect a `region` header and forward the message to the appropriate regional processing center.

```yaml
headers:
  type: object
  properties:
    region:
      type: string
      enum: ['us-east', 'us-west', 'eu-central']
```

### Message Prioritization

A `priority` header can signal to consumer applications that certain messages should be processed before others. This is useful in scenarios like handling urgent support tickets or high-priority financial transactions.

```yaml
headers:
  type: object
  properties:
    priority:
      type: string
      enum: ['high', 'medium', 'low']
```
