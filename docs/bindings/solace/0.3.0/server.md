---
title: Solace Server Binding v0.3.0 - Message VPN Connection
description: This document details the legacy v0.3.0 of the Solace server binding. Learn to configure the connection to a Solace broker by specifying the Message VPN.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Solace server binding, legacy, AsyncAPI, Solace Message VPN, msgVpn, event mesh, event broker, event-driven architecture
  - - meta
    - property: og:title
      content: Solace Server Binding v0.3.0 - Message VPN Connection
  - - meta
    - property: og:description
      content: This document details the legacy v0.3.0 of the Solace server binding. Learn to configure the connection to a Solace broker by specifying the Message VPN.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/solace/0.3.0/server.html
  - - meta
    - name: og:image
      content: /bindings/solace/0.3.0/server.png
  - - meta
    - name: twitter:title
      content: Solace Server Binding v0.3.0 - Message VPN Connection
  - - meta
    - name: twitter:description
      content: This document details the legacy v0.3.0 of the Solace server binding. Learn to configure the connection to a Solace broker by specifying the Message VPN.
---

# Solace Server Binding v0.3.0

The Solace server binding v0.3.0 defines the connection to a Solace PubSub+ event broker by specifying the Message VPN to use.

## Overview

A Message VPN provides a logically separate namespace on the broker. This binding is used to ensure a client application connects to the correct Message VPN to access its intended topics and queues.

## Server Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.3.0`). |
| `msgVpn` | string | **Yes** | The name of the Message VPN on the Solace broker. |

## Example

This example defines a server connection that targets the `prod-payments-vpn` Message VPN.

```yaml
servers:
  production-broker:
    url: solace.example.com:55555
    protocol: solace
    bindings:
      solace:
        bindingVersion: '0.3.0'
        msgVpn: 'prod-payments-vpn'
```

## Changelog

### Version 0.3.0
- `msgVpn` is the only property, establishing the connection target.