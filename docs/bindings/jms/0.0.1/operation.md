---
title: JMS Operation Binding v0.0.1 - Placeholder
description: This document details the v0.0.1 of the JMS operation binding. This version is a placeholder reserved for future JMS-specific operation configurations.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: JMS operation binding, AsyncAPI, placeholder, enterprise messaging, event-driven architecture
  - - meta
    - property: og:title
      content: JMS Operation Binding v0.0.1 - Placeholder
  - - meta
    - property: og:description
      content: This document details the v0.0.1 of the JMS operation binding. This version is a placeholder reserved for future JMS-specific operation configurations.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/jms/0.0.1/operation.html
  - - meta
    - name: og:image
      content: /bindings/jms/0.0.1/operation.png
  - - meta
    - name: twitter:title
      content: JMS Operation Binding v0.0.1 - Placeholder
  - - meta
    - name: twitter:description
      content: This document details the v0.0.1 of the JMS operation binding. This version is a placeholder reserved for future JMS-specific operation configurations.
---

# JMS Operation Binding v0.0.1

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