---
title: Amazon SQS Operation Binding v0.1.0 – Reserved for Future Use
description: Overview of AsyncAPI SQS operation binding v0.1.0. This placeholder is reserved for future operation-level configurations in AWS SQS integrations.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Amazon SQS operation binding, AsyncAPI SQS v0.1.0, AWS SQS, operation placeholder, event-driven architecture
  - - meta
    - property: og:title
      content: Amazon SQS Operation Binding v0.1.0 – Reserved for Future Use
  - - meta
    - property: og:description
      content: Overview of AsyncAPI SQS operation binding v0.1.0. This placeholder is reserved for future operation-level configurations in AWS SQS integrations.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/amazon-sqs/0.1.0/operation.html
  - - meta
    - property: og:image
      content: /bindings/amazon-sqs/0.1.0/operation.png
  - - meta
    - name: twitter:title
      content: Amazon SQS Operation Binding v0.1.0 – Reserved for Future Use
  - - meta
    - name: twitter:description
      content: Overview of AsyncAPI SQS operation binding v0.1.0. This placeholder is reserved for future operation-level configurations in AWS SQS integrations.

---

# Amazon SQS Operation Binding v0.1.0

The SQS operation binding object is reserved for future use. It is intended to hold operation-level configuration settings for SQS, but currently, it does not define any properties.

## Overview

While you can include an SQS operation binding in your AsyncAPI document, it serves only as a placeholder. There are no SQS-specific operation properties to configure in this version of the binding.

## Operation Properties

This binding object is currently empty and has no properties other than `bindingVersion`.

| Property | Type | Description |
|---|---|---|
| `bindingVersion`| string | The version of this binding. For `v0.1.0`, this MUST be `0.1.0`. |

## Example

Although the binding has no effect, you can still include it in your operation definition.

```yaml
operations:
  sendWelcomeEmail:
    bindings:
      sqs:
        bindingVersion: '0.1.0'
```

## Migration Guide to v0.2.0

Version `0.2.0` introduced a comprehensive set of operation binding properties. The key addition is the `queues` array, which allows you to define a list of queues that the operation can interact with.

Each object in the `queues` array can specify:
- **`name`**: The name of the queue.
- **`redrivePolicy`**: To configure the DLQ behavior.
- **`policy`**: To define queue access policies with statements.
- **`tags`**: To add AWS tags to the queue.

Migrating to `v0.2.0` allows you to define policies and behaviors for multiple queues related to a single operation.