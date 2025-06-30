---
title: Google Pub/Sub Server Binding v0.2.0 - Placeholder
description: This document details v0.2.0 of the Google Pub/Sub server binding. This version is a placeholder that identifies an AsyncAPI server as a Google Pub/Sub endpoint.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Google Pub/Sub server binding, AsyncAPI, placeholder, GCP, event-driven architecture
  - - meta
    - property: og:title
      content: Google Pub/Sub Server Binding v0.2.0 - Placeholder
  - - meta
    - property: og:description
      content: This document details v0.2.0 of the Google Pub/Sub server binding. This version is a placeholder that identifies an AsyncAPI server as a Google Pub/Sub endpoint.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/googlepubsub/0.2.0/server.html
  - - meta
    - name: og:image
      content: /bindings/googlepubsub/0.2.0/server.png
  - - meta
    - name: twitter:title
      content: Google Pub/Sub Server Binding v0.2.0 - Placeholder
  - - meta
    - name: twitter:description
      content: This document details v0.2.0 of the Google Pub/Sub server binding. This version is a placeholder that identifies an AsyncAPI server as a Google Pub/Sub endpoint.
---

# Google Pub/Sub Server Binding v0.2.0

The Google Cloud Pub/Sub server binding specifies that an AsyncAPI server corresponds to the Google Cloud Pub/Sub service.

## Overview

As of `v0.2.0`, this binding is a placeholder and has no configurable properties. Its presence on a server object is for informational purposes, indicating that the server's `url` should be `pubsub.googleapis.com`.

## Server Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.2.0`). |

## Example

This example identifies a server as the Google Cloud Pub/Sub service endpoint.

```yaml
servers:
  gcp_pubsub:
    url: 'pubsub.googleapis.com'
    protocol: googlepubsub
    bindings:
      googlepubsub:
        bindingVersion: '0.2.0'
```

## Changelog

### Version 0.2.0
- The binding remains a placeholder.