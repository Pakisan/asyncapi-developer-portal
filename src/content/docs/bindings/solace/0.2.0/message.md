---
title: Solace Message Binding v0.2.0 - Message Configuration
description: Configure Solace message bindings for message properties. Define Solace-specific message attributes with AsyncAPI examples and best practices.
ogImage: /bindings/solace/0.2.0/message.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: Solace message binding v0.2.0, AsyncAPI, placeholder, event mesh, event-driven architecture, message properties
heading: "Solace Message Binding v0.2.0"
---

The Solace message binding `v0.2.0` is a placeholder for defining properties specific to a Solace message.

## Overview

As of this version, the binding does not contain any properties. Its presence on a message is for informational purposes.

## Message Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.2.0`). |

## Example

```yaml
messages:
  userSignedUp:
    bindings:
      solace:
        bindingVersion: '0.2.0'
```

## Changelog

### Version 0.2.0
- The binding remains a placeholder.