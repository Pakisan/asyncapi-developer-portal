---
title: JMS Operation Binding v0.0.1 - Placeholder
description: JMS operation binding v0.0.1 placeholder for future operation configurations. Reserved for JMS-specific operation properties in enterprise messaging.
ogImage: /bindings/jms/0.0.1/operation.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: JMS operation binding v0.0.1, AsyncAPI, placeholder, enterprise messaging, future configurations
heading: "JMS Operation Binding v0.0.1"
---

The JMS operation binding is reserved for defining properties that are specific to a JMS operation.

## Overview

As of `v0.0.1`, this binding is a placeholder and does not contain any properties. Its presence on an operation is for informational purposes, indicating that the operation is part of a JMS-based API. Future versions may include properties to control producer or consumer behavior.

## Operation Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.0.1`). |

## Example

This example shows a `publish` operation with the placeholder JMS operation binding.

```yaml
operations:
  sendOrder:
    action: send
    channel:
      $ref: '#/channels/orderQueue'
    bindings:
      jms:
        bindingVersion: '0.0.1'
```

## Changelog

### Version 0.0.1
- Initial release of the JMS operation binding.
- The binding is a placeholder with no specific properties.