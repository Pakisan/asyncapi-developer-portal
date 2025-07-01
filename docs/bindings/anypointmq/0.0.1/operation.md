---
title: Anypoint MQ Operation Binding v0.0.1 – Reserved for Future Use
description: The Anypoint MQ operation binding v0.0.1 is reserved for future enhancements and does not require configuration. Learn about its placeholder role for MuleSoft integrations using AsyncAPI.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Anypoint MQ operation binding, AsyncAPI, MuleSoft, v0.0.1, future use, message publishing, message consuming
  - - meta
    - property: og:title
      content: Anypoint MQ Operation Binding v0.0.1 – Reserved for Future Use
  - - meta
    - property: og:description
      content: The Anypoint MQ operation binding v0.0.1 is reserved for future enhancements and does not require configuration. Learn about its placeholder role for MuleSoft integrations using AsyncAPI.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/anypointmq/0.0.1/operation.html
  - - meta
    - name: og:image
      content: /bindings/anypointmq/0.0.1/operation.png
  - - meta
    - name: twitter:title
      content: Anypoint MQ Operation Binding v0.0.1 – Reserved for Future Use
  - - meta
    - name: twitter:description
      content: The Anypoint MQ operation binding v0.0.1 is reserved for future enhancements and does not require configuration. Learn about its placeholder role for MuleSoft integrations using AsyncAPI.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/anypointmq/0.0.1/operation.html
---

# Anypoint MQ Operation Binding v0.0.1

The Anypoint MQ operation binding is currently reserved for future use and does not require any configuration.

## Overview

This binding is intended to provide Anypoint MQ-specific information for an operation, which can represent either a message publishing or consuming action. As of version `0.0.1`, there are no specific properties to configure.

## Operation Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | The version of the Anypoint MQ operation binding. The value must be `0.0.1`. |

## Example

While there are no operational properties to set, you must still include the binding object if you want to specify the `bindingVersion`.

```yaml
operations:
  send-user-signup:
    action: send
    channel:
      $ref: '#/channels/user-signup'
    bindings:
      anypointmq:
        bindingVersion: '0.0.1'
```

## Future Enhancements

In the future, this binding may be extended to include properties that control how messages are published or consumed in Anypoint MQ, such as acknowledgment modes or other quality-of-service settings. For now, it serves as a placeholder for this purpose.
