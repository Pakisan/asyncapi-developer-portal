// Single source of truth for the portfolio: used by the landing page cards and by the JSON-LD (seo.ts).
// Copy here is public marketing copy for closed-source tools: describe outcomes, never internals.

export { SITE_URL } from './site'

export type ProductStatus = 'available' | 'freemium' | 'announced'

export interface Product {
  id: string
  name: string
  tagline: string
  summary: string
  status: ProductStatus
  statusLabel: string
  audience: string
  features: string[]
  /** Dedicated page on this site (root-relative) */
  page: string
  /** Where to get it (absent for announced tools) */
  installUrl?: string
  repoUrl?: string
  group: 'Reference' | 'IDE & editors' | 'Code & automation'
  applicationCategory: string
  operatingSystem: string
  // TODO(confirm): public plugin version (changelog says 3.7.0, build says 4.14.0) and repo URL (Pakisan vs asyncapi org)
  softwareVersion?: string
}

export const products: Product[] = [
  {
    id: 'jetbrains-plugin',
    name: 'AsyncAPI plugin for JetBrains IDEs',
    tagline: 'Keep AsyncAPI in step with your Spring code, inside IntelliJ IDEA, WebStorm, PyCharm and Android Studio',
    summary:
      'Generate AsyncAPI documentation straight from your Spring Messaging code and catch drift between the document and the implementation as you work. Also a complete AsyncAPI editor: validate while you type and preview the result.',
    status: 'freemium',
    statusLabel: 'Free + Pro',
    audience: 'Teams documenting event-driven systems, Spring developers, API designers',
    features: [
      'Live validation, completion and quick fixes for AsyncAPI 2.x and 3.x',
      'Instant preview, templates and resolution of references across files',
      'Spectral and Redocly linting without leaving the editor',
      'Generate AsyncAPI documents from Spring Messaging code: Kafka, JMS, Amazon SNS and SQS, Pulsar, STOMP, SSE',
      'Inspect a single server, channel, message or operation in isolation',
    ],
    page: '/jetbrains-plugin/',
    installUrl: 'https://plugins.jetbrains.com/plugin/15673-asyncapi',
    group: 'IDE & editors',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Windows, macOS, Linux',
  },
  {
    id: 'language-server',
    name: 'AsyncAPI Language Server',
    tagline: 'AsyncAPI support for VS Code, Zed and Sublime Text',
    summary:
      'Bring diagnostics, completion and hover documentation for AsyncAPI documents to your favourite editor, not only to JetBrains IDEs.',
    status: 'announced',
    statusLabel: 'In development',
    audience: 'Developers who write AsyncAPI outside JetBrains IDEs',
    features: [
      'Errors and warnings highlighted as you type',
      'Context-aware completion',
      'Quick documentation on hover',
      'Planned: VS Code, Zed and Sublime Text',
    ],
    page: '/language-server.html',
    repoUrl: 'https://github.com/Pakisan/asyncapi-lsp',
    group: 'IDE & editors',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Windows, macOS, Linux',
  },
  {
    id: 'kurkik',
    name: 'Kurkik',
    tagline: 'Catch drift between your AsyncAPI document and the brokers and queues that actually run',
    summary:
      'Point it at an existing messaging system and get an up-to-date AsyncAPI 3.0 document. Compare the document with reality to spot drift, and apply fixes only after you review them.',
    status: 'available',
    statusLabel: 'Early Access Program',
    audience: 'Platform and data engineers, architects, governance teams',
    features: [
      'Document an existing Apache Kafka, Apache Pulsar, Amazon SNS or Amazon SQS estate',
      'Detect drift between your AsyncAPI document and the live system',
      'Apply changes as a reviewed plan, with the risky ones kept out of the default approval',
      'Says plainly what it could not read, instead of guessing',
    ],
    page: 'https://kurkik.pavelon.dev',
    group: 'Code & automation',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Windows, macOS, Linux',
  },
  {
    id: 'jasyncapi',
    name: 'JAsyncAPI',
    tagline: 'Read, create and write AsyncAPI documents from Java and Kotlin',
    summary:
      'A free, open-source JVM library with models for AsyncAPI 2.x and 3.x, all protocol bindings and all security schemes. Used by Springwolf, the Quarkus AsyncAPI extension and Specmatic.',
    status: 'available',
    statusLabel: 'Free & open source',
    audience: 'JVM developers and tool authors',
    features: [
      'AsyncAPI 2.0.0, 2.6.0 and 3.0.0',
      '19 protocol bindings, from Kafka and AMQP to MQTT, NATS, SNS and SQS',
      'All security scheme types',
      'Apache-2.0 on Maven Central: com.asyncapi:asyncapi-core',
    ],
    page: '/jasyncapi/',
    installUrl: 'https://central.sonatype.com/artifact/com.asyncapi/asyncapi-core',
    repoUrl: 'https://github.com/asyncapi/jasyncapi',
    group: 'Code & automation',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any (JVM)',
  },
  {
    id: 'bindings',
    name: 'AsyncAPI Bindings documentation',
    tagline: 'Kafka, AMQP, MQTT, SNS, SQS and 15 more brokers, with examples',
    summary:
      'Plain-language reference for every AsyncAPI protocol binding: what each field does, working examples and the gotchas worth knowing before you write the document.',
    status: 'available',
    statusLabel: 'Free',
    audience: 'Anyone describing brokers and queues in AsyncAPI',
    features: ['20 brokers, all binding versions', 'Channel, message, operation and server bindings', 'Copy-paste examples'],
    page: '/bindings/',
    group: 'Reference',
    applicationCategory: 'ReferenceApplication',
    operatingSystem: 'Web',
  },
  {
    id: 'schemas',
    name: 'AsyncAPI Schemas documentation',
    tagline: 'Understand AsyncAPI data, security and multi-format schemas, with examples',
    summary:
      'Documentation for the AsyncAPI Schema Object, security schemes and multi-format schemas (Avro, JSON Schema, XML and more): how to use them in AsyncAPI documents and while generating them.',
    status: 'available',
    statusLabel: 'Free',
    audience: 'Authors and generators of AsyncAPI documents',
    features: ['Schema and multi-format schema objects', 'HTTP, OAuth 2.0 and SASL security schemes', 'Examples and hints for real documents'],
    page: '/schemas/',
    group: 'Reference',
    applicationCategory: 'ReferenceApplication',
    operatingSystem: 'Web',
  },
  {
    id: 'schema-registry',
    name: 'AsyncAPI JSON Schema Registry',
    tagline: 'Machine-readable schemas to validate and autocomplete AsyncAPI, for tools and AI agents',
    summary:
      'Point your editor, CI pipeline or AI agent at a schema URL to validate AsyncAPI documents, bindings and security schemes, get autocompletion, and understand the structure of the specification.',
    status: 'available',
    statusLabel: 'Free',
    audience: 'Engineers, CI pipelines, AI agents and LLMs',
    features: [
      'AsyncAPI 3.0 and 3.1 documents, 603 draft-07 schemas',
      'Bindings for 20 brokers, per version',
      'Works in JetBrains IDEs, VS Code, check-jsonschema and agents',
      'Nightly channel with refactored, improved schemas',
    ],
    page: '/schemas/registry.html',
    installUrl: 'https://schemas.asyncapi.pavelon.dev',
    group: 'Reference',
    applicationCategory: 'ReferenceApplication',
    operatingSystem: 'Web',
  },
]
