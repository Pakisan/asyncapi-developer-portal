---
title: OAuth2 Authorization Code Flow
layout: doc
---

# {{ $frontmatter.title }}

## What is OAuth2 Authorization Code Flow in API?

OAuth2 Authorization Code Flow is a secure authentication and authorization mechanism designed for applications that can securely store a client secret. It's the most complete and secure OAuth2 flow, providing a way for client applications to obtain access tokens by first obtaining an authorization code.

The flow works as follows:
1. The client redirects the user to the authorization server
2. The user authenticates and grants permissions to the client
3. The authorization server redirects back to the client with an authorization code
4. The client exchanges this code for an access token by making a backend server request that includes the client secret
5. The client uses the access token to access protected resources

This flow is ideal for server-side applications where the client secret can be securely stored, and it provides a high level of security by keeping the access token exchange on the backend, away from potentially vulnerable client-side code.

## When to Use OAuth2 Authorization Code Flow

OAuth2 Authorization Code Flow is suitable for:

- Server-side web applications that can securely store client secrets
- Native desktop applications that can securely store client secrets
- Mobile applications with secure storage capabilities
- Applications requiring a high level of security
- Scenarios where you need to obtain both access tokens and refresh tokens
- Applications that need to access user data on their behalf
- Long-lived applications that need to maintain access to resources
- Applications where the frontend and backend are separate
- Enterprise applications with strict security requirements
- Applications that need to verify the identity of the client

## When Not to Use OAuth2 Authorization Code Flow

OAuth2 Authorization Code Flow is not recommended for:

- Single-page applications (SPAs) without a backend (consider Implicit Flow or PKCE extension)
- Public clients that cannot securely store client secrets
- Simple applications where the authentication complexity is not justified
- Scenarios where the redirect flow creates a poor user experience
- Machine-to-machine authentication with no user involvement (use Client Credentials Flow)
- Applications with limited redirect capabilities
- Extremely simple applications where API key authentication would suffice
- Scenarios where the authorization server doesn't support this flow
- Applications where the user is authenticating directly (use Password Flow)
- Environments where redirects are problematic or restricted

## Pros and Cons

### Pros

- **High Security**: The most secure OAuth2 flow when implemented correctly
- **Complete Separation**: Access tokens are never exposed to the browser/frontend
- **Refresh Token Support**: Can obtain refresh tokens for long-term access
- **User Consent**: Explicit user consent for permission scopes
- **Widely Supported**: Implemented by most authorization servers
- **Revocable Access**: Tokens can be revoked if compromised
- **Flexible Scopes**: Fine-grained control over permissions
- **Standard Compliance**: Well-defined in OAuth2 specifications
- **Suitable for Confidential Clients**: Ideal for applications that can securely store secrets
- **PKCE Extension**: Can be enhanced with PKCE for public clients

### Cons

- **Complexity**: More complex to implement than other flows
- **Requires Backend**: Needs a server component to exchange the code
- **Redirect Required**: User experience includes redirects
- **Client Secret Management**: Requires secure storage of client secrets
- **Multiple Requests**: Requires multiple HTTP requests to complete
- **Implementation Overhead**: More code and configuration required
- **Potential for CSRF Attacks**: If state parameter is not properly implemented
- **Session Management**: Requires session handling for the redirect
- **Not Suitable for All Clients**: Not ideal for public clients without PKCE
- **Authorization Server Dependency**: Relies on a properly configured authorization server

## Examples

Here's how to define an OAuth2 Authorization Code Flow in AsyncAPI:

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
  "description": "OAuth2 Authorization Code flow for secure API access"
}
```

Another example with different scopes:

```json
{
  "type": "oauth2",
  "flows": {
    "authorizationCode": {
      "authorizationUrl": "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
      "tokenUrl": "https://login.microsoftonline.com/common/oauth2/v2.0/token",
      "availableScopes": {
        "user.read": "Read user profile",
        "mail.read": "Read user mail",
        "calendars.readwrite": "Read and write to user calendars"
      }
    }
  },
  "description": "Microsoft Identity Platform OAuth2 Authorization Code flow"
}
```

### Implementation Example

When implementing OAuth2 Authorization Code Flow in your application:

1. **Register your application** with the authorization server to obtain client ID and client secret
2. **Implement the redirect endpoint** in your application to receive the authorization code
3. **Use a secure backend** to exchange the authorization code for tokens
4. **Store tokens securely** and refresh them when they expire
5. **Implement proper state parameter** to prevent CSRF attacks
6. **Use PKCE extension** for additional security, especially for mobile apps
7. **Validate tokens** before using them to access resources
8. **Implement proper error handling** for authentication failures

Here's a simple example using Node.js and Express:

```javascript
const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
const app = express();

// Configuration
const config = {
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  redirectUri: 'http://localhost:3000/callback',
  authorizationUrl: 'https://auth.example.com/authorize',
  tokenUrl: 'https://auth.example.com/token'
};

// Generate a random state parameter for CSRF protection
app.get('/login', (req, res) => {
  const state = crypto.randomBytes(16).toString('hex');
  // Store state in session
  req.session.oauthState = state;
  
  // Redirect to authorization server
  const authUrl = new URL(config.authorizationUrl);
  authUrl.searchParams.append('client_id', config.clientId);
  authUrl.searchParams.append('redirect_uri', config.redirectUri);
  authUrl.searchParams.append('response_type', 'code');
  authUrl.searchParams.append('state', state);
  authUrl.searchParams.append('scope', 'read:messages write:messages');
  
  res.redirect(authUrl.toString());
});

// Handle the callback with authorization code
app.get('/callback', async (req, res) => {
  const { code, state } = req.query;
  
  // Verify state parameter to prevent CSRF
  if (state !== req.session.oauthState) {
    return res.status(403).send('State validation failed');
  }
  
  try {
    // Exchange authorization code for tokens
    const tokenResponse = await axios.post(config.tokenUrl, {
      client_id: config.clientId,
      client_secret: config.clientSecret,
      code: code,
      redirect_uri: config.redirectUri,
      grant_type: 'authorization_code'
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    
    // Store tokens securely (in session, database, etc.)
    const { access_token, refresh_token, expires_in } = tokenResponse.data;
    req.session.tokens = {
      accessToken: access_token,
      refreshToken: refresh_token,
      expiresAt: Date.now() + (expires_in * 1000)
    };
    
    res.redirect('/dashboard');
  } catch (error) {
    console.error('Token exchange error:', error.response?.data || error.message);
    res.status(500).send('Authentication failed');
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

The AsyncAPI specification for OAuth2 Authorization Code Flow follows this JSON Schema:

```json
{
  "type": "object",
  "required": [ "authorizationUrl", "tokenUrl", "availableScopes" ],
  "properties": {
    "authorizationUrl": {
      "description": "The authorization URL to be used for this flow. This MUST be in the form of an absolute URL.",
      "type": "string",
      "format": "uri"
    },
    "availableScopes": {
      "description": "The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it.",
      "$ref": "https://asyncapi.pavelon.dev/schemas/v3/security/oauth2/oauth2Scopes.json"
    },
    "refreshUrl": {
      "description": "The URL to be used for obtaining refresh tokens. This MUST be in the form of an absolute URL.",
      "type": "string",
      "format": "uri"
    },
    "tokenUrl": {
      "description": "The token URL to be used for this flow. This MUST be in the form of an absolute URL.",
      "type": "string",
      "format": "uri"
    }
  },
  "patternProperties": {
    "^x-[\\w\\d\\.\\x2d_]+$": true
  },
  "additionalProperties": false
}
```