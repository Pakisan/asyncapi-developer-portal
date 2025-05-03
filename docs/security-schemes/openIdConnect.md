---
title: OpenID Connect Security Scheme
layout: doc
---

# {{ $frontmatter.title }}

## What is OpenID Connect?

OpenID Connect (OIDC) is an identity layer built on top of the OAuth 2.0 protocol. It allows clients to verify the identity of end-users based on the authentication performed by an authorization server, as well as to obtain basic profile information about the end-user in an interoperable and REST-like manner.

In the context of AsyncAPI, OpenID Connect can be used to secure message exchanges by ensuring that only authenticated and authorized clients can connect to and interact with message brokers or APIs.

## When to Use OpenID Connect

OpenID Connect is suitable for:

- Applications requiring user authentication and identity verification
- Single Sign-On (SSO) implementations across multiple applications
- Scenarios where you need to obtain user profile information
- Enterprise applications with complex authorization requirements
- Mobile and web applications that need secure authentication
- Microservices architectures requiring centralized authentication
- Applications integrating with existing identity providers (Google, Microsoft, etc.)

## When Not to Use OpenID Connect

OpenID Connect is not recommended for:

- Simple applications with minimal security requirements
- Scenarios where lightweight authentication is sufficient
- Resource-constrained environments with limited processing capabilities
- Applications where the added complexity of OIDC is not justified
- Internal services with no user-facing components
- Legacy systems that cannot easily integrate with modern authentication protocols

## Pros and Cons

### Pros

- **Standardized Protocol**: Based on widely adopted standards (OAuth 2.0)
- **Identity Verification**: Provides reliable user identity information
- **Centralized Authentication**: Single point for managing user credentials
- **Delegated Authorization**: Allows fine-grained access control
- **Token-Based**: Uses JWT tokens which are secure and contain claims about the user
- **Interoperability**: Works with many identity providers and platforms
- **Single Sign-On**: Enables seamless authentication across multiple applications

### Cons

- **Complexity**: More complex to implement than simpler authentication methods
- **Infrastructure Requirements**: Requires an identity provider or authorization server
- **Configuration Overhead**: Needs proper setup and configuration
- **Token Management**: Requires proper handling of tokens (validation, expiration, etc.)
- **Discovery Dependency**: Relies on the discovery endpoint being available
- **Learning Curve**: Steeper learning curve for developers unfamiliar with OAuth 2.0

## Examples

Here's how to define an OpenID Connect security scheme in AsyncAPI:

```json
{
  "type": "openIdConnect",
  "openIdConnectUrl": "https://example.com/.well-known/openid-configuration",
  "description": "OpenID Connect authentication for secure API access"
}
```

Another example with scopes:

```json
{
  "type": "openIdConnect",
  "openIdConnectUrl": "https://auth.example.org/.well-known/openid-configuration",
  "description": "Enterprise SSO using OpenID Connect",
  "scopes": ["profile", "email", "api:read", "api:write"]
}
```

### Implementation Example

When implementing OpenID Connect in your application:

1. Register your application with an OpenID Provider (OP) to obtain client credentials
2. Configure your application to use the OpenID Provider's discovery endpoint
3. Implement the authentication flow (Authorization Code, Implicit, or Hybrid)
4. Validate ID tokens received from the OpenID Provider
5. Extract user information from the ID token claims
6. Use access tokens for accessing protected resources
7. Implement proper token refresh and validation mechanisms

The AsyncAPI specification for OpenID Connect security follows this JSON Schema:

```json
{
  "type": "object",
  "required": [ "type", "openIdConnectUrl" ],
  "properties": {
    "description": {
      "description": "A short description for security scheme. CommonMark syntax MAY be used for rich text representation.",
      "type": "string"
    },
    "type": {
      "description": "The type of the security scheme.",
      "type": "string",
      "enum": [ "openIdConnect" ]
    },
    "openIdConnectUrl": {
      "description": "OpenId Connect URL to discover OAuth2 configuration values. This MUST be in the form of an absolute URL.",
      "type": "string",
      "format": "uri"
    },
    "scopes": {
      "description": "List of the needed scope names. An empty array means no scopes are needed.",
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}
```