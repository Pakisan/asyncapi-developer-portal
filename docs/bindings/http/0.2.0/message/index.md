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

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/http/0.2.0/message.json"/>

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
    "bindingVersion": "0.2.0"
}
```

### Changed

#### headers

`headers` can't be `Reference` anymore. Only `Schema`

```json
{
    "headers": {
        "oneOf": [ // [!code --]
            { // [!code --]
                "$ref": "http://asyncapi.com/definitions/3.0.0/schema.json"
            }, // [!code --]
            { // [!code --]
                "$ref": "http://asyncapi.com/definitions/3.0.0/Reference.json" // [!code --]
            } // [!code --]
        ], // [!code --]
        "description": "\tA Schema object containing the definitions for HTTP-specific headers. This schema MUST be of type 'object' and have a 'properties' key."
    }
}
```