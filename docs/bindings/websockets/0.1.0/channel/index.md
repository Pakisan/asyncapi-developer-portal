---
title: WebSockets channel binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "WebSockets channel binding"
  - - meta
    - name: "og:description"
      content: "How to use WebSockets with AsyncAPI channel binding"
  - - meta
    - name: "og:image"
      content: "/bindings/websockets.png"
---

# {{ $frontmatter.title }}

Contains information about the channel representation in WebSockets.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/websockets/0.1.0/channel.json"/>

## Examples

```json
{
    "method": "POST",
    "bindingVersion": "0.1.0"
}
```

## Migration guide

Good news, nothing was deprecated or changed