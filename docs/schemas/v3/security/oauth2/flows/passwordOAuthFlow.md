---
title: AsyncAPI OAuth2 Password Flow - Direct Credential Authentication
description: Learn how to implement OAuth2 Password Flow (Resource Owner Password Credentials) in AsyncAPI for trusted first-party applications that require direct credential handling
layout: doc
canonicalUrl: 'https://asyncapi.pavelon.dev/schemas/v3/security/oauth2/flows/passwordOAuthFlow.html'
head:
  - - meta
    - name: keywords
      content: AsyncAPI, OAuth2 Password Flow, Resource Owner Password Credentials, ROPC, direct authentication, first-party applications, trusted applications, credential-based authentication, legacy application integration, non-redirect authentication
  - - meta
    - property: og:title
      content: AsyncAPI OAuth2 Password Flow - Direct Credential Authentication
  - - meta
    - property: og:description
      content: Learn how to implement OAuth2 Password Flow (Resource Owner Password Credentials) in AsyncAPI for trusted first-party applications that require direct credential handling
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://asyncapi.pavelon.dev/schemas/v3/security/oauth2/flows/passwordOAuthFlow.html
  - - meta
    - name: twitter:title
      content: AsyncAPI OAuth2 Password Flow - Direct Credential Authentication
  - - meta
    - name: twitter:description
      content: Learn how to implement OAuth2 Password Flow (Resource Owner Password Credentials) in AsyncAPI for trusted first-party applications that require direct credential handling
---

# {{ $frontmatter.title }}

## What is OAuth2 Password Flow in API?

OAuth2 Password Flow, also known as Resource Owner Password Credentials (ROPC) flow, is an authentication mechanism where the client application collects the user's credentials (username and password) directly and exchanges them for an access token. Unlike other OAuth2 flows that redirect to an authorization server, the Password Flow involves the client application directly handling user credentials.

The flow works as follows:
1. The user provides their username and password directly to the client application
2. The client application sends these credentials along with its client ID and optionally client secret to the authorization server
3. The authorization server validates the credentials and issues an access token (and optionally a refresh token)
4. The client application uses the access token to access protected resources

This flow is designed for cases where there is a high degree of trust between the user and the client application, as it requires the user to share their credentials directly with the application.

## When to Use OAuth2 Password Flow

OAuth2 Password Flow is suitable for:

- First-party applications developed by the same organization that owns the authorization server
- Legacy applications that need to be migrated to OAuth2 but cannot support redirect flows
- Applications where the user experience of redirect flows is problematic
- Mobile applications developed by the service provider
- Command-line interfaces and scripts where interactive browser-based flows are not practical
- Scenarios where the client application is highly trusted by the user
- Internal enterprise applications where security policies permit direct credential handling
- Applications where the authorization server and client are controlled by the same entity
- Testing and development environments
- Situations where other OAuth2 flows cannot be implemented due to technical constraints

## When Not to Use OAuth2 Password Flow

OAuth2 Password Flow is not recommended for:

- Third-party applications not developed by the service provider
- Public clients that cannot securely handle user credentials
- Applications where collecting and storing user credentials creates unnecessary security risks
- Scenarios where more secure OAuth2 flows (Authorization Code, PKCE) can be implemented
- Applications requiring delegated authentication to third-party services
- Applications where fine-grained consent for specific scopes is important
- Modern web applications that can support redirect-based flows
- Applications where the principle of least privilege should be strictly enforced
- Consumer-facing applications with large user bases
- Applications subject to strict security compliance requirements

## Pros and Cons

### Pros

- **Simplicity**: Straightforward implementation without redirects
- **Better User Experience**: No browser redirects or pop-ups required
- **Works in Any Environment**: Suitable for environments where redirects are not possible
- **Direct Authentication**: Streamlined authentication process
- **Useful for Migration**: Helps transition legacy systems to OAuth2
- **Supports Refresh Tokens**: Can issue refresh tokens for long-term access
- **Reduced Complexity**: Fewer steps compared to redirect-based flows
- **Suitable for CLIs**: Works well in command-line interfaces
- **Controlled Environment**: Works well in tightly controlled enterprise environments
- **Familiar Pattern**: Similar to traditional username/password authentication

### Cons

- **Security Risks**: Client application has direct access to user credentials
- **Credential Exposure**: Username and password are exposed to the client application
- **Limited Consent**: Users cannot selectively authorize specific permissions
- **No Delegation**: Not suitable for delegated authorization scenarios
- **Trust Requirement**: Requires high trust between user and client application
- **Violates Best Practices**: Goes against OAuth2 best practice of not sharing credentials
- **Phishing Potential**: May train users to enter credentials in non-trusted applications
- **No MFA Support**: Difficult to implement multi-factor authentication
- **Limited to Username/Password**: Doesn't support alternative authentication methods
- **Discouraged by OAuth2 Spec**: Not recommended by the OAuth2 specification for third-party applications

## Examples

Here's how to define an OAuth2 Password Flow in AsyncAPI:

```json
{
  "type": "oauth2",
  "flows": {
    "password": {
      "tokenUrl": "https://auth.example.com/token",
      "availableScopes": {
        "read:messages": "Read messages from the broker",
        "write:messages": "Write messages to the broker",
        "admin": "Administrative access"
      }
    }
  },
  "description": "OAuth2 Password flow for trusted first-party applications"
}
```

Another example with a refresh URL:

```json
{
  "type": "oauth2",
  "flows": {
    "password": {
      "tokenUrl": "https://api.service.com/oauth2/token",
      "refreshUrl": "https://api.service.com/oauth2/refresh",
      "availableScopes": {
        "user:read": "Read user profile information",
        "user:write": "Update user profile information",
        "messages:read": "Read user messages",
        "messages:write": "Send messages"
      }
    }
  },
  "description": "OAuth2 Password flow for internal applications with refresh token support"
}
```

### Implementation Example

When implementing OAuth2 Password Flow in your application:

1. **Collect credentials securely**: Ensure secure input of username and password
2. **Use HTTPS**: Always use encrypted connections for transmitting credentials
3. **Minimize credential storage**: Don't store credentials longer than necessary
4. **Implement proper error handling**: Provide clear but non-revealing error messages
5. **Use refresh tokens**: Implement refresh token flow to avoid asking for credentials repeatedly
6. **Apply rate limiting**: Prevent brute force attacks on the token endpoint
7. **Request minimal scopes**: Only request the permissions your application needs
8. **Implement secure storage**: Store tokens securely using appropriate methods for your platform
9. **Handle token expiration**: Properly manage token lifecycle and renewal

Here's a simple example using Node.js:

```javascript
const axios = require('axios');
const qs = require('querystring');
const readline = require('readline');

// Configuration
const config = {
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret', // Optional, depending on the server requirements
  tokenUrl: 'https://auth.example.com/token',
  scope: 'read:messages write:messages'
};

// Create readline interface for secure input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to securely get user credentials
function getUserCredentials() {
  return new Promise((resolve) => {
    rl.question('Username: ', (username) => {
      // In a real application, you would use a more secure way to collect passwords
      rl.question('Password: ', (password) => {
        rl.close();
        resolve({ username, password });
      });
    });
  });
}

// Token storage
let tokenData = null;

// Function to get access token using password flow
async function getAccessToken(username, password) {
  try {
    const response = await axios.post(config.tokenUrl, 
      qs.stringify({
        grant_type: 'password',
        username: username,
        password: password,
        client_id: config.clientId,
        client_secret: config.clientSecret, // Include if required by the server
        scope: config.scope
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

    // Store token data
    const { access_token, refresh_token, expires_in } = response.data;
    tokenData = {
      accessToken: access_token,
      refreshToken: refresh_token,
      expiresAt: Date.now() + (expires_in * 1000) - 60000 // 1 minute buffer
    };

    console.log('Authentication successful');
    return tokenData.accessToken;
  } catch (error) {
    console.error('Authentication error:', error.response?.data || error.message);
    throw new Error('Failed to obtain access token');
  }
}

// Function to refresh the access token
async function refreshAccessToken() {
  if (!tokenData || !tokenData.refreshToken) {
    throw new Error('No refresh token available');
  }

  try {
    const response = await axios.post(config.tokenUrl, 
      qs.stringify({
        grant_type: 'refresh_token',
        refresh_token: tokenData.refreshToken,
        client_id: config.clientId,
        client_secret: config.clientSecret // Include if required by the server
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

    // Update token data
    const { access_token, refresh_token, expires_in } = response.data;
    tokenData = {
      accessToken: access_token,
      refreshToken: refresh_token || tokenData.refreshToken, // Use new refresh token if provided
      expiresAt: Date.now() + (expires_in * 1000) - 60000 // 1 minute buffer
    };

    return tokenData.accessToken;
  } catch (error) {
    console.error('Token refresh error:', error.response?.data || error.message);
    throw new Error('Failed to refresh access token');
  }
}

// Function to get a valid access token (either existing or refreshed)
async function getValidAccessToken() {
  // If we have a non-expired token, use it
  if (tokenData && tokenData.expiresAt > Date.now()) {
    return tokenData.accessToken;
  }

  // If we have a refresh token, try to refresh
  if (tokenData && tokenData.refreshToken) {
    try {
      return await refreshAccessToken();
    } catch (error) {
      console.log('Refresh failed, need to re-authenticate');
      // Fall through to re-authentication
    }
  }

  // Otherwise, get new credentials and authenticate
  const credentials = await getUserCredentials();
  return await getAccessToken(credentials.username, credentials.password);
}

// Example usage
async function callProtectedApi() {
  try {
    const token = await getValidAccessToken();

    const apiResponse = await axios.get('https://api.example.com/resources', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('API response:', apiResponse.data);
  } catch (error) {
    console.error('API call failed:', error);
  }
}

// Call the API
callProtectedApi();
```

The AsyncAPI specification for OAuth2 Password Flow follows this JSON Schema:

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
