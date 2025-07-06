---
title: HTTP Channel Binding v0.3.0 - Placeholder
description: HTTP channel binding v0.3.0 placeholder for HTTP endpoints. Identifies AsyncAPI channels as HTTP endpoints for webhooks and APIs.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: HTTP channel binding v0.3.0, AsyncAPI, placeholder, webhooks, API endpoint, HTTP
  - - meta
    - property: og:title
      content: HTTP Channel Binding v0.3.0 - Placeholder
  - - meta
    - property: og:description
      content: HTTP channel binding v0.3.0 placeholder for HTTP endpoints. Identifies AsyncAPI channels as HTTP endpoints for webhooks and APIs.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/http/0.3.0/channel.html
  - - meta
    - name: og:image
      content: /bindings/http/0.3.0/channel.png
  - - meta
    - name: twitter:title
      content: HTTP Channel Binding v0.3.0 - Placeholder
  - - meta
    - name: twitter:description
      content: HTTP channel binding v0.3.0 placeholder for HTTP endpoints. Identifies AsyncAPI channels as HTTP endpoints for webhooks and APIs.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/http/0.3.0/channel.html
---

# HTTP Channel Binding v0.3.0

The HTTP channel binding specifies that an AsyncAPI channel corresponds to an HTTP endpoint.

## Overview

As of `v0.3.0`, this binding is a placeholder and has no configurable properties. Its presence on a channel indicates that the channel's address represents a URL path, potentially with path parameters.

The detailed configuration for the HTTP interaction, such as the method, query parameters, and headers, is defined in the [Operation Binding](./operation.md) and [Message Binding](./message.md).

## Channel Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.3.0`). |

## Example

This example identifies the channel `/users/{userId}` as an HTTP endpoint.

```yaml
channels:
  userChannel:
    address: '/users/{userId}'
    parameters:
      userId:
        schema:
          type: string
    bindings:
      http:
        bindingVersion: '0.3.0'
```

## Changelog

### Version 0.3.0
- The binding remains a placeholder.