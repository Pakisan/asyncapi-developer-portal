---
title: Amazon SQS Operation Binding v0.2.0 – Queue Policies
description: Define AWS SQS operation v0.2.0 in AsyncAPI. Define standard and FIFO queues, DLQ, redrive and access policies, and tags for robust event-driven architectures.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Amazon SQS operation binding, SQS queue policy, AsyncAPI SQS v0.2.0, AWS SQS, DLQ, IAM, event-driven architecture
  - - meta
    - property: og:title
      content: Amazon SQS Operation Binding v0.2.0 – Queue Policies
  - - meta
    - property: og:description
      content: Define AWS SQS operation v0.2.0 in AsyncAPI. Define standard and FIFO queues, DLQ, redrive and access policies, and tags for robust event-driven architectures.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/amazon-sqs/0.2.0/operation.html
  - - meta
    - property: og:image
      content: /bindings/amazon-sqs/0.2.0/operation.png
  - - meta
    - name: twitter:title
      content: Amazon SQS Operation Binding v0.2.0 – Queue Policies
  - - meta
    - name: twitter:description
      content: Define AWS SQS operation v0.2.0 in AsyncAPI. Define standard and FIFO queues, DLQ, redrive and access policies, and tags for robust event-driven architectures.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/amazon-sqs/0.2.0/operation.html
---

# Amazon SQS Operation Binding v0.2.0

The Amazon SQS operation binding is used to define a list of SQS queues that an operation can interact with. This is particularly useful in scenarios where an operation may target multiple queues, such as when using an SNS topic to fan out messages to several SQS queues.

## Overview

The core of this binding is the `queues` property, which is an array of `queue` objects. Each object in the array defines a queue by its `name` and can include a `redrivePolicy` and an access `policy`.

## Operation Properties

| Property | Type | Description |
|---|---|---|
| `queues` | [object] | **Required**. An array of Queue Objects. These queues are either the endpoint for an SNS operation or the dead-letter queue of an SQS operation. |
| `bindingVersion`| string | The version of this binding. For `v0.2.0`, this MUST be `0.2.0`. |

### Queue Object

Defines a queue that the operation can interact with.

| Property | Type | Description |
|---|---|---|
| `name` | string | **Required**. The name of the queue. |
| `fifoQueue` | boolean | Specifies if the queue is a FIFO queue. |
| `redrivePolicy` | object | Defines the dead-letter queue (DLQ) settings. See [Redrive Policy](#redrive-policy). |
| `policy` | object | Defines the access policy for the queue. See [Queue Policy](#queue-policy). |
| `tags` | object | Key-value AWS tags for the queue. |

### Redrive Policy

Specifies the DLQ for un-processable messages.

| Property | Type | Description |
|---|---|---|
| `deadLetterQueue`| object | **Required**. An object that identifies the DLQ by its `arn` or `name`. |
| `maxReceiveCount`| integer | Number of receives before a message is moved to the DLQ. |

### Queue Policy

Defines access permissions for the queue.

| Property | Type | Description |
|---|---|---|
| `statements` | [object] | **Required**. An array of policy statements. |

Each **statement** object contains:
- `effect`: `Allow` or `Deny`.
- `principal`: The AWS account or resource ARN that this statement applies to.
- `action`: The SQS permission being controlled (e.g., `sqs:SendMessage`).

## Example

This example defines an operation that interacts with two queues: a primary FIFO queue (`my-queue.fifo`) and its corresponding dead-letter queue (`my-dlq.fifo`). It includes a policy to deny a specific user from sending or receiving messages.

```yaml
operations:
  processUserEvents:
    bindings:
      sqs:
        queues:
          - name: my-queue.fifo
            fifoQueue: true
            redrivePolicy:
              deadLetterQueue:
                name: my-dlq.fifo # Identifies the DLQ
              maxReceiveCount: 5
            policy:
              statements:
                - effect: Deny
                  principal: 'arn:aws:iam::123456789012:user/some-user'
                  action: ['sqs:SendMessage', 'sqs:ReceiveMessage']
          - name: my-dlq.fifo
            fifoQueue: true
        bindingVersion: '0.2.0'
```

## Migration Guide to v0.3.0

Version `0.3.0` introduced several enhancements to the `policy.statements` object:
- The `principal` property was updated to support complex object types for `AWS` and `Service` principals, in addition to string ARNs.
- The `resource` property was added to specify which resources the policy statement applies to.
- The `condition` property was added to allow for more granular control over when the policy is in effect.