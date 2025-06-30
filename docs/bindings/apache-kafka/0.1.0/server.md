---
title: Apache Kafka Server Binding v0.1.0 - Basic Configuration
description: A guide to the Apache Kafka Server Binding v0.1.0 for AsyncAPI. This version serves as a foundational placeholder for Kafka-specific server information.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Apache Kafka, AsyncAPI, server binding, Kafka broker, event-driven architecture
  - - meta
    - property: og:title
      content: Apache Kafka Server Binding v0.1.0 - Basic Configuration
  - - meta
    - property: og:description
      content: A guide to the Apache Kafka Server Binding v0.1.0 for AsyncAPI. This version serves as a foundational placeholder for Kafka-specific server information.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/apache-kafka/0.1.0/server.html
  - - meta
    - name: og:image
      content: /bindings/apache-kafka/0.1.0/server.png
  - - meta
    - name: twitter:title
      content: Apache Kafka Server Binding v0.1.0 - Basic Configuration
  - - meta
    - name: twitter:description
      content: A guide to the Apache Kafka Server Binding v0.1.0 for AsyncAPI. This version serves as a foundational placeholder for Kafka-specific server information.
---

# Apache Kafka Server Binding v0.1.0

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

```