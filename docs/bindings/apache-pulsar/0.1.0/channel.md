---
title: Apache Pulsar Channel Binding v0.1.0 - Namespace & Topic Policies
description: This document details v0.1.0 of the Apache Pulsar channel binding. Learn to configure namespace, persistence, retention, compaction, and other critical topic policies.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Apache Pulsar channel binding, AsyncAPI, Pulsar topic, Pulsar namespace, persistence, retention, compaction, geo-replication
  - - meta
    - property: og:title
      content: Apache Pulsar Channel Binding v0.1.0 - Namespace & Topic Policies
  - - meta
    - property: og:description
      content: This document details v0.1.0 of the Apache Pulsar channel binding. Learn to configure namespace, persistence, retention, compaction, and other critical topic policies.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/apache-pulsar/0.1.0/channel.html
  - - meta
    - name: og:image
      content: /bindings/apache-pulsar/0.1.0/channel.png
  - - meta
    - name: twitter:title
      content: Apache Pulsar Channel Binding v0.1.0 - Namespace & Topic Policies
  - - meta
    - name: twitter:description
      content: This document details v0.1.0 of the Apache Pulsar channel binding. Learn to configure namespace, persistence, retention, compaction, and other critical topic policies.
---

# Apache Pulsar Channel Binding v0.1.0

The Apache Pulsar channel binding is used to define the configuration of a Pulsar topic and its associated namespace policies.

## Overview

This binding object is the most detailed in the Pulsar bindings, allowing you to specify the administrative policies that govern a topic's behavior, such as its persistence, retention, and geo-replication.

The full, structured name of a Pulsar topic is `{persistence}://{tenant}/{namespace}/{topic}`. This binding defines the `namespace` and `persistence` parts, while the `tenant` is set in the [Server Binding](./server.md) and the `topic` is the AsyncAPI channel `address`.

## Channel Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`). |
| `namespace` | string | **Yes** | The Pulsar namespace the channel is associated with. |
| `persistence` | string | **Yes** | Defines the persistence of the topic. Can be `persistent` or `non-persistent`. |
| `compaction` | integer | No | Topic compaction threshold in megabytes. |
| `geo-replication` | array | No | A list of cluster names for geo-replication. |
| `retention` | object | No | Retention policy for the topic. |
| `ttl` | integer | No | Message time-to-live in seconds. |
| `deduplication` | boolean | No | Enable or disable message deduplication. |

### `retention` Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `time` | integer | No | Retention time in minutes. `0` disables time-based retention. |
| `size` | integer | No | Retention size in megabytes. `0` disables size-based retention. |

## Example

### Persistent, Replicated Topic with Retention

This example defines a channel that maps to a persistent Pulsar topic. The topic is in the `billing` namespace, is replicated to two other clusters, and has a 7-day time-based retention policy.

```yaml
channels:
  payment-events:
    address: 'new-payments'
    bindings:
      pulsar:
        bindingVersion: '0.1.0'
        namespace: 'billing'
        persistence: 'persistent'
        compaction: 100
        deduplication: true
        geo-replication:
          - 'us-west-cluster'
          - 'eu-central-cluster'
        retention:
          time: 10080 # 7 days in minutes
          size: 0
```

## Changelog

### Version 0.1.0
- Initial release of the Apache Pulsar channel binding with a comprehensive set of administrative policies.