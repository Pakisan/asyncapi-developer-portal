---
title: IBM MQ Server Binding v0.1.0 - Queue Manager Connection
description: This document details the v0.1.0 of the IBM MQ server binding. Learn to configure queue manager connections, including high-availability (HA), security, and heartbeat settings.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: IBM MQ server binding, AsyncAPI, IBM MQ queue manager, CCDT, high availability, HA, cipherSpec, heartbeat, enterprise messaging
  - - meta
    - property: og:title
      content: IBM MQ Server Binding v0.1.0 - Queue Manager Connection
  - - meta
    - property: og:description
      content: This document details the v0.1.0 of the IBM MQ server binding. Learn to configure queue manager connections, including high-availability (HA), security, and heartbeat settings.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/ibmmq/0.1.0/server.html
  - - meta
    - name: og:image
      content: /bindings/ibmmq/0.1.0/server.png
  - - meta
    - name: twitter:title
      content: IBM MQ Server Binding v0.1.0 - Queue Manager Connection
  - - meta
    - name: twitter:description
      content: This document details the v0.1.0 of the IBM MQ server binding. Learn to configure queue manager connections, including high-availability (HA), security, and heartbeat settings.
---

# IBM MQ Server Binding v0.1.0

The IBM MQ server binding defines the connection details for an IBM MQ queue manager, including support for high-availability (HA) configurations.

## Overview

This binding object provides a way to specify how a client application should connect to one or more queue managers. It is crucial for defining HA topologies, where an application can connect to a group of queue managers for workload balancing and automatic failover.

## Server Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`). |
| `groupId` | string | No | Defines a logical group of queue managers for HA. |
| `ccdtQueueManagerName` | string | No | The name of the queue manager in the CCDT file to connect to. Defaults to `*` (any). |
| `cipherSpec` | string | No | The recommended TLS cipher specification to use for the connection. |
| `multiEndpointServer` | boolean | No | If `true`, indicates that messages can be processed on any queue manager in the group. Defaults to `false`. |
| `heartBeatInterval` | integer | No | The heartbeat interval in seconds. Defaults to `300`. |

## Property Details

### `groupId`

This property is key to defining an HA group. Multiple server objects with the same `groupId` are treated as a single logical connection. This is used to represent a multi-instance queue manager or a cluster of queue managers that a client can connect to.

### `ccdtQueueManagerName`

When using a Client Channel Definition Table (CCDT), this specifies the name of the queue manager definition within the CCDT file that the client should use. A value of `*` means the client can connect to any queue manager in the CCDT that matches the `groupId`.

### `cipherSpec`

Specifies the required cipher for establishing a secure TLS connection (e.g., `ANY_TLS12_OR_HIGHER`). This is essential for defining the security requirements of the connection.

### `multiEndpointServer`

Set this to `true` for workload-balanced clusters where a message can be processed by any queue manager in the group. If message affinity or strict ordering is required, this should be `false`, indicating the client needs to connect to a specific instance.

### `heartBeatInterval`

Defines the interval (in seconds) for the client to send a heartbeat to the queue manager during periods of inactivity to keep the connection alive. A value of `0` disables heartbeats.

## Example

### High-Availability Group Definition

This example defines two server instances that are part of the same logical group (`PAYMENT_PROCESSING_GROUP`). This tells the client application that it can connect to either instance for processing payments, likely using a CCDT for connection details. The connection requires a strong TLS cipher.

```yaml
servers:
  qmgr-instance-a:
    url: qma.example.com:1414
    protocol: ibmmq
    bindings:
      ibmmq:
        bindingVersion: '0.1.0'
        groupId: 'PAYMENT_PROCESSING_GROUP'
        cipherSpec: 'ANY_TLS12_OR_HIGHER'

  qmgr-instance-b:
    url: qmb.example.com:1414
    protocol: ibmmq
    bindings:
      ibmmq:
        bindingVersion: '0.1.0'
        groupId: 'PAYMENT_PROCESSING_GROUP'
        cipherSpec: 'ANY_TLS12_OR_HIGHER'
```

## Changelog

### Version 0.1.0
- Initial release of the IBM MQ server binding.
- Added properties for defining queue manager connections, with a focus on high-availability (`groupId`) and security (`cipherSpec`).