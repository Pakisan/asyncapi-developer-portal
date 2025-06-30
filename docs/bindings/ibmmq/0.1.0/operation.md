---
title: IBM MQ Operation Binding v0.1.0 - Placeholder
description: This document details the v0.1.0 of the IBM MQ operation binding. This version is a placeholder reserved for future IBM MQ-specific operation configurations.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: IBM MQ operation binding, AsyncAPI, placeholder, enterprise messaging, event-driven architecture
  - - meta
    - property: og:title
      content: IBM MQ Operation Binding v0.1.0 - Placeholder
  - - meta
    - property: og:description
      content: This document details the v0.1.0 of the IBM MQ operation binding. This version is a placeholder reserved for future IBM MQ-specific operation configurations.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/ibmmq/0.1.0/operation.html
  - - meta
    - name: og:image
      content: /bindings/ibmmq/0.1.0/operation.png
  - - meta
    - name: twitter:title
      content: IBM MQ Operation Binding v0.1.0 - Placeholder
  - - meta
    - name: twitter:description
      content: This document details the v0.1.0 of the IBM MQ operation binding. This version is a placeholder reserved for future IBM MQ-specific operation configurations.
---

# IBM MQ Operation Binding v0.1.0

The IBM MQ operation binding is reserved for defining properties that are specific to an IBM MQ publish or subscribe operation.

## Overview

As of `v0.1.0`, this binding is a placeholder and does not contain any properties. Its presence on an operation is for informational purposes, indicating that the operation is part of an IBM MQ-based API. Future versions may include properties to control specific behaviors of message producers or consumers.

## Operation Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`). |

## Example

This example shows a `publish` operation with the placeholder IBM MQ operation binding.

```yaml
operations:
  sendTelemetry:
    action: send
    channel:
      $ref: '#/channels/deviceTelemetryTopic'
    bindings:
      ibmmq:
        bindingVersion: '0.1.0'
```

## Changelog

### Version 0.1.0
- Initial release of the IBM MQ operation binding.
- The binding is a placeholder with no specific properties.