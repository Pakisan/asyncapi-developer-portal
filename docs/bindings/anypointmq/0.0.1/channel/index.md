---
title: Anypoint MQ channel binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "Anypoint MQ channel binding"
  - - meta
    - name: "og:description"
      content: "How to use Anypoint MQ with AsyncAPI channel binding"
  - - meta
    - name: "og:image"
      content: "/bindings/anypointmq.jpeg"
---

# {{ $frontmatter.title }}

Contains information about the channel representation in Anypoint MQ.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/anypointmq/0.0.1/channel.json"/>

## Examples

```json
{
    "destination":     "user-signup-exchg",
    "destinationType": "exchange",
    "bindingVersion":  "0.0.1"
}
```

## Migration guide

Good news, nothing was deprecated or changed