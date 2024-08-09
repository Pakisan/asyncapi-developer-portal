---
title: AMQP 0-9-1 message binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "AMQP 0-9-1 message binding"
  - - meta
    - name: "og:description"
      content: "How to use AMQP 0-9-1 with AsyncAPI message binding"
  - - meta
    - name: "og:image"
      content: "/bindings/amqp.png"
---

# {{ $frontmatter.title }}

Contains information about the message representation in AMQP.

## Structure

<Json url="/bindings/amqp-message.0.1.0.json"/>

## Examples

```json
{
  "contentEncoding": "gzip",
  "messageType": "user.signup",
  "bindingVersion": "0.1.0"
}
```

## Migration guide

Good news, nothing was deprecated or changed