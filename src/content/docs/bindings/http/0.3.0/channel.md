---
title: HTTP Channel Binding v0.3.0 - Placeholder
description: HTTP channel binding v0.3.0 placeholder for HTTP endpoints. Identifies AsyncAPI channels as HTTP endpoints for webhooks and APIs.
ogImage: /bindings/http/0.3.0/channel.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: HTTP channel binding v0.3.0, AsyncAPI, placeholder, webhooks, API endpoint, HTTP
heading: "HTTP Channel Binding v0.3.0"
---

The HTTP channel binding specifies that an AsyncAPI channel corresponds to an HTTP endpoint.

## Overview

As of `v0.3.0`, this binding is a placeholder and has no configurable properties. Its presence on a channel indicates that the channel's address represents a URL path, potentially with path parameters.

The detailed configuration for the HTTP interaction, such as the method, query parameters, and headers, is defined in the [Operation Binding](/bindings/http/0.3.0/operation.html) and [Message Binding](/bindings/http/0.3.0/message.html).

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