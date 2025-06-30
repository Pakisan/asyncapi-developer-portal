---
title: HTTP Server Binding v0.3.0 - Placeholder
description: This document details the v0.3.0 of the HTTP server binding. This version is a placeholder that identifies an AsyncAPI server as an HTTP server.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: HTTP server binding, AsyncAPI, placeholder, webhooks, API
  - - meta
    - property: og:title
      content: HTTP Server Binding v0.3.0 - Placeholder
  - - meta
    - property: og:description
      content: This document details the v0.3.0 of the HTTP server binding. This version is a placeholder that identifies an AsyncAPI server as an HTTP server.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/http/0.3.0/server.html
  - - meta
    - name: og:image
      content: /bindings/http/0.3.0/server.png
  - - meta
    - name: twitter:title
      content: HTTP Server Binding v0.3.0 - Placeholder
  - - meta
    - name: twitter:description
      content: This document details the v0.3.0 of the HTTP server binding. This version is a placeholder that identifies an AsyncAPI server as an HTTP server.
---

# HTTP Server Binding v0.3.0

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