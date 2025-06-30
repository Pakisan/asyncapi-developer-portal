---
title: Apache Pulsar Message Binding v0.1.0 - Placeholder
description: This document details v0.1.0 of the Apache Pulsar message binding. This version is a placeholder reserved for future Pulsar-specific message property configurations.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Apache Pulsar message binding, AsyncAPI, placeholder, Pulsar message
  - - meta
    - property: og:title
      content: Apache Pulsar Message Binding v0.1.0 - Placeholder
  - - meta
    - property: og:description
      content: This document details v0.1.0 of the Apache Pulsar message binding. This version is a placeholder reserved for future Pulsar-specific message property configurations.
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
      content: This document details v0.1.0 of the Apache Pulsar message binding. This version is a placeholder reserved for future Pulsar-specific message property configurations.
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