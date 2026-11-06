// Copy for the JetBrains plugin landing. It follows the Marketplace description (the source of truth for what is Free and
// what is Pro): when the plugin changes, change both. The FAQ also becomes FAQPage JSON-LD, so answers must match the page.
import { MARKETPLACE_URL, marketplace, supportedIdes } from './marketplace'

export const hero = {
  eyebrow: 'AsyncAPI plugin for JetBrains IDEs',
  title: 'The AsyncAPI editor for IntelliJ IDEA and every JetBrains IDE',
  lead: 'Write, validate and preview AsyncAPI 2.x and 3.x documents. Generate them from Spring code or a live Kafka, Pulsar, SNS or SQS system, and see where the document, the code and the broker disagree. All without leaving the IDE.',
}

type Tier = 'Free' | 'Pro' | 'Free + Pro'

export interface Scenario {
  id: string
  tier: Tier
  title: string
  text: string
  points: string[]
  media?: { video: string; poster: string; alt: string }
  links: { label: string; href: string }[]
}

/** What people come to do, in the order they usually meet the plugin. */
export const scenarios: Scenario[] = [
  {
    id: 'write',
    tier: 'Free',
    title: 'Write and validate AsyncAPI documents',
    text: 'Open any AsyncAPI file and the IDE knows the specification: errors as you type, completion for every field, and a rendered preview next to the source.',
    points: [
      'Validation against up-to-date AsyncAPI JSON Schemas for 2.0.0 to 3.1.0, with quick fixes',
      'Completion for channels, operations, messages, bindings, security schemes and enum values',
      'Preview in a split pane or in the browser, with every $ref resolved',
      'Completion and Go to Declaration across files and remote URLs, through JSON Pointers',
      'New documents from templates, in YAML or JSON',
    ],
    media: { video: '/jetbrains-plugin/features/validate.mp4', poster: '/jetbrains-plugin/features/validate-poster.jpg', alt: 'An AsyncAPI document in IntelliJ IDEA with a validation error highlighted as it is typed' },
    links: [
      { label: 'Read a document', href: '/jetbrains-plugin/ui/read.html' },
      { label: 'All editor features', href: '/jetbrains-plugin/features.html#for-asyncapi-contract-authors' },
    ],
  },
  {
    id: 'spring',
    tier: 'Free + Pro',
    title: 'Generate AsyncAPI from Spring code',
    text: 'The AsyncAPI: Spring tool window finds every listener and sender in a Spring project, shows how they connect, and exports an AsyncAPI document per environment.',
    points: [
      'Listeners: @KafkaListener, @RabbitListener, @PulsarListener, @SqsListener, @JmsListener, SNS and STOMP mappings',
      'Senders: KafkaTemplate, RabbitTemplate, JmsTemplate, PulsarTemplate, SqsTemplate, SnsTemplate, SimpMessagingTemplate',
      'A topology of producers and consumers per channel, across modules and protocols',
      'Export for Apache Kafka, Apache Pulsar, Amazon SQS, Amazon SNS and JMS, with bindings read from the code',
      'Free inspections for listener mistakes, such as two @KafkaListener methods sharing a groupId',
    ],
    links: [
      { label: 'Spring Kafka to AsyncAPI', href: '/jetbrains-plugin/frameworks/spring/apache-kafka/' },
      { label: 'Kafka inspections', href: '/jetbrains-plugin/frameworks/spring/apache-kafka/inspections.html' },
    ],
  },
  {
    id: 'brokers',
    tier: 'Pro',
    title: 'Document a live Kafka, Pulsar, SNS or SQS system',
    text: 'Point the plugin at a cluster or an AWS account and get an AsyncAPI document of its topics and queues. No source code needed, so it works in every JetBrains IDE.',
    points: [
      'Broker Connections for Kafka (including Confluent Cloud and Schema Registry), Pulsar 4.0 and 5.0, and AWS accounts',
      'Secrets kept in the IDE password safe, never in project files',
      'AsyncAPI: Preview shows what a connection holds: topics, partitions, consumer groups, ACLs, queues and their policies',
      'Read-only, and only when you ask. What the user may not see is reported, not hidden',
    ],
    links: [{ label: 'Live broker features', href: '/jetbrains-plugin/features.html#for-teams-running-apache-kafka-apache-pulsar-amazon-sns-or-amazon-sqs' }],
  },
  {
    id: 'drift',
    tier: 'Pro',
    title: 'Catch drift between the document, the code and the broker',
    text: 'The AsyncAPI: Diff tool window compares what you declared with what runs, one coloured row per channel, and says plainly what it could not check.',
    points: [
      'Document against a connection, connection against connection (staging against production)',
      'Source code against a connection, and document against source code',
      'Consumer groups and subscriptions checked against the ones actually reading',
      'Filters to leave only what needs attention',
    ],
    links: [
      { label: 'Diff features', href: '/jetbrains-plugin/features.html#keep-contracts-honest' },
      { label: 'Kurkik, the same checks in CI', href: 'https://kurkik.pavelon.dev' },
    ],
  },
  {
    id: 'ai',
    tier: 'Free + Pro',
    title: 'Give your AI agent real answers about messaging',
    text: 'Ten tools in the MCP server bundled with your IDE let any MCP client ask what the plugin knows: resolved topic names, payload types and consumer groups that a text search cannot find.',
    points: [
      'Finding and validating AsyncAPI documents is free',
      'Code analysis, broker connections and comparisons are Pro, and a Pro tool says what it needs',
      'One command installs an agent skill that explains which tool answers which question',
    ],
    links: [{ label: 'The MCP tools', href: '#ai-agents' }],
  },
]

/** Who gets what. Each role names the features, not adjectives. */
export const roles = [
  {
    role: 'Spring developer',
    need: 'Stop writing the AsyncAPI document by hand, and stop it going stale.',
    gets: ['Export from Spring Messaging code', 'Listener inspections while you type', 'Topology of who sends and who receives'],
  },
  {
    role: 'API designer or architect',
    need: 'Design contracts that are valid, consistent and easy to review.',
    gets: ['Validation, completion and preview', 'Reusable components as their own files', 'Spectral and Redocly linting'],
  },
  {
    role: 'Platform or data engineer',
    need: 'Know what is really on the cluster, and document it.',
    gets: ['Export from a live cluster or AWS account', 'Connection preview: topics, groups, ACLs, queues', 'Staging against production diff'],
  },
  {
    role: 'QA and governance',
    need: 'Check that what was promised is what runs.',
    gets: ['Document, code and broker diff', 'Honest grey where nothing could be checked', 'Lint rules in the IDE, the same as in CI'],
  },
  {
    role: 'Developer working with AI agents',
    need: 'Let the agent answer messaging questions from facts, not guesses.',
    gets: ['Ten MCP tools in the IDE', 'Agent skill installed in one step', 'The same broker tools as Kurkik in the terminal'],
  },
]

/** Ask your agent -> the tool that answers. From the Marketplace description. */
export const mcpTools = [
  { ask: 'Which messaging APIs does this service expose? Does the orders module use Kafka?', tool: 'asyncapi_inventory' },
  { ask: 'Find every handler and producer for the orders topic.', tool: 'asyncapi_endpoints' },
  { ask: 'Check this project for Kafka problems, worst first.', tool: 'asyncapi_diagnostics' },
  { ask: 'What happens when a message arrives on orders, and where does it end up?', tool: 'asyncapi_flow' },
  { ask: 'Generate an AsyncAPI document for the orders module as it runs in prod.', tool: 'asyncapi_export' },
  { ask: 'Does asyncapi/orders.yaml still match the prod-pulsar connection?', tool: 'asyncapi_compare' },
  { ask: 'Which broker connections can you use?', tool: 'asyncapi_connections' },
  { ask: 'What topics does prod-kafka have, and which consumer groups read them?', tool: 'asyncapi_topology' },
  { ask: 'Which AsyncAPI documents exist here, and what uses components/order.yaml?', tool: 'asyncapi_documents' },
  { ask: 'Validate this AsyncAPI document and tell me what is broken.', tool: 'asyncapi_validate' },
]

export const free = [
  'Create documents from scratch or a template',
  'Validate and complete as you type',
  'Preview in the IDE and in the browser',
  'Explore a document as a tree (read-only)',
  'Reference completion and JSON Pointer navigation, local and remote',
  'One approved remote host; denying hosts is unlimited',
  'Spring messaging inspections for Kafka, Pulsar, SQS, SNS and JMS',
  'MCP: find and validate AsyncAPI documents',
]

export const pro = [
  'Components as their own files: create, validate, complete, preview',
  'Edit documents and components through a form',
  'Project Overview of every document and component',
  'AsyncAPI: Spring: listeners, senders, topology, export',
  'AsyncAPI: Brokers: export from a live cluster or AWS account',
  'AsyncAPI: Preview: what a connection holds',
  'AsyncAPI: Diff: documents, code and live brokers',
  'Spectral and Redocly linting',
  'More than one remote host, and an HTTP proxy',
  'MCP tools that read code or brokers, or compare',
]

export const support = {
  versions: '2.0.0 to 2.6.0, 3.0.0 and 3.1.0',
  protocols: [
    'Amazon SNS', 'Amazon SQS', 'AMQP 0-9-1', 'AMQP 1.0', 'Anypoint MQ', 'Apache Kafka', 'Apache Pulsar', 'Google Cloud Pub/Sub',
    'HTTP', 'IBM MQ', 'JMS', 'Mercure', 'MQTT', 'MQTT 5', 'NATS', 'Redis', 'Solace', 'STOMP', 'WebSockets',
  ],
  schemaFormats: ['AsyncAPI Schema', 'JSON Schema', 'OpenAPI 3 Schema', 'Avro', 'XML'],
}

const ides = supportedIdes.join(', ')

/** Questions people search for ("asyncapi intellij", "asyncapi editor", "view asyncapi in intellij"). */
export const faq = [
  {
    q: 'Is there an AsyncAPI plugin for IntelliJ IDEA?',
    a: `Yes. The <a href="${MARKETPLACE_URL}">AsyncAPI plugin</a> on JetBrains Marketplace adds validation, completion, preview and reference navigation for AsyncAPI documents to IntelliJ IDEA and the other JetBrains IDEs. Install it from <em>Settings → Plugins → Marketplace</em> by searching for AsyncAPI.`,
  },
  {
    q: 'Is the AsyncAPI plugin free?',
    a: `The editor is free: creating, validating, completing and previewing documents, reference navigation and the Spring messaging inspections. Spring and broker export, connection preview, drift detection, UI editing, linting and the deeper MCP tools are Pro, with a ${marketplace.trialDays}-day free trial. <a href="/jetbrains-plugin/freemium-model.html">Why the plugin is freemium</a>.`,
  },
  {
    q: 'Which JetBrains IDEs does it work in?',
    a: `${ides}, from version 2026.1. Features that read Java or Kotlin source, such as the Spring tool window, need the Java plugin, which IntelliJ IDEA bundles. Everything else works in every IDE.`,
  },
  {
    q: 'Does it support AsyncAPI 3?',
    a: 'Yes. Validation and completion cover AsyncAPI 2.0.0 to 2.6.0, 3.0.0 and 3.1.0, in YAML and JSON. The preview renders 2.6.0, 3.0.0 and 3.1.0.',
  },
  {
    q: 'How do I preview an AsyncAPI document in IntelliJ IDEA?',
    a: 'Open the document: the plugin shows the rendered documentation in a split pane next to the source, or in your browser. Local, file and remote references are resolved first. See <a href="/jetbrains-plugin/ui/read.html">reading a document</a>.',
  },
  {
    q: 'Can it generate an AsyncAPI document from Spring Kafka code?',
    a: 'Yes, with Pro. The AsyncAPI: Spring tool window reads @KafkaListener, @KafkaHandler, @SendTo and KafkaTemplate calls, and exports a document per environment with servers from your Spring configuration. It does the same for Pulsar, SQS, SNS and JMS. See <a href="/jetbrains-plugin/frameworks/spring/apache-kafka/">how Spring Kafka maps to AsyncAPI</a>.',
  },
  {
    q: 'Can it create an AsyncAPI document from a running Kafka cluster?',
    a: 'Yes, with Pro. Add the cluster under Broker Connections and run <em>Tools → Export AsyncAPI from a Broker…</em>. It works the same for Apache Pulsar and for Amazon SNS and SQS in an AWS account, and it only reads.',
  },
  {
    q: 'How does it work with AI agents?',
    a: 'The plugin adds ten tools to the MCP server bundled with JetBrains IDEs. Enable the server in <em>Settings → Tools → MCP Server</em>, connect your agent, and run <em>Tools → Install AsyncAPI Agent Skill</em>. Document discovery and validation are free.',
  },
  {
    q: 'How is the plugin different from Kurkik?',
    a: 'The plugin works inside the IDE, next to the code. <a href="https://kurkik.pavelon.dev">Kurkik</a> is a command-line tool for CI and terminals that documents live brokers and detects drift. They share the same broker preview and MCP tools, so both give the same answers.',
  },
]
