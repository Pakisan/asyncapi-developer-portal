---
title: IBM MQ message binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "IBM MQ message binding"
  - - meta
    - name: "og:description"
      content: "How to use IBM MQ with AsyncAPI message binding"
  - - meta
    - name: "og:image"
      content: "/bindings/ibmmq.jpeg"
---

# {{ $frontmatter.title }}

Contains information about the message representation in IBM MQ.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/ibmmq/0.1.0/message.json"/>

## Examples

```json
{
    "type": "jms",
    "description": "JMS stream message",
    "bindingVersion": "0.1.0"
}
```

## Migration guide

Good news, nothing was deprecated or changed