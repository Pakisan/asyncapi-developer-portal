---
title: Apache Kafka Server Binding v0.1.0 - Basic Configuration
description: Learn how to use Apache Kafka server bindings v0.1.0 for AsyncAPI. This page covers foundational Kafka server configuration for event-driven architectures.
ogImage: /bindings/apache-kafka/0.1.0/server.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: Apache Kafka server binding, AsyncAPI, Kafka broker, event-driven architecture
heading: "Apache Kafka Server Binding v0.1.0"
---

The Apache Kafka server binding object, version `0.1.0`, is the initial version of the binding. It serves as a placeholder for defining Kafka-specific server information within an AsyncAPI document.

## Overview

This version of the server binding is minimal and does not contain any specific properties for server configuration. It primarily indicates that the server is an Apache Kafka broker.

## Server Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | The version of the Kafka server binding. For this version, the value is `0.1.0`. |

## Example

```yaml
servers:
  production-kafka-cluster:
    bindings:
      kafka:
        bindingVersion: '0.1.0'
```
