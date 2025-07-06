---
title: IBM MQ Operation Binding v0.1.0 - Placeholder
description: IBM MQ operation binding v0.1.0 placeholder for future operation configurations. Reserved for IBM MQ-specific operation properties in enterprise messaging.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: IBM MQ operation binding v0.1.0, AsyncAPI, placeholder, enterprise messaging, future configurations
  - - meta
    - property: og:title
      content: IBM MQ Operation Binding v0.1.0 - Placeholder
  - - meta
    - property: og:description
      content: IBM MQ operation binding v0.1.0 placeholder for future operation configurations. Reserved for IBM MQ-specific operation properties in enterprise messaging.
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
      content: IBM MQ operation binding v0.1.0 placeholder for future operation configurations. Reserved for IBM MQ-specific operation properties in enterprise messaging.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/ibmmq/0.1.0/operation.html
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