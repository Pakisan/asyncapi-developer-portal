---
title: IBM MQ channel binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "IBM MQ channel binding"
  - - meta
    - name: "og:description"
      content: "How to use IBM MQ with AsyncAPI channel binding"
  - - meta
    - name: "og:image"
      content: "/bindings/ibmmq.jpeg"
---

# {{ $frontmatter.title }}

Contains information about the channel representation in IBM MQ.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/ibmmq/0.1.0/channel.json"/>

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

## Migration guide

Good news, nothing was deprecated or changed