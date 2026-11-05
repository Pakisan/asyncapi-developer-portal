---
title: Apache Pulsar Operation Binding v0.1.0 - Placeholder
description: Apache Pulsar operation binding v0.1.0 placeholder for future operation configurations. Reserved for Pulsar-specific operation properties in event streaming.
ogImage: /bindings/apache-pulsar/0.1.0/operation.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: Apache Pulsar operation binding v0.1.0, AsyncAPI, placeholder, Pulsar operation, event streaming, future configurations
heading: "Apache Pulsar Operation Binding v0.1.0"
---

The Apache Pulsar operation binding is reserved for defining properties that are specific to an Apache Pulsar publish or subscribe operation.

## Overview

As of `v0.1.0`, this binding is a placeholder and does not contain any properties. Its presence on an AsyncAPI operation is for informational purposes, indicating that the operation is part of an Apache Pulsar-based API.

Future versions may include properties to define consumer subscription types (e.g., `exclusive`, `shared`, `failover`) or producer configurations.

## Operation Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`). |

## Example

```yaml
operations:
  sendUserEvent:
    action: send
    channel:
      $ref: '#/channels/userEvents'
    bindings:
      pulsar:
        bindingVersion: '0.1.0'
```

## Changelog

### Version 0.1.0
- Initial placeholder release.