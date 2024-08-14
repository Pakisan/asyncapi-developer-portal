---
title: Apache Pulsar channel binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "Apache Pulsar channel binding"
  - - meta
    - name: "og:description"
      content: "How to use Apache Pulsar with AsyncAPI channel binding"
  - - meta
    - name: "og:image"
      content: "/bindings/apache-pulsar.png"
---

# {{ $frontmatter.title }}

Contains information about the channel representation in Apache Kafka.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/pulsar/0.1.0/channel.json"/>

## Examples

```json
{
    "namespace": "ns1",
    "persistence": "persistent",
    "compaction": 1000,
    "retention": {
        "time": 15,
        "size": 1000
    },
    "ttl": 360,
    "geo-replication": [
        "us-west",
        "us-east"
    ],
    "deduplication": true,
    "bindingVersion": "0.1.0"
}
```

## Changelog

Good news, nothing was changed