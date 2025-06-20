---
title: Username and Password Authentication Security Schema
layout: doc
canonicalUrl: 'https://asyncapi.pavelon.dev/schemas/v3/security/userPassword.html'
---

# {{ $frontmatter.title }}

## What is Username and Password Authentication?

Username and Password Authentication is a basic security scheme that involves users providing a unique identifier (username) and a secret (password) to verify their identity. This is one of the most common and traditional forms of authentication, where a user must provide both credentials to gain access to a system or service.

In the context of AsyncAPI, Username and Password Authentication can be used to secure connections to message brokers or APIs, ensuring that only authenticated users can publish or subscribe to messages.

## When to Use Username and Password Authentication

Username and Password Authentication is suitable for:

- Applications with user-centric access control
- Systems where simplicity and familiarity are important
- Internal applications with moderate security requirements
- Legacy systems that don't support modern authentication methods
- Scenarios where users need to directly authenticate with the system
- Development and testing environments
- Applications where user experience prioritizes direct login

## When Not to Use Username and Password Authentication

Username and Password Authentication is not recommended for:

- High-security applications handling sensitive data
- Public-facing APIs that require strong security
- Systems where passwordless authentication is preferred
- Applications requiring multi-factor authentication by default
- Scenarios where single sign-on (SSO) is needed
- Mobile applications where password entry is cumbersome
- Systems requiring fine-grained access control

## Pros and Cons

### Pros

- **Familiarity**: Users understand and are comfortable with this authentication method
- **Simplicity**: Easy to implement and integrate
- **Universal Support**: Supported by virtually all systems and platforms
- **Direct Authentication**: No third-party dependencies for authentication
- **Control**: Full control over the authentication process
- **Stateful**: Can maintain user sessions if needed
- **Password Policies**: Can enforce custom password strength requirements

### Cons

- **Security Vulnerabilities**: Susceptible to brute force, dictionary attacks, and credential stuffing
- **Password Management**: Users tend to reuse or choose weak passwords
- **Storage Risks**: Requires secure password storage (hashing, salting)
- **User Experience**: Password fatigue and frequent resets
- **No Inherent MFA**: Requires additional implementation for multi-factor authentication
- **Maintenance Overhead**: Password reset mechanisms, expiration policies, etc.
- **Scalability Issues**: Can become complex to manage for large user bases

## Examples

Here's how to define a Username and Password Authentication security scheme in AsyncAPI:

```json
{
  "type": "userPassword",
  "description": "Basic username and password authentication for API access"
}
```

Another example with more specific description:

```json
{
  "type": "userPassword",
  "description": "Username and password authentication with minimum password length of 12 characters and complexity requirements"
}
```

### Implementation Example

When implementing Username and Password Authentication in your application:

1. Never store passwords in plain text; always use strong hashing algorithms (e.g., bcrypt, Argon2)
2. Implement account lockout policies after multiple failed attempts
3. Enforce strong password policies (length, complexity, history)
4. Provide secure password reset mechanisms
5. Consider adding multi-factor authentication as an additional layer
6. Use HTTPS/TLS for all authentication requests
7. Implement proper session management if maintaining sessions
8. Consider using password strength meters during registration

The AsyncAPI specification for Username and Password Authentication security follows this JSON Schema:

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
      "enum": [ "userPassword" ]
    }
  }
}
```