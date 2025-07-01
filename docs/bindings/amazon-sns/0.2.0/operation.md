---
title: Amazon SNS Operation Binding v0.2.0 – Subscription Configuration
description: Configure AWS SNS subscriptions in AsyncAPI v0.2.0. Define consumers, filter policies, DLQ, and delivery policies for robust event-driven architectures.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Amazon SNS operation binding, SNS subscription, AsyncAPI SNS v0.2.0, AWS SNS, filter policy, redrive policy, DLQ, delivery policy
  - - meta
    - property: og:title
      content: Amazon SNS Operation Binding v0.2.0 – Subscription Configuration
  - - meta
    - property: og:description
      content: Configure AWS SNS subscriptions in AsyncAPI v0.2.0. Define consumers, filter policies, DLQ, and delivery policies for robust event-driven architectures.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/amazon-sns/0.2.0/operation.html
  - - meta
    - property: og:image
      content: /bindings/amazon-sns/0.2.0/operation.png
  - - meta
    - name: twitter:title
      content: Amazon SNS Operation Binding v0.2.0 – Subscription Configuration
  - - meta
    - name: twitter:description
      content: Configure AWS SNS subscriptions in AsyncAPI v0.2.0. Define consumers, filter policies, DLQ, and delivery policies for robust event-driven architectures.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/amazon-sns/0.2.0/operation.html
---

# Amazon SNS Operation Binding v0.2.0

The Amazon SNS operation binding defines how consumers (subscribers) interact with an SNS topic. It allows you to specify multiple consumers, each with its own protocol, endpoint, and policies.

## Overview

The core of this binding is the `consumers` array, where each element represents a subscription to the topic. You can define how messages are filtered, retried, and handled after failures.

## Operation Properties

| Property | Type | Description |
|---|---|---|
| `topic` | object | Identifies the SNS topic by `arn` or `name`. |
| `consumers` | [object] | **Required**. An array of `consumer` objects defining the subscriptions. See [Consumer Object](#consumer-object). |
| `deliveryPolicy` | object | Default retry policy for HTTP/S consumers, can be overridden by individual consumers. See [Delivery Policy](#delivery-policy). |
| `bindingVersion`| string | The version of this binding. For `v0.2.0`, this MUST be `0.2.0`. |

### Consumer Object

Defines a single subscription to the SNS topic.

| Property | Type | Description |
|---|---|---|
| `protocol` | string | **Required**. The protocol of the endpoint (e.g., `sqs`, `http`, `lambda`). |
| `endpoint` | object | **Required**. The endpoint where messages are delivered. See [Identifier Object](#identifier-object). |
| `rawMessageDelivery`| boolean | **Required**. If `true`, SNS attributes are removed from the message body. |
| `filterPolicy` | object | A map of message attributes or body fields used to filter messages. |
| `filterPolicyScope`| string | Whether the `filterPolicy` applies to `MessageAttributes` or `MessageBody`. Default is `MessageAttributes`.|
| `redrivePolicy` | object | Moves un-processable messages to a DLQ. See [Redrive Policy](#redrive-policy). |
| `deliveryPolicy`| object | Overrides the topic's default retry policy for this HTTP/S consumer. See [Delivery Policy](#delivery-policy). |
| `displayName`| string | The display name for the subscription. |

### Identifier Object

Identifies an endpoint for a consumer.

| Property | Type | Description |
|---|---|---|
| `name` | string | Identifies an endpoint by name (e.g., an SQS queue name). |
| `arn` | string | Identifies an endpoint by its full AWS ARN. |
| `url` | string | The URL of an HTTP/S endpoint. |
| `email` | string | An email address for an `email` or `email-json` subscription. |
| `phone` | string | A phone number for an `sms` subscription. |

### Redrive Policy

Specifies a dead-letter queue (DLQ) for messages that fail delivery.

| Property | Type | Default | Description |
|---|---|---|---|
| `deadLetterQueue` | object | - | **Required**. The SQS queue to use as a DLQ, identified by `arn` or `name`. |
| `maxReceiveCount` | integer | `10` | Number of retries before moving the message to the DLQ. |

### Delivery Policy

Defines the retry strategy for HTTP/S endpoints.

| Property | Type | Description |
|---|---|---|
| `backoffFunction`| string | The backoff algorithm (`linear`, `exponential`, etc.). |
| `minDelayTarget`| integer | Minimum delay for a retry in seconds. |
| `maxDelayTarget`| integer | Maximum delay for a retry in seconds. |
| `numRetries` | integer | Total number of retries. |

## Example

This example defines a subscription for an SQS queue named `user-events-queue` to the `user-events` topic. It includes a filter policy, a redrive policy to a DLQ, and a custom delivery policy.

```yaml
operations:
  onUserEvent:
    bindings:
      sns:
        topic:
          name: user-events
        consumers:
          - protocol: sqs
            endpoint:
              name: user-events-queue
            rawMessageDelivery: true
            filterPolicy:
              eventType:
                - user.created
                - user.updated
            redrivePolicy:
              deadLetterQueue:
                arn: arn:aws:sqs:us-east-1:123456789012:user-events-dlq
              maxReceiveCount: 3
            deliveryPolicy:
              minDelayTarget: 20
              maxDelayTarget: 600
              numRetries: 5
        bindingVersion: '0.2.0'
```

## Migration from v0.1.0

Version `0.2.0` introduced the `displayName` property to the `consumer` object, allowing you to set a display name for an SNS subscription. Other properties from `v0.1.0` remain compatible.