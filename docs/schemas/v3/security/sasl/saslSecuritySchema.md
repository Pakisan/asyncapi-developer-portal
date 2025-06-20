---
title: SASL Security Schema
layout: doc
---

# {{ $frontmatter.title }}

## What is SASL Security Schema?

SASL (Simple Authentication and Security Layer) is a framework for authentication and data security in Internet protocols. It decouples authentication mechanisms from application protocols, allowing any authentication mechanism supported by SASL to be used in any application protocol that uses SASL.

In AsyncAPI, SASL security schemes provide a standardized way to define authentication for message brokers and APIs that support SASL mechanisms. AsyncAPI supports three main types of SASL authentication:

1. **SASL Plain**: Simple username/password authentication with credentials sent in plaintext
2. **SASL SCRAM**: Salted Challenge Response Authentication Mechanism, providing stronger security with SHA-256 or SHA-512 hashing
3. **SASL GSS-API**: Generic Security Services API, typically used with Kerberos for enterprise-level authentication

Each of these mechanisms offers different security levels and is suitable for different use cases.

## When to Use SASL Security Schema in AsyncAPI

SASL security schemes in AsyncAPI are appropriate when:

- **Connecting to Message Brokers**: Many message brokers like Apache Kafka, RabbitMQ, and ActiveMQ support SASL authentication
- **Standardized Authentication**: You need a well-defined, standardized authentication protocol
- **Flexibility**: Your system needs to support multiple authentication mechanisms
- **Protocol Compatibility**: You're working with protocols that natively support SASL (MQTT, AMQP, Kafka)
- **Enterprise Integration**: You need to integrate with enterprise authentication systems like Kerberos
- **Varying Security Requirements**: Different parts of your system have different security needs

The specific SASL mechanism you choose depends on your security requirements:

- Use **SASL Plain** for simple scenarios with transport layer security (TLS)
- Use **SASL SCRAM** for stronger password-based authentication without Kerberos
- Use **SASL GSS-API** for enterprise environments with Kerberos infrastructure

## Examples

Here's how to define a SASL security scheme in AsyncAPI that allows any of the supported SASL mechanisms:

```json
{
  "saslAuth": {
    "type": "sasl",
    "description": "SASL authentication for messaging"
  }
}
```

When you need to specify a particular SASL mechanism, you can use the specific security scheme:

### SASL Plain Example

```json
{
  "saslPlainAuth": {
    "type": "plain",
    "description": "Username and password authentication using SASL Plain"
  }
}
```

### SASL SCRAM Example

```json
{
  "saslScramAuth": {
    "type": "scramSha256",
    "description": "SCRAM-SHA-256 authentication for secure messaging"
  }
}
```

### SASL GSS-API Example

```json
{
  "saslGssapiAuth": {
    "type": "gssapi",
    "description": "Kerberos-based authentication using SASL GSS-API"
  }
}
```

## Implementation Considerations

When implementing SASL authentication in your AsyncAPI-defined services:

1. **Transport Security**: Always use TLS/SSL with SASL to protect the authentication exchange
2. **Mechanism Selection**: Choose the appropriate mechanism based on your security requirements
3. **Client Configuration**: Ensure clients are properly configured with the correct SASL mechanism
4. **Server Setup**: Configure your message broker or server to support the required SASL mechanisms
5. **Credential Management**: Implement proper credential storage and management
6. **Error Handling**: Provide clear error messages for authentication failures

## Related Documentation

For more detailed information about specific SASL mechanisms, refer to:

- [SASL Plain Security Schema](./saslPlainSecuritySchema.md)
- [SASL SCRAM Security Schema](./saslScramSecuritySchema.md)
- [SASL GSS-API Security Schema](./saslGssapiSecuritySchema.md)

The AsyncAPI specification for SASL security follows this JSON Schema:

```json
{
  "oneOf": [
    {
      "$ref": "https://asyncapi.pavelon.dev/schemas/v3/security/sasl/saslPlainSecuritySchema.json"
    },
    {
      "$ref": "https://asyncapi.pavelon.dev/schemas/v3/security/sasl/saslScramSecuritySchema.json"
    },
    {
      "$ref": "https://asyncapi.pavelon.dev/schemas/v3/security/sasl/saslGssapiSecuritySchema.json"
    }
  ]
}
```