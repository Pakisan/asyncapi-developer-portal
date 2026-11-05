---
title: Apache Pulsar Message Binding v0.1.0 - Placeholder
description: Apache Pulsar message binding v0.1.0 placeholder for future message configurations. Reserved for Pulsar-specific message properties in event streaming.
ogImage: /bindings/apache-pulsar/0.1.0/message.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: Apache Pulsar message binding v0.1.0, AsyncAPI, placeholder, Pulsar message, event streaming, future configurations
heading: "Apache Pulsar Message Binding v0.1.0"
---

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