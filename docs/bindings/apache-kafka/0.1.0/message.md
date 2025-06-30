---
title: Apache Kafka Message Binding v0.1.0 - Message Key Configuration
description: A guide to the Apache Kafka Message Binding v0.1.0 for AsyncAPI. Learn how to define a message key to control partitioning in your Kafka-based event-driven applications.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Apache Kafka, AsyncAPI, message binding, Kafka message key, partitioning, event-driven architecture
  - - meta
    - property: og:title
      content: Apache Kafka Message Binding v0.1.0 - Message Key Configuration
  - - meta
    - property: og:description
      content: A guide to the Apache Kafka Message Binding v0.1.0 for AsyncAPI. Learn how to define a message key to control partitioning in your Kafka-based event-driven applications.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/apache-kafka/0.1.0/message.html
  - - meta
    - name: og:image
      content: /bindings/apache-kafka/0.1.0/message.png
  - - meta
    - name: twitter:title
      content: Apache Kafka Message Binding v0.1.0 - Message Key Configuration
  - - meta
    - name: twitter:description
      content: A guide to the Apache Kafka Message Binding v0.1.0 for AsyncAPI. Learn how to define a message key to control partitioning in your Kafka-based event-driven applications.
---

# Apache Kafka Message Binding v0.1.0

The Apache Kafka message binding object, version `0.1.0`, specifies Kafka-specific information for an AsyncAPI message, focusing on the message key.

## Overview

This version of the Kafka message binding allows you to define a key for a message. In Kafka, the message key is used to determine the partition to which the message will be sent. Messages with the same key are guaranteed to be sent to the same partition, which is essential for maintaining order for a specific entity.

## Message Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `key` | Schema Object | No | The message key, which is used for partitioning. It should be defined as a schema object. |
| `bindingVersion` | string | No | The version of the Kafka message binding. For this version, the value is `0.1.0`. |

## Example

### Defining a Message Key

This example defines a message with a `key` that is a UUID.

```yaml
messages:
  user-update:
    bindings:
      kafka:
        key:
          type: string
          format: uuid
        bindingVersion: '0.1.0'
```

## Use Cases

### Guaranteed Message Ordering

To ensure that all updates for a specific user are processed in order, you can use the user's ID as the message key. This guarantees that all messages for that user will land in the same partition and be consumed in the order they were produced.

```yaml
messages:
  user-profile-update:
    bindings:
      kafka:
        key:
          type: string
          description: "The user's unique ID."
        bindingVersion: '0.1.0'
```