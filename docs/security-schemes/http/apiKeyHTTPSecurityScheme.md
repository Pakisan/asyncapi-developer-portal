---
title: API Key HTTP Security Scheme
layout: doc
---

# {{ $frontmatter.title }}

## What is API Key Authentication in HTTP?

API Key Authentication in HTTP is a security scheme that involves sending a unique identifier (key) with each HTTP request to authenticate the client. Unlike the basic API Key scheme, the HTTP variant specifically defines where in the HTTP request the key should be placed: in the headers, query parameters, or cookies.

This approach provides a simple yet effective way to identify and authenticate API clients. The API key serves as both a unique identifier and a secret token for authentication and authorization in HTTP-based communications.

## When to Use API Key Authentication in HTTP

API Key Authentication in HTTP is suitable for:

- RESTful APIs and HTTP-based services requiring simple authentication
- Microservices architectures where services communicate over HTTP
- Public APIs with rate limiting requirements
- Internal or private HTTP APIs with limited access
- Web applications that need to authenticate third-party services
- Scenarios where you need to track API usage by different clients
- Development and testing environments for HTTP services

## When Not to Use API Key Authentication in HTTP

API Key Authentication in HTTP is not recommended for:

- High-security applications handling sensitive data
- Public-facing APIs that require strong user authentication
- Scenarios requiring user-specific permissions or roles
- Applications where you need to verify the identity of the end-user
- Production environments with strict security requirements
- Applications requiring OAuth flows or delegated authentication
- Scenarios where the API key might be exposed to client-side code

## Pros and Cons

### Pros

- **Simplicity**: Easy to implement and use in HTTP-based services
- **Flexibility**: Can be placed in headers, query parameters, or cookies
- **Low overhead**: Minimal processing required for validation
- **Stateless**: No need to maintain session information
- **Revocable**: Can be easily revoked and replaced if compromised
- **Rate limiting**: Can be used to enforce usage limits per client
- **Standard HTTP integration**: Works with existing HTTP infrastructure

### Cons

- **Limited security**: Less secure than OAuth 2.0 or other advanced authentication methods
- **No expiration**: Typically don't expire automatically, requiring manual rotation
- **No granular permissions**: Usually provide all-or-nothing access
- **Transmission risks**: Can be intercepted if not sent over HTTPS
- **Key management**: Requires proper key management practices
- **Query parameter exposure**: Keys in query parameters may be logged in server logs
- **Cookie limitations**: Cookie-based keys face same-origin policy restrictions

## Examples

Here's how to define an API Key HTTP security scheme in AsyncAPI with the key in the header:

```json
{
  "type": "httpApiKey",
  "in": "header",
  "name": "X-API-Key",
  "description": "API Key for HTTP authentication"
}
```

Another example with the API key in a query parameter:

```json
{
  "type": "httpApiKey",
  "in": "query",
  "name": "api_key",
  "description": "API Key passed as a query parameter"
}
```

And an example with the API key in a cookie:

```json
{
  "type": "httpApiKey",
  "in": "cookie",
  "name": "SessionKey",
  "description": "API Key stored in a cookie"
}
```

### Implementation Example

When implementing API Key HTTP authentication in your application:

1. Generate a secure, random API key for each client
2. Store the API key securely (hashed in a database)
3. Validate the API key with each HTTP request
4. Implement rate limiting based on the API key
5. Use HTTPS to protect the API key during transmission
6. For header-based keys, use a custom header (e.g., `X-API-Key`)
7. For query parameter keys, consider the security implications of keys appearing in logs
8. For cookie-based keys, set appropriate security attributes (HttpOnly, Secure, SameSite)

The AsyncAPI specification for API Key HTTP security follows this JSON Schema:

```json
{
  "type": "object",
  "required": [ "type", "name", "in" ],
  "properties": {
    "description": {
      "description": "A short description for security scheme. CommonMark syntax MAY be used for rich text representation.",
      "type": "string"
    },
    "type": {
      "description": "The type of the security scheme.",
      "type": "string",
      "enum": [ "httpApiKey" ]
    },
    "in": {
      "description": "The location of the API key",
      "type": "string",
      "enum": [ "header", "query", "cookie" ]
    },
    "name": {
      "description": "The name of the header, query or cookie parameter to be used.",
      "type": "string"
    }
  }
}
```