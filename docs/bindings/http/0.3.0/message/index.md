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

<Json url="https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/bindings/http/0.3.0/message.json"/>

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
    "bindingVersion": "0.3.0"
}
```

## Migration guide

Good news, new property was added

### statusCode

```json
{
    "headers": {
        "$ref": "http://asyncapi.com/definitions/3.0.0/schema.json",
        "description": "\tA Schema object containing the definitions for HTTP-specific headers. This schema MUST be of type 'object' and have a 'properties' key."
    },
    "statusCode": { // [!code ++]
        "type": "number", // [!code ++]
        "description": "The HTTP response status code according to [RFC 9110](https://httpwg.org/specs/rfc9110.html#overview.of.status.codes). `statusCode` is only relevant for messages referenced by the [Operation Reply Object](https://www.asyncapi.com/docs/reference/specification/v3.0.0#operationReplyObject), as it defines the status code for the response. In all other cases, this value can be safely ignored." // [!code ++]
    }, // [!code ++]
    "bindingVersion": {
        "type": "string",
        "enum": [
            "0.3.0"
        ],
        "description": "The version of this binding. If omitted, \"latest\" MUST be assumed."
    }
}
```