// Questions people search for about AsyncAPI security schemes (Bing and Search Console reports), answered from the
// AsyncAPI 3.0 and 2.6 specifications. They show on the scheme's page and become its FAQPage JSON-LD, so they must
// stay true to the specification. Keys are paths under `schemas/v3/security/`.
import type { Qa } from './binding-faq'

export type { Qa }

const S = '/schemas/v3/security'

export const securityFaq: Record<string, Qa[]> = {
  securitySchema: [
    {
      q: 'How do I add security to an AsyncAPI document?',
      a: `Define each scheme once under <code>components.securitySchemes</code>, then list the ones a server needs in that server's <code>security</code>. In AsyncAPI 3.0 the list holds references: <code>security: [{ $ref: '#/components/securitySchemes/saslScram' }]</code>. In 2.x it holds requirement objects: <code>security: [{ saslScram: [] }]</code>.`,
    },
    {
      q: 'Which security scheme types does AsyncAPI support?',
      a: `Thirteen: <code>userPassword</code>, <code>apiKey</code>, <code>X509</code>, <code>symmetricEncryption</code>, <code>asymmetricEncryption</code>, <code>httpApiKey</code>, <code>http</code>, <code>oauth2</code>, <code>openIdConnect</code>, <code>plain</code>, <code>scramSha256</code>, <code>scramSha512</code> and <code>gssapi</code>. Each has its own page in this section.`,
    },
    {
      q: 'What changed in security between AsyncAPI 2.x and 3.0?',
      a: `In 3.0 a <code>security</code> list holds security schemes or references to them, not <code>{ name: [scopes] }</code> requirement objects. OAuth 2.0 flows list their scopes in <code>availableScopes</code> (2.x: <code>scopes</code>), and the scopes a server or operation needs move to the scheme's own <code>scopes</code> field. This applies to <code>openIdConnect</code> too.`,
    },
    {
      q: 'Can an operation have its own security?',
      a: `Yes. The Operation Object has a <code>security</code> list in AsyncAPI 3.0, and since 2.4.0 in 2.x. Use it when one operation needs more than the server does, for example a write scope only to publish.`,
    },
  ],
  userPassword: [
    {
      q: 'When do I use userPassword instead of http basic or SASL/PLAIN?',
      a: `<code>userPassword</code> is a username and password sent the way the protocol itself does it, such as the MQTT CONNECT packet. For HTTP and WebSocket handshakes use <a href="${S}/http/nonBearerHTTPSecuritySchema.html"><code>http</code> with <code>scheme: basic</code></a>; for Kafka and other SASL brokers use <a href="${S}/sasl/saslPlainSecuritySchema.html"><code>plain</code></a> or <a href="${S}/sasl/saslScramSecuritySchema.html">SCRAM</a>.`,
    },
  ],
  apiKey: [
    {
      q: 'What is the difference between apiKey and httpApiKey?',
      a: `<code>apiKey</code> sends the key as the <code>user</code> or the <code>password</code> of the protocol's own login (its <code>in</code> field takes only those two values), for example an MQTT username. <a href="${S}/http/apiKeyHTTPSecuritySchema.html"><code>httpApiKey</code></a> is for HTTP and WebSocket: it names the parameter (<code>name</code>) and puts it in a <code>header</code>, <code>query</code> or <code>cookie</code>.`,
    },
  ],
  X509: [
    {
      q: 'Where do the certificates go in an X509 security scheme?',
      a: `Nowhere: the <code>X509</code> scheme has only <code>type</code> and <code>description</code>. It tells clients that the server expects a client certificate (mutual TLS). Certificates, trust stores and allowed issuers stay in client configuration; use <code>description</code> to say which CA signs them.`,
    },
  ],
  symmetricEncryption: [
    {
      q: 'What does symmetricEncryption declare?',
      a: `Only that messages are protected with a shared secret key. The scheme has no fields besides <code>type</code> and <code>description</code>, so the algorithm and how keys are exchanged belong in <code>description</code> or external documentation.`,
    },
  ],
  asymmetricEncryption: [
    {
      q: 'What does asymmetricEncryption declare?',
      a: `Only that a public and private key pair protects the exchange. The scheme has no fields besides <code>type</code> and <code>description</code>, so key distribution and algorithms belong in <code>description</code>.`,
    },
  ],
  openIdConnect: [
    {
      q: 'What is openIdConnectUrl?',
      a: `The URL of the provider's OpenID Connect discovery document, usually ending in <code>/.well-known/openid-configuration</code>. Clients read the authorization and token endpoints and the supported scopes from it, so the scheme does not repeat them.`,
    },
    {
      q: 'OpenID Connect or OAuth 2.0 in AsyncAPI?',
      a: `Use <code>openIdConnect</code> when your identity provider publishes a discovery document: one URL is enough. Use <a href="${S}/oauth2/oauth2.html"><code>oauth2</code></a> when you need to state the flows and their URLs yourself, for example a client credentials flow for services.`,
    },
  ],
  'http/httpSecuritySchema': [
    {
      q: 'Which HTTP security schemes does AsyncAPI have?',
      a: `Two types. <code>http</code> puts credentials in the <code>Authorization</code> header: <code>scheme: bearer</code> (with an optional <code>bearerFormat</code>) or any other scheme such as <code>basic</code> or <code>digest</code>. <code>httpApiKey</code> sends a key in a header, query parameter or cookie that you name.`,
    },
  ],
  'http/bearerHTTPSecuritySchema': [
    {
      q: 'What is the bearer scheme?',
      a: `An HTTP authentication scheme (RFC 6750) where the client sends <code>Authorization: Bearer &lt;token&gt;</code>. Whoever holds the token can use it, so it travels only over TLS. In AsyncAPI it is <code>type: http</code> with <code>scheme: bearer</code>.`,
    },
    {
      q: 'What does bearerFormat do?',
      a: `It tells readers how the token is built, for example <code>JWT</code>. It is documentation only: tools don't check tokens against it, and the field is optional.`,
    },
    {
      q: 'Can a browser WebSocket client send a bearer token?',
      a: `Not in a header: the browser WebSocket API cannot set <code>Authorization</code>. Browser clients pass the token in the query string or a cookie instead, which you describe with <a href="${S}/http/apiKeyHTTPSecuritySchema.html"><code>httpApiKey</code></a>. Server-side clients can send the header.`,
    },
  ],
  'http/nonBearerHTTPSecuritySchema': [
    {
      q: 'Digest vs NTLM: what is the difference?',
      a: `Digest (RFC 7616) is an open standard: the server sends a nonce and the client answers with a hash of the password and the nonce, so the password never crosses the wire. NTLM is a Microsoft challenge-response protocol for Windows domains and authenticates the connection, not each request. It is deprecated in favour of Kerberos, which HTTP carries as <code>scheme: negotiate</code>. In AsyncAPI both are <code>type: http</code>, with <code>scheme: digest</code> or <code>scheme: ntlm</code>.`,
    },
    {
      q: 'Which values can scheme take?',
      a: `Any HTTP authentication scheme name except <code>bearer</code>, which has its <a href="${S}/http/bearerHTTPSecuritySchema.html">own schema</a> with <code>bearerFormat</code>. The usual ones are in the IANA registry: <code>basic</code>, <code>digest</code>, <code>hoba</code>, <code>mutual</code>, <code>negotiate</code>, <code>scram-sha-256</code> and <code>vapid</code>.`,
    },
  ],
  'http/apiKeyHTTPSecuritySchema': [
    {
      q: 'Where can an HTTP API key go?',
      a: `In a <code>header</code>, <code>query</code> parameter or <code>cookie</code>: set <code>in</code> to one of these and <code>name</code> to the parameter name, for example <code>name: X-API-Key</code>, <code>in: header</code>.`,
    },
  ],
  'sasl/saslSecuritySchema': [
    {
      q: 'Which SASL mechanisms does AsyncAPI support?',
      a: `Four, each a scheme type: <code>plain</code> (SASL/PLAIN), <code>scramSha256</code> and <code>scramSha512</code> (SASL/SCRAM), and <code>gssapi</code> (Kerberos). SASL/OAUTHBEARER has no type of its own; describe the token endpoint with an <a href="${S}/oauth2/flows/clientCredentialsOAuthFlow.html"><code>oauth2</code> client credentials flow</a> and name the mechanism in <code>description</code>.`,
    },
    {
      q: 'How do I describe Kafka SASL_SSL in AsyncAPI?',
      a: `Set the server's <code>protocol</code> to <code>kafka-secure</code> (Kafka over TLS) and reference a SASL scheme in its <code>security</code>, for example <code>type: scramSha512</code>. SASL_PLAINTEXT is <code>protocol: kafka</code> with the same scheme.`,
    },
  ],
  'sasl/saslPlainSecuritySchema': [
    {
      q: 'Is SASL/PLAIN secure?',
      a: `Only over TLS. PLAIN sends the username and password as they are, so on Kafka use it with SASL_SSL (<code>protocol: kafka-secure</code>). When the broker supports it, <a href="${S}/sasl/saslScramSecuritySchema.html">SCRAM</a> avoids sending the password at all.`,
    },
  ],
  'sasl/saslScramSecuritySchema': [
    {
      q: 'What is SASL/SCRAM?',
      a: `Salted Challenge Response Authentication Mechanism (RFC 5802, RFC 7677). Client and server prove to each other that they know the password through a challenge and response; the password itself is never sent, and the server stores only a salted hash. Kafka, RabbitMQ, PostgreSQL and MongoDB support it.`,
    },
    {
      q: 'SCRAM-SHA-256 or SCRAM-SHA-512?',
      a: `They work the same way and differ only in the hash function. Use the one your broker has credentials for: in Kafka, users are created per mechanism with <code>kafka-configs --alter --add-config 'SCRAM-SHA-512=[password=…]'</code>. In AsyncAPI write <code>type: scramSha256</code> or <code>type: scramSha512</code>.`,
    },
  ],
  'sasl/saslGssapiSecuritySchema': [
    {
      q: 'What is GSSAPI in Kafka?',
      a: `The SASL mechanism for Kerberos. Clients get a ticket from the Kerberos KDC (often Active Directory) and present it to the broker, so no password reaches the broker. In AsyncAPI it is <code>type: gssapi</code>; the principal and keytab stay in client configuration.`,
    },
  ],
  'oauth2/oauth2': [
    {
      q: 'Which OAuth 2.0 flows does AsyncAPI support?',
      a: `Four, under <code>flows</code>: <a href="${S}/oauth2/flows/authorizationCodeOAuthFlow.html"><code>authorizationCode</code></a>, <a href="${S}/oauth2/flows/clientCredentialsOAuthFlow.html"><code>clientCredentials</code></a>, <a href="${S}/oauth2/flows/implicitOAuthFlow.html"><code>implicit</code></a> and <a href="${S}/oauth2/flows/passwordOAuthFlow.html"><code>password</code></a>. A scheme can list several.`,
    },
    {
      q: 'What is the difference between scopes and availableScopes?',
      a: `In AsyncAPI 3.0 each flow lists every scope it can grant in <code>availableScopes</code> (name to description), and the scheme's <code>scopes</code> lists the ones this server or operation needs. In 2.x the flow field is called <code>scopes</code>, and the needed scopes go in the security requirement: <code>security: [{ oauth: ['orders:read'] }]</code>.`,
    },
  ],
  'oauth2/oauth2Scopes': [
    {
      q: 'How are OAuth 2.0 scopes written in AsyncAPI?',
      a: `As a map from scope name to a short description, for example <code>orders:read: Receive order events</code>. In 3.0 the map is a flow's <code>availableScopes</code>, and the scheme's <code>scopes</code> array names the ones required.`,
    },
  ],
  'oauth2/flows/authorizationCodeOAuthFlow': [
    {
      q: 'Where does PKCE go in an authorization code flow?',
      a: `Nowhere in the document: PKCE is something the client does on top of the authorization code flow, and the flow object has no field for it. Mention it in the scheme's <code>description</code> if your provider requires it.`,
    },
  ],
  'oauth2/flows/clientCredentialsOAuthFlow': [
    {
      q: 'How do I write a client credentials security scheme in AsyncAPI YAML?',
      a: `<code>type: oauth2</code> with <code>flows.clientCredentials.tokenUrl</code> and its <code>availableScopes</code>, plus <code>scopes</code> for the ones needed. The complete documents on this page show it in AsyncAPI 3.0 and 2.6.`,
    },
  ],
  'oauth2/flows/implicitOAuthFlow': [
    {
      q: 'Should I still use the implicit flow?',
      a: `No. The OAuth 2.0 Security Best Current Practice (RFC 9700) says clients should not use it, because the token comes back in the URL. Use the <a href="${S}/oauth2/flows/authorizationCodeOAuthFlow.html">authorization code flow</a> with PKCE instead. AsyncAPI keeps <code>implicit</code> so existing systems can be described.`,
    },
  ],
  'oauth2/flows/passwordOAuthFlow': [
    {
      q: 'Should I still use the password flow?',
      a: `No. RFC 9700 says the resource owner password credentials grant must not be used: the client sees the user's password. Users should sign in with the <a href="${S}/oauth2/flows/authorizationCodeOAuthFlow.html">authorization code flow</a>; services should use <a href="${S}/oauth2/flows/clientCredentialsOAuthFlow.html">client credentials</a>.`,
    },
  ],
}
