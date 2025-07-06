---
title: Apache Pulsar Message Binding v0.1.0 - Placeholder
description: Apache Pulsar message binding v0.1.0 placeholder for future message configurations. Reserved for Pulsar-specific message properties in event streaming.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Apache Pulsar message binding v0.1.0, AsyncAPI, placeholder, Pulsar message, event streaming, future configurations
  - - meta
    - property: og:title
      content: Apache Pulsar Message Binding v0.1.0 - Placeholder
  - - meta
    - property: og:description
      content: Apache Pulsar message binding v0.1.0 placeholder for future message configurations. Reserved for Pulsar-specific message properties in event streaming.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/apache-pulsar/0.1.0/message.html
  - - meta
    - name: og:image
      content: /bindings/apache-pulsar/0.1.0/message.png
  - - meta
    - name: twitter:title
      content: Apache Pulsar Message Binding v0.1.0 - Placeholder
  - - meta
    - name: twitter:description
      content: Apache Pulsar message binding v0.1.0 placeholder for future message configurations. Reserved for Pulsar-specific message properties in event streaming.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/apache-pulsar/0.1.0/message.html
---

# Apache Pulsar Message Binding v0.1.0

The Apache Pulsar message binding is reserved for defining properties that are specific to an Apache Pulsar message.

## Overview

As of `v0.1.0`, this binding is a placeholder and does not contain any properties. Its presence on an AsyncAPI message is for informational purposes, indicating that the message is part of an Apache Pulsar-based API.

Future versions may include properties for defining a message key, ordering key, or other Pulsar-specific message metadata.

## Message Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`). |

## Example

```yaml
messages:
  userSignup:
    payload:
      type: object
      properties:
        userId:
          type: string
        email:
          type: string
    bindings:
      pulsar:
        bindingVersion: '0.1.0'
```

## Changelog

### Version 0.1.0
- Initial placeholder release.