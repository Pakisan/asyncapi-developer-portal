---
title: Google Pub/Sub Message Binding v0.1.0 - Schema & Ordering Key
description: This document details the legacy v0.1.0 of the Google Pub/Sub message binding. Learn to configure message attributes, an ordering key, and an associated schema.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Google Pub/Sub message binding, legacy, AsyncAPI, Pub/Sub message, orderingKey, attributes, schema, GCP
  - - meta
    - property: og:title
      content: Google Pub/Sub Message Binding v0.1.0 - Schema & Ordering Key
  - - meta
    - property: og:description
      content: This document details the legacy v0.1.0 of the Google Pub/Sub message binding. Learn to configure message attributes, an ordering key, and an associated schema.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/googlepubsub/0.1.0/message.html
  - - meta
    - name: og:image
      content: /bindings/googlepubsub/0.1.0/message.png
  - - meta
    - name: twitter:title
      content: Google Pub/Sub Message Binding v0.1.0 - Schema & Ordering Key
  - - meta
    - name: twitter:description
      content: This document details the legacy v0.1.0 of the Google Pub/Sub message binding. Learn to configure message attributes, an ordering key, and an associated schema.
---

# Google Pub/Sub Message Binding v0.1.0

The Google Cloud Pub/Sub message binding `v0.1.0` defines message-specific properties for the Google Cloud Pub/Sub protocol.

## Overview

This binding object allows you to specify an `orderingKey`, a map of `attributes`, and an optional `schema` definition.

## Message Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`). |
| `attributes` | object | No | A map of key-value pairs for metadata. |
| `orderingKey` | string | No | A key that ensures messages with the same key are delivered in order. |
| `schema` | object | No | A schema that the message payload should validate against. |

### `schema` Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | **Yes** | The full resource name of the schema. |
| `type` | string | **Yes** | The type of the schema (e.g., `avro`, `protobuf`). |

## Example

```yaml
messages:
  userLocationUpdate:
    bindings:
      googlepubsub:
        bindingVersion: '0.1.0'
        orderingKey: 'userId'
        schema:
          type: 'avro'
          name: 'projects/my-gcp-project/schemas/UserLocation'
```

## Changelog

### Version 0.1.0
- Initial release.
- The `schema` object required a `type` field, which was removed in `v0.2.0` as it was redundant with the schema definition in GCP.