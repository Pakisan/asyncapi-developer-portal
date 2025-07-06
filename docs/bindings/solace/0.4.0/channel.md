---
title: Solace Channel Binding v0.4.0 - Topic Configuration
description: Configure Solace channel bindings for topic identification. Define AsyncAPI channels as Solace topics with comprehensive examples and best practices.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Solace channel binding v0.4.0, AsyncAPI, Solace topic, placeholder, event mesh, event-driven architecture, topic routing
  - - meta
    - property: og:title
      content: Solace Channel Binding v0.4.0 - Topic Configuration
  - - meta
    - property: og:description
      content: Configure Solace channel bindings for topic identification. Define AsyncAPI channels as Solace topics with comprehensive examples and best practices.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/solace/0.4.0/channel.html
  - - meta
    - name: og:image
      content: /bindings/solace/0.4.0/channel.png
  - - meta
    - name: twitter:title
      content: Solace Channel Binding v0.4.0 - Topic Configuration
  - - meta
    - name: twitter:description
      content: Configure Solace channel bindings for topic identification. Define AsyncAPI channels as Solace topics with comprehensive examples and best practices.
  - - meta
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/solace/0.4.0/channel.html
---

# Solace Channel Binding v0.4.0

The Solace channel binding specifies that an AsyncAPI channel corresponds to a Solace topic.

## Overview

In Solace, topics are not pre-configured on the broker; they are defined by the publishing application and used by consumers in topic subscriptions. This binding is used to mark a channel as representing a Solace topic.

As of `v0.4.0`, this binding is a placeholder and has no configurable properties. The detailed destination configuration (including topic subscriptions for queues) is defined in the [Operation Binding](./operation.md).

## Channel Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.4.0`). |

## Solace Topic Architecture

Solace topics are a powerful feature for dynamic message routing. They are hierarchical strings (e.g., `us/sales/electronics/tv`) that allow for wildcard subscriptions.

- **Single-Level Wildcard (`*`)**: Matches one level in the hierarchy. `us/sales/*/tv` would match `us/sales/electronics/tv` but not `us/sales/home/appliances/tv`.
- **Multi-Level Wildcard (`>`)**: Matches one or more levels at the end of the topic. `us/sales/>` would match `us/sales/electronics/tv` and `us/sales/home/appliances/vacuum`.

## Example

This example identifies the channel `user/signedup` as a Solace topic. The actual consumption details are defined in the operation that uses this channel.

```yaml
channels:
  userSignedup:
    address: 'user/signedup'
    bindings:
      solace:
        bindingVersion: '0.4.0'
```

## Changelog

### Version 0.4.0
- The binding remains a placeholder, consistent with previous versions. All destination logic is in the operation binding.