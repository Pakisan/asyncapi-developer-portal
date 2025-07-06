---
title: HTTP Message Binding v0.3.0 - Headers & Status Code Configuration
description: Configure HTTP message bindings for headers and status codes. Define response headers and expected status codes for webhooks and API responses.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: HTTP message binding v0.3.0, AsyncAPI, HTTP headers, status code, response, API, webhooks
  - - meta
    - property: og:title
      content: HTTP Message Binding v0.3.0 - Headers & Status Code Configuration
  - - meta
    - property: og:description
      content: Configure HTTP message bindings for headers and status codes. Define response headers and expected status codes for webhooks and API responses.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/http/0.3.0/message.html
  - - meta
    - name: og:image
      content: /bindings/http/0.3.0/message.png
  - - meta
    - name: twitter:title
      content: HTTP Message Binding v0.3.0 - Headers & Status Code Configuration
  - - meta
    - name: twitter:description
      content: Configure HTTP message bindings for headers and status codes. Define response headers and expected status codes for webhooks and API responses.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/http/0.3.0/message.html
---

# HTTP Message Binding v0.3.0

The HTTP message binding is used to define the details of an HTTP message, including its headers and, for responses, the expected status code.

## Overview

This binding applies to an AsyncAPI message object. It can be used to describe the headers of an outgoing webhook request or the headers and status code of an HTTP response in a request/reply pattern.

## Message Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.3.0`). |
| `headers` | [Schema Object](https://asyncapi.pavelon.dev/schemas/schema.json) | No | A schema defining the HTTP headers. |
| `statusCode` | number | No | The HTTP status code. Only relevant for response messages. |

## Property Details

### `headers`

This is a Schema Object that defines the structure of the HTTP headers. The schema must be of `type: object`, and its `properties` represent the individual headers. You can specify types, required headers, and other constraints.

### `statusCode`

This defines the HTTP response status code (e.g., `200`, `201`, `404`). This property is **only** relevant for messages that are part of an `operation.reply`. For any other message, this value is ignored. It allows you to document the expected outcome of a successful request.

## Examples

### Webhook Message with Headers

This describes the message for a webhook. It specifies that the `Content-Type` header is required.

```yaml
messages:
  userSignupEvent:
    payload:
      # ... payload definition
    bindings:
      http:
        bindingVersion: '0.3.0'
        headers:
          type: object
          required:
            - 'Content-Type'
          properties:
            Content-Type:
              type: string
              enum: ['application/json']
```

### API Response Message

This describes the successful response for an API call. It specifies a `200` OK status code and includes a schema for the response headers, such as a rate-limiting header.

```yaml
messages:
  userResponse:
    payload:
      # ... response payload definition
    bindings:
      http:
        bindingVersion: '0.3.0'
        statusCode: 200
        headers:
          type: object
          properties:
            X-Rate-Limit-Remaining:
              type: integer
```

## Changelog

### Version 0.3.0
- Added the `statusCode` property to define response codes.

### Version 0.2.0 and older
- Only included the `headers` property.