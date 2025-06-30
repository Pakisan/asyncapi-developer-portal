---
title: Apache Pulsar Server Binding v0.1.0 - Tenant Configuration
description: This document details v0.1.0 of the Apache Pulsar server binding. Learn to configure the Pulsar tenant for a server connection.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Apache Pulsar server binding, AsyncAPI, Pulsar tenant, multi-tenancy
  - - meta
    - property: og:title
      content: Apache Pulsar Server Binding v0.1.0 - Tenant Configuration
  - - meta
    - property: og:description
      content: This document details v0.1.0 of the Apache Pulsar server binding. Learn to configure the Pulsar tenant for a server connection.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/apache-pulsar/0.1.0/server.html
  - - meta
    - name: og:image
      content: /bindings/apache-pulsar/0.1.0/server.png
  - - meta
    - name: twitter:title
      content: Apache Pulsar Server Binding v0.1.0 - Tenant Configuration
  - - meta
    - name: twitter:description
      content: This document details v0.1.0 of the Apache Pulsar server binding. Learn to configure the Pulsar tenant for a server connection.
---

# Apache Pulsar Server Binding v0.1.0

The Apache Pulsar server binding is used to define the `tenant` for a connection to an Apache Pulsar cluster.

## Overview

Apache Pulsar is a multi-tenant system. A tenant is the top-level administrative unit, used to isolate resources for a specific team or product. This binding allows you to specify which tenant the application described in the AsyncAPI document belongs to.

The full, structured name of a Pulsar topic is `{persistence}://{tenant}/{namespace}/{topic}`. This binding defines the `tenant` part of that structure.

## Server Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`). |
| `tenant` | string | No | The Pulsar tenant. Defaults to `public`. |

## Example

This example defines a server connection for the `finance-department` tenant.

```yaml
servers:
  pulsar-prod:
    url: 'pulsar://pulsar.example.com:6650'
    protocol: pulsar
    bindings:
      pulsar:
        bindingVersion: '0.1.0'
        tenant: 'finance-department'
```

## Changelog

### Version 0.1.0
- Initial release of the Apache Pulsar server binding with the `tenant` property.