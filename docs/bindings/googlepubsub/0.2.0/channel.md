---
title: Google Pub/Sub Channel Binding v0.2.0 - Topic Configuration
description: This document details v0.2.0 of the Google Pub/Sub channel binding. Learn to configure a Pub/Sub Topic with schema validation, message retention, and storage policies.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Google Pub/Sub channel binding, AsyncAPI, Pub/Sub Topic, schema validation, message retention, message storage policy, GCP
  - - meta
    - property: og:title
      content: Google Pub/Sub Channel Binding v0.2.0 - Topic Configuration
  - - meta
    - property: og:description
      content: This document details v0.2.0 of the Google Pub/Sub channel binding. Learn to configure a Pub/Sub Topic with schema validation, message retention, and storage policies.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/googlepubsub/0.2.0/channel.html
  - - meta
    - name: og:image
      content: /bindings/googlepubsub/0.2.0/channel.png
  - - meta
    - name: twitter:title
      content: Google Pub/Sub Channel Binding v0.2.0 - Topic Configuration
  - - meta
    - name: twitter:description
      content: This document details v0.2.0 of the Google Pub/Sub channel binding. Learn to configure a Pub/Sub Topic with schema validation, message retention, and storage policies.
---

# Google Pub/Sub Channel Binding v0.2.0

The Google Cloud Pub/Sub channel binding defines how an AsyncAPI channel maps to a Google Cloud Pub/Sub `Topic`.

## Overview

This binding object allows you to specify detailed configuration for a Pub/Sub topic, including its labels, message storage policies, and schema validation settings.

## Channel Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.2.0`). |
| `labels` | object | No | A map of key-value pairs that can be used to organize Pub/Sub resources. |
| `messageRetentionDuration` | string | No | The minimum duration (in seconds, with an "s" suffix) that a message is retained after publication. |
| `messageStoragePolicy` | object | No | Policy for controlling where messages are stored. |
| `schemaSettings` | object | **Yes** | Settings for a schema that the topic is associated with. |

### `messageStoragePolicy` Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `allowedPersistenceRegions` | array | **Yes** | A list of GCP region IDs where messages may be stored. |

### `schemaSettings` Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `encoding` | string | **Yes** | The encoding of messages validated against the schema. Can be `json` or `binary`. |
| `name` | string | **Yes** | The full resource name of the schema in the format `projects/{project}/schemas/{schema}`. |
| `firstRevisionId` | string | No | The first revision ID of the schema definition. |
| `lastRevisionId` | string | No | The last revision ID of the schema definition. |

## Example

### Topic with Schema Validation and Storage Policy

This example defines a channel that maps to a Pub/Sub topic. It requires that all messages conform to a specific JSON schema and ensures that message data is only stored in `us-central1` and `us-east1`.

```yaml
channels:
  user-creation-events:
    address: 'user-created-topic'
    bindings:
      googlepubsub:
        bindingVersion: '0.2.0'
        labels:
          owner: 'auth-team'
        messageRetentionDuration: '86400s' # 1 day
        messageStoragePolicy:
          allowedPersistenceRegions:
            - 'us-central1'
            - 'us-east1'
        schemaSettings:
          encoding: 'json'
          name: 'projects/my-gcp-project/schemas/UserCreatedEvent'
```

## Changelog

### Version 0.2.0
- Added the `schemaSettings` object to enforce schema validation on topics.
- The `schema` property from `v0.1.0` was removed and replaced by `schemaSettings`.