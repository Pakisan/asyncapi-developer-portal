---
title: OAuth2 Scopes
layout: doc
canonicalUrl: 'https://asyncapi.pavelon.dev/schemas/v3/security/oauth2/oauth2Scopes.html'
---

# {{ $frontmatter.title }}

## What is OAuth2 Scopes in API?

OAuth2 Scopes are a mechanism to limit an application's access to a user's account. Scopes define the specific permissions that an application requests from users when authenticating. Instead of granting full access to their account, users can grant limited access through these scopes.

In the context of AsyncAPI and OAuth2, scopes provide a way to implement the principle of least privilege by allowing clients to request only the permissions they need. Each scope represents a specific permission or set of permissions that the client application can request, and the user can approve or deny.

Scopes are typically represented as strings (e.g., "read:messages", "write:messages") and are included in the authorization request. When a user authorizes an application, they are presented with the list of scopes the application is requesting, allowing them to make an informed decision about what access they are granting.

In AsyncAPI, OAuth2 scopes are defined as key-value pairs where:
- The key is the scope name (e.g., "read:messages")
- The value is a human-readable description of what the scope allows (e.g., "Read messages from the broker")

## When to Use OAuth2 Scopes

OAuth2 Scopes are suitable for:

- APIs that require fine-grained access control
- Applications that need different levels of access for different users
- Scenarios where the principle of least privilege should be enforced
- Multi-tenant systems where access needs to be carefully controlled
- Applications where users should have visibility into what permissions they're granting
- APIs with different resources or operations requiring different permissions
- Enterprise applications with complex permission models
- Public APIs used by third-party developers
- Applications where regulatory compliance requires detailed access control
- Scenarios where different client applications need different levels of access

## When Not to Use OAuth2 Scopes

OAuth2 Scopes are not recommended for:

- Very simple APIs with a single level of access
- Internal applications where all users have the same permissions
- Scenarios where the complexity of scope management outweighs the benefits
- Applications where the permission model is already handled at another level
- APIs with very few operations where granular control isn't necessary
- Development or testing environments where simplified authentication is preferred
- Legacy systems where implementing scope validation is challenging
- Applications where users might be confused by too many permission choices
- Scenarios where a simpler authentication mechanism (like API keys) is sufficient
- Systems where the overhead of scope validation impacts performance significantly

## Pros and Cons

### Pros

- **Granular Access Control**: Allows fine-grained control over what resources clients can access
- **Principle of Least Privilege**: Clients can request only the permissions they need
- **User Transparency**: Users can see exactly what permissions they're granting
- **Flexible Permission Model**: Can adapt to complex access requirements
- **Revocable Permissions**: Specific scopes can be revoked without revoking all access
- **Standardized Approach**: Well-defined in OAuth2 specifications
- **Scalable**: Works well as your API grows with more functionality
- **Security Best Practice**: Reduces the potential impact of compromised tokens
- **Audit Friendly**: Makes it easier to track what permissions were granted
- **Developer Friendly**: Provides clear documentation of available permissions

### Cons

- **Complexity**: Adds complexity to both client and server implementations
- **Scope Creep**: Can lead to too many scopes that become difficult to manage
- **User Experience Challenges**: Too many scopes can confuse users during authorization
- **Implementation Overhead**: Requires proper scope validation on all protected endpoints
- **Naming Conventions**: Requires careful scope naming to avoid confusion
- **Documentation Burden**: All scopes need to be well-documented
- **Versioning Challenges**: Evolving scope requirements can be difficult to manage
- **Potential for Overprivileged Access**: Developers might request more scopes than needed
- **Interoperability Issues**: Different OAuth2 providers handle scopes differently
- **Performance Impact**: Scope validation adds processing overhead to each request

## Examples

Here's how to define OAuth2 Scopes in AsyncAPI:

```json
{
  "read:messages": "Read messages from the broker",
  "write:messages": "Write messages to the broker",
  "admin": "Full administrative access"
}
```

Another example with more granular scopes:

```json
{
  "user:read": "Read user profile information",
  "user:write": "Update user profile information",
  "messages:read": "Read user messages",
  "messages:write": "Send messages",
  "contacts:read": "Read user contacts",
  "contacts:write": "Manage user contacts",
  "billing:read": "View billing information",
  "billing:write": "Update payment methods"
}
```

Example of scopes in an OAuth2 flow definition:

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
        "write:messages": "Write messages to the broker",
        "admin": "Full administrative access"
      }
    }
  },
  "description": "OAuth2 Authorization Code flow with scopes"
}
```

### Implementation Example

When implementing OAuth2 Scopes in your application:

1. **Define Clear Scope Naming Conventions**: Use consistent patterns like `resource:action` (e.g., "messages:read")
2. **Provide Descriptive Scope Descriptions**: Make scope descriptions clear for users to understand
3. **Implement Proper Scope Validation**: Validate scopes on every protected endpoint
4. **Request Minimal Scopes**: Only request the scopes your application actually needs
5. **Group Related Permissions**: Consider grouping related permissions into logical scopes
6. **Document Available Scopes**: Provide clear documentation for developers
7. **Implement Scope Inheritance**: Consider hierarchical relationships between scopes where appropriate
8. **Handle Scope Changes**: Implement a strategy for handling changes to scope definitions
9. **Test Scope Validation**: Ensure your scope validation logic works correctly

Here's a simple example of scope validation in Node.js with Express:

```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

// Middleware to validate JWT and extract scopes
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.sendStatus(401);
  
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    // Extract scopes from token
    req.scopes = user.scope ? user.scope.split(' ') : [];
    next();
  });
}

// Middleware to check if the request has the required scope
function requireScope(scope) {
  return (req, res, next) => {
    if (!req.scopes || !req.scopes.includes(scope)) {
      return res.status(403).json({ 
        error: 'Insufficient scope',
        required_scope: scope
      });
    }
    next();
  };
}

// Protected route requiring 'messages:read' scope
app.get('/messages', authenticateToken, requireScope('messages:read'), (req, res) => {
  // Only accessible if token has 'messages:read' scope
  res.json({ messages: ['Message 1', 'Message 2'] });
});

// Protected route requiring 'messages:write' scope
app.post('/messages', authenticateToken, requireScope('messages:write'), (req, res) => {
  // Only accessible if token has 'messages:write' scope
  res.json({ status: 'Message sent' });
});

// Protected route requiring 'admin' scope
app.delete('/messages/:id', authenticateToken, requireScope('admin'), (req, res) => {
  // Only accessible if token has 'admin' scope
  res.json({ status: 'Message deleted' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

The AsyncAPI specification for OAuth2 Scopes follows this JSON Schema:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "https://asyncapi.pavelon.dev/schemas/v3/security/oauth2/oauth2Scopes.json",
  "type": "object",
  "additionalProperties": {
    "type": "string"
  }
}
```

This schema defines an object where:
- The property names are the scope identifiers (e.g., "read:messages")
- The property values are strings describing what each scope allows (e.g., "Read messages from the broker")