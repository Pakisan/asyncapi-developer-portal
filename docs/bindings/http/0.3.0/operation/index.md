---
title: HTTP operation binding
layout: doc
prev: false
next: false
head:
  - - meta
    - name: "og:title"
      content: "HTTP operation binding"
  - - meta
    - name: "og:description"
      content: "How to use HTTP with AsyncAPI operation binding"
  - - meta
    - name: "og:image"
      content: "/bindings/http.png"
---

# {{ $frontmatter.title }}

Contains information about the operation representation in HTTP.

## Structure

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/http/0.2.0/operation.json"/>

## Examples

### Get

```json
{
      "method": "GET", // [!code focus]
      "query": {
        "type": "object",
        "required": [
          "companyId"
        ],
        "properties": {
          "companyId": {
            "type": "number",
            "minimum": 1,
            "description": "The Id of the company."
          }
        },
        "additionalProperties": false
      },
      "bindingVersion": "0.3.0"
}
```

### Post

```json
{
    "method": "POST", // [!code focus]
    "query": {
        "type": "object",
        "required": [
            "companyId"
        ],
        "properties": {
            "companyId": {
                "type": "number",
                "minimum": 1,
                "description": "The Id of the company."
            }
        },
        "additionalProperties": false
    },
    "bindingVersion": "0.3.0"
}
```

## Changelog

Good news, nothing was deprecated or changed