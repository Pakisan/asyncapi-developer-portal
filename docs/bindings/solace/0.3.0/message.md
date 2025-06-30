---
title: Solace Message Binding v0.3.0 - Placeholder
description: This document details the legacy v0.3.0 of the Solace message binding. It is recommended to use the latest version. This version is a placeholder reserved for future Solace-specific message properties.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Solace message binding, legacy, AsyncAPI, placeholder, event mesh, event-driven architecture
  - - meta
    - property: og:title
      content: Solace Message Binding v0.3.0 - Placeholder
  - - meta
    - property: og:description
      content: This document details the legacy v0.3.0 of the Solace message binding. It is recommended to use the latest version. This version is a placeholder reserved for future Solace-specific message properties.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/solace/0.3.0/message.html
  - - meta
    - name: og:image
      content: /bindings/solace/0.3.0/message.png
  - - meta
    - name: twitter:title
      content: Solace Message Binding v0.3.0 - Placeholder
  - - meta
    - name: twitter:description
      content: This document details the legacy v0.3.0 of the Solace message binding. It is recommended to use the latest version. This version is a placeholder reserved for future Solace-specific message properties.
---

# Solace Message Binding v0.3.0

The Solace message binding `v0.3.0` is a placeholder for defining properties specific to a Solace message.

## Overview

As of this version, the binding does not contain any properties. Its presence on a message is for informational purposes, indicating that the message is part of a Solace-based API.

## Message Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.3.0`). |

## Example

```yaml
messages:
  userSignedUp:
    payload:
      type: object
      properties:
        userId:
          type: string
    bindings:
      solace:
        bindingVersion: '0.3.0'
```

## Changelog

### Version 0.3.0
- The binding remains a placeholder.