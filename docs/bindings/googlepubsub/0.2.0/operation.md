---
title: Google Pub/Sub Operation Binding v0.2.0 - Placeholder
description: Google Pub/Sub operation binding v0.2.0 placeholder for future operation configurations. Reserved for Google Pub/Sub-specific operation properties in GCP messaging.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Google Pub/Sub operation binding v0.2.0, AsyncAPI, placeholder, GCP, event-driven architecture, future configurations
  - - meta
    - property: og:title
      content: Google Pub/Sub Operation Binding v0.2.0 - Placeholder
  - - meta
    - property: og:description
      content: Google Pub/Sub operation binding v0.2.0 placeholder for future operation configurations. Reserved for Google Pub/Sub-specific operation properties in GCP messaging.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/googlepubsub/0.2.0/operation.html
  - - meta
    - name: og:image
      content: /bindings/googlepubsub/0.2.0/operation.png
  - - meta
    - name: twitter:title
      content: Google Pub/Sub Operation Binding v0.2.0 - Placeholder
  - - meta
    - name: twitter:description
      content: Google Pub/Sub operation binding v0.2.0 placeholder for future operation configurations. Reserved for Google Pub/Sub-specific operation properties in GCP messaging.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/googlepubsub/0.2.0/operation.html
---

# Google Pub/Sub Operation Binding v0.2.0

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