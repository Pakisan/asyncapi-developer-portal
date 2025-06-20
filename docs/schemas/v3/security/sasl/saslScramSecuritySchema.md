---
title: SASL SCRAM Security Schema
layout: doc
---

# {{ $frontmatter.title }}

## What is SASL SCRAM Authentication in API?

SASL (Simple Authentication and Security Layer) SCRAM (Salted Challenge Response Authentication Mechanism) is a modern, password-based authentication mechanism that provides stronger security than plain username/password authentication. SCRAM uses cryptographic hashing with salting and iteration to protect credentials during authentication.

SCRAM is designed to address the security weaknesses of plaintext password authentication while avoiding the complexity of Kerberos-based mechanisms like GSS-API. It provides protection against various attacks, including replay attacks, man-in-the-middle attacks, and server impersonation.

In AsyncAPI, SASL SCRAM can be used to secure connections to message brokers or APIs, with support for two primary variants:
- **SCRAM-SHA-256**: Uses the SHA-256 hashing algorithm
- **SCRAM-SHA-512**: Uses the stronger SHA-512 hashing algorithm

The key advantage of SCRAM over plain authentication is that the actual password is never transmitted over the network, even in hashed form. Instead, the client and server engage in a challenge-response protocol that proves the client knows the password without revealing it.

## When to Use SASL SCRAM Authentication

SASL SCRAM Authentication is suitable for:

- Applications requiring stronger security than plaintext passwords
- Environments where Kerberos infrastructure is not available
- Systems where password-based authentication is preferred but needs to be secure
- Applications where the actual password should never be transmitted
- Scenarios requiring protection against replay attacks
- Environments where mutual authentication is needed
- Systems where the server stores password hashes, not plaintext passwords
- Applications requiring a standardized, well-defined authentication protocol
- Scenarios where the authentication process needs to be resistant to various attacks
- Modern messaging systems like Kafka, RabbitMQ, and other AMQP brokers

## When Not to Use SASL SCRAM Authentication

SASL SCRAM Authentication is not recommended for:

- Environments where single sign-on (SSO) is required (consider GSS-API/Kerberos instead)
- Legacy systems that don't support SCRAM
- Applications where certificate-based authentication is preferred
- Extremely resource-constrained devices where the computational overhead is problematic
- Scenarios where passwordless authentication is required
- Systems where centralized identity management is a priority
- Environments where token-based authentication (like OAuth 2.0) better fits the use case
- Applications integrated with Active Directory where Kerberos is already available
- Scenarios where the additional security of SCRAM is not justified by the threat model

## Pros and Cons

### Pros

- **Strong Security**: Provides robust protection for password-based authentication
- **No Password Transmission**: The actual password is never sent over the network
- **Mutual Authentication**: Both client and server can verify each other's identity
- **Salted Hashing**: Protects against rainbow table attacks
- **Iteration Support**: Allows for computational hardening against brute force attacks
- **Replay Protection**: Resistant to replay attacks
- **Standard Protocol**: Well-defined in RFC 5802 and RFC 7677
- **No Special Infrastructure**: Doesn't require additional authentication servers
- **Channel Binding**: Can be bound to the transport layer for additional security
- **Multiple Hash Algorithms**: Supports both SHA-256 and SHA-512 for different security levels

### Cons

- **Computational Overhead**: More CPU-intensive than simple authentication methods
- **Implementation Complexity**: More complex to implement correctly than plain authentication
- **Still Password-Based**: Inherits some limitations of password-based authentication
- **No Delegation Support**: Doesn't support credential delegation like Kerberos
- **Limited SSO Integration**: Not designed for single sign-on scenarios
- **Server Storage Requirements**: Requires storing password verification information
- **Less Common**: Not as widely supported as simpler mechanisms
- **Configuration Challenges**: Proper configuration can be more difficult
- **Potential for Implementation Errors**: Security depends on correct implementation

## Examples

Here's how to define a SASL SCRAM security scheme in AsyncAPI using SHA-256:

```json
{
  "type": "scramSha256",
  "description": "SCRAM-SHA-256 authentication for secure messaging"
}
```

Example using SHA-512 for higher security:

```json
{
  "type": "scramSha512",
  "description": "SCRAM-SHA-512 authentication with stronger hashing algorithm"
}
```

### Implementation Example

When implementing SASL SCRAM authentication in your application:

1. Choose the appropriate hash algorithm (SHA-256 or SHA-512) based on your security requirements
2. Implement proper password storage using the scram-specific format (salt, iteration count, etc.)
3. Ensure the client implementation correctly handles the challenge-response protocol
4. Use a sufficient iteration count to make brute force attacks computationally expensive
5. Implement channel binding when possible for additional security
6. Use secure channels (TLS) in addition to SASL authentication
7. Handle authentication failures securely without leaking information
8. Implement proper error handling and logging

For example, in a Kafka client using Java:

```java
Properties props = new Properties();
props.put("bootstrap.servers", "kafka.example.com:9093");
props.put("security.protocol", "SASL_SSL"); // Using SSL with SASL
props.put("sasl.mechanism", "SCRAM-SHA-256"); // Or SCRAM-SHA-512
props.put("sasl.jaas.config", 
    "org.apache.kafka.common.security.scram.ScramLoginModule required " +
    "username=\"user\" " +
    "password=\"password\";");

KafkaProducer<String, String> producer = new KafkaProducer<>(props);
```

The AsyncAPI specification for SASL SCRAM security follows this JSON Schema:

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
      "enum": [ "scramSha256", "scramSha512" ]
    }
  },
  "patternProperties": {
    "^x-[\\w\\d\\.\\x2d_]+$": true
  },
  "additionalProperties": false
}
```