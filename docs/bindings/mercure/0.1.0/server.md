---
title: Mercure Server Binding v0.1.0 - Hub Connection
description: Configure Mercure server bindings for Hub connections. Define connection settings for Server-Sent Events with examples and best practices.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Mercure server binding v0.1.0, AsyncAPI, Mercure Hub, Server-Sent Events, SSE, real-time updates
  - - meta
    - property: og:title
      content: Mercure Server Binding v0.1.0 - Hub Connection
  - - meta
    - property: og:description
      content: Configure Mercure server bindings for Hub connections. Define connection settings for Server-Sent Events with examples and best practices.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/mercure/0.1.0/server.html
  - - meta
    - name: og:image
      content: /bindings/mercure/0.1.0/server.png
  - - meta
    - name: twitter:title
      content: Mercure Server Binding v0.1.0 - Hub Connection
  - - meta
    - name: twitter:description
      content: Configure Mercure server bindings for Hub connections. Define connection settings for Server-Sent Events with examples and best practices.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/mercure/0.1.0/server.html
---

# Mercure Server Binding v0.1.0

The Mercure server binding describes a connection to a Mercure Hub, the central component in the Mercure protocol.

## Overview

A Mercure Hub is an HTTP server that dispatches Server-Sent Events (SSE) to subscribers. It has two main functions:
1.  **Receiving Messages**: It exposes an endpoint where publishers can `POST` updates.
2.  **Dispatching Messages**: It allows clients to establish persistent `GET` connections to subscribe to topics and receive updates.

This binding is used on an AsyncAPI server object to indicate that it represents a Mercure Hub. As of `v0.1.0`, this binding is a placeholder and has no configurable properties. Its purpose is purely informational.

## Server Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`) |

## Mercure Server Concepts

### The Hub URL

The `url` field of the AsyncAPI server object should point to the public URL of the Mercure Hub's publish endpoint. By convention, this is often `https://your-domain.com/.well-known/mercure`.

### Authentication

Mercure uses two JSON Web Tokens (JWTs) for security:
- **Publisher JWT**: The publisher must present a valid JWT to the Hub to prove it has the right to publish updates. This token is typically long-lived.
- **Subscriber JWT**: A client must present a valid JWT (usually in a cookie) to subscribe to topics, especially private ones. This token is typically short-lived and granted by the main web application.

The management of these JWTs is outside the scope of the AsyncAPI binding but is a core part of implementing a secure Mercure-based system.

## Example

This example defines a server that represents a production Mercure Hub. The `protocol` should be `mercure` or a secure variant like `mercure-secure`.

```yaml
servers:
  productionHub:
    url: https://hub.example.com/.well-known/mercure
    protocol: mercure
    description: The main Mercure Hub for production updates.
    bindings:
      mercure:
        bindingVersion: '0.1.0'
```

## Changelog

### Version 0.1.0
- Initial release of the Mercure server binding.
- The binding is a placeholder with no specific properties, serving to identify the server as a Mercure Hub.