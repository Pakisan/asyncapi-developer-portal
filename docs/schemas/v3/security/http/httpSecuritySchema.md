---
title: HTTP Security Schema
layout: doc
canonicalUrl: 'https://asyncapi.pavelon.dev/schemas/v3/security/http/httpSecuritySchema.html'
---

# {{ $frontmatter.title }}

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

## AsyncAPI Schema for HTTP Security Schema

The AsyncAPI specification for HTTP security follows this JSON Schema:

```json
{
  "oneOf": [
    {
      "$ref": "https://asyncapi.pavelon.dev/schemas/v3/security/http/nonBearerHTTPSecuritySchema.json"
    },
    {
      "$ref": "https://asyncapi.pavelon.dev/schemas/v3/security/http/bearerHTTPSecuritySchema.json"
    },
    {
      "$ref": "https://asyncapi.pavelon.dev/schemas/v3/security/http/apiKeyHTTPSecuritySchema.json"
    }
  ]
}
```

This schema indicates that an HTTP security scheme must be one of the following:
- A non-Bearer HTTP security scheme (Basic, Digest, etc.)
- A Bearer HTTP security scheme
- An API Key HTTP security scheme

For more detailed information about each specific HTTP security scheme, refer to:
- [Bearer HTTP Security Schema](bearerHTTPSecuritySchema.md)
- [API Key HTTP Security Schema](apiKeyHTTPSecuritySchema.md)
- [Non-Bearer HTTP Security Schemas](nonBearerHTTPSecuritySchema.md)