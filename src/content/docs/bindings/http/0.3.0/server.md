---
title: HTTP Server Binding v0.3.0 - Placeholder
description: HTTP server binding v0.3.0 placeholder for HTTP servers. Identifies AsyncAPI servers as HTTP endpoints for webhooks and APIs.
ogImage: /bindings/http/0.3.0/server.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: HTTP server binding v0.3.0, AsyncAPI, placeholder, webhooks, API, HTTP server
heading: "HTTP Server Binding v0.3.0"
---

The HTTP server binding specifies that an AsyncAPI server corresponds to an HTTP server.

## Overview

As of `v0.3.0`, this binding is a placeholder and has no configurable properties. Its presence on a server object is for informational purposes, indicating that the server's `url` is the base URL for HTTP operations.

## Server Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.3.0`). |

## Example

This example identifies a server as an HTTP endpoint.

```yaml
servers:
  productionApi:
    url: 'https://api.example.com/v1'
    protocol: http
    bindings:
      http:
        bindingVersion: '0.3.0'
```

## Changelog

### Version 0.3.0
- The binding remains a placeholder.