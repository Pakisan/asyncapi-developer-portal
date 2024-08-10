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
      "bindingVersion": "0.1.0"
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
    "bindingVersion": "0.1.0"
}
```

## Migration guide

Bad news, properties were changed

```json
{
    "type": { // [!code --]
      "type": "string", // [!code --]
      "enum": [ // [!code --]
        "request", // [!code --]
        "response" // [!code --]
      ], // [!code --]
      "description": "Required. Type of operation. Its value MUST be either 'request' or 'response'." // [!code --]
    }, // [!code --]
    "method": {
      "type": "string",
      "enum": [
        "GET",
        "PUT",
        "POST",
        "PATCH",
        "DELETE",
        "HEAD",
        "OPTIONS",
        "CONNECT",
        "TRACE"
      ],
      "description": "When 'type' is 'request', this is the HTTP method, otherwise it MUST be ignored. Its value MUST be one of 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS', 'CONNECT', and 'TRACE'."
    },
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
    },
    "bindingVersion": {
      "type": "string",
      "enum": [
        "0.2.0"
      ],
      "description": "The version of this binding. If omitted, 'latest' MUST be assumed."
    }
}
```