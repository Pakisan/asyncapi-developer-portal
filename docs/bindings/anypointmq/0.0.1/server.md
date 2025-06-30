---
title: Anypoint MQ Server Binding v0.0.1 - Reserved for Future Use
description: Documentation for the Anypoint MQ server binding v0.0.1 in AsyncAPI. This binding is currently reserved for future enhancements and does not contain any configuration properties.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Anypoint MQ, AsyncAPI, server binding, MuleSoft, future use, broker configuration
  - - meta
    - property: og:title
      content: Anypoint MQ Server Binding v0.0.1 - Reserved for Future Use
  - - meta
    - property: og:description
      content: Documentation for the Anypoint MQ server binding v0.0.1 in AsyncAPI. This binding is currently reserved for future enhancements and does not contain any configuration properties.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/anypointmq/0.0.1/server.html
  - - meta
    - name: og:image
      content: /bindings/anypointmq/0.0.1/server.png
  - - meta
    - name: twitter:title
      content: Anypoint MQ Server Binding v0.0.1 - Reserved for Future Use
  - - meta
    - name: twitter:description
      content: Documentation for the Anypoint MQ server binding v0.0.1 in AsyncAPI. This binding is currently reserved for future enhancements and does not contain any configuration properties.
---

# Anypoint MQ Server Binding v0.0.1

The Anypoint MQ server binding is currently reserved for future use and does not require any configuration.

## Overview

This binding is designed to hold Anypoint MQ-specific information related to the server configuration. In its current version, `0.0.1`, it serves as a placeholder and does not include any specific properties.

## Server Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | The version of the Anypoint MQ server binding. The value must be `0.0.1`. |

## Example

Although there are no server-specific properties to define, you can still include the binding object to explicitly state the `bindingVersion`.

```yaml
servers:
  production:
    url: 'https://mq-us-east-1.anypoint.mulesoft.com'
    protocol: 'anypointmq'
    bindings:
      anypointmq:
        bindingVersion: '0.0.1'
```

## Future Enhancements

Future versions of this binding might include properties for defining server-level configurations, such as connection settings, regional endpoints, or other parameters related to the Anypoint MQ broker.
