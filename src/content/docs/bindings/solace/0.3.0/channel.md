---
title: Solace Channel Binding v0.3.0 - Topic Configuration
description: Configure Solace channel bindings for topic identification. Define AsyncAPI channels as Solace topics with comprehensive examples and best practices.
ogImage: /bindings/solace/0.3.0/channel.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: Solace channel binding v0.3.0, AsyncAPI, Solace topic, placeholder, event mesh, event-driven architecture, topic routing
heading: "Solace Channel Binding v0.3.0"
---

The Solace channel binding specifies that an AsyncAPI channel corresponds to a Solace topic.

## Overview

As of `v0.3.0`, this binding is a placeholder and has no configurable properties. Its presence on a channel indicates that the channel represents a Solace topic. The detailed destination configuration (including topic subscriptions for queues) is defined in the [Operation Binding](/bindings/solace/0.3.0/operation.html).

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