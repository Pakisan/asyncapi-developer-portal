---
title: Security Schema
layout: doc
---

# {{ $frontmatter.title }}

## What is Security Schema in AsyncAPI?

Security Schemas in AsyncAPI provide a standardized way to define authentication and authorization mechanisms for your asynchronous APIs. They allow you to specify how clients should authenticate with your API, ensuring that only authorized clients can access your services.

AsyncAPI supports a wide range of security schemes to accommodate different security requirements and use cases. These schemes can be applied to the entire API or to specific operations, giving you flexibility in how you secure your services.

The AsyncAPI specification includes the following security scheme types:

1. **User Password**: Simple username and password authentication
2. **API Key**: Authentication using a single secret key
3. **X.509**: Authentication using X.509 certificates
4. **Symmetric Encryption**: Encryption using a shared secret key
5. **Asymmetric Encryption**: Encryption using public/private key pairs
6. **HTTP**: HTTP-based authentication methods (Bearer, Basic, Digest, etc.)
7. **OAuth 2.0**: Token-based authorization framework
8. **OpenID Connect**: Authentication layer on top of OAuth 2.0
9. **SASL**: Simple Authentication and Security Layer for various protocols

Each security scheme type has its own specific properties and is suitable for different scenarios.

## When to Use Security Schema in AsyncAPI

Security Schemas in AsyncAPI are essential when:

- **Protecting Sensitive Data**: Ensuring that only authorized clients can access sensitive information
- **Controlling Access**: Limiting who can publish or subscribe to specific channels
- **Compliance Requirements**: Meeting regulatory requirements for data protection
- **User Authentication**: Identifying and verifying the identity of users or systems
- **Service-to-Service Communication**: Securing communication between microservices
- **Multi-tenant Systems**: Isolating data and operations between different tenants
- **Public APIs**: Exposing your API to external clients while maintaining security

The specific security scheme you choose depends on your requirements:

- Use **User Password** for simple username/password authentication
- Use **API Key** for straightforward client identification and simple authorization
- Use **X.509** for certificate-based authentication in high-security environments
- Use **Symmetric/Asymmetric Encryption** when message content encryption is required
- Use **HTTP** security schemes for HTTP-based APIs and WebSocket connections
- Use **OAuth 2.0** for delegated authorization and third-party application access
- Use **OpenID Connect** when you need authentication with identity information
- Use **SASL** for protocol-specific authentication mechanisms (Kafka, AMQP, etc.)

## Examples

Here are examples of how to use different security schemes in AsyncAPI:

### User Password Example

```json
{
  "userPasswordAuth": {
    "type": "userPassword",
    "description": "Basic username and password authentication"
  }
}
```

### API Key Example

```json
{
  "apiKeyAuth": {
    "type": "apiKey",
    "description": "API key authentication"
  }
}
```

### X.509 Example

```json
{
  "x509Auth": {
    "type": "X509",
    "description": "X.509 certificate authentication"
  }
}
```

### HTTP Bearer Example

```json
{
  "bearerAuth": {
    "type": "http",
    "scheme": "bearer",
    "bearerFormat": "JWT",
    "description": "JWT bearer token authentication"
  }
}
```

### OAuth 2.0 Example

```json
{
  "oauth2Auth": {
    "type": "oauth2",
    "flows": {
      "implicit": {
        "authorizationUrl": "https://example.com/oauth/authorize",
        "scopes": {
          "read:messages": "Read messages",
          "write:messages": "Write messages"
        }
      }
    },
    "description": "OAuth 2.0 authentication"
  }
}
```

### SASL Example

```json
{
  "saslAuth": {
    "type": "plain",
    "description": "SASL Plain authentication"
  }
}
```

## Implementation Considerations

When implementing security schemes in your AsyncAPI-defined services:

1. **Defense in Depth**: Don't rely solely on a single security mechanism
2. **Transport Security**: Always use TLS/SSL to encrypt communications
3. **Principle of Least Privilege**: Grant only the permissions necessary
4. **Token Management**: Implement proper token validation, expiration, and revocation
5. **Error Handling**: Provide clear but non-revealing error messages for authentication failures
6. **Logging and Monitoring**: Track authentication attempts and security events
7. **Regular Updates**: Keep security implementations up to date with patches
8. **Documentation**: Clearly document security requirements for API consumers

## Related Documentation

For more detailed information about specific security schemes, refer to:

- [User Password Security Schema](userPassword.md)
- [API Key Security Schema](apiKey.md)
- [X.509 Security Schema](X509.md)
- [Symmetric Encryption Security Schema](symmetricEncryption.md)
- [Asymmetric Encryption Security Schema](asymmetricEncryption.md)
- [HTTP Security Schema](http/httpSecuritySchema.md)
- [OAuth 2.0 Security Schema](oauth2/oauth2.md)
- [OpenID Connect Security Schema](openIdConnect.md)
- [SASL Security Schema](sasl/saslSecuritySchema.md)

The AsyncAPI specification for security schemes follows this JSON Schema:

```json
{
  "oneOf": [
    {
      "$ref": "https://asyncapi.pavelon.dev/schemas/v3/security/userPassword.json"
    },
    {
      "$ref": "https://asyncapi.pavelon.dev/schemas/v3/security/apiKey.json"
    },
    {
      "$ref": "https://asyncapi.pavelon.dev/schemas/v3/security/X509.json"
    },
    {
      "$ref": "https://asyncapi.pavelon.dev/schemas/v3/security/symmetricEncryption.json"
    },
    {
      "$ref": "https://asyncapi.pavelon.dev/schemas/v3/security/asymmetricEncryption.json"
    },
    {
      "$ref": "https://asyncapi.pavelon.dev/schemas/v3/security/http/httpSecuritySchema.json"
    },
    {
      "$ref": "https://asyncapi.pavelon.dev/schemas/v3/security/oauth2/oauth2.json"
    },
    {
      "$ref": "https://asyncapi.pavelon.dev/schemas/v3/security/openIdConnect.json"
    },
    {
      "$ref": "https://asyncapi.pavelon.dev/schemas/v3/security/sasl/saslSecuritySchema.json"
    }
  ]
}
```