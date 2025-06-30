---
title: Amazon SQS Message Binding v0.1.0 - Reserved for Future Use
description: An overview of the AsyncAPI SQS message binding object for version 0.1.0. Learn why this binding is reserved for future message-level configurations.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Amazon SQS, AWS, AsyncAPI, message binding, SQS message, placeholder binding
  - - meta
    - property: og:title
      content: Amazon SQS Message Binding v0.1.0 - Reserved for Future Use
  - - meta
    - property: og:description
      content: An overview of the AsyncAPI SQS message binding object for version 0.1.0. Learn why this binding is reserved for future message-level configurations.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/amazon-sqs/0.1.0/message.html
  - - meta
    - property: og:image
      content: /bindings/amazon-sqs/0.1.0/message.png
  - - meta
    - name: twitter:title
      content: Amazon SQS Message Binding v0.1.0 - Reserved for Future Use
  - - meta
    - name: twitter:description
      content: An overview of the AsyncAPI SQS message binding object for version 0.1.0. Learn why this binding is reserved for future message-level configurations.
---

# Amazon SQS Message Binding v0.1.0

The SQS message binding object is reserved for future use. It is intended to hold message-level configuration settings for SQS, but currently, it does not define any properties.

## Overview

While you can include an SQS message binding in your AsyncAPI document, it serves only as a placeholder. There are no SQS-specific message properties to configure in this version of the binding.

## Message Properties

This binding object is currently empty and has no properties other than `bindingVersion`.

| Property | Type | Description |
|---|---|---|
| `bindingVersion`| string | The version of this binding. For `v0.1.0`, this MUST be `0.1.0`. |

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
        bindingVersion: '0.1.0'
```

## Migration Guide to v0.2.0

There are no breaking changes when migrating from `v0.1.0` to `v0.2.0`, as the message binding object remains a placeholder in the newer version.