---
title: HTTP message binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "HTTP message binding"
  - - meta
    - name: "og:description"
      content: "How to use HTTP with AsyncAPI message binding"
  - - meta
    - name: "og:image"
      content: "/bindings/http.png"
---

# {{ $frontmatter.title }}

Contains information about the message representation in HTTP.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/http/0.1.0/message.json"/>

## Examples

```json
{
    "headers": {
        "type": "object",
        "properties": {
            "Content-Type": {
                "type": "string",
                "enum": [
                    "application/json"
                ]
            }
        }
    },
    "bindingVersion": "0.1.0"
}
```

## Changelog

Good news, nothing was changed