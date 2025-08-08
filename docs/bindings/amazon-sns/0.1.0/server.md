---
title: Amazon SNS Server Binding v0.1.0 – Reserved for Future Use
description: Overview of AsyncAPI SNS server binding v0.1.0. This placeholder is reserved for future server-level configurations in AWS SNS integrations.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Amazon SNS server binding, AsyncAPI SNS v0.1.0, AWS SNS, server placeholder, event-driven architecture
  - - meta
    - property: og:title
      content: Amazon SNS Server Binding v0.1.0 – Reserved for Future Use
  - - meta
    - property: og:description
      content: Overview of AsyncAPI SNS server binding v0.1.0. This placeholder is reserved for future server-level configurations in AWS SNS integrations.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/amazon-sns/0.1.0/server.html
  - - meta
    - property: og:image
      content: /bindings/amazon-sns/0.1.0/server.png
  - - meta
    - name: twitter:title
      content: Amazon SNS Server Binding v0.1.0 – Reserved for Future Use
  - - meta
    - name: twitter:description
      content: Overview of AsyncAPI SNS server binding v0.1.0. This placeholder is reserved for future server-level configurations in AWS SNS integrations.
---

# Amazon SNS Server Binding v0.1.0

The SNS server binding object is reserved for future use. It is intended to hold server-level configuration settings for SNS, but currently, it does not define any properties.

## Overview

While you can include an SNS server binding in your AsyncAPI document, it serves only as a placeholder. There are no SNS-specific server properties to configure in this version of the binding.

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
    protocol: sns
    protocolVersion: '2012-11-05'
    bindings:
      sns:
        bindingVersion: '0.1.0'
```

## Migration Guide to v0.2.0

There are no breaking changes when migrating from `v0.1.0` to `v0.2.0`, as the server binding object remains a placeholder in both versions.