---
title: AsyncAPI HTTP Security Schemas - Authentication Methods for HTTP-based APIs
description: Learn about HTTP security schemas in AsyncAPI including Bearer tokens, API Keys, Basic, Digest, and other authentication methods for securing HTTP-based communications
head:
  - tag: meta
    attrs:
      name: keywords
      content: AsyncAPI, HTTP security, Bearer authentication, API Key, Basic authentication, Digest authentication, JWT tokens, HTTP authentication, REST API security, WebSocket security, secure API access
heading: "HTTP Security"
---

## What is HTTP Security Schema in AsyncAPI?

HTTP Security Schema in AsyncAPI is a collection of authentication mechanisms that can be used to secure HTTP-based communications. It encompasses three main types of HTTP authentication:

1. **Bearer Authentication**: A token-based authentication scheme where the client sends a bearer token (typically a JWT) in the Authorization header.
2. **API Key Authentication**: A scheme where a unique identifier (key) is sent in HTTP headers, query parameters, or cookies.
3. **Non-Bearer Authentication**: Various HTTP authentication schemes including Basic, Digest, HOBA, Mutual, NTLM, Negotiate/SPNEGO, and SCRAM.

These security schemes provide different ways to authenticate clients in HTTP-based APIs and message brokers, allowing you to choose the most appropriate method based on your security requirements and constraints.

## When to Use HTTP Security Schema in AsyncAPI

HTTP Security Schema is suitable for:

- HTTP-based APIs and services that require authentication
- RESTful APIs integrated with AsyncAPI
- WebSocket connections that start with an HTTP handshake
- HTTP-based message brokers
- Microservices architectures using HTTP for communication
- APIs that need to leverage existing HTTP authentication infrastructure
- Systems where HTTP is the primary transport protocol
- Applications that need to support various authentication methods

The specific HTTP security scheme you choose depends on your security requirements:

- Use **Bearer Authentication** for token-based authentication, especially with OAuth 2.0 or JWT
- Use **API Key Authentication** for simple client identification and rate limiting
- Use **Basic Authentication** for simple username/password authentication
- Use **Digest Authentication** for improved security without sending passwords in clear text
- Use **Mutual Authentication** for high-security environments requiring client certificates
- Use **NTLM or Negotiate** for Windows-integrated authentication
- Use **SCRAM** for strong password-based authentication with salted hashing

## Examples

Here are examples of how to use different HTTP security schemes in AsyncAPI:

### Bearer Authentication Example

```json
{
  "type": "http",
  "scheme": "bearer",
  "bearerFormat": "JWT",
  "description": "JWT bearer token authentication"
}
```

### API Key Authentication Example

```json
{
  "type": "httpApiKey",
  "in": "header",
  "name": "X-API-Key",
  "description": "API Key for HTTP authentication"
}
```

### Basic Authentication Example

```json
{
  "type": "http",
  "scheme": "basic",
  "description": "Basic authentication with username and password"
}
```

### Digest Authentication Example

```json
{
  "type": "http",
  "scheme": "digest",
  "description": "Digest authentication with improved security"
}
```
