---
title: Apache Kafka Server Binding v0.4.0 - Schema Registry Connection
description: Configure Apache Kafka server bindings v0.4.0 for AsyncAPI. Set up schema registry URL and vendor for centralized schema management in event-driven architectures.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Apache Kafka server binding, AsyncAPI, schema registry, schema management, event-driven architecture, Kafka cluster
  - - meta
    - property: og:title
      content: Apache Kafka Server Binding - Schema Registry Connection
  - - meta
    - property: og:description
      content: Configure Apache Kafka server bindings v0.4.0 for AsyncAPI. Set up schema registry URL and vendor for centralized schema management in event-driven architectures.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/apache-kafka/0.4.0/server.html
  - - meta
    - name: og:image
      content: /bindings/apache-kafka/0.4.0/server.png
  - - meta
    - name: twitter:title
      content: Apache Kafka Server Binding v0.4.0 - Schema Registry Connection
  - - meta
    - name: twitter:description
      content: Configure Apache Kafka server bindings v0.4.0 for AsyncAPI. Set up schema registry URL and vendor for centralized schema management in event-driven architectures.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/apache-kafka/0.4.0/server.html
---

# Apache Kafka Server Binding v0.4.0

The Apache Kafka server binding object provides Kafka-specific information for an AsyncAPI server, primarily for configuring the connection to a Schema Registry.

## Overview

When using a Schema Registry to manage schemas for your Kafka topics, the server binding is where you specify the necessary connection details. This allows your tools and applications to discover and interact with the Schema Registry for schema validation, evolution, and serialization/deserialization of messages.

## Server Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `schemaRegistryUrl` | string | Yes | The URL of the Schema Registry. |
| `schemaRegistryVendor` | string | No | The vendor of the Schema Registry (e.g., `confluent`, `apicurio`, `karapace`). This helps clients use the correct SerDes library. |
| `bindingVersion` | string | No | The version of the Kafka server binding. Defaults to `latest`. |

## Examples

### Confluent Schema Registry

This example shows how to configure the server binding to connect to a Confluent Schema Registry.

```yaml
servers:
  production-cluster:
    bindings:
      kafka:
        schemaRegistryUrl: 'https://schema-registry.my-company.com'
        schemaRegistryVendor: 'confluent'
        bindingVersion: '0.4.0'
```

### Apicurio Registry

This example demonstrates the configuration for connecting to an Apicurio Registry.

```yaml
servers:
  staging-cluster:
    bindings:
      kafka:
        schemaRegistryUrl: 'https://apicurio-registry.my-company.com/apis/registry/v2'
        schemaRegistryVendor: 'apicurio'
        bindingVersion: '0.4.0'
```

## Use Cases

### Centralized Schema Management

By defining the `schemaRegistryUrl`, you provide a single source of truth for where schemas are stored and managed. This is essential for maintaining data consistency across multiple microservices and applications that produce or consume data from Kafka.

### Vendor-Specific SerDes

Specifying the `schemaRegistryVendor` allows code generation tools and Kafka clients to select the appropriate library for serializing and deserializing messages, ensuring compatibility with the specific Schema Registry implementation you are using.

## Changelog

Good news, nothing was changed