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
      "bindingVersion": "0.2.0"
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
    "bindingVersion": "0.2.0"
}
```

## Changelog

### Removed

#### type

```json
{
    "type": { // [!code --]
      "type": "string", // [!code --]
      "enum": [ // [!code --]
        "request", // [!code --]
        "response" // [!code --]
      ], // [!code --]
      "description": "Required. Type of operation. Its value MUST be either 'request' or 'response'." // [!code --]
    } // [!code --]
}
```

### Changed

#### query

`query` can't be `Reference` anymore. Only `Schema`

```json
{
    "query": {
      "oneOf": [ // [!code --]
        { // [!code --]
          "$ref": "http://asyncapi.com/definitions/3.0.0/schema.json"
        }, // [!code --]
        { // [!code --]
          "$ref": "http://asyncapi.com/definitions/3.0.0/Reference.json" // [!code --]
        } // [!code --]
      ], // [!code --]
      "description": "A Schema object containing the definitions for each query parameter. This schema MUST be of type 'object' and have a properties key."
    }
}
```