---
title: Asymmetric Encryption Security Scheme
layout: doc
---

# {{ $frontmatter.title }}

## What is Asymmetric Encryption?

Asymmetric Encryption, also known as Public-Key Cryptography, is a security scheme that uses a pair of keys for encryption: a public key for encrypting data and a private key for decryption. The public key can be freely distributed, while the private key must be kept secret.

In the context of AsyncAPI, asymmetric encryption can be used to secure message payloads, ensuring that only the intended recipient with the corresponding private key can decrypt and read the messages.

## When to Use Asymmetric Encryption

Asymmetric Encryption is suitable for:

- Securing sensitive data in transit
- Establishing secure communication channels between parties that haven't previously shared secrets
- Scenarios requiring non-repudiation (proof that a message was sent by a specific sender)
- Digital signature verification
- Key exchange protocols to establish secure symmetric encryption sessions
- Environments where secure key distribution is challenging

## When Not to Use Asymmetric Encryption

Asymmetric Encryption is not recommended for:

- High-volume data encryption (due to performance overhead)
- Resource-constrained environments with limited processing power
- Scenarios where low latency is critical
- Encrypting large messages (better to use hybrid approaches)
- Situations where key management infrastructure is not available

## Pros and Cons

### Pros

- **Strong Security**: Provides a high level of security when implemented correctly
- **Key Distribution**: No need to securely share secret keys beforehand
- **Non-repudiation**: Can provide proof of message origin through digital signatures
- **Scalability**: Works well in many-to-many communication scenarios
- **Forward Secrecy**: Compromise of one key doesn't necessarily compromise past communications

### Cons

- **Performance Overhead**: Significantly slower than symmetric encryption
- **Complexity**: More complex to implement and maintain correctly
- **Key Size**: Requires larger key sizes compared to symmetric encryption
- **Resource Intensive**: Higher computational requirements
- **Certificate Management**: Often requires a Public Key Infrastructure (PKI) for certificate management

## Examples

Here's how to define an Asymmetric Encryption security scheme in AsyncAPI:

```json
{
  "type": "asymmetricEncryption",
  "description": "RSA-based encryption for secure message exchange"
}
```

Another example with more specific description:

```json
{
  "type": "asymmetricEncryption",
  "description": "ECC (Elliptic Curve Cryptography) encryption with P-256 curve for lightweight secure communications"
}
```

### Implementation Example

When implementing Asymmetric Encryption in your application:

1. Generate a key pair (public and private keys) for each party
2. Distribute public keys to all parties that need to send encrypted messages
3. Encrypt messages using the recipient's public key
4. Decrypt received messages using your private key
5. Consider using a hybrid approach for large messages (encrypt the message with symmetric encryption, then encrypt the symmetric key with asymmetric encryption)
6. Implement proper key rotation and management practices

The AsyncAPI specification for Asymmetric Encryption security follows this JSON Schema:

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
      "enum": [ "asymmetricEncryption" ]
    }
  }
}
```