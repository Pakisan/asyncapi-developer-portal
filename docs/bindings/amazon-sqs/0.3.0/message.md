---
title: Amazon SQS Message Binding v0.3.0 – Reserved for Future Use
description: Overview of AsyncAPI SQS message binding v0.3.0. This placeholder is reserved for future message-level configurations in AWS SQS integrations.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Amazon SQS message binding, AsyncAPI SQS v0.3.0, AWS SQS, message placeholder, event-driven architecture
  - - meta
    - property: og:title
      content: Amazon SQS Message Binding v0.3.0 – Reserved for Future Use
  - - meta
    - property: og:description
      content: Overview of AsyncAPI SQS message binding v0.3.0. This placeholder is reserved for future message-level configurations in AWS SQS integrations.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/amazon-sqs/0.3.0/message.html
  - - meta
    - property: og:image
      content: /bindings/amazon-sqs/0.3.0/message.png
  - - meta
    - name: twitter:title
      content: Amazon SQS Message Binding v0.3.0 – Reserved for Future Use
  - - meta
    - name: twitter:description
      content: Overview of AsyncAPI SQS message binding v0.3.0. This placeholder is reserved for future message-level configurations in AWS SQS integrations.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/amazon-sqs/0.3.0/message.html
---

# Amazon SQS Message Binding v0.3.0

The SQS message binding object is reserved for future use. It is intended to hold message-level configuration settings for SQS, but currently, it does not define any properties.

## Overview

While you can include a SQS message binding in your AsyncAPI document, it serves only as a placeholder. There are no SQS-specific message properties to configure in this version of the binding.

## Message Properties

This binding object is currently empty and has no properties other than `bindingVersion`.

| Property | Type | Description |
|---|---|---|
| `bindingVersion`| string | The version of this binding. For `v0.3.0`, this MUST be `0.3.0`. |

## Example

Although the binding has no effect, you can still include it in your message definition.

```yaml
messages:
  userSignedUp:
    payload:
      type: object
      properties:
        email:
          type: string
          format: email
    bindings:
      sqs:
        bindingVersion: '0.3.0'
```

## Use Cases

As this binding is a placeholder, it has no direct use cases at this time. It is included in the specification to allow for future enhancements without introducing breaking changes.

## Versioning

This binding is for version `0.3.0` of the SQS binding specification.