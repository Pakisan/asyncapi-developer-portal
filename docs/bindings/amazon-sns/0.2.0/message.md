---
title: Amazon SNS Message Binding v0.2.0 – Reserved for Future Use
description: Overview of AsyncAPI SNS message binding v0.2.0. This placeholder is reserved for future message-level configurations in AWS SNS integrations.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Amazon SNS message binding, AsyncAPI SNS v0.2.0, AWS SNS, message placeholder, event-driven architecture
  - - meta
    - property: og:title
      content: Amazon SNS Message Binding v0.2.0 – Reserved for Future Use
  - - meta
    - property: og:description
      content: Overview of AsyncAPI SNS message binding v0.2.0. This placeholder is reserved for future message-level configurations in AWS SNS integrations.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/amazon-sns/0.2.0/message.html
  - - meta
    - property: og:image
      content: /bindings/amazon-sns/0.2.0/message.png
  - - meta
    - name: twitter:title
      content: Amazon SNS Message Binding v0.2.0 – Reserved for Future Use
  - - meta
    - name: twitter:description
      content: Overview of AsyncAPI SNS message binding v0.2.0. This placeholder is reserved for future message-level configurations in AWS SNS integrations.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/amazon-sns/0.2.0/message.html
---

# Amazon SNS Message Binding v0.2.0

The SNS message binding object is reserved for future use. It is intended to hold message-level configuration settings for SNS, but currently, it does not define any properties.

## Overview

While you can include an SNS message binding in your AsyncAPI document, it serves only as a placeholder. There are no SNS-specific message properties to configure in this version of the binding.

## Message Properties

This binding object is currently empty and has no properties other than `bindingVersion`.

| Property | Type | Description |
|---|---|---|
| `bindingVersion`| string | The version of this binding. For `v0.2.0`, this MUST be `0.2.0`. |

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
      sns:
        bindingVersion: '0.2.0'
```

## Migration from v0.1.0

There are no breaking changes when migrating from `v0.1.0` to `v0.2.0`, as the message binding object remains a placeholder in both versions.