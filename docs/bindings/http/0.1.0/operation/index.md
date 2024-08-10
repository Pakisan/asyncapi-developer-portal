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

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/http/0.1.0/operation.json"/>

## Examples

### Request

```json
{
      "type": "request", // [!code focus]
      "method": "GET",
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
      "bindingVersion": "0.1.0"
}
```

### Response

```json
{
    "type": "response", // [!code focus]
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
    "bindingVersion": "0.1.0"
}
```

## Migration guide

Good news, nothing was deprecated or changed