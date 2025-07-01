---
title: AMQP Server Binding v0.3.0 – Reserved for Future Use
description: Overview of AsyncAPI AMQP server binding v0.3.0. This placeholder is reserved for future server-level configurations in AMQP 0-9-1 integrations.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: AMQP server binding v0.3.0, AsyncAPI, RabbitMQ, server configuration, event-driven architecture, placeholder binding
  - - meta
    - property: og:title
      content: AMQP Server Binding v0.3.0 – Reserved for Future Use
  - - meta
    - property: og:description
      content: Overview of AsyncAPI AMQP server binding v0.3.0. This placeholder is reserved for future server-level configurations in AMQP 0-9-1 integrations.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/amqp/0.3.0/server.html
  - - meta
    - property: og:image
      content: /bindings/amqp/0.3.0/server.png
  - - meta
    - name: twitter:title
      content: AMQP Server Binding v0.3.0 – Reserved for Future Use
  - - meta
    - name: twitter:description
      content: Overview of AsyncAPI AMQP server binding v0.3.0. This placeholder is reserved for future server-level configurations in AMQP 0-9-1 integrations.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/amqp/0.3.0/server.html
---

# AMQP 0-9-1 Server Binding v0.3.0

The AMQP server binding object is reserved for future use. It is intended to hold server-level configuration settings for AMQP 0-9-1, but currently, it does not define any properties.

## Overview

While you can include an AMQP server binding in your AsyncAPI document, it serves only as a placeholder. There are no AMQP-specific server properties to configure in this version of the binding.

## Server Properties

This binding object is currently empty and has no properties other than `bindingVersion`.

| Property | Type | Description |
|---|---|---|
| `bindingVersion`| string | The version of this binding. For `v0.3.0`, this MUST be `0.3.0`. |

## Example

Although the binding has no effect, you can still include it in your server definition.

```yaml
servers:
  production:
    url: amqp://rabbitmq.example.com
    protocol: amqp
    bindings:
      amqp:
        bindingVersion: '0.3.0'
```

## Use Cases

As this binding is a placeholder, it has no direct use cases at this time. It is included in the specification to allow for future enhancements without introducing breaking changes.

## Versioning

This binding is for version `0.3.0` of the AMQP binding specification.

## Related Links

- [AMQP 0-9-1 Specification](https://www.rabbitmq.com/amqp-0-9-1-reference.html)
- [RabbitMQ Documentation](https://www.rabbitmq.com/documentation.html)
- [AsyncAPI AMQP Bindings Documentation](/bindings/amqp/)