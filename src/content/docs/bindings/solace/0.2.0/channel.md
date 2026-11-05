---
title: Solace Channel Binding v0.2.0 - Topic Configuration
description: Configure Solace channel bindings for topic identification. Define AsyncAPI channels as Solace topics with comprehensive examples and best practices.
ogImage: /bindings/solace/0.2.0/channel.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: Solace channel binding v0.2.0, AsyncAPI, Solace topic, placeholder, event mesh, event-driven architecture, topic routing
heading: "Solace Channel Binding v0.2.0"
---

The Solace channel binding `v0.2.0` specifies that an AsyncAPI channel corresponds to a Solace topic.

## Overview

As of this version, the binding is a placeholder and has no configurable properties. Its presence indicates that the channel represents a Solace topic. All detailed destination configuration is defined in the [Operation Binding](/bindings/solace/0.2.0/operation.html).

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