// What the security scheme pages (`/schemas/v3/security/**`) add to their hand-written text: the scheme inside a whole
// AsyncAPI 3.0 and 2.6 document, its fields read from its JSON Schema in the registry (fetched before the build by scripts/fetch-schemas.mjs),
// the registry URL and the questions people search for. One model feeds the HTML (components/schemas), the table of
// contents (routeData.ts), the Markdown copy for agents and the JSON-LD.
import fs from 'node:fs'
import { cacheFile } from '../../scripts/fetch-schemas.mjs'
import { type Qa, securityFaq } from './security-faq'
import { type Field, schemaFields } from './schema-fields'

type Scheme = Record<string, any>

const REGISTRY = 'https://schemas.asyncapi.pavelon.dev/draft-07/'

export const SECURITY_ID = /^schemas\/v3\/security\/(.+)$/

interface Server {
  host: string
  protocol: string
}
const BROKER: Server = { host: 'broker.example.com:9093', protocol: 'kafka-secure' }
const MQTT: Server = { host: 'broker.example.com:8883', protocol: 'secure-mqtt' }
const WS: Server = { host: 'api.example.com', protocol: 'wss' }

const SCOPES = { 'orders:read': 'Receive order events', 'orders:write': 'Publish order events' }
const flow = (name: string, urls: Record<string, string>): Scheme => ({
  type: 'oauth2',
  description: `OAuth 2.0, ${name} flow`,
  flows: { [name]: { ...urls, availableScopes: SCOPES } },
  scopes: ['orders:read'],
})
const AUTH = 'https://auth.example.com/oauth/authorize'
const TOKEN = 'https://auth.example.com/oauth/token'

interface PageSpec {
  /** Schemes as written under `components.securitySchemes` in AsyncAPI 3.0, by name */
  schemes: Record<string, Scheme>
  server: Server
  /** A page about a choice between schemes (`oneOf`): no field table, its variants have their own pages */
  union?: boolean
}

const PAGES: Record<string, PageSpec> = {
  securitySchema: {
    union: true,
    server: BROKER,
    schemes: {
      saslScram: { type: 'scramSha512', description: 'Kafka SASL/SCRAM-SHA-512 over TLS' },
      mtls: { type: 'X509', description: 'Client certificate (mutual TLS)' },
    },
  },
  userPassword: { server: MQTT, schemes: { userPassword: { type: 'userPassword', description: 'Username and password in the MQTT CONNECT packet' } } },
  apiKey: { server: MQTT, schemes: { apiKey: { type: 'apiKey', in: 'user', description: 'API key sent as the MQTT username' } } },
  X509: { server: MQTT, schemes: { mtls: { type: 'X509', description: 'Client certificate (mutual TLS)' } } },
  symmetricEncryption: { server: MQTT, schemes: { sharedKey: { type: 'symmetricEncryption', description: 'Payloads encrypted with a shared key' } } },
  asymmetricEncryption: { server: MQTT, schemes: { keyPair: { type: 'asymmetricEncryption', description: 'Payloads signed and encrypted with a key pair' } } },
  openIdConnect: {
    server: WS,
    schemes: {
      oidc: {
        type: 'openIdConnect',
        description: 'Token from the company identity provider',
        openIdConnectUrl: 'https://auth.example.com/.well-known/openid-configuration',
        scopes: ['openid', 'orders:read'],
      },
    },
  },
  'http/httpSecuritySchema': {
    union: true,
    server: WS,
    schemes: {
      bearer: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', description: 'JWT in the Authorization header' },
      basic: { type: 'http', scheme: 'basic', description: 'HTTP Basic authentication' },
      apiKey: { type: 'httpApiKey', name: 'api_key', in: 'query', description: 'API key in the query string' },
    },
  },
  'http/bearerHTTPSecuritySchema': {
    server: WS,
    schemes: { bearer: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', description: 'JWT in the Authorization header' } },
  },
  'http/nonBearerHTTPSecuritySchema': {
    server: WS,
    schemes: {
      basic: { type: 'http', scheme: 'basic', description: 'HTTP Basic authentication' },
      digest: { type: 'http', scheme: 'digest', description: 'HTTP Digest authentication' },
    },
  },
  'http/apiKeyHTTPSecuritySchema': {
    server: WS,
    schemes: { apiKey: { type: 'httpApiKey', name: 'api_key', in: 'query', description: 'API key in the query string of the WebSocket URL' } },
  },
  'sasl/saslSecuritySchema': {
    union: true,
    server: BROKER,
    schemes: {
      saslScram: { type: 'scramSha512', description: 'SASL/SCRAM-SHA-512' },
      saslPlain: { type: 'plain', description: 'SASL/PLAIN' },
      kerberos: { type: 'gssapi', description: 'SASL/GSSAPI (Kerberos)' },
    },
  },
  'sasl/saslPlainSecuritySchema': { server: BROKER, schemes: { saslPlain: { type: 'plain', description: 'SASL/PLAIN over TLS' } } },
  'sasl/saslScramSecuritySchema': { server: BROKER, schemes: { saslScram: { type: 'scramSha512', description: 'SASL/SCRAM-SHA-512 over TLS' } } },
  'sasl/saslGssapiSecuritySchema': { server: BROKER, schemes: { kerberos: { type: 'gssapi', description: 'SASL/GSSAPI (Kerberos)' } } },
  'oauth2/oauth2': { server: WS, schemes: { oauth: flow('clientCredentials', { tokenUrl: TOKEN }) } },
  'oauth2/oauth2Scopes': { server: WS, schemes: { oauth: flow('authorizationCode', { authorizationUrl: AUTH, tokenUrl: TOKEN }) } },
  'oauth2/flows/authorizationCodeOAuthFlow': { server: WS, schemes: { oauth: flow('authorizationCode', { authorizationUrl: AUTH, tokenUrl: TOKEN, refreshUrl: TOKEN }) } },
  'oauth2/flows/clientCredentialsOAuthFlow': { server: WS, schemes: { oauth: flow('clientCredentials', { tokenUrl: TOKEN }) } },
  'oauth2/flows/implicitOAuthFlow': { server: WS, schemes: { oauth: flow('implicit', { authorizationUrl: AUTH }) } },
  'oauth2/flows/passwordOAuthFlow': { server: WS, schemes: { oauth: flow('password', { tokenUrl: TOKEN, refreshUrl: TOKEN }) } },
}

/** Loads a registry schema by its URL (the registry lowercases paths), from the copy fetched before the build. */
function load(url: string): Scheme | undefined {
  if (!url.startsWith(REGISTRY)) return undefined
  const file = cacheFile(url.replace(/#.*$/, '').toLowerCase())
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : undefined
}

// ---- YAML, for the example documents. Only what the examples use: maps, lists and strings. ----

const RESERVED = /^(true|false|null|yes|no|on|off|~|[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?)$/i
const scalar = (s: string) =>
  /^[$A-Za-z0-9_][\w .,:/@()-]*$/.test(s) && !RESERVED.test(s) && !/: |:$| $/.test(s) ? s : `'${s.replace(/'/g, "''")}'`

function yaml(value: unknown, indent = ''): string {
  if (Array.isArray(value)) {
    if (!value.length) return ' []'
    return value.map((v) => `\n${indent}- ${typeof v === 'object' && v ? yaml(v, `${indent}  `).trimStart() : scalar(String(v))}`).join('')
  }
  if (value && typeof value === 'object') {
    if (!Object.keys(value).length) return ' {}'
    return Object.entries(value)
      .map(([k, v]) => {
        const key = scalar(k)
        if (v && typeof v === 'object') return `\n${indent}${key}:${yaml(v, `${indent}  `)}`
        return `\n${indent}${key}: ${scalar(String(v))}`
      })
      .join('')
  }
  return ` ${scalar(String(value))}`
}
const toYaml = (doc: object) => `${yaml(doc).trimStart()}\n`

// ---- The scheme in a whole document ----

const INFO = { title: 'Orders', version: '1.0.0' }

function document3(spec: PageSpec): string {
  return toYaml({
    asyncapi: '3.0.0',
    info: INFO,
    servers: {
      production: { ...spec.server, security: Object.keys(spec.schemes).map((name) => ({ $ref: `#/components/securitySchemes/${name}` })) },
    },
    components: { securitySchemes: spec.schemes },
  })
}

/** AsyncAPI 2.x: flows list `scopes`, not `availableScopes`, and the scopes a server needs go in its requirement. */
function scheme2(s: Scheme): Scheme {
  const { scopes: _, ...rest } = s
  if (!rest.flows) return rest
  const flows = Object.fromEntries(Object.entries<Scheme>(rest.flows).map(([k, { availableScopes, ...f }]) => [k, { ...f, scopes: availableScopes }]))
  return { ...rest, flows }
}

function document2(spec: PageSpec): string {
  const { host, protocol } = spec.server
  return toYaml({
    asyncapi: '2.6.0',
    info: INFO,
    servers: {
      production: { url: host, protocol, security: Object.entries(spec.schemes).map(([name, s]) => ({ [name]: s.scopes ?? [] })) },
    },
    channels: {},
    components: { securitySchemes: Object.fromEntries(Object.entries(spec.schemes).map(([k, s]) => [k, scheme2(s)])) },
  })
}

export interface SecurityPage {
  /** Path under `schemas/v3/security/`, without extension */
  key: string
  title: string
  types: string[]
  union: boolean
  asyncapi3: string
  asyncapi2: string
  fields: Field[]
  schema: string
  faq: Qa[]
}

const pages = new Map<string, SecurityPage | undefined>()

export function securityPage(id: string): SecurityPage | undefined {
  const key = id.match(SECURITY_ID)?.[1]
  if (!key) return undefined
  if (pages.has(key)) return pages.get(key)
  const spec = PAGES[key]
  const schema = load(`${REGISTRY}schemas/v3/security/${key}`)
  const result: SecurityPage | undefined =
    spec && schema
      ? {
          key,
          title: String(schema.title ?? key).replace(/^AsyncAPI v3 - /, ''),
          types: [...new Set(Object.values(spec.schemes).map((s) => s.type as string))],
          union: Boolean(spec.union),
          asyncapi3: document3(spec),
          asyncapi2: document2(spec),
          fields: spec.union ? [] : schemaFields(schema, load),
          schema: `${REGISTRY}schemas/v3/security/${key}`,
          faq: securityFaq[key] ?? [],
        }
      : undefined
  pages.set(key, result)
  return result
}

export const securityHeadings = (p: SecurityPage) => [
  { slug: 'in-a-document', text: 'In an AsyncAPI document' },
  ...(p.fields.length ? [{ slug: 'fields', text: 'Fields' }] : []),
  { slug: 'json-schema', text: 'Validate with JSON Schema' },
  ...(p.faq.length ? [{ slug: 'questions', text: 'Questions' }] : []),
]

const md = (s: string) => s.replace(/<a href="([^"]+)">([^<]+)<\/a>/g, '[$2]($1)').replace(/<\/?code>/g, '`').replace(/<\/?(em|b|strong)>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')

/** The generated sections as Markdown, appended to the page's Markdown copy for agents. */
export function securityMarkdown(p: SecurityPage): string {
  const lines = ['', '## In an AsyncAPI document', '', 'AsyncAPI 3.0:', '', '```yaml', p.asyncapi3.trimEnd(), '```', '', 'AsyncAPI 2.6:', '', '```yaml', p.asyncapi2.trimEnd(), '```']
  if (p.fields.length) {
    lines.push('', '## Fields', '', '| Field | Type | Required | Description |', '| --- | --- | --- | --- |')
    for (const x of p.fields) lines.push(`| \`${x.path}\` | ${x.type}${x.values ? `: ${x.values.join(', ')}` : ''} | ${x.required ? 'yes' : ''} | ${x.description.replace(/\|/g, '\\|')} |`)
  }
  lines.push('', '## Validate with JSON Schema', '', p.schema)
  return `${lines.join('\n')}\n${p.faq.length ? faqMarkdown(p.faq) : ''}`
}

/** Questions as Markdown, for the Markdown copy of a page. */
export const faqMarkdown = (faq: Qa[]) => ['', '## Questions', ...faq.flatMap((q) => ['', `### ${q.q}`, '', md(q.a)])].join('\n') + '\n'
