---
title: AMQP 0-9-1 Server Binding v0.1.0 - Reserved for Future Use
description: An overview of the AsyncAPI AMQP server binding object for version 0.1.0. Learn why this binding is reserved for future server-level configurations in AMQP 0-9-1.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: AMQP server binding, AsyncAPI, RabbitMQ, server configuration, event-driven architecture, placeholder binding, legacy binding
  - - meta
    - property: og:title
      content: AMQP 0-9-1 Server Binding v0.1.0 - Reserved for Future Use
  - - meta
    - property: og:description
      content: An overview of the AsyncAPI AMQP server binding object for version 0.1.0. Learn why this binding is reserved for future server-level configurations in AMQP 0-9-1.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/amqp/0.1.0/server.html
  - - meta
    - property: og:image
      content: /bindings/amqp/0.1.0/server.png
  - - meta
    - name: twitter:title
      content: AMQP 0-9-1 Server Binding v0.1.0 - Reserved for Future Use
  - - meta
    - name: twitter:description
      content: An overview of the AsyncAPI AMQP server binding object for version 0.1.0. Learn why this binding is reserved for future server-level configurations in AMQP 0-9-1.
---

# AMQP 0-9-1 Server Binding v0.1.0

The AMQP server binding object is reserved for future use. It is intended to hold server-level configuration settings for AMQP 0-9-1, but currently, it does not define any properties.

## Overview

While you can include an AMQP server binding in your AsyncAPI document, it serves only as a placeholder. There are no AMQP-specific server properties to configure in this version of the binding.

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
    url: amqp://rabbitmq.example.com
    protocol: amqp
    bindings:
      amqp:
        bindingVersion: '0.1.0'
```

## Migration Guide to v0.2.0

No breaking changes were introduced between `v0.1.0` and `v0.2.0` of this binding. It is fully compatible with v0.2.0.