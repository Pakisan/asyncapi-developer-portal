---
title: Amazon SQS Channel Binding v0.1.0 – Reserved for Future Use
description: Overview of AsyncAPI SQS channel binding v0.1.0. This placeholder is reserved for future channel-level configurations in AWS SQS integrations.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Amazon SQS channel binding, AsyncAPI SQS v0.1.0, AWS SQS, channel placeholder, event-driven architecture
  - - meta
    - property: og:title
      content: Amazon SQS Channel Binding v0.1.0 – Reserved for Future Use
  - - meta
    - property: og:description
      content: Overview of AsyncAPI SQS channel binding v0.1.0. This placeholder is reserved for future channel-level configurations in AWS SQS integrations.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/amazon-sqs/0.1.0/channel.html
  - - meta
    - property: og:image
      content: /bindings/amazon-sqs/0.1.0/channel.png
  - - meta
    - name: twitter:title
      content: Amazon SQS Channel Binding v0.1.0 – Reserved for Future Use
  - - meta
    - name: twitter:description
      content: Overview of AsyncAPI SQS channel binding v0.1.0. This placeholder is reserved for future channel-level configurations in AWS SQS integrations.

---

# Amazon SQS Channel Binding v0.1.0

The SQS channel binding object is reserved for future use. It is intended to hold channel-level configuration settings for SQS, but currently, it does not define any properties.

## Overview

While you can include an SQS channel binding in your AsyncAPI document, it serves only as a placeholder. There are no SQS-specific channel properties to configure in this version of the binding.

## Channel Properties

This binding object is currently empty and has no properties other than `bindingVersion`.

| Property | Type | Description |
|---|---|---|
| `bindingVersion`| string | The version of this binding. For `v0.1.0`, this MUST be `0.1.0`. |

## Example

Although the binding has no effect, you can still include it in your channel definition.

```yaml
channels:
  userSignup:
    bindings:
      sqs:
        bindingVersion: '0.1.0'
```

## Migration Guide to v0.2.0

Version `0.2.0` introduced a comprehensive set of channel binding properties. Key additions include:
- **`queue` and `deadLetterQueue` objects**: Allowing detailed configuration of the main queue and its DLQ.
- **Queue Properties**: Including `name`, `fifoQueue`, `deliveryDelay`, `visibilityTimeout`, and `messageRetentionPeriod`.
- **`redrivePolicy`**: To configure the DLQ behavior.
- **`policy`**: To define queue access policies with statements.
- **`tags`**: To add AWS tags to the queue.

Migrating to `v0.2.0` allows you to define all your SQS queue infrastructure directly within your AsyncAPI document.