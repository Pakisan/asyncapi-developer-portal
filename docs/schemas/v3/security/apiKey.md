---
title: API Key Security Schema
layout: doc
canonicalUrl: 'https://asyncapi.pavelon.dev/schemas/v3/security/apiKey.html'
---

# {{ $frontmatter.title }}

## What is an API Key?

An API Key is a simple security scheme that involves sending a unique identifier (key) with each request to authenticate the client. The API key is a token that a client provides when making API calls to identify itself. It serves as a unique identifier and a secret token for authentication and authorization.

API keys are typically sent in the request headers, query parameters, or as part of the request body. In the AsyncAPI specification, API keys can be sent in either the `user` or `password` fields.

## When to Use API Keys

API Keys are suitable for:

- Simple authentication scenarios
- Internal or private APIs with limited access
- APIs with low to moderate security requirements
- Scenarios where you need to identify the client but don't need user-specific permissions
- Development and testing environments

## When Not to Use API Keys

API Keys are not recommended for:

- High-security applications
- Public-facing APIs that handle sensitive data
- Scenarios requiring user-specific permissions
- Applications where you need to verify the identity of the end-user
- Production environments with strict security requirements

## Pros and Cons

### Pros

- **Simplicity**: Easy to implement and use
- **Low overhead**: Minimal processing required for validation
- **Stateless**: No need to maintain session information
- **Revocable**: Can be easily revoked and replaced if compromised
- **Rate limiting**: Can be used to enforce usage limits per client

### Cons

- **Limited security**: Less secure than OAuth 2.0 or other advanced authentication methods
- **No expiration**: Typically don't expire automatically, requiring manual rotation
- **No granular permissions**: Usually provide all-or-nothing access
- **Transmission risks**: Can be intercepted if not sent over HTTPS
- **Key management**: Requires proper key management practices

## Examples

Here's how to define an API Key security scheme in AsyncAPI:

```json
{
  "type": "apiKey",
  "in": "user",
  "description": "API Key for authentication"
}
```

In this example, the API key is sent in the `user` field.

Another example with the API key in the `password` field:

```json
{
  "type": "apiKey",
  "in": "password",
  "description": "API Key for service authentication"
}
```

### Implementation Example

When implementing API Key authentication in your application:

1. Generate a secure, random API key for each client
2. Store the API key securely (hashed in a database)
3. Validate the API key with each request
4. Implement rate limiting based on the API key
5. Provide a mechanism to revoke and regenerate keys

The AsyncAPI specification for API Key security follows this JSON Schema:

```json
{
  "type": "object",
  "required": [ "type", "in" ],
  "properties": {
    "description": {
      "description": "A short description for security scheme. CommonMark syntax MAY be used for rich text representation.",
      "type": "string"
    },
    "type": {
      "description": "The type of the security scheme",
      "type": "string",
      "enum": [ "apiKey" ]
    },
    "in": {
      "description": "The location of the API key.",
      "type": "string",
      "enum": [ "user", "password" ]
    }
  }
}
```