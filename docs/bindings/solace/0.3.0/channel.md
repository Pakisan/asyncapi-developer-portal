---
title: Solace Channel Binding v0.3.0 - Topic Placeholder
description: This document details the legacy v0.3.0 of the Solace channel binding. It is recommended to use the latest version. This version is a placeholder that identifies an AsyncAPI channel as a Solace topic.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Solace channel binding, legacy, AsyncAPI, Solace topic, placeholder, event mesh, event-driven architecture
  - - meta
    - property: og:title
      content: Solace Channel Binding v0.3.0 - Topic Placeholder
  - - meta
    - property: og:description
      content: This document details the legacy v0.3.0 of the Solace channel binding. It is recommended to use the latest version. This version is a placeholder that identifies an AsyncAPI channel as a Solace topic.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/solace/0.3.0/channel.html
  - - meta
    - name: og:image
      content: /bindings/solace/0.3.0/channel.png
  - - meta
    - name: twitter:title
      content: Solace Channel Binding v0.3.0 - Topic Placeholder
  - - meta
    - name: twitter:description
      content: This document details the legacy v0.3.0 of the Solace channel binding. It is recommended to use the latest version. This version is a placeholder that identifies an AsyncAPI channel as a Solace topic.
---

# Solace Channel Binding v0.3.0

The Solace channel binding specifies that an AsyncAPI channel corresponds to a Solace topic.

## Overview

As of `v0.3.0`, this binding is a placeholder and has no configurable properties. Its presence on a channel indicates that the channel represents a Solace topic. The detailed destination configuration (including topic subscriptions for queues) is defined in the [Operation Binding](./operation.md).

## Channel Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.3.0`). |

## Example

This example identifies the channel `user/signedup` as a Solace topic.

```yaml
channels:
  userSignedup:
    address: 'user/signedup'
    bindings:
      solace:
        bindingVersion: '0.3.0'
```

## Changelog

### Version 0.3.0
- The binding remains a placeholder. All destination logic is in the operation binding.