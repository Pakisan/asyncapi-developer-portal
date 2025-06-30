---
title: AsyncAPI SASL GSS-API Security Schema - Kerberos-Based Enterprise Authentication
description: Learn how to implement SASL GSS-API authentication in AsyncAPI for enterprise-grade Kerberos-based security with single sign-on and mutual authentication
layout: doc
canonicalUrl: 'https://asyncapi.pavelon.dev/schemas/v3/security/sasl/saslGssapiSecuritySchema.html'
head:
  - - meta
    - name: keywords
      content: AsyncAPI, SASL GSS-API, Kerberos authentication, Generic Security Services, enterprise authentication, single sign-on, SSO, mutual authentication, Active Directory integration, Kafka security, AMQP security
  - - meta
    - property: og:title
      content: AsyncAPI SASL GSS-API Security Schema - Kerberos-Based Enterprise Authentication
  - - meta
    - property: og:description
      content: Learn how to implement SASL GSS-API authentication in AsyncAPI for enterprise-grade Kerberos-based security with single sign-on and mutual authentication
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/schemas/v3/security/sasl/saslGssapiSecuritySchema.html
  - - meta
    - name: twitter:title
      content: AsyncAPI SASL GSS-API Security Schema - Kerberos-Based Enterprise Authentication
  - - meta
    - name: twitter:description
      content: Learn how to implement SASL GSS-API authentication in AsyncAPI for enterprise-grade Kerberos-based security with single sign-on and mutual authentication
---

# SASL GSS-API

## What is SASL GSS-API Authentication?

SASL (Simple Authentication and Security Layer) GSS-API (Generic Security Services Application Program Interface) is an authentication mechanism that provides a framework for applications to use various security services, primarily Kerberos. It allows for mutual authentication, where both the client and server verify each other's identity, and provides a secure channel for communication.

GSS-API is an abstraction layer that sits on top of different security mechanisms, with Kerberos being the most common implementation. When used with SASL, it provides a standardized way for applications to authenticate using Kerberos tickets without needing to understand the underlying Kerberos protocol details.

In the context of AsyncAPI, SASL GSS-API can be used to secure connections to message brokers or APIs, ensuring that only authenticated clients can publish or subscribe to messages, while also verifying the identity of the server.

## When to Use SASL GSS-API Authentication

SASL GSS-API Authentication is suitable for:

- Enterprise environments with existing Kerberos infrastructure
- Applications requiring strong, mutual authentication
- Systems where single sign-on (SSO) is needed
- Environments where password-based authentication is not desirable
- Applications integrated with Active Directory or other Kerberos realms
- Scenarios requiring delegated authentication
- High-security environments where identity verification is critical
- Distributed systems spanning multiple security domains
- Applications where centralized authentication management is preferred

## When Not to Use SASL GSS-API Authentication

SASL GSS-API Authentication is not recommended for:

- Simple applications with minimal security requirements
- Environments without existing Kerberos infrastructure
- Public-facing services where Kerberos is impractical
- Resource-constrained devices with limited processing capabilities
- Scenarios where the complexity of Kerberos is not justified
- Applications where simpler authentication methods are sufficient
- Systems where cross-realm Kerberos configuration is problematic
- Environments where time synchronization is difficult to maintain
- Consumer-facing applications where user experience is prioritized over enterprise security

## Pros and Cons

### Pros

- **Strong Security**: Provides robust, cryptographically secure authentication
- **Mutual Authentication**: Both client and server authenticate each other
- **Single Sign-On**: Integrates with enterprise SSO solutions
- **No Password Transmission**: Passwords are never sent over the network
- **Delegation Support**: Allows for credential delegation when needed
- **Centralized Management**: Authentication policies managed centrally
- **Mature Standard**: Well-established protocol with wide implementation
- **Interoperability**: Works across different platforms and systems
- **Time-Limited Tickets**: Authentication credentials have built-in expiration

### Cons

- **Complexity**: More complex to set up and maintain than simpler methods
- **Infrastructure Requirements**: Requires Kerberos infrastructure (KDC)
- **Time Synchronization**: Requires synchronized clocks across systems
- **Configuration Challenges**: Can be difficult to configure correctly
- **Troubleshooting Difficulty**: Issues can be hard to diagnose
- **Resource Intensive**: Higher computational and memory requirements
- **Limited Mobile Support**: Not ideal for mobile applications
- **Learning Curve**: Requires understanding of Kerberos concepts
- **Cross-Realm Complexity**: Multi-domain setups can be challenging

## Examples

Here's how to define a SASL GSS-API security scheme in AsyncAPI:

```json
{
  "type": "gssapi",
  "description": "Kerberos-based authentication using SASL GSS-API"
}
```

Another example with more specific description:

```json
{
  "type": "gssapi",
  "description": "SASL GSS-API authentication for enterprise messaging with Kerberos v5"
}
```

### Implementation Example

When implementing SASL GSS-API authentication in your application:

1. Ensure Kerberos infrastructure is properly set up (KDC, realm configuration)
2. Configure service principals for your application servers
3. Generate and distribute keytabs for service authentication
4. Implement GSS-API client authentication using appropriate libraries
5. Configure proper service name (SPN) for the server
6. Implement ticket renewal and handling of expired credentials
7. Consider cross-realm authentication if operating across multiple domains
8. Implement proper error handling for authentication failures
9. Use secure channels (TLS) in addition to SASL authentication

For example, in a Kafka client using Java:

```java
Properties props = new Properties();
props.put("bootstrap.servers", "kafka.example.com:9093");
props.put("security.protocol", "SASL_SSL");
props.put("sasl.mechanism", "GSSAPI");
props.put("sasl.kerberos.service.name", "kafka");
props.put("sasl.jaas.config", 
    "com.sun.security.auth.module.Krb5LoginModule required " +
    "useKeyTab=true " +
    "storeKey=true " +
    "keyTab=\"/path/to/kafka_client.keytab\" " +
    "principal=\"client@EXAMPLE.COM\";");

KafkaProducer<String, String> producer = new KafkaProducer<>(props);
```

The AsyncAPI specification for SASL GSS-API security follows this JSON Schema:

```json
{
  "type": "object",
  "required": [ "type" ],
  "properties": {
    "description": {
      "description": "A short description for security scheme.",
      "type": "string"
    },
    "type": {
      "description": "The type of the security scheme.",
      "type": "string",
      "enum": [ "gssapi" ]
    }
  }
}
```
