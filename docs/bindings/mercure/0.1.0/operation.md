---
title: Mercure Operation Binding v0.1.0 - Publish Operation
description: Configure Mercure operation bindings for publish operations. Define publish behaviors for Server-Sent Events with examples and best practices.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Mercure operation binding v0.1.0, AsyncAPI, publish, Server-Sent Events, SSE, real-time updates
  - - meta
    - property: og:title
      content: Mercure Operation Binding v0.1.0 - Publish Operation
  - - meta
    - property: og:description
      content: Configure Mercure operation bindings for publish operations. Define publish behaviors for Server-Sent Events with examples and best practices.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/mercure/0.1.0/operation.html
  - - meta
    - name: og:image
      content: /bindings/mercure/0.1.0/operation.png
  - - meta
    - name: twitter:title
      content: Mercure Operation Binding v0.1.0 - Publish Operation
  - - meta
    - name: twitter:description
      content: Configure Mercure operation bindings for publish operations. Define publish behaviors for Server-Sent Events with examples and best practices.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/mercure/0.1.0/operation.html
---

# Mercure Operation Binding v0.1.0

The Mercure operation binding describes an operation that publishes a message to a Mercure Hub.

## Overview

In Mercure, publishing is done by sending an HTTP `POST` request to the Hub. This binding is used on an AsyncAPI `publish` operation to indicate that it corresponds to this action. As of `v0.1.0`, this binding is a placeholder and has no configurable properties. Its purpose is informational.

## Operation Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`) |

## Mercure Operation Concepts

### Publishing an Update

To publish an update, a backend application sends a `POST` request to the Mercure Hub's publish endpoint (often `/.well-known/mercure`). The request body must be `application/x-www-form-urlencoded` and contain at least two parameters:
- **`topic`**: The URL of the topic to which the update should be sent. This corresponds to the AsyncAPI channel `address`.
- **`data`**: The content of the update to be sent to subscribers. This corresponds to the AsyncAPI message `payload`.

Other optional parameters can be included, such as:
- **`private`**: If set to `on`, the update will only be sent to subscribers who have a valid JWT proving they are allowed to receive private updates.
- **`id`**: A unique identifier for the event. If the client gets disconnected, it can send this ID in a `Last-Event-ID` header to get all missed events.
- **`type`**: The type of the event, which the client can listen for specifically.

## Example

This example defines a `publish` operation to send a new comment notification.

```yaml
operations:
  sendNewComment:
    action: send
    channel:
      $ref: '#/channels/newComments'
    message:
      $ref: '#/messages/comment'
    bindings:
      mercure:
        bindingVersion: '0.1.0'
```

An application would execute this by sending a `POST` request like this:

```
POST /.well-known/mercure HTTP/1.1
Host: hub.example.com
Content-Type: application/x-www-form-urlencoded

topic=https://example.com/posts/1/comments&data={"user":"jane","content":"Great post!"}
```

## Changelog

### Version 0.1.0
- Initial release of the Mercure operation binding.
- The binding is a placeholder with no specific properties, serving to identify the operation as a Mercure publish action.