---
title: Non-Bearer HTTP Security Schemes
layout: doc
---

# {{ $frontmatter.title }}

This document describes HTTP Authentication schemes other than Bearer and API Key. These schemes provide various methods for authenticating clients in HTTP-based communications.

## HTTP Authentication Variants

The following are the main HTTP authentication schemes apart from Bearer and API Key:

1. Basic Authentication
2. Digest Authentication
3. HOBA (HTTP Origin-Bound Authentication)
4. Mutual Authentication
5. NTLM Authentication
6. Negotiate/SPNEGO Authentication
7. SCRAM Authentication

## Basic Authentication

### What is Basic Authentication?

Basic Authentication is one of the simplest HTTP authentication schemes. It involves sending a username and password encoded in Base64 format in the HTTP Authorization header. The credentials are formatted as `username:password`, encoded in Base64, and prefixed with "Basic".

### When to Use Basic Authentication

Basic Authentication is suitable for:

- Internal applications with limited access
- Development and testing environments
- Legacy systems that don't support modern authentication methods
- Simple applications with minimal security requirements
- Scenarios where simplicity is prioritized over security
- Applications already using HTTPS/TLS for secure communication
- Systems where implementing more complex authentication is not feasible

### Pros and Cons

#### Pros
- **Simplicity**: Easy to implement and use
- **Universal Support**: Supported by virtually all HTTP clients and servers
- **No Cookies Required**: Doesn't rely on cookies or sessions
- **Stateless**: No server-side session storage needed
- **Low Overhead**: Minimal processing required

#### Cons
- **Limited Security**: Credentials are only encoded, not encrypted
- **Credentials in Every Request**: Username and password sent with each request
- **No Built-in Expiration**: Credentials don't expire automatically
- **HTTPS Requirement**: Must be used with HTTPS to be secure
- **No Logout Mechanism**: No standard way to invalidate credentials
- **Password Transmission**: Passwords are transmitted with each request

### Example

```json
{
  "type": "http",
  "scheme": "basic",
  "description": "Basic authentication for internal API access"
}
```

#### Curl Example

```bash
curl -X GET https://api.example.com/resource \
  -H "Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ="
```

## Digest Authentication

### What is Digest Authentication?

Digest Authentication is an HTTP authentication scheme that improves upon Basic Authentication by avoiding the transmission of passwords in clear text. It uses a challenge-response mechanism with MD5 cryptographic hashing and nonces to authenticate without sending the actual password.

### When to Use Digest Authentication

Digest Authentication is suitable for:

- Applications requiring stronger security than Basic Authentication
- Environments where HTTPS/TLS might not be available
- Legacy systems that need improved security without major changes
- Applications where password protection is needed without sending passwords in clear text
- Scenarios requiring protection against replay attacks
- Systems where client-side implementation of more modern methods is challenging

### Pros and Cons

#### Pros
- **Improved Security**: Passwords are not transmitted in clear text
- **Replay Protection**: Uses nonces to prevent replay attacks
- **Widely Supported**: Available in many HTTP clients and servers
- **Works without HTTPS**: Provides some security even without TLS
- **Challenge-Response**: Uses a challenge-response mechanism for authentication
- **Integrity Protection**: Can protect message integrity

#### Cons
- **Complexity**: More complex to implement than Basic Authentication
- **Limited Cryptographic Strength**: Typically uses MD5, which is considered weak
- **Performance Overhead**: More processing required than Basic Authentication
- **Header Size**: Authorization headers can become large
- **Still Vulnerable**: Susceptible to certain attacks despite improvements
- **Session Management**: No built-in session management

### Example

```json
{
  "type": "http",
  "scheme": "digest",
  "description": "Digest authentication with qop=auth and MD5 algorithm"
}
```

#### Curl Example

```bash
curl -X GET https://api.example.com/resource --digest \
  -u username:password
```

## HOBA (HTTP Origin-Bound Authentication)

### What is HOBA Authentication?

HOBA (HTTP Origin-Bound Authentication) is a digital-signature-based authentication scheme for HTTP. It uses public key cryptography instead of passwords, with clients creating key pairs and using the private key to sign challenges from the server.

### When to Use HOBA Authentication

HOBA Authentication is suitable for:

- Applications requiring strong security without passwords
- Environments concerned about password-related vulnerabilities
- Systems requiring protection against phishing attacks
- Applications where public key cryptography is preferred
- Scenarios requiring cryptographic proof of client identity
- Modern web applications with security-conscious users
- Systems where password management is problematic

### Pros and Cons

#### Pros
- **No Passwords**: Eliminates password-related vulnerabilities
- **Phishing Resistant**: Not vulnerable to phishing attacks
- **Strong Security**: Based on public key cryptography
- **Origin Binding**: Credentials are bound to specific origins
- **No Shared Secrets**: Server doesn't store secrets that could be compromised
- **Cryptographic Proof**: Provides cryptographic proof of identity

#### Cons
- **Limited Support**: Not widely implemented in clients and servers
- **Complexity**: More complex to implement than password-based methods
- **Key Management**: Requires client-side key management
- **User Experience**: Can be challenging for users to understand
- **Key Backup**: Users need to back up their private keys
- **Adoption Barriers**: Relatively new and not widely adopted

### Example

```json
{
  "type": "http",
  "scheme": "hoba",
  "description": "HOBA authentication using digital signatures with ECDSA"
}
```

#### Curl Example

```bash
# Note: HOBA is not directly supported in curl
# This is a conceptual example of what the header might look like
curl -X GET https://api.example.com/resource \
  -H "Authorization: HOBA realm=\"example\",kid=\"h480djs93hd8\",ts=\"1402170695\",sig=\"LTdGRTU2Njk4MjBkZDY5NjNmN2ZhOWRlZQ==\""
```

## Mutual Authentication

### What is Mutual Authentication?

Mutual Authentication in HTTP is a process where both the client and server authenticate each other. This is typically implemented using TLS client certificates, where the server verifies the client's certificate in addition to the client verifying the server's certificate.

### When to Use Mutual Authentication

Mutual Authentication is suitable for:

- High-security environments requiring strong client verification
- Financial and healthcare applications with strict compliance requirements
- Enterprise applications with controlled client access
- IoT devices that need secure, certificate-based authentication
- Systems requiring non-repudiation and identity verification
- Environments with established PKI (Public Key Infrastructure)
- Applications where the identity of both parties must be cryptographically verified

### Pros and Cons

#### Pros
- **Strong Security**: Both parties are authenticated cryptographically
- **Certificate-Based**: Uses X.509 certificates for authentication
- **Non-repudiation**: Provides cryptographic proof of identity
- **No Password Transmission**: Eliminates risks associated with password transmission
- **Integration with PKI**: Works with existing certificate infrastructure
- **Resistance to MITM**: Strong protection against man-in-the-middle attacks

#### Cons
- **Complexity**: More complex to set up and maintain
- **Certificate Management**: Requires infrastructure for issuing and managing certificates
- **User Experience**: Can be challenging for end-users to manage certificates
- **Implementation Overhead**: Requires proper TLS configuration
- **Performance Impact**: Certificate validation adds computational overhead
- **Deployment Challenges**: Distributing and installing client certificates can be difficult

### Example

```json
{
  "type": "http",
  "scheme": "mutual",
  "description": "Mutual TLS authentication requiring client certificates"
}
```

#### Curl Example

```bash
curl -X GET https://api.example.com/resource \
  --cert client.crt \
  --key client.key \
  --cacert ca.crt
```

## NTLM Authentication

### What is NTLM Authentication?

NTLM (NT LAN Manager) is a suite of Microsoft security protocols that provides authentication, integrity, and confidentiality. It's a challenge-response protocol that doesn't send the password over the network, instead using a cryptographic hash.

### When to Use NTLM Authentication

NTLM Authentication is suitable for:

- Windows-based environments and intranets
- Legacy applications integrated with Windows authentication
- Internal corporate networks with Active Directory
- Applications where Windows integrated authentication is required
- Scenarios requiring single sign-on in Windows environments
- Systems where Kerberos is not available or practical
- Applications that need to authenticate against Windows domain controllers

### Pros and Cons

#### Pros
- **Windows Integration**: Works seamlessly in Windows environments
- **Password Protection**: Doesn't transmit passwords in clear text
- **Single Sign-On**: Can provide SSO experience in Windows domains
- **Widely Implemented**: Supported in many Microsoft and third-party products
- **Challenge-Response**: Uses challenge-response to protect credentials
- **Legacy Support**: Works with older Windows systems

#### Cons
- **Windows-Centric**: Primarily designed for Windows environments
- **Security Vulnerabilities**: Has known security weaknesses
- **Performance Overhead**: Multiple round-trips required for authentication
- **Limited to HTTP/1.1**: Doesn't work well with HTTP/2
- **Proprietary**: Not an open standard
- **Superseded**: Generally superseded by Kerberos in modern Windows environments

### Example

```json
{
  "type": "http",
  "scheme": "ntlm",
  "description": "NTLM authentication for Windows-integrated applications"
}
```

#### Curl Example

```bash
curl -X GET https://api.example.com/resource \
  --ntlm \
  -u "DOMAIN\\username:password"
```

## Negotiate/SPNEGO Authentication

### What is Negotiate/SPNEGO Authentication?

Negotiate is an HTTP authentication scheme that allows the client and server to determine the best authentication protocol to use, typically choosing between Kerberos and NTLM. SPNEGO (Simple and Protected GSSAPI Negotiation Mechanism) is the mechanism that enables this negotiation.

### When to Use Negotiate/SPNEGO Authentication

Negotiate/SPNEGO Authentication is suitable for:

- Enterprise environments with mixed authentication requirements
- Systems that need to support both Kerberos and NTLM
- Windows-based networks that require flexible authentication
- Applications requiring single sign-on in diverse environments
- Scenarios where the optimal authentication method may vary
- Corporate intranets with Active Directory integration
- Applications that need to work across different security domains

### Pros and Cons

#### Pros
- **Flexibility**: Can choose the best available authentication method
- **Kerberos Support**: Prefers Kerberos when available (stronger than NTLM)
- **Fallback Mechanism**: Falls back to NTLM when Kerberos isn't available
- **Single Sign-On**: Enables SSO in enterprise environments
- **Enterprise Integration**: Works well with Active Directory
- **Protocol Negotiation**: Automatically selects the optimal protocol

#### Cons
- **Complexity**: More complex to implement and troubleshoot
- **Windows-Centric**: Primarily designed for Windows environments
- **Configuration Challenges**: Requires proper server and client configuration
- **Multiple Round-trips**: Authentication requires several request/response cycles
- **Debugging Difficulty**: Issues can be hard to diagnose
- **Implementation Variations**: Different implementations may behave differently

### Example

```json
{
  "type": "http",
  "scheme": "negotiate",
  "description": "Negotiate authentication supporting Kerberos and NTLM"
}
```

#### Curl Example

```bash
curl -X GET https://api.example.com/resource \
  --negotiate \
  -u ":"
```

## SCRAM Authentication

### What is SCRAM Authentication?

SCRAM (Salted Challenge Response Authentication Mechanism) is a family of authentication mechanisms that improve upon digest authentication. It provides stronger security through salted password hashing and iterative hashing, protecting against various attacks.

### When to Use SCRAM Authentication

SCRAM Authentication is suitable for:

- Applications requiring strong password-based authentication
- Systems concerned about password database breaches
- Environments where password storage security is a priority
- Applications requiring protection against various authentication attacks
- Scenarios where modern password hashing is needed
- Systems where other methods like OAuth or client certificates are not practical
- Applications requiring a standardized, secure password authentication method

### Pros and Cons

#### Pros
- **Strong Password Protection**: Uses salted, iterative hashing
- **Mutual Authentication**: Both client and server authenticate each other
- **Channel Binding**: Can bind authentication to the TLS channel
- **No Password Transmission**: Password never sent over the network
- **Standardized**: Well-defined in RFCs
- **Resistant to Attacks**: Protects against various common attacks

#### Cons
- **Limited HTTP Support**: Not widely implemented in HTTP servers and clients
- **Complexity**: More complex than basic or digest authentication
- **Performance Impact**: Iterative hashing can be computationally intensive
- **Implementation Challenges**: Correct implementation requires careful attention
- **Less Common**: Not as commonly used as other HTTP authentication methods
- **Learning Curve**: Requires understanding of cryptographic concepts

### Example

```json
{
  "type": "http",
  "scheme": "scram-sha-256",
  "description": "SCRAM authentication using SHA-256 hashing"
}
```

#### Curl Example

```bash
# Note: SCRAM is not directly supported in curl for HTTP
# This is a conceptual example of what the headers might look like in a multi-step process

# Step 1: Client initiates SCRAM
curl -X GET https://api.example.com/resource \
  -H "Authorization: SCRAM-SHA-256 n,,n=user,r=fyko+d2lbbFgONRv9qkxdawL"

# Step 2: Client responds to server challenge
curl -X GET https://api.example.com/resource \
  -H "Authorization: SCRAM-SHA-256 c=biws,r=fyko+d2lbbFgONRv9qkxdawL3rfcNHYJY1ZVvWVs7j,p=v0X8v3Bz2T0CJGbJQyF0X+HI4Ts="
```

## Implementation Best Practices

When implementing HTTP authentication schemes:

1. **Always use HTTPS/TLS**: Regardless of the authentication scheme, always use HTTPS to encrypt the entire communication
2. **Choose the appropriate scheme**: Select the authentication scheme based on your security requirements and environment
3. **Implement proper error handling**: Return appropriate HTTP status codes (401 Unauthorized, 403 Forbidden)
4. **Consider rate limiting**: Implement rate limiting to prevent brute force attacks
5. **Use secure password storage**: For schemes that use passwords, store them securely (hashed, salted)
6. **Implement proper logging**: Log authentication attempts without recording sensitive information
7. **Consider additional security layers**: Authentication should be part of a defense-in-depth strategy
8. **Keep implementations updated**: Security vulnerabilities are discovered regularly, keep your implementations patched

## AsyncAPI Schema for Non-Bearer HTTP Security Schemes

The AsyncAPI specification for Non-Bearer HTTP security follows this JSON Schema:

```json
{
  "type": "object",
  "required": [ "scheme", "type" ],
  "properties": {
    "description": {
      "description": "A short description for security scheme.",
      "type": "string"
    },
    "type": {
      "description": "The type of the security scheme.",
      "type": "string",
      "enum": [ "http" ]
    },
    "scheme": {
      "description": "The name of the HTTP Authorization scheme to be used in the Authorization header as defined in RFC7235.",
      "type": "string"
    }
  }
}
```

Note that this schema explicitly excludes the "bearer" scheme through a "not" condition in the full schema definition.