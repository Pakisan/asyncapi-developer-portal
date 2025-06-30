---
title: JMS Message Binding v0.0.1 - Header Configuration
description: This document details the v0.0.1 of the JMS message binding. Learn to configure standard JMS headers like JMSCorrelationID and JMSReplyTo for enterprise messaging.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: JMS message binding, AsyncAPI, JMS headers, JMSCorrelationID, JMSReplyTo, JMSMessageID, enterprise messaging, event-driven architecture
  - - meta
    - property: og:title
      content: JMS Message Binding v0.0.1 - Header Configuration
  - - meta
    - property: og:description
      content: This document details the v0.0.1 of the JMS message binding. Learn to configure standard JMS headers like JMSCorrelationID and JMSReplyTo for enterprise messaging.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/jms/0.0.1/message.html
  - - meta
    - name: og:image
      content: /bindings/jms/0.0.1/message.png
  - - meta
    - name: twitter:title
      content: JMS Message Binding v0.0.1 - Header Configuration
  - - meta
    - name: twitter:description
      content: This document details the v0.0.1 of the JMS message binding. Learn to configure standard JMS headers like JMSCorrelationID and JMSReplyTo for enterprise messaging.
---

# JMS Message Binding v0.0.1

The JMS message binding allows for defining JMS-specific protocol headers for a message.

## Overview

This binding is essential for describing the metadata that accompanies a JMS message. It provides a schema to define standard JMS headers, which are crucial for implementing common messaging patterns like request/reply, and for controlling message behavior such as persistence and priority.

## Message Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.0.1`). |
| `headers` | [Schema Object](https://www.asyncapi.com/docs/specifications/v2.6.0#schemaObject) | No | A schema object defining the JMS protocol headers. |

## JMS Headers

The `headers` property is a Schema Object that lets you define values for standard JMS headers. Here are some of the most common ones:

| Header | Description |
|---|---|
| `JMSMessageID` | A unique identifier for the message, often set by the JMS provider. |
| `JMSCorrelationID` | Used to link messages together, typically for request/reply patterns. A response message's correlation ID is often set to the request message's message ID. |
| `JMSReplyTo` | A `Destination` (queue or topic) where a reply to the message should be sent. |
| `JMSDeliveryMode` | Specifies the delivery mode: `PERSISTENT` or `NON_PERSISTENT`. |
| `JMSPriority` | The priority level of the message, from `0` (lowest) to `9` (highest). |
| `JMSExpires` | The time when the message will expire, in milliseconds since the Unix epoch. A value of `0` means it never expires. |
| `JMSTimestamp` | The time the message was sent, in milliseconds since the Unix epoch. |
| `JMSType` | An application-specific message type identifier. |

## Example

### Request/Reply Message with Headers

This example defines a `creditScoreRequest` message. It specifies that replies should be sent to the `credit-score-replies` queue and includes a schema for the required JMS headers.

```yaml
messages:
  creditScoreRequest:
    summary: A request for a user's credit score.
    correlationId:
      location: '$message.header#/JMSCorrelationID'
    bindings:
      jms:
        bindingVersion: '0.0.1'
        headers:
          type: object
          properties:
            JMSCorrelationID:
              type: string
              description: The ID of the original request.
            JMSReplyTo:
              type: string
              description: The queue where the reply should be sent.
              example: 'credit-score-replies'
            JMSPriority:
              type: integer
              default: 5
```

## Changelog

### Version 0.0.1
- Initial release of the JMS message binding.
- Added the `headers` property to allow schema definitions for standard JMS protocol headers.