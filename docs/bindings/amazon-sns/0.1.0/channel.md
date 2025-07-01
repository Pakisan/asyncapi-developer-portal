---
title: Amazon SNS Channel Binding v0.1.0 – Topic Configuration
description: Configure AWS SNS topics in AsyncAPI v0.1.0. Define topic names, ordering, access policies, and tags for robust event-driven architectures.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Amazon SNS channel binding, SNS topic configuration, AsyncAPI SNS v0.1.0, AWS SNS, event-driven architecture, topic policy, FIFO, standard topic
  - - meta
    - property: og:title
      content: Amazon SNS Channel Binding v0.1.0 – Topic Configuration
  - - meta
    - property: og:description
      content: Configure AWS SNS topics in AsyncAPI v0.1.0. Define topic names, ordering, access policies, and tags for robust event-driven architectures.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/amazon-sns/0.1.0/channel.html
  - - meta
    - property: og:image
      content: /bindings/amazon-sns/0.1.0/channel.png
  - - meta
    - name: twitter:title
      content: Amazon SNS Channel Binding v0.1.0 – Topic Configuration
  - - meta
    - name: twitter:description
      content: Configure AWS SNS topics in AsyncAPI v0.1.0. Define topic names, ordering, access policies, and tags for robust event-driven architectures.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/amazon-sns/0.1.0/channel.html
---

# Amazon SNS Channel Binding v0.1.0

The Amazon SNS channel binding object defines the configuration for an SNS topic, which corresponds to an AsyncAPI channel.

## Overview

This binding allows you to define an SNS topic's properties, including its `name`, `ordering` (for FIFO topics), access `policy`, and `tags`.

## Channel Properties

| Property | Type | Description |
|---|---|---|
| `name` | string | **Required**. The name of the SNS topic. |
| `ordering` | object | Configures the topic as either `standard` or `FIFO`. See [Ordering Object](#ordering-object). |
| `policy` | object | The access policy for the topic. See [Topic Policy](#topic-policy). |
| `tags` | object | Key-value pairs representing AWS tags for the topic. |
| `bindingVersion`| string | The version of this binding. For `v0.1.0`, this MUST be `0.1.0`. |

### Ordering Object

Specifies the topic type and, for FIFO topics, the deduplication setting.

| Property | Type | Description |
|---|---|---|
| `type` | string | **Required**. Can be `standard` or `FIFO`. |
| `contentBasedDeduplication`| boolean | For FIFO topics, enables content-based deduplication. |

### Topic Policy

Defines the permissions for the SNS topic using a list of policy statements.

| Property | Type | Description |
|---|---|---|
| `statements` | [object] | **Required**. An array of statement objects, each controlling a permission for the topic. |

Each **statement** object contains:
- `effect`: `Allow` or `Deny`.
- `principal`: The AWS account or resource ARN that this statement applies to.
- `action`: The SNS permission being controlled (e.g., `sns:Publish`).

## Examples

### Standard Topic

This example defines a standard SNS topic named `user-events`.

```yaml
channels:
  userEvents:
    bindings:
      sns:
        name: user-events
        ordering:
          type: standard
        bindingVersion: '0.1.0'
```

### Topic with an Access Policy

This example attaches a policy that allows any principal (`*`) to publish messages to this topic.

```yaml
channels:
  publicEvents:
    bindings:
      sns:
        name: public-events
        policy:
          statements:
            - effect: Allow
              principal: '*'
              action: 'sns:Publish'
        bindingVersion: '0.1.0'
```

## Migration Guide to v0.2.0

Version `0.2.0` introduced several enhancements to the `policy.statements` object:
- The `principal` property was updated to support complex object types for `AWS` and `Service` principals, in addition to string ARNs.
- The `resource` property was added to specify which resources the policy statement applies to.
- The `condition` property was added to allow for more granular control over when the policy is in effect.