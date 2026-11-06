---
title: Apache Pulsar Bindings - AsyncAPI Event Streaming
description: Master AsyncAPI Apache Pulsar bindings for cloud-native event streaming. Configure tenants, namespaces, topics, and policies for multi-tenant messaging.
ogImage: /bindings/apache-pulsar/apache-pulsar.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: Apache Pulsar bindings, AsyncAPI, event streaming, message broker, multi-tenancy, tenant, namespace, topic, persistence, compaction, retention
heading: "Apache Pulsar Bindings"
---

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
