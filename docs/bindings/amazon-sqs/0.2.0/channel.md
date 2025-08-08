---
title: Amazon SQS Channel Binding v0.2.0 – Queue Configuration
description: Configure AWS SQS queues v0.2.0 in AsyncAPI. Define standard and FIFO queues, DLQ, redrive and access policies, and tags for robust event-driven architectures.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Amazon SQS channel binding, SQS queue configuration, AsyncAPI SQS v0.2.0, AWS SQS, event-driven architecture, FIFO, DLQ, redrive policy, queue policy
  - - meta
    - property: og:title
      content: Amazon SQS Channel Binding v0.2.0 – Queue Configuration
  - - meta
    - property: og:description
      content: Configure AWS SQS queues v0.2.0 in AsyncAPI. Define standard and FIFO queues, DLQ, redrive and access policies, and tags for robust event-driven architectures.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/amazon-sqs/0.2.0/channel.html
  - - meta
    - property: og:image
      content: /bindings/amazon-sqs/0.2.0/channel.png
  - - meta
    - name: twitter:title
      content: Amazon SQS Channel Binding v0.2.0 – Queue Configuration
  - - meta
    - name: twitter:description
      content: Configure AWS SQS queues v0.2.0 in AsyncAPI. Define standard and FIFO queues, DLQ, redrive and access policies, and tags for robust event-driven architectures.

---

# Amazon SQS Channel Binding v0.2.0

The Amazon SQS channel binding object defines the configuration for an SQS queue. This binding allows you to specify detailed properties for both the main queue and an associated dead-letter queue (DLQ).

## Overview

This binding consists of two main parts: the `queue` and the optional `deadLetterQueue`. Both are defined using a common `queue` object structure, allowing you to configure properties like queue type (FIFO or standard), message retention, and access policies.

## Queue Object Properties

This object defines the properties of an SQS queue, used for both `queue` and `deadLetterQueue`.

| Property | Type | Default | Description |
|---|---|---|---|
| `name` | string | - | The name of the queue. MUST be unique within an AWS account. |
| `fifoQueue` | boolean | `false` | Specifies whether this is a FIFO (First-In-First-Out) queue. |
| `deduplicationScope` | string | `queue` | For FIFO queues, specifies whether deduplication occurs at the `queue` or `messageGroup` level. |
| `fifoThroughputLimit` | string | `perQueue`| For FIFO queues, specifies if the throughput limit applies `perQueue` or `perMessageGroupId`. |
| `deliveryDelay` | integer | `0` | Seconds to delay a message before it can be received (0-900). |
| `visibilityTimeout` | integer | `30` | Seconds a consumer locks a message before it's visible again (0-43200). |
| `receiveMessageWaitTime` | integer | `0` | Enables long polling. The duration (0-20 seconds) that a receive call waits for a message to arrive. |
| `messageRetentionPeriod` | integer | `345600` | Seconds to retain a message (60-1,209,600). |
| `redrivePolicy` | object | - | An object defining the dead-letter queue (DLQ) settings. See [Redrive Policy](#redrive-policy). |
| `policy` | object | - | The queue's access policy. See [Queue Policy](#queue-policy). |
| `tags` | object | - | Key-value pairs representing AWS tags for the queue. |
| `bindingVersion`| string | The version of this binding. For `v0.2.0`, this MUST be `0.2.0`. |

### Redrive Policy

Defines the dead-letter queue (DLQ) where messages are sent after failing processing a certain number of times.

| Property | Type | Default | Description |
|---|---|---|---|
| `deadLetterQueue` | object | - | **Required**. An object that identifies the DLQ by its `arn` or `name`. |
| `maxReceiveCount` | integer | `10` | The number of times a message is received before being sent to the DLQ. |

### Queue Policy

Defines the permissions for the SQS queue using a list of policy statements.

| Property | Type | Description |
|---|---|---|
| `statements` | [object] | **Required**. An array of statement objects, each controlling a permission for the queue. |

Each **statement** object contains:
- `effect`: `Allow` or `Deny`.
- `principal`: The AWS account or resource ARN that this statement applies to.
- `action`: The SQS permission being controlled (e.g., `sqs:SendMessage`).

## Examples

### FIFO Queue with a Dead-Letter Queue

This example defines a FIFO queue named `user-events.fifo` with a corresponding DLQ named `user-events-dlq.fifo`. If a message fails to be processed after 5 attempts, it is moved to the DLQ.

```yaml
channels:
  userEvents:
    bindings:
      sqs:
        queue:
          name: user-events.fifo
          fifoQueue: true
          redrivePolicy:
            deadLetterQueue:
              name: user-events-dlq # References the DLQ defined below
            maxReceiveCount: 5
        deadLetterQueue:
          name: user-events-dlq.fifo
          fifoQueue: true
        bindingVersion: '0.2.0'
```

### Queue with an Access Policy

This example defines a standard queue and attaches a policy that allows a specific IAM user to send messages to it.

```yaml
channels:
  orderProcessing:
    bindings:
      sqs:
        queue:
          name: order-processing-queue
          policy:
            statements:
              - effect: Allow
                principal: 'arn:aws:iam::123456789012:user/order-service-user'
                action: 'sqs:SendMessage'
        bindingVersion: '0.2.0'
```

## Migration Guide to v0.3.0

Version `0.3.0` introduced several enhancements to the `policy.statements` object:
- The `principal` property was updated to support complex object types for `AWS` and `Service` principals, in addition to string ARNs.
- The `resource` property was added to specify which resources the policy statement applies to.
- The `condition` property was added to allow for more granular control over when the policy is in effect.