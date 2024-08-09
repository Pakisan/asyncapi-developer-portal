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

### Reply to

`replyTo` field was removed, so you can't use it anymore

```json
{
  "expiration": {
    "type": "integer",
    "minimum": 0,
    "description": "TTL (Time-To-Live) for the message. It MUST be greater than or equal to zero."
  },
  "userId": {
    "type": "string",
    "description": "Identifies the user who has sent the message."
  },
  "cc": {
    "type": "array",
    "items": {
      "type": "string"
    },
    "description": "The routing keys the message should be routed to at the time of publishing."
  },
  "priority": {
    "type": "integer",
    "description": "A priority for the message."
  },
  "deliveryMode": {
    "type": "integer",
      "enum": [
        1,
        2
      ],
      "description": "Delivery mode of the message. Its value MUST be either 1 (transient) or 2 (persistent)."
    },
  "mandatory": {
    "type": "boolean",
    "description": "Whether the message is mandatory or not."
  },
  "bcc": {
    "type": "array",
    "items": {
      "type": "string"
    },
    "description": "Like cc but consumers will not receive this information."
  },
  "replyTo": { // [!code --]
    "type": "string", // [!code --]
    "description": "Name of the queue where the consumer should send the response." // [!code --]
  }, // [!code --]
  "timestamp": {
    "type": "boolean",
    "description": "Whether the message should include a timestamp or not."
  },
  "ack": {
    "type": "boolean",
    "description": "Whether the consumer should ack the message or not."
  },
  "bindingVersion": {
    "type": "string",
    "enum": [
      "0.3.0"
    ],
    "description": "The version of this binding. If omitted, \"latest\" MUST be assumed."
  }
}
```