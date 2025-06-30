---
title: Apache Pulsar Bindings - Cloud-Native Event Streaming
description: The complete guide to AsyncAPI Apache Pulsar bindings. Learn to configure tenants, namespaces, topics, and policies for a true cloud-native, multi-tenant event streaming platform.
layout: doc
head:
  - - meta
    - name: keywords
      content: Apache Pulsar, Pulsar, AsyncAPI, event streaming, message broker, multi-tenancy, tenant, namespace, topic, persistence, compaction, retention, channel binding, operation binding, message binding, server binding
  - - meta
    - property: og:title
      content: Apache Pulsar Bindings - Cloud-Native Event Streaming
  - - meta
    - property: og:description
      content: The complete guide to AsyncAPI Apache Pulsar bindings. Learn to configure tenants, namespaces, topics, and policies for a true cloud-native, multi-tenant event streaming platform.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/apache-pulsar/
  - - meta
    - name: og:image
      content: /bindings/apache-pulsar/apache-pulsar.png
  - - meta
    - name: twitter:title
      content: Apache Pulsar Bindings - Cloud-Native Event Streaming
  - - meta
    - name: twitter:description
      content: The complete guide to AsyncAPI Apache Pulsar bindings. Learn to configure tenants, namespaces, topics, and policies for a true cloud-native, multi-tenant event streaming platform.
---

# Apache Pulsar Bindings

Apache Pulsar is a cloud-native, multi-tenant, high-performance solution for server-to-server messaging and queuing. It was originally developed by Yahoo and is now a top-level Apache Software Foundation project. The AsyncAPI Apache Pulsar bindings provide a detailed, standardized way to define your event-driven architectures built on this powerful platform.

## Apache Pulsar Overview

Pulsar's architecture is fundamentally different from many other messaging systems. It separates compute (serving traffic) from storage (persisting messages), which allows for independent scaling and greater resilience.

Key concepts include:
- **Multi-Tenancy**: Pulsar was designed from the ground up for multi-tenancy. Resources are organized into a three-level hierarchy:
  - **Tenants**: The highest level of isolation, often representing a team, product, or organization.
  - **Namespaces**: A logical grouping of related topics within a tenant. Policies like message retention and storage quotas are managed at the namespace level.
  - **Topics**: The named channels that messages are published to and consumed from.
- **Persistence**: Topics can be configured as `persistent` (the default) or `non-persistent`. Persistent topics have their messages stored on disk in Apache BookKeeper.
- **Unified Messaging Model**: Pulsar supports both queuing (via shared subscriptions) and streaming (via exclusive subscriptions) on the same topic.
- **Geo-Replication**: Built-in support for replicating data across multiple geographic regions for disaster recovery and global applications.

## AsyncAPI Apache Pulsar Bindings

The Pulsar bindings allow you to map AsyncAPI concepts to the specific resource hierarchy and policies of an Apache Pulsar cluster.

### Binding Types

| Binding Type | Purpose | Description |
|--------------|---------|-------------|
| **Channel Binding** | Namespace & Topic Policy Configuration | Defines a channel as a Pulsar Topic and specifies its namespace, persistence, retention, and other policies. This is the most detailed binding. |
| **Operation Binding** | (Placeholder) | Reserved for future Pulsar-specific operation properties. |
| **Message Binding** | (Placeholder) | Reserved for future Pulsar-specific message properties. |
| **Server Binding** | Tenant Configuration | Specifies the Pulsar tenant that the application belongs to. |

### Supported Versions

| Version | Status | Key Features |
|---------|--------|--------------|
| **0.1.0** | Latest | Provides comprehensive support for defining Pulsar's hierarchical structure (tenant, namespace, topic) and key administrative policies. |

## Core Pulsar Concepts in AsyncAPI

### The Topic Hierarchy

The full, structured name of a Pulsar topic is:
`{persistence}://{tenant}/{namespace}/{topic}`

The AsyncAPI bindings allow you to define each part of this structure:
- The `server` binding sets the `tenant`.
- The `channel` binding sets the `namespace` and `persistence`.
- The AsyncAPI channel `address` is the `{topic}` part.

### Defining Policies

Pulsar's power comes from its fine-grained policy control. The `channel` binding exposes many of these policies:
- **`retention`**: Define how long messages are kept (by time or size).
- **`compaction`**: Set a size threshold to trigger topic compaction for keyed topics.
- **`deduplication`**: Enable or disable message deduplication.
- **`geo-replication`**: List the clusters to which the topic should be replicated.

## Binding Documentation

### Channel Bindings
- [Apache Pulsar Channel Binding v0.1.0](./0.1.0/channel.md)

### Operation Bindings
- [Apache Pulsar Operation Binding v0.1.0](./0.1.0/operation.md)

### Message Bindings
- [Apache Pulsar Message Binding v0.1.0](./0.1.0/message.md)

### Server Bindings
- [Apache Pulsar Server Binding v0.1.0](./0.1.0/server.md) 