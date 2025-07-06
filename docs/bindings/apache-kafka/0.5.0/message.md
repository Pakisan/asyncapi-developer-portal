---
title: Apache Kafka Message Binding v0.5.0 - Schema Registry & Keys
description: Define Apache Kafka message bindings v0.5.0 for AsyncAPI. Configure message keys, schema registry integration, and schema evolution for robust event streaming.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Apache Kafka message binding, AsyncAPI, message key, schema registry, schema evolution, event streaming, data validation
  - - meta
    - property: og:title
      content: Apache Kafka Message Binding v0.5.0 - Schema Registry & Keys
  - - meta
    - property: og:description
      content: Define Apache Kafka message bindings v0.5.0 for AsyncAPI. Configure message keys, schema registry integration, and schema evolution for robust event streaming.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/apache-kafka/0.5.0/message.html
  - - meta
    - name: og:image
      content: /bindings/apache-kafka/0.5.0/message.png
  - - meta
    - name: twitter:title
      content: Apache Kafka Message Binding v0.5.0 - Schema Registry & Keys
  - - meta
    - name: twitter:description
      content: Define Apache Kafka message bindings v0.5.0 for AsyncAPI. Configure message keys, schema registry integration, and schema evolution for robust event streaming.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/apache-kafka/0.5.0/message.html
---

# Apache Kafka Message Binding v0.5.0

The Apache Kafka message binding object specifies Kafka-specific information for an AsyncAPI message. This binding allows you to define the message key and configure integration with a Schema Registry for schema validation and evolution.

## Overview

The Kafka message binding is crucial for ensuring that messages are correctly partitioned and that their schemas are managed effectively. By defining a message key, you can control how messages are distributed across partitions. Integration with a Schema Registry helps maintain data consistency and compatibility between producers and consumers.

## Message Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `key` | Schema Object \| Reference Object | No | The message key, which is used for partitioning. Can be a schema object or a reference to one. |
| `schemaIdLocation` | string | No | The location of the schema ID in the message when using a Schema Registry. Can be `header` or `payload`. |
| `schemaIdPayloadEncoding` | string | No | The encoding of the schema ID when it is located in the payload. This can be a vendor-specific value (e.g., `apicurio-legacy`, `apicurio-new`) or the number of bytes used for encoding. |
| `schemaLookupStrategy` | string | No | The naming strategy for looking up schemas in the Schema Registry. |
| `bindingVersion` | string | No | The version of the Kafka message binding. Defaults to `latest`. |

## Examples

### Simple Message Key

This example defines a simple message key using a schema object.

```yaml
messages:
  user-created:
    bindings:
      kafka:
        key:
          type: string
          format: uuid
        bindingVersion: '0.5.0'
```

### Referencing a Reusable Schema for the Key

This example shows how to reference a reusable schema for the message key.

```yaml
messages:
  order-event:
    bindings:
      kafka:
        key:
          $ref: '#/components/schemas/orderId'
        bindingVersion: '0.5.0'

components:
  schemas:
    orderId:
      type: string
      description: The unique identifier for an order.
```

### Schema Registry Integration (Confluent)

This example demonstrates how to configure the message binding for use with Confluent Schema Registry.

```yaml
messages:
  product-update:
    bindings:
      kafka:
        key:
          type: string
        schemaIdLocation: 'payload'
        schemaIdPayloadEncoding: '4' # Confluent uses 4 bytes for the schema ID
        schemaLookupStrategy: 'io.confluent.kafka.serializers.subject.TopicRecordNameStrategy'
        bindingVersion: '0.5.0'
```

### Schema Registry Integration (Apicurio)

This example shows how to configure the message binding for use with Apicurio Registry.

```yaml
messages:
  inventory-update:
    bindings:
      kafka:
        key:
          type: string
        schemaIdLocation: 'header'
        schemaLookupStrategy: 'io.apicurio.registry.serde.strategy.TopicIdStrategy'
        bindingVersion: '0.5.0'
```

## Use Cases

### Guaranteed Message Ordering for an Entity

By using a consistent key for all messages related to a specific entity (e.g., a user ID or order ID), you can ensure that they are always sent to the same partition, preserving their order.

```yaml
messages:
  user-activity:
    bindings:
      kafka:
        key:
          type: string
          description: The user's unique identifier.
        bindingVersion: '0.5.0'
```

### Enforcing Data Contracts with Schema Registry

Integrate with a Schema Registry to validate that all messages produced to a topic adhere to a predefined schema, preventing data quality issues.

```yaml
messages:
  payment-transaction:
    bindings:
      kafka:
        key:
          type: string
          format: uuid
        schemaIdLocation: 'payload'
        bindingVersion: '0.5.0'
```