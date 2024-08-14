---
title: NATS operation binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "NATS operation binding"
  - - meta
    - name: "og:description"
      content: "How to use NATS with AsyncAPI operation binding"
  - - meta
    - name: "og:image"
      content: "/bindings/nats.png"
---

# {{ $frontmatter.title }}

Contains information about the channel representation in NATS.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/nats/0.1.0/operation.json"/>

## Examples

```json
{
    "destinationType": "queue",
    "queue": {
        "objectName": "myQueueName",
        "exclusive": true
    },
    "bindingVersion": "0.1.0"
}
```

## Changelog

Good news, nothing was changed