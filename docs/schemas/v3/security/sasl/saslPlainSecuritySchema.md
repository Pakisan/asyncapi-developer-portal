---
title: SASL Plain Security Schema
layout: doc
canonicalUrl: 'https://asyncapi.pavelon.dev/schemas/v3/security/sasl/saslPlainSecuritySchema.html'
---

# {{ $frontmatter.title }}

## What is SASL Plain Authentication in API?

SASL (Simple Authentication and Security Layer) Plain is a simple, cleartext authentication mechanism where the client sends the username and password in plaintext format. It is one of the simplest SASL mechanisms and provides a standardized way for applications to perform username/password authentication without having to implement a custom protocol.

Unlike more complex SASL mechanisms like GSS-API or SCRAM, SASL Plain does not provide any encryption or hashing of credentials. The authentication credentials are transmitted as-is, which means they are vulnerable to interception if the underlying transport layer is not secured.

In the context of AsyncAPI, SASL Plain can be used to secure connections to message brokers or APIs using simple username and password authentication, typically in conjunction with transport layer security (TLS) to protect the credentials during transmission.

## When to Use SASL Plain Authentication

SASL Plain Authentication is suitable for:

- Environments where the transport layer is already secured with TLS/SSL
- Simple applications with straightforward authentication requirements
- Internal systems where ease of implementation is prioritized
- Development and testing environments
- Legacy systems that don't support more complex authentication mechanisms
- Scenarios where the authentication process needs to be lightweight
- Applications where compatibility with a wide range of clients is important
- Systems where the authentication infrastructure is simple to manage
- Environments where the security risk of plaintext credentials is mitigated by other measures

## When Not to Use SASL Plain Authentication

SASL Plain Authentication is not recommended for:

- Public-facing services without transport layer security
- High-security environments requiring strong authentication
- Applications handling sensitive or regulated data
- Scenarios where password interception is a significant risk
- Systems where password hashing or encryption during transit is required
- Production environments with strict security requirements
- Applications where more secure alternatives like SCRAM or GSS-API are available and practical
- Environments where regulatory compliance requires stronger authentication methods
- Scenarios where mutual authentication is needed

## Pros and Cons

### Pros

- **Simplicity**: Extremely easy to implement and use
- **Wide Support**: Supported by virtually all SASL-enabled systems
- **Low Overhead**: Minimal processing required for authentication
- **Compatibility**: Works with legacy systems and simple clients
- **No Special Infrastructure**: Doesn't require additional authentication servers or infrastructure
- **Straightforward Debugging**: Authentication issues are easy to diagnose
- **Low Latency**: Authentication process is fast and efficient
- **Minimal Dependencies**: Doesn't rely on external authentication systems
- **Easy Integration**: Simple to integrate with existing username/password databases

### Cons

- **Security Vulnerabilities**: Credentials are transmitted in plaintext
- **No Built-in Encryption**: Relies entirely on transport layer security
- **Credential Interception Risk**: Vulnerable to man-in-the-middle attacks without TLS
- **No Mutual Authentication**: Server is not authenticated to the client
- **Password Storage Concerns**: Encourages simple password storage on the server
- **No Protection Against Brute Force**: No built-in mechanisms to prevent password guessing
- **Limited Features**: No support for advanced features like channel binding
- **Regulatory Compliance Issues**: May not meet security requirements for regulated industries
- **No Forward Secrecy**: Compromised credentials can be used for future authentication

## Examples

Here's how to define a SASL Plain security scheme in AsyncAPI:

```json
{
  "type": "plain",
  "description": "Username and password authentication using SASL Plain"
}
```

Another example with more specific description:

```json
{
  "type": "plain",
  "description": "SASL Plain authentication for messaging services with TLS transport encryption"
}
```

### Implementation Example

When implementing SASL Plain authentication in your application:

1. Always use TLS/SSL to encrypt the transport layer
2. Implement proper password storage using strong hashing algorithms (e.g., bcrypt, Argon2)
3. Enforce strong password policies
4. Consider implementing rate limiting to prevent brute force attacks
5. Log authentication attempts for security monitoring
6. Implement proper error handling that doesn't leak sensitive information
7. Consider additional security measures like IP restrictions or multi-factor authentication
8. Regularly rotate credentials and audit access

For example, in a Kafka client using Java:

```java
Properties props = new Properties();
props.put("bootstrap.servers", "kafka.example.com:9093");
props.put("security.protocol", "SASL_SSL"); // Note: Using SSL with SASL
props.put("sasl.mechanism", "PLAIN");
props.put("sasl.jaas.config", 
    "org.apache.kafka.common.security.plain.PlainLoginModule required " +
    "username=\"user\" " +
    "password=\"password\";");

KafkaProducer<String, String> producer = new KafkaProducer<>(props);
```

The AsyncAPI specification for SASL Plain security follows this JSON Schema:

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
      "enum": [ "plain" ]
    }
  }
}
```