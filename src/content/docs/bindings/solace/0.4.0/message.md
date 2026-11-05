---
title: Solace Message Binding v0.4.0 - Message Configuration
description: Configure Solace message bindings for message properties. Define Solace-specific message attributes with AsyncAPI examples and best practices.
ogImage: /bindings/solace/0.4.0/message.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: Solace message binding v0.4.0, AsyncAPI, placeholder, event mesh, event-driven architecture, message properties
heading: "Solace Message Binding v0.4.0"
---

The Solace message binding is reserved for defining properties that are specific to a Solace message.

## Overview

As of `v0.4.0`, this binding is a placeholder and does not contain any properties. Its presence on a message is for informational purposes, indicating that the message is part of a Solace-based API.

Future versions of this binding may include properties to define Solace-specific message attributes, such as user properties or other metadata that can be attached to a message.

## Message Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.4.0`). |

## Example

This example shows a message defined with the placeholder Solace message binding.

```yaml
messages:
  userSignedUp:
    payload:
      type: object
      properties:
        userId:
          type: string
        signupDate:
          type: string
          format: date-time
    bindings:
      solace:
        bindingVersion: '0.4.0'
```

## Changelog

### Version 0.4.0
- The binding remains a placeholder, consistent with previous versions.