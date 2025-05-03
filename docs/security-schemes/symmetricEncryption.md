---
title: Symmetric Encryption Security Scheme
layout: doc
---

# {{ $frontmatter.title }}

## What is Symmetric Encryption?

Symmetric Encryption is a security scheme that uses a single shared key for both encryption and decryption of data. The same key is used by both the sender and the recipient, meaning that the key must be securely shared between the communicating parties before encrypted communication can begin.

In the context of AsyncAPI, symmetric encryption can be used to secure message payloads, ensuring that only parties with the shared key can encrypt and decrypt the messages.

## When to Use Symmetric Encryption

Symmetric Encryption is suitable for:

- High-volume data encryption where performance is critical
- Encrypting large messages or data streams
- Scenarios where the communicating parties can securely exchange keys beforehand
- Internal systems where key distribution is controlled
- Resource-constrained environments with limited processing power
- Applications requiring low latency in encryption/decryption operations
- Bulk data encryption in storage systems

## When Not to Use Symmetric Encryption

Symmetric Encryption is not recommended for:

- Communication between parties that haven't established a secure channel for key exchange
- Scenarios requiring non-repudiation (proof that a message was sent by a specific sender)
- Public-facing systems where secure key distribution is challenging
- Situations where the number of communication pairs is large (n² key problem)
- When forward secrecy is a strict requirement

## Pros and Cons

### Pros

- **Performance**: Much faster than asymmetric encryption
- **Efficiency**: Requires less computational resources
- **Simplicity**: Simpler algorithms that are easier to implement
- **Key Size**: Smaller key sizes for equivalent security levels
- **Suitable for Large Data**: Efficient for encrypting large volumes of data
- **Low Latency**: Faster encryption and decryption operations

### Cons

- **Key Distribution**: Secure key exchange is challenging
- **Key Management**: Difficulty in managing keys for many communication pairs
- **Scalability Issues**: Number of keys grows quadratically with the number of participants
- **No Built-in Authentication**: Doesn't inherently provide sender authentication
- **Shared Secret**: If the key is compromised, all communications are compromised
- **No Non-repudiation**: Cannot prove who encrypted a message

## Examples

Here's how to define a Symmetric Encryption security scheme in AsyncAPI:

```json
{
  "type": "symmetricEncryption",
  "description": "AES-256 encryption for secure message exchange"
}
```

Another example with more specific description:

```json
{
  "type": "symmetricEncryption",
  "description": "ChaCha20-Poly1305 encryption for high-performance secure communications"
}
```

### Implementation Example

When implementing Symmetric Encryption in your application:

1. Generate a secure, random encryption key
2. Establish a secure channel to share the key with the communicating party
3. Use a strong encryption algorithm (e.g., AES-256, ChaCha20)
4. Include authentication (e.g., HMAC, GCM mode) to verify message integrity
5. Implement proper key rotation and management practices
6. Consider using a key derivation function to generate session keys
7. Store encryption keys securely, never in plaintext

The AsyncAPI specification for Symmetric Encryption security follows this JSON Schema:

```json
{
  "type": "object",
  "required": [ "type" ],
  "properties": {
    "description": {
      "type": "string"
    },
    "type": {
      "type": "string",
      "enum": [ "symmetricEncryption" ]
    }
  }
}
```