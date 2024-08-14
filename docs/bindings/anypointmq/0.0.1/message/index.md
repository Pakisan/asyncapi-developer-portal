---
title: Anypoint MQ message binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "Anypoint MQ message binding"
  - - meta
    - name: "og:description"
      content: "How to use Anypoint MQ with AsyncAPI message binding"
  - - meta
    - name: "og:image"
      content: "/bindings/anypointmq.jpeg"
---

# {{ $frontmatter.title }}

Contains information about the message representation in Anypoint MQ.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/anypointmq/0.0.1/message.json"/>

## Examples

```json
{
    "headers": {
        "type": "object",
        "properties": {
            "messageId": {
                "type": "string"
            }
        }
    },
    "bindingVersion": "0.0.1"
}
```

## Changelog

Good news, nothing was changed