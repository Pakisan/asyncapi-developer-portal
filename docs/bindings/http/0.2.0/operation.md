---
title: HTTP Operation Binding v0.2.0 - Method & Query Configuration
description: Configure HTTP operation bindings v0.2.0 for method and query parameters. Define GET, POST, and other HTTP methods with query schemas for webhooks and APIs.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: HTTP operation binding v0.2.0, AsyncAPI, HTTP method, query parameters, GET, POST, request, API, webhooks
  - - meta
    - property: og:title
      content: HTTP Operation Binding v0.2.0 - Method & Query Configuration
  - - meta
    - property: og:description
      content: Configure HTTP operation bindings v0.2.0 for method and query parameters. Define GET, POST, and other HTTP methods with query schemas for webhooks and APIs.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/http/0.2.0/operation.html
  - - meta
    - name: og:image
      content: /bindings/http/0.2.0/operation.png
  - - meta
    - name: twitter:title
      content: HTTP Operation Binding v0.2.0 - Method & Query Configuration
  - - meta
    - name: twitter:description
      content: Configure HTTP operation bindings v0.2.0 for method and query parameters. Define GET, POST, and other HTTP methods with query schemas for webhooks and APIs.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/http/0.2.0/operation.html
---

# HTTP Operation Binding v0.2.0

The HTTP operation binding `v0.2.0` is used to define the details of an HTTP request, specifically its method and query parameters.

## Operation Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.2.0`). |
| `method` | string | **Yes** | The HTTP request method (e.g., `GET`, `POST`). |
| `query` | [Schema Object](https://asyncapi.pavelon.dev/schemas/schema.json) | No | A schema defining the URL query parameters. |

## Example

This operation describes an API call to fetch a list of users with a `GET` method and a `query` schema for filtering.

```yaml
operations:
  listUsers:
    action: receive
    channel:
      $ref: '#/channels/users'
    bindings:
      http:
        bindingVersion: '0.2.0'
        method: 'GET'
        query:
          type: object
          properties:
            companyId:
              type: string
```

## Changelog

### Version 0.2.0
- Renamed the original `type` property to `method` for better clarity compared to `v0.1.0`.