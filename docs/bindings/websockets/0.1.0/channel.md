---
title: WebSockets Channel Binding v0.1.0 - Connection Establishment and Handshake Configuration
description: Learn how to configure WebSocket channel bindings using AsyncAPI v0.1.0. Define HTTP methods, headers, and query parameters for WebSocket handshake with comprehensive examples and best practices for real-time communication.
layout: doc
prev: true
next: true
head:
  - - meta
    - name: keywords
      content: WebSockets channel binding, AsyncAPI, WebSocket handshake, HTTP upgrade, connection establishment, real-time communication, bidirectional messaging, WebSocket protocol, HTTP headers, query parameters
  - - meta
    - property: og:title
      content: WebSockets Channel Binding v0.1.0 - Connection Establishment and Handshake Configuration
  - - meta
    - property: og:description
      content: Learn how to configure WebSocket channel bindings using AsyncAPI v0.1.0. Define HTTP methods, headers, and query parameters for WebSocket handshake with comprehensive examples and best practices for real-time communication.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/bindings/websockets/0.1.0/channel.html
  - - meta
    - name: og:image
      content: /bindings/websockets/0.1.0/channel.png
  - - meta
    - name: twitter:title
      content: WebSockets Channel Binding v0.1.0 - Connection Establishment and Handshake Configuration
  - - meta
    - name: twitter:description
      content: Learn how to configure WebSocket channel bindings using AsyncAPI v0.1.0. Define HTTP methods, headers, and query parameters for WebSocket handshake with comprehensive examples and best practices for real-time communication.
---

# WebSockets Channel Binding v0.1.0

The WebSockets channel binding defines how AsyncAPI channels map to WebSocket connections. Unlike other protocols that support multiple virtual channels, WebSockets represents a single persistent connection where the channel characteristics are determined by the HTTP handshake used to establish the WebSocket connection.

## Overview

WebSocket channel bindings configure the HTTP handshake process that establishes the WebSocket connection. The channel represents the connection itself, and its properties define how clients connect to the WebSocket server.

## Channel Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `method` | string | No | HTTP method for connection establishment (`GET` or `POST`) |
| `headers` | Schema Object | No | HTTP headers to use during handshake |
| `query` | Schema Object | No | Query parameters for connection URL |
| `bindingVersion` | string | No | Binding version (defaults to `0.1.0`) |

## Property Details

### Method

The HTTP method used to establish the WebSocket connection.

**Values:**
- `GET`: Standard WebSocket handshake using HTTP GET request
- `POST`: Alternative handshake using HTTP POST request

**Default:** `GET` (most common for WebSocket connections)

### Headers

A Schema object defining HTTP headers to include in the WebSocket handshake request.

**Requirements:**
- Must be of type `object`
- Must have a `properties` key
- Can reference external schemas

**Common Headers:**
- `Authorization`: Authentication tokens
- `User-Agent`: Client identification
- `Origin`: Cross-origin requests
- `Sec-WebSocket-Protocol`: Subprotocol selection

### Query

A Schema object defining query parameters to include in the WebSocket connection URL.

**Requirements:**
- Must be of type `object`
- Must have a `properties` key
- Can reference external schemas

**Common Parameters:**
- `clientId`: Unique client identifier
- `token`: Authentication tokens
- `version`: API version
- `encoding`: Message encoding format

## Examples

### Basic GET Connection

```yaml
channels:
  realTimeUpdates:
    bindings:
      websockets:
        method: GET
        bindingVersion: '0.1.0'
```

### Authenticated Connection with Headers

```yaml
channels:
  secureChat:
    bindings:
      websockets:
        method: GET
        headers:
          type: object
          properties:
            Authorization:
              type: string
              description: Bearer token for authentication
              pattern: '^Bearer [A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$'
            User-Agent:
              type: string
              description: Client application identifier
              default: 'MyWebSocketClient/1.0'
        bindingVersion: '0.1.0'
```

### Connection with Query Parameters

```yaml
channels:
  userNotifications:
    bindings:
      websockets:
        method: GET
        query:
          type: object
          properties:
            userId:
              type: string
              description: Unique user identifier
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$'
            clientVersion:
              type: string
              description: Client application version
              default: '1.0.0'
            encoding:
              type: string
              enum: ['json', 'msgpack', 'protobuf']
              default: 'json'
        bindingVersion: '0.1.0'
```

### POST Connection for Complex Handshakes

```yaml
channels:
  advancedConnection:
    bindings:
      websockets:
        method: POST
        headers:
          type: object
          properties:
            Content-Type:
              type: string
              default: 'application/json'
            X-Client-ID:
              type: string
              description: Client identifier
        query:
          type: object
          properties:
            sessionId:
              type: string
              description: Session identifier for reconnection
        bindingVersion: '0.1.0'
```

### Multi-Tenant Connection with Tenant ID

```yaml
channels:
  tenantEvents:
    bindings:
      websockets:
        method: GET
        headers:
          type: object
          properties:
            X-Tenant-ID:
              type: string
              description: Tenant identifier for multi-tenant applications
              pattern: '^[a-z0-9-]+$'
            Authorization:
              type: string
              description: Tenant-specific authentication token
        query:
          type: object
          properties:
            tenantId:
              type: string
              description: Alternative tenant identifier in query
            environment:
              type: string
              enum: ['development', 'staging', 'production']
              default: 'production'
        bindingVersion: '0.1.0'
```

### IoT Device Connection

```yaml
channels:
  deviceStream:
    bindings:
      websockets:
        method: GET
        headers:
          type: object
          properties:
            X-Device-ID:
              type: string
              description: IoT device identifier
              pattern: '^[A-Z0-9]{16}$'
            X-Device-Type:
              type: string
              enum: ['sensor', 'actuator', 'gateway']
              description: Type of IoT device
        query:
          type: object
          properties:
            deviceId:
              type: string
              description: Device identifier in query parameter
            protocol:
              type: string
              enum: ['mqtt', 'coap', 'http']
              default: 'mqtt'
            dataFormat:
              type: string
              enum: ['json', 'binary', 'text']
              default: 'json'
        bindingVersion: '0.1.0'
```

## Use Cases

### Real-Time Chat Application

```yaml
channels:
  chatRoom:
    bindings:
      websockets:
        method: GET
        headers:
          type: object
          properties:
            Authorization:
              type: string
              description: JWT token for user authentication
        query:
          type: object
          properties:
            roomId:
              type: string
              description: Chat room identifier
            userId:
              type: string
              description: User identifier
        bindingVersion: '0.1.0'
```

### Live Dashboard with Authentication

```yaml
channels:
  dashboardUpdates:
    bindings:
      websockets:
        method: GET
        headers:
          type: object
          properties:
            Authorization:
              type: string
              description: API key for dashboard access
            X-Dashboard-ID:
              type: string
              description: Dashboard identifier
        query:
          type: object
          properties:
            refreshRate:
              type: integer
              minimum: 1000
              maximum: 60000
              default: 5000
              description: Update frequency in milliseconds
        bindingVersion: '0.1.0'
```

### Gaming Session Connection

```yaml
channels:
  gameSession:
    bindings:
      websockets:
        method: GET
        headers:
          type: object
          properties:
            X-Player-ID:
              type: string
              description: Player identifier
            X-Game-Version:
              type: string
              description: Game client version
        query:
          type: object
          properties:
            sessionId:
              type: string
              description: Game session identifier
            gameId:
              type: string
              description: Game identifier
            latency:
              type: integer
              minimum: 0
              maximum: 1000
              description: Client latency in milliseconds
        bindingVersion: '0.1.0'
```

## Best Practices

### Connection Security
- Use HTTPS/WSS for production connections
- Implement proper authentication in headers
- Validate all query parameters
- Use secure token-based authentication

### Performance Optimization
- Minimize header and query parameter size
- Use appropriate HTTP methods (GET for simple, POST for complex)
- Implement connection pooling when possible
- Monitor connection establishment performance

### Error Handling
- Provide clear error messages for invalid parameters
- Implement graceful fallbacks for connection failures
- Handle authentication errors appropriately
- Log connection attempts for debugging

### Cross-Origin Considerations
- Configure CORS headers appropriately
- Validate Origin headers for security
- Handle cross-origin WebSocket connections
- Implement proper session management

## Changelog

### Version 0.1.0
- Initial release with full WebSocket channel binding support
- Support for GET and POST connection methods
- Configurable HTTP headers and query parameters
- Schema validation for all properties