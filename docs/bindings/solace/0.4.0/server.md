---
title: Solace Server Binding v0.4.0 - Connection Configuration
description: Configure Solace server bindings for Message VPN connections. Define broker connections with Message VPN and client name using AsyncAPI.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: Solace server binding v0.4.0, AsyncAPI, Solace Message VPN, msgVpn, clientName, event mesh, event broker, connection management
  - - meta
    - property: og:title
      content: Solace Server Binding v0.4.0 - Connection Configuration
  - - meta
    - property: og:description
      content: Configure Solace server bindings for Message VPN connections. Define broker connections with Message VPN and client name using AsyncAPI.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/solace/0.4.0/server.html
  - - meta
    - name: og:image
      content: /bindings/solace/0.4.0/server.png
  - - meta
    - name: twitter:title
      content: Solace Server Binding v0.4.0 - Connection Configuration
  - - meta
    - name: twitter:description
      content: Configure Solace server bindings for Message VPN connections. Define broker connections with Message VPN and client name using AsyncAPI.
  - - meta
    - rel: canonical
      href: https://asyncapi.pavelon.dev/bindings/solace/0.4.0/server.html
---

# Solace Server Binding v0.4.0

The Solace server binding defines the connection details for a Solace PubSub+ event broker, specifically identifying the Message VPN (Virtual Private Network) to connect to.

## Overview

In Solace, a Message VPN is a virtual message broker within a single PubSub+ event broker instance. It provides a logically separate namespace for topics, queues, and client connections, which is essential for multi-tenancy and application isolation. This binding allows you to specify which Message VPN a client application should connect to.

## Server Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.4.0`). |
| `msgVpn` | string | **Yes** | The name of the Message VPN on the Solace broker. |
| `clientName` | string | No | A unique client name for the connection. |

## Property Details

### `msgVpn`

This is the most critical property in this binding. It specifies the name of the Message VPN that the client application will use. All topics and queues are scoped to a Message VPN, so this is required for a client to access the correct resources.

### `clientName`

This provides a specific, unique name for the client's connection to the broker. If specified, it must be a valid Solace topic name and no more than 160 bytes. This can be useful for monitoring and managing individual client connections on the broker.

## Example

### Connection to a Production Message VPN

This example defines a server connection to a Solace broker, specifying that the client must connect to the `prod-payments-vpn`.

```yaml
servers:
  production-broker:
    url: solace.example.com:55555
    protocol: solace
    description: Solace broker for all production traffic.
    bindings:
      solace:
        bindingVersion: '0.4.0'
        msgVpn: 'prod-payments-vpn'
```

## Changelog

### Version 0.4.0
- Added the `clientName` property for specifying a client identifier.
- `msgVpn` remains the core required property.