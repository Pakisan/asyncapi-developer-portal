---
title: Solace Channel Binding v0.2.0 - Topic Configuration
description: Configure Solace channel bindings for topic identification. Define AsyncAPI channels as Solace topics with comprehensive examples and best practices.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Solace channel binding v0.2.0, AsyncAPI, Solace topic, placeholder, event mesh, event-driven architecture, topic routing
  - - meta
    - property: og:title
      content: Solace Channel Binding v0.2.0 - Topic Configuration
  - - meta
    - property: og:description
      content: Configure Solace channel bindings for topic identification. Define AsyncAPI channels as Solace topics with comprehensive examples and best practices.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/solace/0.2.0/channel.html
  - - meta
    - name: og:image
      content: /bindings/solace/0.2.0/channel.png
  - - meta
    - name: twitter:title
      content: Solace Channel Binding v0.2.0 - Topic Configuration
  - - meta
    - name: twitter:description
      content: Configure Solace channel bindings for topic identification. Define AsyncAPI channels as Solace topics with comprehensive examples and best practices.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/solace/0.2.0/channel.html
---

# Solace Channel Binding v0.2.0

The Solace channel binding `v0.2.0` specifies that an AsyncAPI channel corresponds to a Solace topic.

## Overview

As of this version, the binding is a placeholder and has no configurable properties. Its presence indicates that the channel represents a Solace topic. All detailed destination configuration is defined in the [Operation Binding](./operation.md).

## Channel Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.2.0`). |

## Example

```yaml
channels:
  userSignedup:
    address: 'user/signedup'
    bindings:
      solace:
        bindingVersion: '0.2.0'
```

## Changelog

### Version 0.2.0
- The binding remains a placeholder.