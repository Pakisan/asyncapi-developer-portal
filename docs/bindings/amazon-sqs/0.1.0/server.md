---
title: Amazon SQS Server Binding v0.1.0 - Reserved for Future Use
description: An overview of the AsyncAPI SQS server binding object for version 0.1.0. Learn why this binding is reserved for future server-level configurations.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Amazon SQS, AWS, AsyncAPI, server binding, SQS server, placeholder binding
  - - meta
    - property: og:title
      content: Amazon SQS Server Binding v0.1.0 - Reserved for Future Use
  - - meta
    - property: og:description
      content: An overview of the AsyncAPI SQS server binding object for version 0.1.0. Learn why this binding is reserved for future server-level configurations.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/amazon-sqs/0.1.0/server.html
  - - meta
    - property: og:image
      content: /bindings/amazon-sqs/0.1.0/server.png
  - - meta
    - name: twitter:title
      content: Amazon SQS Server Binding v0.1.0 - Reserved for Future Use
  - - meta
    - name: twitter:description
      content: An overview of the AsyncAPI SQS server binding object for version 0.1.0. Learn why this binding is reserved for future server-level configurations.
---

# Amazon SQS Server Binding v0.1.0

The SQS server binding object is reserved for future use. It is intended to hold server-level configuration settings for SQS, but currently, it does not define any properties.

## Overview

While you can include an SQS server binding in your AsyncAPI document, it serves only as a placeholder. There are no SQS-specific server properties to configure in this version of the binding.

## Server Properties

This binding object is currently empty and has no properties other than `bindingVersion`.

| Property | Type | Description |
|---|---|---|
| `bindingVersion`| string | The version of this binding. For `v0.1.0`, this MUST be `0.1.0`. |

## Example

Although the binding has no effect, you can still include it in your server definition.

```yaml
servers:
  production:
    protocol: sqs
    protocolVersion: '2012-11-05'
    bindings:
      sqs:
        bindingVersion: '0.1.0'
```

## Migration Guide to v0.2.0

There are no breaking changes when migrating from `v0.1.0` to `v0.2.0`, as the server binding object remains a placeholder in the newer version.