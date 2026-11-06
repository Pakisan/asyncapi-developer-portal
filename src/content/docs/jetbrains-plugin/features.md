---
title: "AsyncAPI Plugin Features: Free and Pro"
description: Every feature of the AsyncAPI plugin for IntelliJ IDEA and other JetBrains IDEs, what is free and what is Pro, supported protocols, AsyncAPI versions and MCP tools for AI agents.
ogImage: /jetbrains-plugin/og_image.png
head:
  - tag: meta
    attrs:
      name: keywords
      content: asyncapi jetbrains plugin features, asyncapi intellij, asyncapi editor, spring boot kafka listener detection, asyncapi export spring boot, asyncapi export kafka cluster, asyncapi drift, asyncapi mcp
heading: "AsyncAPI plugin features"
---

The complete list of what the [AsyncAPI plugin](/jetbrains-plugin/) does, the same as on [JetBrains Marketplace](https://plugins.jetbrains.com/plugin/15673-asyncapi). For an overview by task and role, start at the [plugin page](/jetbrains-plugin/).

Turn IntelliJ IDEA, WebStorm, PyCharm, GoLand, PhpStorm, Rider, RustRover, CLion, and Android Studio into a full [AsyncAPI](https://www.asyncapi.com/) studio: create, validate, autocomplete, preview, and navigate event-driven API specifications without leaving your IDE. Full support for AsyncAPI **2.0.0–2.6.0** and **3.0.0 / 3.1.0**, in YAML and JSON, for Apache Kafka, MQTT, AMQP, WebSockets, NATS, Solace, Redis, and more.

One plugin, four workflows:

- **AsyncAPI contract authors** — create a contract, explore it, validate it, complete it, preview it, and resolve every `$ref`.
- **Engineers working with Spring applications** — an _AsyncAPI: Spring_ tool window that discovers message handlers, listeners, and senders across every module, maps them into a channel topology, exports them as AsyncAPI documents, and links it all back to your code.
- **Teams running Apache Kafka, Apache Pulsar, Amazon SNS or Amazon SQS** — export an AsyncAPI document straight from a live cluster or AWS account, and preview what a connection holds before you trust it, in any JetBrains IDE.
- **Teams keeping contracts honest — and AI agents** — an _AsyncAPI: Diff_ tool window that shows where a document, your source code, and a live broker stop agreeing, and MCP tools that let your AI agent ask the plugin about your messaging.

## For AsyncAPI contract authors

### Create a new AsyncAPI contract — Free

Start a contract from scratch or from a template via _File → New → AsyncAPI_, in YAML or JSON, for AsyncAPI 2.6.0 or 3.0.0. Referenced files are recognised automatically and get the AsyncAPI file icon.

### Explore a contract in the editor — Free

Open any AsyncAPI document and browse it as a structured tree: servers, channels, operations, messages, schemas, and bindings, with colored nodes, grouped detail views, and click-to-navigate between them. Read-only exploration is free; switching the editor into edit mode is a Pro feature (see below).

### Validate a contract — Free

Real-time validation against dedicated, up-to-date AsyncAPI JSON Schemas for 2.x and 3.x, with inline error highlighting and quick fixes as you type.

### Complete a contract — Free

Context-aware completion for channels, operations, messages, bindings, components, security schemes, and enum values, driven by the same schemas used for validation.

### Preview a full contract — Free

Render a whole AsyncAPI document instantly — in a split pane inside the IDE or in your browser — for AsyncAPI 2.6.0, 3.0.0, and 3.1.0, with local, file, and remote references dereferenced (subject to the remote-host limit below).

### Resolve references — Free, with Pro extras

A single engine resolves every `$ref` — local pointers, file references, and remote `http` / `https` references — the same way in the editor and in the preview.

- **Reference completion, local and remote — Free.** Completion is offered for every kind of `$ref` as you type it.
- **Current-folder listing — Free.** While you write a file reference, completion lists the contents of the current folder, so you can find and pick the right `.json` or `.yaml` document without remembering its path. Rename a referenced file and every `$ref` to it updates automatically.
- **JSON Pointer navigation into local or remote content — Free.** After the `#`, completion offers the elements _inside_ the target document — a local file or a remote URL — so you can point straight at the exact node you need, for example one `server` or one `message`. _Go to Declaration_ (`Ctrl/Cmd+B`) follows the pointer into that document's own content and puts the caret on the element.
- **One approved remote host — Free.** A remote reference is never fetched until you allow its host. You may keep **one** allowed host on the free tier; **denying** hosts is unlimited and always free. Allowing **more than one** host is a Pro feature. Answers are stored per project and can be reviewed, changed, or removed in _Settings → Tools → AsyncAPI → Remote References_.
- **HTTP proxy — Pro.** Route remote reference resolution through a configurable proxy.

Also handled: reference chains (a `$ref` that points at another `$ref`), references met part-way along a pointer path, Avro `.avsc` schemas, cross-language JSON↔YAML references, cycle detection, and a dedicated inspection that names each problem — unreachable document, pointer that finds nothing, unsupported fragment, reference cycle, host awaiting a decision — with its own quick fix.

### Work with AsyncAPI components — Pro

Treat standalone components as first-class files: **create** them from scratch or a template, **validate** them, get **autocompletion** in them, and **preview** them in isolation — for Server, Server Variable, Channel, Channel Parameter, Message, Message Trait, Message Correlation ID, Operation, Operation Trait, Operation Reply, and Operation Reply Address.

### Edit contracts and components through the UI — Pro

Enable edit mode and change documents and extracted components through a UI form — in both JSON and YAML — with built-in validation that prevents invalid edits.

### Lint with Spectral or Redocly — Pro

Lint your specifications with [Spectral](https://stoplight.io/open-source/spectral) or [Redocly](https://redocly.com/), in automatic or manual mode, with `.spectralignore` / `.redoclyignore` support.

### Find every contract and component in the project — Pro

The **Project Overview** in the **AsyncAPI** tool window indexes every AsyncAPI document and standalone component in the project, filterable by AsyncAPI version and component type, so you can see what your project already describes and jump to any of it in one click — even in large, multi-module repositories. It reads files, not source code, so it works in every JetBrains IDE, with or without the Java plugin.

## For engineers working with Spring applications

How Spring code maps to AsyncAPI, with examples: [Spring for Apache Kafka](/jetbrains-plugin/frameworks/spring/apache-kafka/) and its [inspections](/jetbrains-plugin/frameworks/spring/apache-kafka/inspections.html).

### Discover message handlers and listeners — Pro

The **AsyncAPI: Spring** tool window scans every module of your Spring project and maps its messaging endpoints, so you can see your event-driven architecture at a glance instead of searching for annotations by hand. It reads Java and Kotlin source, so it appears in IDEs that have the Java plugin (IntelliJ IDEA bundles it) and stays out of the way in the ones that do not. Supported annotations:

- **Apache Kafka** — `@KafkaListener`, `@KafkaListeners`, `@KafkaHandler`
- **RabbitMQ (AMQP)** — `@RabbitListener`
- **Apache Pulsar** — `@PulsarListener`
- **Amazon SQS** — `@SqsListener`, `@SqsHandler`
- **Amazon SNS** — `@NotificationMessageMapping`, `@NotificationSubscriptionMapping`, `@NotificationUnsubscribeConfirmationMapping`
- **JMS** — `@JmsListener`
- **STOMP** — `@MessageMapping`, `@SubscribeMapping`

Endpoints are attributed to the right module and broker for both Gradle and Maven source sets, searchable by class, method, or Javadoc, and every row links straight to its method or class in the editor. It stays fast on projects with hundreds of listeners.

### See what you publish, and how it connects — Pro

The Spring window also finds where your code **publishes** messages, links senders to the listeners that consume the same channel, and lays the whole picture out as a topology:

- **Send detection** — every call through `KafkaTemplate`, `RabbitTemplate` / `AmqpTemplate`, `JmsTemplate` / `JmsMessagingTemplate`, `PulsarTemplate`, `SqsTemplate`, `SnsTemplate`, and `SimpMessagingTemplate` (STOMP) is found, in both Java and Kotlin, with the destination reported exactly as written in the code.
- **Direction in the APIs tree** — every module and broker splits into _Receive_ and _Send_, with a dedicated Operation filter to narrow the tree to one direction.
- **Declared replies** — a listener that answers on another channel (`@SendTo`, or a reply-to header on RabbitMQ and JMS) is shown right next to the listener that produces it.
- **Channel matching** — a listener and a sender that name the same channel differently — a literal on one side, a `${property}` placeholder or an `@Value`-injected field on the other — are recognised as the same channel.
- **Topology tab** — the whole project laid out by channel instead of by code: producers, consumers, and the flows between them, readable hop by hop across module boundaries, plus a Traffic view for channels your project only consumes or only publishes.
- **Hidden publishes** — a listener that publishes further down its own call chain (through a service, a port, an interface) is found automatically and marked as an inferred route, kept visibly distinct from a route the code declares directly.

### Generate a real AsyncAPI document from your code — Pro

The Spring window finds your messaging code; export turns it into an AsyncAPI document — one per environment, for **Apache Kafka**, **Apache Pulsar**, **Amazon SQS**, **Amazon SNS**, and **JMS**. Bindings, topic and queue names, FIFO detection, and dedup settings are read from what the code actually does, not typed in by hand and left to drift. Run it from the _Export_ tab of _AsyncAPI: Spring_, or from _Tools → Export AsyncAPI…_. Every run gets its own tab with the scan log, so you can see what was described and what was left out, and why.

### Catch messaging bugs before they ship — Free

Inspections flag configuration mistakes right where you write the listener, across all five protocols — two `@KafkaListener`s sharing a `groupId` on the same topic (silently splitting partitions instead of each getting every record), an empty `@KafkaListeners` container, a blank Amazon SQS or JMS destination, an ambiguous handler payload type, and more.

### See the whole flow, not just one protocol — Pro

A handler that receives on one protocol and republishes on another — a Kafka listener that raises an Amazon SNS notification, an Amazon SQS listener that forwards to Kafka — is described end to end: both operations, in both generated documents, even when the publish happens several calls down the chain.

## For teams running Apache Kafka, Apache Pulsar, Amazon SNS or Amazon SQS

### Export an AsyncAPI document from a live cluster or account — Pro

Point the plugin at a cluster or an AWS account and get an AsyncAPI document describing its topics and queues. No project source is needed, so it works in IntelliJ IDEA, WebStorm, PyCharm, GoLand, and every other JetBrains IDE — with or without the Java plugin. Run _Tools → Export AsyncAPI from a Broker…_, pick a protocol and a connection, choose JSON or YAML and a destination, and the document opens in the editor as soon as it is written.

- **Broker Connections** — _Settings → Tools → AsyncAPI → Broker Connections_ keeps every cluster in one place, with one heading per protocol. Describe a cluster by its bootstrap servers (no authentication, SSL, or SASL), by Kafka client properties typed in or read from a file, or by the properties Confluent Cloud's console shows. Secrets go to the IDE's password safe, never into project files. _Test connection_ checks the cluster — and the optional Confluent Schema Registry — before you export. A Pulsar connection names its client line — 4.0.x LTS or 5.0.x — and its admin URL, with token, TLS client certificate or Basic authentication, and a SOCKS5 proxy on 5.0.x. An Amazon SNS or Amazon SQS connection is one AWS account in one region, reached through an AWS profile — IAM Identity Center, roles and `aws login` included — an access key, the default credential chain, web identity, a credential process, or a container or EC2 role, with an optional role to assume on top (its MFA code asked for each time, never stored), the account it must be, and a custom endpoint for LocalStack. _Test connection_ says whose credentials these are.
- **AsyncAPI: Brokers tool window** — an Export tab for the form, and one closable tab per connection holding that run's log as it streams in, with a Re-export button. Exporting the same cluster again reuses its tab instead of piling up new ones. A Pulsar or Amazon SNS export lists each topic's subscriptions too, when you ask for them.

### Preview a connection before you trust it — Pro

The **AsyncAPI: Preview** tool window looks at what is behind a stored connection: whether it answers — _REACHABLE_, _PARTIAL_ or _UNREACHABLE_, and how long that took — then what it holds, one tab per connection. For **Apache Kafka**: an overview, then its topics with their settings and where every partition lives, its brokers, consumer groups with their members and committed offsets, its ACLs and its schema registry's schemas. For **Apache Pulsar**: its tenants, namespaces and topics as the tree Pulsar keeps them in, with the settings in force and where they come from, each topic's backlog and rates, who subscribes and how far behind they are, who may do what, the schemas and the brokers. For **Amazon SNS**: whose account it is, then its topics with every attribute, who subscribes and what reaches them, who may publish and subscribe, and where deliveries that keep failing go. For **Amazon SQS**: whose account it is, then its queues with every attribute and how many messages SQS counts waiting, in flight and delayed, who may send to and receive from them, and where messages that keep failing go - and whether any wait there. The same preview the [Kurkik](https://kurkik.pavelon.dev/) command line shows for the same connection; no message is ever received.

- **Read-only, and only when you ask** — the connection is opened when you preview it or press _Refresh_, and closed again as soon as the answer is in. Closing a tab mid-read stops the read.
- **What this user may not see is said, not hidden** — refused ACLs, offsets or broker settings leave a cluster REACHABLE and are listed as not visible; anything else not read makes it PARTIAL, and says what.
- **Browse, filter, refresh** — sub-tabs per kind of thing, each a filterable table with the selected row's full details under it; _Refresh_ reads again and keeps your place. Kafka's internal and Pulsar's system topics stay hidden until you tick the box.

## Keep contracts honest

### Find where a document, your code, and a broker disagree — Pro

The **AsyncAPI: Diff** tool window compares what you declared with what actually runs and shows one coloured row per channel, with its operations and the fields that differ underneath.

- **Four comparisons** — a document against a connection, one connection against another (staging against production), and, with the Java plugin, your source code against a connection and a document against your source code — for Apache Kafka, Apache Pulsar, Amazon SNS and Amazon SQS connections, one AWS region against another included. The first two work in every JetBrains IDE.
- **Operations and consumer groups** — a `receive` operation's declared consumer group is checked against the groups actually reading the topic, and a Pulsar or Amazon SNS topic's subscriptions against the ones it has — each read only when you ask. Message schemas are compared between a document and your code.
- **Honest about what it cannot decide** — a message without a schema registry reads grey, not green, and the summary says both whether the sides disagree _and_ whether everything could be checked.
- **Filters and re-run** — hide channels, operations, or fully compatible rows to leave only what needs attention, search by topic, operation, consumer group or subscription, and re-run a comparison from its own tab.

## Tool windows, and the Java plugin

Each window opens wherever it can actually work, and stays out of the way where it cannot:

- **AsyncAPI** — the AsyncAPI documents and standalone components in your project. Every JetBrains IDE.
- **AsyncAPI: Brokers** — export from a live cluster or AWS account. Every JetBrains IDE.
- **AsyncAPI: Preview** — what a stored connection holds, one tab per connection. Every JetBrains IDE.
- **AsyncAPI: Spring** — APIs, topology, and export from your Spring source. Needs the Java plugin, which IntelliJ IDEA bundles.
- **AsyncAPI: Diff** — compare a document, your source code, and a live broker. Every JetBrains IDE; comparisons involving source code need the Java plugin.

## What's free / What's Pro

Why the plugin has a paid tier: [the freemium model](/jetbrains-plugin/freemium-model.html).

**Free — no account required**

- Create a new AsyncAPI contract from scratch or a template
- Explore a contract in the editor in read-only mode (tree, navigation, detail views)
- Validate a contract and see errors in the editor
- Complete a contract as you type
- Preview a full contract (in-IDE and browser)
- Reference completion — local and remote
- Current-folder listing while writing a local file reference
- JSON Pointer navigation into local or remote content
- One approved remote host; denying hosts is unlimited
- Messaging inspections for Spring — Apache Kafka, Apache Pulsar, Amazon SQS, Amazon SNS, and JMS

**Pro**

- Create AsyncAPI components from scratch or a template
- Validate and autocomplete AsyncAPI components
- Preview AsyncAPI components in isolation
- Edit AsyncAPI contracts and components through the UI
- Project Overview — find contracts and components across the project
- AsyncAPI: Spring — explore Spring messaging (listeners, senders, and the topology between them), generate AsyncAPI documents from it, and trace flows that cross protocols — for Apache Kafka, Apache Pulsar, Amazon SQS, Amazon SNS, and JMS
- AsyncAPI: Brokers — Broker Connections and export of an AsyncAPI document from an Apache Kafka or Apache Pulsar cluster, or an Amazon SNS or Amazon SQS account
- AsyncAPI: Diff — compare documents, source code, and live brokers
- AsyncAPI: Preview — see what is behind an Apache Kafka, Apache Pulsar, Amazon SNS or Amazon SQS connection
- MCP tools that read your source code or a broker connection, or compare (document discovery and validation stay free)
- More than one approved remote host while resolving references
- HTTP proxy for reference resolution
- Linting with Spectral or Redocly

**Start a free trial** to unlock the Pro features in seconds — no commitment. A license keeps solo development sustainable and funds what's next.

## Supported protocols, bindings & components

**Protocols** (19): Amazon SNS, Amazon SQS, AMQP 0-9-1, AMQP 1.0, Anypoint MQ, Apache Kafka, Apache Pulsar, Google Cloud Pub/Sub, HTTP, IBM MQ, JMS, Mercure, MQTT, MQTT v5.0, NATS, Redis, Solace, STOMP, WebSockets.

**Bindings**: server, channel, operation, and message bindings for every protocol above.

**Components** (AsyncAPI v3): Server, Server Variable, Channel, Channel Parameter, Message, Message Trait, Message Correlation ID, Operation, Operation Trait, Operation Reply, Operation Reply Address — plus Schemas, Security Schemes, Tags, and External Documentation inside a full contract.

**Schema formats**: AsyncAPI Schema, JSON Schema, OpenAPI 3 Schema, Avro, and XML.

**Specification versions**: AsyncAPI 2.0.0, 2.1.0, 2.2.0, 2.3.0, 2.4.0, 2.5.0, 2.6.0, 3.0.0, and 3.1.0.

## AI agents

Ten tools are contributed to the MCP server bundled with your IDE, so your agent can ask what this plugin knows about your project — resolving topics named by a Spring property, payload types and consumer groups, which a text search cannot — and about the Kafka, Pulsar, SNS and SQS connections you have stored.

| Ask your agent | Tool |
|---|---|
| “Which messaging APIs does this service expose? Does the orders module use Kafka?” | `asyncapi_inventory` |
| “Find every handler and producer for the orders topic. What carries OrderCreated?” | `asyncapi_endpoints` |
| “Check this project for Kafka problems, worst first.” | `asyncapi_diagnostics` |
| “What happens when a message arrives on orders, and where does it end up?” | `asyncapi_flow` |
| “Generate an AsyncAPI document for the orders module as it runs in prod.” | `asyncapi_export` |
| “Does asyncapi/orders.yaml still match the prod-pulsar connection? And does the code match the document?” | `asyncapi_compare` |
| “Which broker connections can you use?” | `asyncapi_connections` |
| “What topics does prod-kafka have right now, and which consumer groups read them?” | `asyncapi_topology` |
| “Which AsyncAPI documents exist here, and what uses components/order.yaml?” | `asyncapi_documents` |
| “Validate this AsyncAPI document and tell me what is broken.” | `asyncapi_validate` |

`asyncapi_connections` and `asyncapi_topology` are the same tools the [Kurkik](https://kurkik.pavelon.dev/) command line serves with `kurkik mcp`, so an agent gets one answer in the IDE and in a terminal. `asyncapi_compare` also compares one document against another.

**Two steps to set it up.** Enable the server in _Settings → Tools → MCP Server_ and copy the configuration it offers into your agent. Then run _Tools → Install AsyncAPI Agent Skill_, which writes a short file to `.claude/skills/asyncapi/SKILL.md` teaching your agent which tool answers which question and how they combine — point another agent at the same file if it reads skills from elsewhere.

Finding and validating AsyncAPI documents is free. Analysing your source code, reading a broker connection, and comparing are Pro features, and a Pro tool says plainly what it needs rather than quietly answering nothing.

## Feedback

Issues and ideas: [GitHub](https://github.com/asyncapi/jasyncapi-idea-plugin/issues).
