---
title: Jakarta Messaging API channel binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "Jakarta Messaging API channel binding"
  - - meta
    - name: "og:description"
      content: "How to use Jakarta Messaging API with AsyncAPI channel binding"
  - - meta
    - name: "og:image"
      content: "/bindings/jms.jpeg"
---

# {{ $frontmatter.title }}

Contains information about the channel representation in Jakarta Messaging API.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/jms/0.0.1/channel.json"/>

## Examples

```json
{
    "destination":     "user-signed-up",
    "destinationType": "fifo-queue",
    "bindingVersion":  "0.0.1"
}
```

## Migration guide

Good news, nothing was deprecated or changed