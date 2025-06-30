---
title: HTTP Message Binding v0.2.0 - Headers Configuration
description: This document details the legacy v0.2.0 of the HTTP message binding. Learn to configure the schema for HTTP headers. For status codes, please upgrade to the latest version.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: HTTP message binding, legacy, AsyncAPI, HTTP headers, API, webhooks
  - - meta
    - property: og:title
      content: HTTP Message Binding v0.2.0 - Headers Configuration
  - - meta
    - property: og:description
      content: This document details the legacy v0.2.0 of the HTTP message binding. Learn to configure the schema for HTTP headers. For status codes, please upgrade to the latest version.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/http/0.2.0/message.html
  - - meta
    - name: og:image
      content: /bindings/http/0.2.0/message.png
  - - meta
    - name: twitter:title
      content: HTTP Message Binding v0.2.0 - Headers Configuration
  - - meta
    - name: twitter:description
      content: This document details the legacy v0.2.0 of the HTTP message binding. Learn to configure the schema for HTTP headers. For status codes, please upgrade to the latest version.
---

# HTTP Message Binding v0.2.0

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