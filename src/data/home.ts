// Copy for the home page. The FAQ also becomes FAQPage JSON-LD (seo.ts), so answers must stay true and match the page.
// Questions come from what people search for (Search Console and Bing Webmaster reports): answer them directly.

export const hero = {
  eyebrow: 'By an AsyncAPI Technical Steering Committee member',
  title: 'AsyncAPI tools and reference, from one of its maintainers',
  lead: 'Write, validate and generate AsyncAPI documents with a JetBrains plugin, keep them in step with live brokers with Kurkik, and look up every protocol binding, schema format and security scheme in plain language.',
}

export const facts = [
  { value: '20', label: 'brokers with bindings docs' },
  { value: '600+', label: 'JSON Schemas for validation' },
  { value: '2.x & 3.x', label: 'AsyncAPI versions covered' },
]

/** "What are you trying to do?" One card per search intent, each to the page that answers it. */
export const intents = [
  {
    title: 'Describe a broker',
    text: 'Kafka topics and keys, AMQP exchanges and queues, MQTT QoS, SQS and SNS: every binding field, with examples.',
    href: '/bindings/',
    cta: 'Bindings for 20 brokers',
  },
  {
    title: 'Define message payloads',
    text: 'JSON Schema, Avro, Protobuf and more: how the Schema and Multi-Format Schema objects describe what you send.',
    href: '/schemas/multiFormatSchema.html',
    cta: 'Schema formats',
  },
  {
    title: 'Secure the API',
    text: 'Bearer tokens, API keys, OAuth 2.0 flows, SASL PLAIN, SCRAM and GSSAPI, X.509: which scheme fits, and how to write it.',
    href: '/schemas/v3/security/securitySchema.html',
    cta: 'Security schemes',
  },
  {
    title: 'Write and validate in the IDE',
    text: 'An AsyncAPI editor inside IntelliJ IDEA and other JetBrains IDEs: completion, live validation, preview, linting.',
    href: '/jetbrains-plugin/',
    cta: 'JetBrains plugin',
  },
  {
    title: 'Generate from Spring code',
    text: 'Turn @KafkaListener, JMS, SNS, SQS, Pulsar and STOMP code into an AsyncAPI document instead of writing it twice.',
    href: '/jetbrains-plugin/frameworks/',
    cta: 'Spring Messaging support',
  },
  {
    title: 'Validate in CI or with AI agents',
    text: 'Point editors, pipelines and LLM agents at a schema URL for your AsyncAPI version and bindings.',
    href: '/schemas/registry.html',
    cta: 'JSON Schema registry',
  },
]

export const security = [
  { label: 'Bearer token', href: '/schemas/v3/security/http/bearerHTTPSecuritySchema.html' },
  { label: 'HTTP API key', href: '/schemas/v3/security/http/apiKeyHTTPSecuritySchema.html' },
  { label: 'Basic and Digest', href: '/schemas/v3/security/http/nonBearerHTTPSecuritySchema.html' },
  { label: 'API key', href: '/schemas/v3/security/apiKey.html' },
  { label: 'OAuth 2.0', href: '/schemas/v3/security/oauth2/oauth2.html' },
  { label: 'OpenID Connect', href: '/schemas/v3/security/openIdConnect.html' },
  { label: 'SASL PLAIN', href: '/schemas/v3/security/sasl/saslPlainSecuritySchema.html' },
  { label: 'SASL SCRAM', href: '/schemas/v3/security/sasl/saslScramSecuritySchema.html' },
  { label: 'SASL GSSAPI (Kerberos)', href: '/schemas/v3/security/sasl/saslGssapiSecuritySchema.html' },
  { label: 'X.509 certificates', href: '/schemas/v3/security/X509.html' },
  { label: 'User and password', href: '/schemas/v3/security/userPassword.html' },
  { label: 'Symmetric encryption', href: '/schemas/v3/security/symmetricEncryption.html' },
]

export const schemaFormats = [
  { label: 'AsyncAPI Schema', href: '/schemas/schema.html' },
  { label: 'JSON Schema', href: '/schemas/multiFormatSchema.html#json-schema' },
  { label: 'Avro', href: '/schemas/multiFormatSchema.html#avro' },
  { label: 'Protobuf', href: '/schemas/multiFormatSchema.html#google-protobuf' },
  { label: 'OpenAPI Schema', href: '/schemas/multiFormatSchema.html#openapi-schema' },
  { label: 'XML', href: '/schemas/multiFormatSchema.html#xml' },
]

export const users = [
  { name: 'Danske Bank', logo: '/jetbrains-plugin/users/danske-bank.png', href: 'https://danskebank.dk' },
  { name: 'OTTO', logo: '/jetbrains-plugin/users/otto.svg', href: 'https://www.otto.de/unternehmen/' },
  { name: 'Solace', logo: '/jetbrains-plugin/users/solace.png', href: 'https://solace.com' },
  { name: 'Specmatic', logo: '/jetbrains-plugin/users/specmatic.jpg', href: 'https://specmatic.io' },
  { name: 'Aceña', logo: '/jetbrains-plugin/users/acena.jpeg', href: 'https://acena.cc/' },
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
    title: 'Meet Kurkik: AsyncAPI for Kafka, Pulsar, SNS and SQS',
    url: 'https://pavelon.dev/posts/meet-kurkik/',
    summary: 'Why a live broker and its AsyncAPI document drift apart, and how Kurkik finds it.',
  },
]

/** `a` may contain links; it is shown on the page and copied into FAQPage JSON-LD as is. */
export const faq = [
  {
    q: 'What is AsyncAPI?',
    a: 'AsyncAPI is an open specification for describing message-driven APIs: which servers (brokers) an application connects to, which channels (topics, queues, routing keys) it uses, which messages it sends or receives and what their payloads look like. It does for Kafka, MQTT, AMQP, WebSocket and other protocols what OpenAPI does for HTTP request-response APIs, and documents are written in YAML or JSON.',
  },
  {
    q: 'What is the difference between AsyncAPI and OpenAPI?',
    a: 'OpenAPI describes request-response HTTP APIs: paths, methods and responses. AsyncAPI describes event-driven APIs: channels, the messages on them and whether an application sends or receives them, over protocols such as Kafka, AMQP, MQTT or WebSocket. Both describe payloads with JSON Schema, and AsyncAPI can reuse OpenAPI schemas through the Multi-Format Schema Object.',
  },
  {
    q: 'What is an AsyncAPI binding?',
    a: 'A binding adds protocol-specific details that the core specification does not cover, at server, channel, operation or message level: for example a Kafka topic’s partitions and the message key, an AMQP exchange and queue, or MQTT QoS. Each broker has its own binding with its own versions. <a href="/bindings/">Bindings for 20 brokers</a> are documented here with examples.',
  },
  {
    q: 'Is AsyncAPI the same as JSON Schema?',
    a: 'No. JSON Schema describes the shape of a piece of data; AsyncAPI describes a whole messaging API and uses a schema for each message payload. The AsyncAPI Schema Object is a superset of JSON Schema draft-07, and other formats such as Avro or Protobuf can be used through <a href="/schemas/multiFormatSchema.html">the Multi-Format Schema Object</a>.',
  },
  {
    q: 'How do I use an Avro or Protobuf schema in AsyncAPI?',
    a: 'In AsyncAPI 3.0, set the message payload to a Multi-Format Schema Object: <code>schemaFormat</code> names the format, for example <code>application/vnd.apache.avro;version=1.9.0</code>, and <code>schema</code> holds the schema itself or a <code>$ref</code> to it. In AsyncAPI 2.x, put <code>schemaFormat</code> on the message next to <code>payload</code>. Protobuf uses <code>application/vnd.google.protobuf;version=3</code>, which not every tool supports. <a href="/schemas/multiFormatSchema.html#avro">Avro examples</a>.',
  },
  {
    q: 'How do I add message examples to an AsyncAPI document?',
    a: 'Use the <code>examples</code> field of the Message Object: a list of examples, each with optional <code>name</code>, <code>summary</code>, <code>headers</code> and <code>payload</code>. Examples should validate against the message’s payload and headers schemas.',
  },
  {
    q: 'How do I describe a Kafka message key in AsyncAPI?',
    a: 'Use the Kafka message binding: its <code>key</code> field holds the schema of the record key, next to the message payload. Topic settings such as partitions and replicas go in the Kafka channel binding, and consumer group and client IDs in the operation binding. <a href="/bindings/apache-kafka/">Kafka binding reference</a>.',
  },
  {
    q: 'Is there an AsyncAPI editor for IntelliJ IDEA?',
    a: 'Yes. <a href="/jetbrains-plugin/">The AsyncAPI plugin for JetBrains IDEs</a> adds completion, live validation for AsyncAPI 2.x and 3.x, a preview, Spectral and Redocly linting, and generation of AsyncAPI documents from Spring Messaging code. It works in IntelliJ IDEA, WebStorm, PyCharm, Android Studio and other JetBrains IDEs, with a free core and paid extras.',
  },
  {
    q: 'How do I validate an AsyncAPI document?',
    a: 'Validate as you type in the JetBrains plugin, or validate against the AsyncAPI JSON Schemas from <a href="/schemas/registry.html">the schema registry</a> in any editor and in CI, for example with check-jsonschema. Add Spectral or Redocly rules for style and conventions.',
  },
  {
    q: 'How can an AI agent or LLM write valid AsyncAPI?',
    a: 'Give the agent the schema URL for your AsyncAPI version and binding from the registry. It can read the structure from the schema, generate a document or a single binding, then validate the result against the same schema and fix what it reports.',
  },
  {
    q: 'How do I keep an AsyncAPI document in sync with the code and the brokers?',
    a: 'From the code side, the JetBrains plugin regenerates the document from Spring Messaging code so you review what changed. From the broker side, <a href="https://kurkik.pavelon.dev">Kurkik</a> compares the document with a live Kafka, Pulsar, SNS or SQS system, reports drift and applies changes only after you approve them.',
  },
]
