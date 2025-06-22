---
title: AsyncAPI OAuth2 Client Credentials Flow - Server-to-Server Authentication
description: Learn how to implement OAuth2 Client Credentials Flow in AsyncAPI for secure server-to-server and machine-to-machine communication without user interaction
layout: doc
canonicalUrl: 'https://asyncapi.pavelon.dev/schemas/v3/security/oauth2/flows/clientCredentialsOAuthFlow.html'
head:
  - - meta
    - name: keywords
      content: AsyncAPI, OAuth2 Client Credentials Flow, server-to-server authentication, machine-to-machine communication, microservices security, backend authentication, API integration, service authentication, OAuth2 implementation, secure API access
  - - meta
    - property: og:title
      content: AsyncAPI OAuth2 Client Credentials Flow - Server-to-Server Authentication
  - - meta
    - property: og:description
      content: Learn how to implement OAuth2 Client Credentials Flow in AsyncAPI for secure server-to-server and machine-to-machine communication without user interaction
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/schemas/v3/security/oauth2/flows/clientCredentialsOAuthFlow.html
  - - meta
    - name: twitter:title
      content: AsyncAPI OAuth2 Client Credentials Flow - Server-to-Server Authentication
  - - meta
    - name: twitter:description
      content: Learn how to implement OAuth2 Client Credentials Flow in AsyncAPI for secure server-to-server and machine-to-machine communication without user interaction
---

# {{ $frontmatter.title }}

## What is OAuth2 Client Credentials Flow in API?

OAuth2 Client Credentials Flow is an authentication and authorization mechanism designed for server-to-server or machine-to-machine communication where no user interaction is involved. Unlike other OAuth2 flows, the Client Credentials flow doesn't involve a user granting permissions; instead, the client application directly authenticates itself to the authorization server.

The flow works as follows:
1. The client application authenticates with the authorization server using its client ID and client secret
2. The authorization server validates the credentials and issues an access token
3. The client application uses the access token to access protected resources

This flow is ideal for backend services, daemons, or other server-side applications that need to access resources on their own behalf, rather than on behalf of a user. Since there's no user involvement, the client must be trusted and capable of securely storing its credentials.

## When to Use OAuth2 Client Credentials Flow

OAuth2 Client Credentials Flow is suitable for:

- Server-to-server communication
- Microservices architecture where services need to authenticate with each other
- Background processes and scheduled jobs
- API integrations between trusted systems
- Daemon applications that run without user interaction
- Backend services accessing resources on their own behalf
- Scenarios where user context is not required
- Applications that need programmatic access to resources
- Enterprise integrations between internal systems
- IoT devices or services that operate autonomously

## When Not to Use OAuth2 Client Credentials Flow

OAuth2 Client Credentials Flow is not recommended for:

- Applications acting on behalf of a user (use Authorization Code Flow instead)
- Public clients that cannot securely store client secrets
- Frontend applications (web, mobile, desktop)
- Scenarios where user consent is required
- Applications that need to access user-specific resources
- Situations where fine-grained user permissions are needed
- Consumer-facing applications
- Applications where accountability to specific users is required
- Scenarios requiring delegation of authority
- Applications where user identity information is needed

## Pros and Cons

### Pros

- **Simplicity**: Straightforward implementation with minimal steps
- **Efficiency**: No redirects or user interaction required
- **Performance**: Fast token acquisition with minimal overhead
- **Automation-Friendly**: Ideal for automated processes and scripts
- **Server-Optimized**: Designed for server-side applications
- **No User Sessions**: No need to manage user sessions or cookies
- **Direct Authentication**: Client authenticates directly with the authorization server
- **Suitable for Headless Applications**: Works well for applications without a UI
- **Clear Separation of Concerns**: Client is fully responsible for credential management
- **Consistent Access**: Not dependent on user login state

### Cons

- **Limited Scope**: Cannot access user-specific resources
- **Security Risks**: Client secret must be securely stored
- **No User Context**: No way to identify which user performed actions
- **All-or-Nothing Access**: Typically grants broader access than user-specific flows
- **No Delegation**: Cannot act on behalf of users
- **No Refresh Tokens**: Some implementations don't support refresh tokens
- **Credential Management**: Requires secure handling of client credentials
- **Potential for Abuse**: If credentials are compromised, attacker gains full access
- **Limited Granularity**: Cannot restrict access based on user permissions
- **Audit Limitations**: More difficult to trace actions to specific users

## Examples

Here's how to define an OAuth2 Client Credentials Flow in AsyncAPI:

```json
{
  "type": "oauth2",
  "flows": {
    "clientCredentials": {
      "tokenUrl": "https://auth.example.com/token",
      "availableScopes": {
        "read:messages": "Read messages from the broker",
        "write:messages": "Write messages to the broker",
        "admin": "Administrative access"
      }
    }
  },
  "description": "OAuth2 Client Credentials flow for server-to-server authentication"
}
```

Another example with a refresh URL:

```json
{
  "type": "oauth2",
  "flows": {
    "clientCredentials": {
      "tokenUrl": "https://api.service.com/oauth2/token",
      "refreshUrl": "https://api.service.com/oauth2/refresh",
      "availableScopes": {
        "api:read": "Read access to API resources",
        "api:write": "Write access to API resources",
        "metrics:read": "Access to read metrics data"
      }
    }
  },
  "description": "OAuth2 Client Credentials flow for microservices authentication"
}
```

### Implementation Example

When implementing OAuth2 Client Credentials Flow in your application:

1. **Register your application** with the authorization server to obtain client ID and client secret
2. **Store credentials securely** in environment variables or a secure vault
3. **Request access tokens** when needed and cache them until expiration
4. **Handle token expiration** by requesting new tokens
5. **Include appropriate scopes** to limit access to only what's needed
6. **Use HTTPS** for all communication to protect credentials and tokens
7. **Implement proper error handling** for authentication failures
8. **Rotate client secrets** periodically for enhanced security

Here's a simple example using Node.js:

```javascript
const axios = require('axios');
const qs = require('querystring');

// Configuration
const config = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  tokenUrl: 'https://auth.example.com/token',
  scope: 'read:messages write:messages'
};

// Token cache
let tokenData = null;

async function getAccessToken() {
  // Check if we have a non-expired token
  if (tokenData && tokenData.expiresAt > Date.now()) {
    return tokenData.accessToken;
  }

  // Request new token
  try {
    const response = await axios.post(config.tokenUrl, 
      qs.stringify({
        grant_type: 'client_credentials',
        client_id: config.clientId,
        client_secret: config.clientSecret,
        scope: config.scope
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

    // Cache the token with expiration
    const { access_token, expires_in } = response.data;
    tokenData = {
      accessToken: access_token,
      expiresAt: Date.now() + (expires_in * 1000) - 60000 // 1 minute buffer
    };

    return tokenData.accessToken;
  } catch (error) {
    console.error('Token acquisition error:', error.response?.data || error.message);
    throw new Error('Failed to obtain access token');
  }
}

// Example usage
async function callProtectedApi() {
  try {
    const token = await getAccessToken();

    const apiResponse = await axios.get('https://api.example.com/resources', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return apiResponse.data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}

// Call the API
callProtectedApi()
  .then(data => console.log('API response:', data))
  .catch(err => console.error('Error:', err));
```

The AsyncAPI specification for OAuth2 Client Credentials Flow follows this JSON Schema:

```json
{
  "type": "object",
  "required": [ "tokenUrl", "availableScopes" ],
  "properties": {
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
