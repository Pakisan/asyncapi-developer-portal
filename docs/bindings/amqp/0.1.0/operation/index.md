---
title: AMQP 0-9-1 operation binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "AMQP 0-9-1 operation binding"
  - - meta
    - name: "og:description"
      content: "How to use AMQP 0-9-1 with AsyncAPI operation binding"
  - - meta
    - name: "og:image"
      content: "/bindings/amqp.png"
---

# {{ $frontmatter.title }}

Contains information about the operation representation in AMQP.

## Structure

<Json url="/bindings/amqp-operation.0.1.0.json"/>

## Examples

```json
{
  "expiration": 100000,
  "userId": "guest",
  "cc": [
    "user.logs"
  ],
  "priority": 10,
  "deliveryMode": 2,
  "mandatory": false,
  "bcc": [
    "external.audit"
  ],
  "replyTo": "user.signedup",
  "timestamp": true,
  "ack": false,
  "bindingVersion": "0.1.0"
}
```

## Changelog

Good news, nothing was changed