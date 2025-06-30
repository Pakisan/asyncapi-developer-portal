---
title: Google Pub/Sub Message Binding v0.2.0 - Schema & Ordering Key
description: This document details v0.2.0 of the Google Pub/Sub message binding. Learn to configure message attributes, an ordering key, and an associated schema.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Google Pub/Sub message binding, AsyncAPI, Pub/Sub message, orderingKey, attributes, schema, GCP
  - - meta
    - property: og:title
      content: Google Pub/Sub Message Binding v0.2.0 - Schema & Ordering Key
  - - meta
    - property: og:description
      content: This document details v0.2.0 of the Google Pub/Sub message binding. Learn to configure message attributes, an ordering key, and an associated schema.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/googlepubsub/0.2.0/message.html
  - - meta
    - name: og:image
      content: /bindings/googlepubsub/0.2.0/message.png
  - - meta
    - name: twitter:title
      content: Google Pub/Sub Message Binding v0.2.0 - Schema & Ordering Key
  - - meta
    - name: twitter:description
      content: This document details v0.2.0 of the Google Pub/Sub message binding. Learn to configure message attributes, an ordering key, and an associated schema.
---

# Google Pub/Sub Message Binding v0.2.0

The Google Cloud Pub/Sub message binding defines properties of a message that are specific to the Google Cloud Pub/Sub protocol.

## Overview

This binding object allows you to specify message-level configurations, such as an `orderingKey` to ensure ordered delivery, a map of `attributes`, and an optional `schema` definition that the message payload should adhere to.

## Message Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.2.0`). |
| `attributes` | object | No | A map of key-value pairs that can be used for filtering or passing metadata. |
| `orderingKey` | string | No | A key that ensures messages with the same key are delivered in order. |
| `schema` | object | No | A schema that the message payload should validate against. |

### `schema` Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | **Yes** | The full resource name of the schema in the format `projects/{project}/schemas/{schema}`. |

## Property Details

### `attributes`
A flexible key-value map for sending message metadata. Subscribers can use filters based on these attributes to receive only a subset of messages.

### `orderingKey`
If a message has an ordering key, Pub/Sub will deliver all messages with the same key to subscribers in the order that they were published.

### `schema`
This associates the message with a specific Pub/Sub schema definition (Avro or Protocol Buffers). If the topic that this message is published to has schema validation enabled, the message payload will be validated against this schema.

## Example

### Message with an Ordering Key and Schema

This example defines a message that represents a user's location update. It specifies that all updates for the same `userId` must be delivered in order. It also links to a Pub/Sub schema definition that the payload must follow.

```yaml
messages:
  userLocationUpdate:
    bindings:
      googlepubsub:
        bindingVersion: '0.2.0'
        orderingKey: 'userId'
        attributes:
          sourceSystem: 'mobile-app'
        schema:
          name: 'projects/my-gcp-project/schemas/UserLocation'
```

## Changelog

### Version 0.2.0
- The `schema` object now only contains the `name` of the schema.
- This version focuses on message-level properties, while topic-level schema settings were moved to the channel binding.