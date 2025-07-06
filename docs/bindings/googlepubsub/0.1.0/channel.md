---
title: Google Pub/Sub Channel Binding v0.1.0 - Topic Configuration
description: Configure Google Pub/Sub channel bindings v0.1.0 for topic settings. Define schema validation and message retention for GCP messaging with examples.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Google Pub/Sub channel binding v0.1.0, AsyncAPI, Pub/Sub Topic, schema validation, GCP, legacy version
  - - meta
    - property: og:title
      content: Google Pub/Sub Channel Binding v0.1.0 - Topic Configuration
  - - meta
    - property: og:description
      content: Configure Google Pub/Sub channel bindings v0.1.0 for topic settings. Define schema validation and message retention for GCP messaging with examples.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/googlepubsub/0.1.0/channel.html
  - - meta
    - name: og:image
      content: /bindings/googlepubsub/0.1.0/channel.png
  - - meta
    - name: twitter:title
      content: Google Pub/Sub Channel Binding v0.1.0 - Topic Configuration
  - - meta
    - name: twitter:description
      content: Configure Google Pub/Sub channel bindings v0.1.0 for topic settings. Define schema validation and message retention for GCP messaging with examples.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/googlepubsub/0.1.0/channel.html
---

# Google Pub/Sub Channel Binding v0.1.0

The Google Cloud Pub/Sub channel binding `v0.1.0` defines how an AsyncAPI channel maps to a Google Cloud Pub/Sub `Topic`.

## Overview

This binding object allows you to specify configuration for a Pub/Sub topic. Note that this version of the binding has a somewhat confusing structure that was improved in later versions.

## Channel Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`). |
| `topic` | string | **Yes** | The name of the topic. |
| `labels` | object | No | A map of key-value pairs for organizing resources. |
| `messageRetentionDuration` | string | No | The minimum duration a message is retained. |
| `messageStoragePolicy` | object | No | Policy for controlling where messages are stored. |
| `schemaSettings` | object | **Yes** | Settings for a schema associated with the topic. |

### `schemaSettings` Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `encoding` | string | **Yes** | The encoding of messages. Can be `json` or `binary`. |
| `name` | string | **Yes** | The full resource name of the schema. |

## Example

```yaml
channels:
  user-creation-events:
    bindings:
      googlepubsub:
        bindingVersion: '0.1.0'
        topic: 'user-created-topic'
        schemaSettings:
          encoding: 'json'
          name: 'projects/my-gcp-project/schemas/UserCreatedEvent'
```

## Changelog

### Version 0.1.0
- Initial release.
- Note: This version included both `topic` and `schemaSettings` at the same level, which was clarified in `v0.2.0`. The `topic` string should be the channel `address` in modern usage.