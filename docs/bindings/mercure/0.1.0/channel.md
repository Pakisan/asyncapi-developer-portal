---
title: Mercure Channel Binding v0.1.0 - Topic Configuration
description: This document details the v0.1.0 of the Mercure channel binding, which maps an AsyncAPI channel to a Mercure topic URL for real-time updates via Server-Sent Events (SSE).
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Mercure channel binding, AsyncAPI, Mercure topics, topic URL, Server-Sent Events, SSE, real-time updates, event-driven architecture
  - - meta
    - property: og:title
      content: Mercure Channel Binding v0.1.0 - Topic Configuration
  - - meta
    - property: og:description
      content: This document details the v0.1.0 of the Mercure channel binding, which maps an AsyncAPI channel to a Mercure topic URL for real-time updates via Server-Sent Events (SSE).
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/mercure/0.1.0/channel.html
  - - meta
    - name: og:image
      content: /bindings/mercure/0.1.0/channel.png
  - - meta
    - name: twitter:title
      content: Mercure Channel Binding v0.1.0 - Topic Configuration
  - - meta
    - name: twitter:description
      content: This document details the v0.1.0 of the Mercure channel binding, which maps an AsyncAPI channel to a Mercure topic URL for real-time updates via Server-Sent Events (SSE).
---

# Mercure Channel Binding v0.1.0

The Mercure channel binding defines how an AsyncAPI channel maps to a Mercure topic. In Mercure, a topic is a simple URL to which updates are published.

## Overview

The presence of this binding on a channel object indicates that the channel's `address` is a Mercure topic URL. Clients subscribe to this URL to receive real-time updates, and publishers target this URL to send messages. As of `v0.1.0`, this binding is a placeholder and has no configurable properties. Its purpose is purely informational.

## Channel Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`) |

## Mercure Channel Concepts

### Topics as URLs

Unlike message brokers that use abstract topic strings, Mercure uses standard URLs as topic identifiers. This leverages the existing infrastructure of the web and makes topics discoverable. Any valid URL can be a topic.

### Topic Selectors

Mercure supports subscribing to multiple topics at once using topic selectors, which are URI Templates (RFC 6570). This is a powerful feature for clients that need to listen to a dynamic set of resources.

For example, a client could subscribe to `https://example.com/users/{id}` to receive updates for all users.

## Examples

### Static Topic URL

Defines a channel that maps to a single, static Mercure topic.

```yaml
channels:
  productUpdates:
    address: 'https://example.com/products/123/updates'
    bindings:
      mercure:
        bindingVersion: '0.1.0'
```

### Dynamic Topic with Parameters

Defines a channel that uses a parameter to represent a collection of related topics.

```yaml
channels:
  userSpecificNotifications:
    address: 'https://example.com/users/{userId}/notifications'
    parameters:
      userId:
        description: The unique ID of the user.
        schema:
          type: string
    bindings:
      mercure:
        bindingVersion: '0.1.0'
```

## Changelog

### Version 0.1.0
- Initial release of the Mercure channel binding.
- The binding is a placeholder with no specific properties, serving to identify the channel as a Mercure topic.