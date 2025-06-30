---
title: HTTP Operation Binding v0.3.0 - Method & Query Configuration
description: This document details the v0.3.0 of the HTTP operation binding. Learn to configure the HTTP method (GET, POST, etc.) and the schema for URL query parameters.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: HTTP operation binding, AsyncAPI, HTTP method, query parameters, GET, POST, request, API
  - - meta
    - property: og:title
      content: HTTP Operation Binding v0.3.0 - Method & Query Configuration
  - - meta
    - property: og:description
      content: This document details the v0.3.0 of the HTTP operation binding. Learn to configure the HTTP method (GET, POST, etc.) and the schema for URL query parameters.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/http/0.3.0/operation.html
  - - meta
    - name: og:image
      content: /bindings/http/0.3.0/operation.png
  - - meta
    - name: twitter:title
      content: HTTP Operation Binding v0.3.0 - Method & Query Configuration
  - - meta
    - name: twitter:description
      content: This document details the v0.3.0 of the HTTP operation binding. Learn to configure the HTTP method (GET, POST, etc.) and the schema for URL query parameters.
---

# HTTP Operation Binding v0.3.0

The HTTP operation binding is used to define the details of an HTTP request, specifically its method and any query parameters.

## Overview

This binding applies to an AsyncAPI operation to specify how it maps to an HTTP request. It's essential for describing both outgoing webhooks (`publish` operations) and incoming API calls (`subscribe` operations).

## Operation Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.3.0`). |
| `method` | string | **Yes** | The HTTP request method (e.g., `GET`, `POST`). |
| `query` | [Schema Object](https://www.asyncapi.com/docs/specifications/v2.6.0#schemaObject) | No | A schema defining the URL query parameters. |

## Property Details

### `method`

This specifies the HTTP method for the request. The value must be one of the standard HTTP methods: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, `OPTIONS`, `CONNECT`, or `TRACE`.

### `query`

This is a Schema Object that defines the structure of the URL query string. The schema must be of `type: object`, and its `properties` represent the individual query parameters. You can specify types, required parameters, and other constraints just like any other JSON Schema object.

## Examples

### Webhook (POST Request)

This operation describes sending a webhook notification. The method is `POST`, and there are no query parameters. The message payload will be sent as the request body.

```yaml
operations:
  sendUserSignupWebhook:
    action: send
    channel:
      $ref: '#/channels/userSignupWebhook'
    bindings:
      http:
        bindingVersion: '0.3.0'
        method: 'POST'
```

### API Call (GET with Query Parameters)

This operation describes an API call to fetch a list of users. The method is `GET`, and it includes a `query` schema that defines optional query parameters for filtering by company and page number.

```yaml
operations:
  listUsers:
    action: receive
    channel:
      $ref: '#/channels/users'
    bindings:
      http:
        bindingVersion: '0.3.0'
        method: 'GET'
        query:
          type: object
          properties:
            companyId:
              type: string
              description: Filter users by company ID.
            page:
              type: integer
              minimum: 1
              description: The page number to retrieve.
```

## Changelog

### Version 0.3.0
- No changes from `v0.2.0`.

### Version 0.2.0
- Renamed `type` property to `method` for clarity.

### Version 0.1.0
- Initial release with `type` and `query` properties.