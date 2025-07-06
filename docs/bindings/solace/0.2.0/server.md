---
title: Solace Server Binding v0.2.0 - Connection Configuration
description: Configure Solace server bindings for Message VPN connections. Define broker connections with Message VPN using AsyncAPI examples.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Solace server binding v0.2.0, AsyncAPI, Solace Message VPN, msgVpn, event mesh, event broker, connection management
  - - meta
    - property: og:title
      content: Solace Server Binding v0.2.0 - Connection Configuration
  - - meta
    - property: og:description
      content: Configure Solace server bindings for Message VPN connections. Define broker connections with Message VPN using AsyncAPI examples.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/solace/0.2.0/server.html
  - - meta
    - name: og:image
      content: /bindings/solace/0.2.0/server.png
  - - meta
    - name: twitter:title
      content: Solace Server Binding v0.2.0 - Connection Configuration
  - - meta
    - name: twitter:description
      content: Configure Solace server bindings for Message VPN connections. Define broker connections with Message VPN using AsyncAPI examples.
  - - link
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/solace/0.2.0/server.html
---

# Solace Server Binding v0.2.0

The Solace server binding v0.2.0 defines the connection to a Solace PubSub+ event broker by specifying the Message VPN to use.

## Overview

This binding is used to ensure a client application connects to the correct Message VPN to access its intended topics and queues.

> [!DANGER]
> This version of the binding contains a typo in the schema. The property is named `msvVpn` but should be `msgVpn`. Later versions correct this error.

## Server Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.2.0`). |
| `msvVpn` | string | **Yes** | The name of the Message VPN on the Solace broker. |

## Example

```yaml
servers:
  production-broker:
    url: solace.example.com:55555
    protocol: solace
    bindings:
      solace:
        bindingVersion: '0.2.0'
        msvVpn: 'prod-payments-vpn'
```

## Changelog

### Version 0.2.0
- `msvVpn` is the only property. Note the typo; later versions use `msgVpn`.