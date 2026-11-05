---
title: Apache Kafka Channel Binding v0.1.0 - Basic Configuration
description: Learn how to use Apache Kafka channel bindings v0.1.0 for AsyncAPI. This page covers foundational Kafka channel configuration for event-driven architectures.
ogImage: /bindings/apache-kafka/0.1.0/channel.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: Apache Kafka channel binding, AsyncAPI, Kafka topic, event-driven architecture
heading: "Apache Kafka Channel Binding v0.1.0"
---

The Apache Kafka channel binding object, version `0.1.0`, is the initial version of the binding. It serves as a placeholder for defining Kafka-specific channel information within an AsyncAPI document.

## Overview

This version of the channel binding is minimal and does not contain any specific properties for topic configuration. It primarily indicates that the channel is intended to be used with Apache Kafka.

## Channel Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | The version of the Kafka channel binding. For this version, the value is `0.1.0`. |

## Example

```yaml
channels:
  user-events:
    bindings:
      kafka:
        bindingVersion: '0.1.0'
```
