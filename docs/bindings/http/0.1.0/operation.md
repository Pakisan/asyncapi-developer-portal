---
title: HTTP Operation Binding v0.1.0 - Method & Query Configuration
description: This document details the legacy v0.1.0 of the HTTP operation binding. Learn to configure the HTTP method, type, and URL query parameter schema.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: HTTP operation binding, legacy, AsyncAPI, HTTP method, query parameters, GET, POST, request, API
  - - meta
    - property: og:title
      content: HTTP Operation Binding v0.1.0 - Method & Query Configuration
  - - meta
    - property: og:description
      content: This document details the legacy v0.1.0 of the HTTP operation binding. Learn to configure the HTTP method, type, and URL query parameter schema.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/http/0.1.0/operation.html
  - - meta
    - name: og:image
      content: /bindings/http/0.1.0/operation.png
  - - meta
    - name: twitter:title
      content: HTTP Operation Binding v0.1.0 - Method & Query Configuration
  - - meta
    - name: twitter:description
      content: This document details the legacy v0.1.0 of the HTTP operation binding. Learn to configure the HTTP method, type, and URL query parameter schema.
---

# HTTP Operation Binding v0.1.0

The HTTP operation binding `v0.1.0` is used to define the details of an HTTP request, including its type, method, and query parameters.

## Operation Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`). |
| `type` | string | **Yes** | Type of operation. Must be `request` or `response`. |
| `method` | string | **Yes** (if `type` is `request`) | The HTTP request method (e.g., `GET`, `POST`). |
| `query` | [Schema Object](https://asyncapi.pavelon.dev/schemas/schema.json) | No | A schema defining the URL query parameters. |

## Example

This operation describes a `request` to fetch users via a `GET` method with a `query` schema.

```yaml
operations:
  listUsers:
    bindings:
      http:
        bindingVersion: '0.1.0'
        type: 'request'
        method: 'GET'
        query:
          type: object
          properties:
            companyId:
              type: string
```

## Changelog

### Version 0.1.0
- Initial release with `type`, `method`, and `query` properties.