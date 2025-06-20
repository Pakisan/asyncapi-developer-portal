---
title: OAuth2 Security Schema
layout: doc
canonicalUrl: 'https://asyncapi.pavelon.dev/schemas/v3/security/oauth2/oauth2.html'
---

# {{ $frontmatter.title }}

## What is OAuth2 Security Schema in AsyncAPI?

OAuth2 is an authorization framework that enables third-party applications to obtain limited access to a user's account on an HTTP service. In AsyncAPI, OAuth2 security schemes provide a standardized way to define OAuth2-based authentication and authorization for message brokers and APIs.

OAuth2 in AsyncAPI supports four main types of authorization flows:

1. **Authorization Code Flow**: The most complete and secure flow, designed for server-side applications that can securely store client secrets.
2. **Client Credentials Flow**: Designed for server-to-server authentication where no user interaction is involved.
3. **Implicit Flow**: Simplified flow designed for browser-based applications or mobile apps that cannot securely store client secrets.
4. **Password Flow**: Allows direct authentication using username and password, suitable for trusted first-party applications.

Each of these flows has different security characteristics and is suitable for different use cases.

## When to Use OAuth2 Security Schema in AsyncAPI

OAuth2 security schemes in AsyncAPI are appropriate when:

- **Delegated Authorization**: You need to allow third-party applications to access resources on behalf of users
- **Fine-grained Access Control**: You need to control access using scopes that define specific permissions
- **Modern Authentication**: You want to implement a modern, standardized authentication framework
- **Single Sign-On**: You need to integrate with existing OAuth2-based SSO solutions
- **Token-based Security**: You want to use short-lived access tokens with optional refresh tokens
- **Multiple Client Types**: Your API needs to support different types of clients (web, mobile, server)
- **User Consent**: You want users to explicitly grant permissions to applications
- **Enterprise Integration**: You need to integrate with enterprise identity providers
- **Microservices Architecture**: You're building a microservices ecosystem with centralized authentication

The specific OAuth2 flow you choose depends on your application type and security requirements:

- Use **Authorization Code Flow** for server-side web applications that can securely store client secrets
- Use **Client Credentials Flow** for server-to-server communication with no user involvement
- Use **Implicit Flow** for browser-based applications without a backend (though Authorization Code Flow with PKCE is now preferred)
- Use **Password Flow** for trusted first-party applications where collecting credentials directly is acceptable

## Examples

Here's how to define an OAuth2 security scheme in AsyncAPI that supports multiple flows:

```json
{
  "type": "oauth2",
  "flows": {
    "authorizationCode": {
      "authorizationUrl": "https://auth.example.com/authorize",
      "tokenUrl": "https://auth.example.com/token",
      "refreshUrl": "https://auth.example.com/refresh",
      "availableScopes": {
        "read:messages": "Read messages from the broker",
        "write:messages": "Write messages to the broker"
      }
    },
    "clientCredentials": {
      "tokenUrl": "https://auth.example.com/token",
      "availableScopes": {
        "read:messages": "Read messages from the broker",
        "write:messages": "Write messages to the broker"
      }
    }
  },
  "description": "OAuth2 authentication for AsyncAPI services"
}
```

When you want to use a specific OAuth2 flow, you can define just that flow:

### Authorization Code Flow Example

```json
{
  "type": "oauth2",
  "flows": {
    "authorizationCode": {
      "authorizationUrl": "https://auth.example.com/authorize",
      "tokenUrl": "https://auth.example.com/token",
      "refreshUrl": "https://auth.example.com/refresh",
      "availableScopes": {
        "read:messages": "Read messages from the broker",
        "write:messages": "Write messages to the broker"
      }
    }
  },
  "description": "OAuth2 Authorization Code flow for secure API access"
}
```

### Client Credentials Flow Example

```json
{
  "type": "oauth2",
  "flows": {
    "clientCredentials": {
      "tokenUrl": "https://auth.example.com/token",
      "availableScopes": {
        "api:read": "Read access to API resources",
        "api:write": "Write access to API resources"
      }
    }
  },
  "description": "OAuth2 Client Credentials flow for server-to-server authentication"
}
```

### Implicit Flow Example

```json
{
  "type": "oauth2",
  "flows": {
    "implicit": {
      "authorizationUrl": "https://auth.example.com/authorize",
      "availableScopes": {
        "read:messages": "Read messages from the broker",
        "write:messages": "Write messages to the broker"
      }
    }
  },
  "description": "OAuth2 Implicit flow for browser-based applications"
}
```

### Password Flow Example

```json
{
  "type": "oauth2",
  "flows": {
    "password": {
      "tokenUrl": "https://auth.example.com/token",
      "refreshUrl": "https://auth.example.com/refresh",
      "availableScopes": {
        "read:messages": "Read messages from the broker",
        "write:messages": "Write messages to the broker"
      }
    }
  },
  "description": "OAuth2 Password flow for trusted first-party applications"
}
```

## Implementation Considerations

When implementing OAuth2 authentication in your AsyncAPI-defined services:

1. **Security First**: Always use HTTPS for all OAuth2-related endpoints
2. **Flow Selection**: Choose the appropriate OAuth2 flow based on your client type and security requirements
3. **Scope Definition**: Define clear, granular scopes that follow the principle of least privilege
4. **Token Management**: Implement proper token validation, expiration, and refresh mechanisms
5. **Client Registration**: Establish a secure process for client registration and credential management
6. **Error Handling**: Provide clear error messages for authentication failures
7. **User Experience**: Design a smooth authentication experience with clear permission requests
8. **Token Storage**: Ensure secure storage of tokens on both client and server sides
9. **Revocation**: Implement token revocation capabilities for security incidents

## Related Documentation

For more detailed information about specific OAuth2 flows, refer to:

- [Authorization Code OAuth Flow](./flows/authorizationCodeOAuthFlow.md)
- [Client Credentials OAuth Flow](./flows/clientCredentialsOAuthFlow.md)
- [Implicit OAuth Flow](./flows/implicitOAuthFlow.md)
- [Password OAuth Flow](./flows/passwordOAuthFlow.md)
- [OAuth2 Scopes](./oauth2Scopes.md)

## AsyncAPI Schema for OAuth2 Security Schema

The AsyncAPI specification for OAuth2 security follows this JSON Schema:

```json
{
  "type": "object",
  "required": [ "type", "flows" ],
  "properties": {
    "description": {
      "description": "A short description for security scheme.",
      "type": "string"
    },
    "type": {
      "description": "The type of the security scheme.",
      "type": "string",
      "enum": [ "oauth2" ]
    },
    "flows": {
      "type": "object",
      "properties": {
        "authorizationCode": {
          "$ref": "https://asyncapi.pavelon.dev/schemas/v3/security/oauth2/flows/authorizationCodeOAuthFlow.json"
        },
        "clientCredentials": {
          "$ref": "https://asyncapi.pavelon.dev/schemas/v3/security/oauth2/flows/clientCredentialsOAuthFlow.json"
        },
        "implicit": {
          "$ref": "https://asyncapi.pavelon.dev/schemas/v3/security/oauth2/flows/implicitOAuthFlow.json"
        },
        "password": {
          "$ref": "https://asyncapi.pavelon.dev/schemas/v3/security/oauth2/flows/passwordOAuthFlow.json"
        }
      },
      "additionalProperties": false
    },
    "scopes": {
      "description": "List of the needed scope names.",
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "patternProperties": {
    "^x-[\\w\\d\\.\\x2d_]+$": true
  },
  "additionalProperties": false
}
```

This schema defines an OAuth2 security scheme with support for all four standard OAuth2 flows, each with its own configuration requirements.