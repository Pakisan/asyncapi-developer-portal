---
title: HTTP Bindings - AsyncAPI Webhooks & APIs
description: Master AsyncAPI HTTP bindings for webhooks and APIs. Define channels, operations, and messages for standardized event-driven and synchronous interactions.
ogImage: /bindings/http/http.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: HTTP bindings, AsyncAPI, webhooks, REST API, event-driven architecture, synchronous interactions
heading: "HTTP Bindings"
---

While AsyncAPI is primarily designed for asynchronous, event-driven architectures, many systems include synchronous, request/response interactions over HTTP. This is especially common for systems that use webhooks to deliver events. The HTTP bindings for AsyncAPI provide a standardized way to describe these interactions.

## HTTP Protocol Overview

HTTP (Hypertext Transfer Protocol) is the foundation of data communication for the World Wide Web. It is a client-server protocol where requests are initiated by the recipient, usually a Web browser.

Key concepts for these bindings include:
- **Webhooks**: A common pattern where a server sends an HTTP `POST` request to a client-specified URL to notify it of an event. This is a way to achieve "push" behavior over HTTP.
- **Request/Response**: The classic synchronous pattern where a client sends a request and waits for a response from the server.
- **Methods**: The action to be performed (e.g., `GET`, `POST`, `PUT`, `DELETE`).
- **Headers**: Metadata sent with a request or response.
- **Query Parameters**: Data sent in the URL to specify resources or options.
- **Status Codes**: A three-digit code indicating the result of a request (e.g., `200` OK, `404` Not Found, `500` Internal Server Error).

## AsyncAPI HTTP Bindings

The HTTP bindings allow you to map AsyncAPI concepts to synchronous HTTP interactions, making it possible to document your entire architecture, both async and sync, in one place.

### Binding Types

| Binding Type | Purpose | Description |
|--------------|---------|-------------|
| **Channel Binding** | (Placeholder) | Marks the channel as an HTTP endpoint. |
| **Operation Binding** | Request Configuration | Defines the HTTP method (`GET`, `POST`, etc.) and the schema for URL query parameters. |
| **Message Binding** | Header & Status Code Configuration | Defines the schema for HTTP headers and the expected HTTP status code for a response message. |
| **Server Binding** | (Placeholder) | Marks the server as an HTTP-based server. |

## Core HTTP Concepts in AsyncAPI

### Defining a Webhook

A webhook can be modeled as a `publish` operation on a channel. The `operation` binding specifies the `method` (usually `POST`), and the `message` binding defines the `headers` and payload of the webhook.

```yaml
operations:
  receiveUserSignup:
    action: send
    channel:
      $ref: '#/channels/userSignupWebhook'
    bindings:
      http:
        method: 'POST'
```

### Defining a Request/Response Endpoint

A request/response API endpoint can be modeled as a `subscribe` operation with a reply.
- The `operation` binding defines the request method (`GET`) and any `query` parameters.
- The `reply` section points to a `message` whose `bindings` define the expected `statusCode` and response `headers`.

```yaml
operations:
  getUserById:
    action: receive
    channel:
      $ref: '#/channels/users'
    bindings:
      http:
        method: 'GET'
        query:
          type: object
          properties:
            id:
              type: string
    reply:
      messages:
        - $ref: '#/messages/userResponse'
```
