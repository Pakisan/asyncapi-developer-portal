---
title: Apache Kafka server binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "Apache Kafka server binding"
  - - meta
    - name: "og:description"
      content: "How to use Apache Kafka with AsyncAPI server binding"
  - - meta
    - name: "og:image"
      content: "/bindings/apache-kafka.png"
---

# {{ $frontmatter.title }}

Contains information about the server representation in Apache Kafka.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/kafka/0.5.0/server.json"/>

## Examples

```json
{
    "schemaRegistryUrl": "https://my-schema-registry.com",
    "schemaRegistryVendor": "confluent",
    "bindingVersion": "0.5.0"
}
```

## Changelog

Good news, nothing was changed