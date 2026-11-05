---
title: HTTP Message Binding v0.2.0 - Headers Configuration
description: Configure HTTP message bindings v0.2.0 for headers. Define HTTP header schemas for webhooks and API responses with examples.
ogImage: /bindings/http/0.2.0/message.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: HTTP message binding v0.2.0, AsyncAPI, HTTP headers, API, webhooks, response headers
heading: "HTTP Message Binding v0.2.0"
---

The HTTP message binding `v0.2.0` is used to define the schema for the headers of an HTTP message.

## Message Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.2.0`). |
| `headers` | [Schema Object](https://asyncapi.pavelon.dev/schemas/schema.json) | No | A schema object defining the HTTP headers. |

## Example

This describes the message for a webhook, specifying that the `Content-Type` header is required.

```yaml
messages:
  userSignupEvent:
    bindings:
      http:
        bindingVersion: '0.2.0'
        headers:
          type: object
          required:
            - 'Content-Type'
          properties:
            Content-Type:
              type: string
              enum: ['application/json']
```

## Changelog

### Version 0.2.0
- This version only includes the `headers` property. The `statusCode` property was added in `v0.3.0`.