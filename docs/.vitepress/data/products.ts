// Single source of truth for the portfolio: used by the landing page cards and by the JSON-LD (seo.ts).
// Copy here is public marketing copy for closed-source tools: describe outcomes, never internals.

export const SITE_URL = 'https://asyncapi.pavelon.dev'

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
    status: 'announced',
    statusLabel: 'Coming soon',
    audience: 'Platform and data engineers, architects, governance teams',
    features: [
      'Document an existing Apache Kafka, Apache Pulsar, Amazon SNS or Amazon SQS estate',
      'Detect drift between your AsyncAPI document and the live system',
      'Apply changes as a reviewed plan, with the risky ones kept out of the default approval',
      'Says plainly what it could not read, instead of guessing',
    ],
    page: '/kurkik/',
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

export const articles = [
  {
    title: 'AsyncAPI JetBrains plugin empowers Spring Messaging',
    url: 'https://pavelon.dev/posts/asyncapi-jetbrains-plugin-empowers-spring-messaging/',
    summary: 'How to get AsyncAPI documentation out of Spring Messaging code, and keep it correct.',
  },
  {
    title: 'IDEA as the backend for AI coding agents on Spring Messaging',
    url: 'https://pavelon.dev/posts/asyncapi-jetbrains-plugin-idea-as-the-backend-for-ai-coding-agents-on-spring-messaging/',
    summary: 'Give AI coding agents accurate knowledge of your messaging layer.',
  },
  {
    title: 'AsyncAPI JetBrains plugin digest #2',
    url: 'https://pavelon.dev/posts/asyncapi-jetbrains-plugin-digest-2/',
    summary: 'What is new in the plugin: features, fixes and what comes next.',
  },
  {
    title: 'AsyncAPI JetBrains plugin digest #1',
    url: 'https://pavelon.dev/posts/asyncapi-jetbrains-plugin-digest-1/',
    summary: 'The first round-up of plugin changes and ideas.',
  },
]

export const faq = [
  {
    q: 'What is a self-maintaining API, and what is AsyncAPI drift?',
    a: 'Drift is when an AsyncAPI document no longer matches the system it describes: the code sends different messages, or topics and queues were changed on the broker. A self-maintaining API detects that mismatch and brings the declaration and the implementation back in step. These tools do it from both sides: the JetBrains plugin from your source code, and Kurkik (coming soon) from live brokers and queues.',
  },
  {
    q: 'How do I detect drift between AsyncAPI and my code or my broker?',
    a: 'From code, the JetBrains plugin regenerates the AsyncAPI document from Spring Messaging code so you can review what changed. From the broker side, Kurkik, announced and coming soon, compares the document with a live Kafka, Pulsar, SNS or SQS system and reports what matches, changed, is missing or is extra. Validate the result against the schema registry in CI.',
  },
  {
    q: 'How do I document Spring Kafka, JMS, SNS or SQS listeners as AsyncAPI?',
    a: 'The AsyncAPI plugin for JetBrains IDEs can generate an AsyncAPI document from your Spring Messaging code, so the documentation comes from the source instead of being written twice. Kafka, JMS, Amazon SNS and SQS, Pulsar, STOMP and SSE are covered.',
  },
  {
    q: 'Where can I find AsyncAPI binding examples for Kafka, AMQP, MQTT and other brokers?',
    a: 'The bindings documentation on this site covers 20 brokers with every binding version, field explanations and working examples.',
  },
  {
    q: 'How do I validate an AsyncAPI document?',
    a: 'Validate in the editor with the JetBrains plugin, lint with Spectral or Redocly, or validate against the AsyncAPI JSON Schemas from the schema registry at schemas.asyncapi.pavelon.dev, for example with check-jsonschema in CI.',
  },
  {
    q: 'Where can I get JSON Schemas for AsyncAPI documents and bindings?',
    a: 'The AsyncAPI JSON Schema Registry at schemas.asyncapi.pavelon.dev serves schemas for AsyncAPI 3.0 and 3.1 documents, 20 broker bindings and security schemes. Use the URL in your editor, in CI, or give it to an AI agent.',
  },
  {
    q: 'How can an AI agent or LLM validate or generate AsyncAPI correctly?',
    a: 'Give the agent the schema URL for your AsyncAPI version and binding. It can read the structure from the schema, generate a document or a single binding, then validate the result against the same schema and fix the reported errors.',
  },
  {
    q: 'How do I split a large AsyncAPI document into smaller files?',
    a: 'Use references between files. The JetBrains plugin resolves them, validates the result and lets you preview a single server, channel, message or operation on its own.',
  },
  {
    q: 'Can I write AsyncAPI without a JetBrains IDE?',
    a: 'Yes. The schema registry works in any editor or CI pipeline, and the AsyncAPI Language Server for VS Code, Zed and Sublime Text is in development.',
  },
  {
    q: 'Is there a free way to use these tools?',
    a: 'Yes. The plugin has a free core, JAsyncAPI is open source under Apache-2.0, and the bindings and schemas documentation is free. If you enjoy the free tools, you can support the work through GitHub Sponsors.',
  },
  {
    q: 'How do I keep AsyncAPI documentation in sync with a running Kafka, Pulsar, SNS or SQS system?',
    a: 'Kurkik, announced and coming soon, documents an existing system as AsyncAPI 3.0, reports drift and applies changes only after review.',
  },
]
