---
title: IBM MQ server binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "IBM MQ server binding"
  - - meta
    - name: "og:description"
      content: "How to use IBM MQ with AsyncAPI server binding"
  - - meta
    - name: "og:image"
      content: "/bindings/ibmmq.jpeg"
---

# {{ $frontmatter.title }}

Contains information about the server representation in IBM MQ.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/ibmmq/0.1.0/server.json"/>

## Examples

```json
{
    "groupId": "PRODCLSTR1",
    "cipherSpec": "ANY_TLS12_OR_HIGHER",
    "bindingVersion": "0.1.0"
}
```

## Migration guide

Good news, nothing was deprecated or changed