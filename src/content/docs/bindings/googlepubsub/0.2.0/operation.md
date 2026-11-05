---
title: Google Pub/Sub Operation Binding v0.2.0 - Placeholder
description: Google Pub/Sub operation binding v0.2.0 placeholder for future operation configurations. Reserved for Google Pub/Sub-specific operation properties in GCP messaging.
ogImage: /bindings/googlepubsub/0.2.0/operation.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: Google Pub/Sub operation binding v0.2.0, AsyncAPI, placeholder, GCP, event-driven architecture, future configurations
heading: "Google Pub/Sub Operation Binding v0.2.0"
---

The Google Cloud Pub/Sub operation binding is reserved for defining properties that are specific to a Google Cloud Pub/Sub operation.

## Overview

As of `v0.2.0`, this binding is a placeholder and does not contain any properties. Its presence on an operation is for informational purposes, indicating that the operation is part of a Google Cloud Pub/Sub-based API.

## Operation Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.2.0`). |

## Example

This example shows a `publish` operation with the placeholder Google Cloud Pub/Sub operation binding.

```yaml
operations:
  sendUserEvent:
    action: send
    channel:
      $ref: '#/channels/userEvents'
    bindings:
      googlepubsub:
        bindingVersion: '0.2.0'
```

## Changelog

### Version 0.2.0
- The binding remains a placeholder.