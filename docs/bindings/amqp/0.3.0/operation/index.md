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

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/amqp/0.3.0/operation.json" />

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
  "timestamp": true,
  "ack": false,
  "bindingVersion": "0.3.0"
}
```

## Migration guide

Bad news, something was deprecated

### Removed

#### replyTo

```json
{
  "replyTo": { // [!code --]
    "type": "string", // [!code --]
    "description": "Name of the queue where the consumer should send the response." // [!code --]
  } // [!code --]
}
```