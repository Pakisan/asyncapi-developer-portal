// Questions people search for about each broker's AsyncAPI binding (Bing and Search Console reports), answered from
// the binding JSON Schemas. They show on the broker page and become its FAQPage JSON-LD, so they must stay true to the
// schemas: when a binding version changes a field named here, update the answer.

export interface Qa {
  q: string
  /** HTML; root-relative links are made absolute in JSON-LD */
  a: string
}

export const bindingFaq: Record<string, Qa[]> = {
  'apache-kafka': [
    {
      q: 'How do I describe the Kafka message key in AsyncAPI?',
      a: 'Put a schema in the <code>key</code> field of the Kafka <a href="/bindings/apache-kafka/0.5.0/message.html">message binding</a>, for example <code>key: { type: string, description: Order ID }</code>. The key is optional in the binding; when you set it, consumers know how messages are partitioned.',
    },
    {
      q: 'Where do the consumer group and client ID go?',
      a: 'In the <a href="/bindings/apache-kafka/0.5.0/operation.html">operation binding</a>: <code>groupId</code> and <code>clientId</code>. Both are schemas, so you can list the allowed values with <code>enum</code>.',
    },
    {
      q: 'How do I describe partitions, replicas and retention of a topic?',
      a: 'With the <a href="/bindings/apache-kafka/0.5.0/channel.html">channel binding</a>: <code>topic</code>, <code>partitions</code>, <code>replicas</code>, and <code>topicConfiguration</code> for <code>cleanup.policy</code>, <code>retention.ms</code>, <code>retention.bytes</code>, <code>delete.retention.ms</code> and <code>max.message.bytes</code>. Version 0.5.0 adds the Confluent schema validation settings.',
    },
    {
      q: 'How do I point AsyncAPI at a Schema Registry?',
      a: 'Set <code>schemaRegistryUrl</code> and <code>schemaRegistryVendor</code> in the <a href="/bindings/apache-kafka/0.5.0/server.html">server binding</a>, and say where the schema ID travels with <code>schemaIdLocation</code> (<code>header</code> or <code>payload</code>) and <code>schemaLookupStrategy</code> in the message binding.',
    },
  ],
  amqp: [
    {
      q: 'How do I describe a RabbitMQ exchange in AsyncAPI?',
      a: 'Use the <a href="/bindings/amqp/0.3.0/channel.html">AMQP channel binding</a> with <code>is: routingKey</code> and an <code>exchange</code> object: <code>name</code>, <code>type</code> (<code>topic</code>, <code>direct</code>, <code>fanout</code>, <code>default</code> or <code>headers</code>), <code>durable</code>, <code>autoDelete</code> and <code>vhost</code>.',
    },
    {
      q: 'How do I describe a RabbitMQ queue?',
      a: 'The same channel binding with <code>is: queue</code> and a <code>queue</code> object: <code>name</code>, <code>durable</code>, <code>exclusive</code>, <code>autoDelete</code> and <code>vhost</code>.',
    },
    {
      q: 'What is deliveryMode in the AMQP binding?',
      a: 'An <a href="/bindings/amqp/0.3.0/operation.html">operation binding</a> field: <code>1</code> means transient, <code>2</code> persistent. The same binding sets <code>expiration</code> (message TTL), <code>priority</code>, <code>mandatory</code>, <code>ack</code>, and the routing keys in <code>cc</code> and <code>bcc</code>.',
    },
    {
      q: 'What changed in AMQP binding 0.3.0?',
      a: 'Version 0.3.0 removes <code>replyTo</code> from the operation binding. Use the AsyncAPI 3 operation <code>reply</code> object to describe replies instead.',
    },
  ],
  mqtt: [
    {
      q: 'How do I set the MQTT QoS and retain flag in AsyncAPI?',
      a: 'In the <a href="/bindings/mqtt/0.2.0/operation.html">operation binding</a>: <code>qos</code> is 0 (at most once), 1 (at least once) or 2 (exactly once), and <code>retain</code> tells the broker to keep the last message.',
    },
    {
      q: 'How do I describe a persistent session and the Last Will?',
      a: 'In the <a href="/bindings/mqtt/0.2.0/server.html">server binding</a>: <code>cleanSession: false</code> asks for a persistent session, <code>sessionExpiryInterval</code> says how long it is kept, and <code>lastWill</code> holds the topic, message, QoS and retain flag. <code>clientId</code> and <code>keepAlive</code> live there too.',
    },
    {
      q: 'Does the MQTT binding cover MQTT 5?',
      a: 'Yes. Version 0.2.0 adds the MQTT 5 fields: <code>sessionExpiryInterval</code> and <code>maximumPacketSize</code> on the server, <code>messageExpiryInterval</code> on the operation, and <code>payloadFormatIndicator</code>, <code>correlationData</code>, <code>contentType</code> and <code>responseTopic</code> on the message. The separate <a href="/bindings/mqtt5/">MQTT 5 binding</a> is deprecated in its favour.',
    },
  ],
  mqtt5: [
    {
      q: 'Should I use the MQTT 5 binding?',
      a: 'No. The MQTT 5 binding is deprecated in favour of the <a href="/bindings/mqtt/">MQTT binding</a>, whose version 0.2.0 covers MQTT 5 fields as well as 3.1.1.',
    },
  ],
  'amazon-sqs': [
    {
      q: 'How do I describe an Amazon SQS queue in AsyncAPI?',
      a: 'With the <a href="/bindings/amazon-sqs/0.3.0/channel.html">SQS channel binding</a>: a required <code>queue</code> object with <code>name</code>, <code>fifoQueue</code>, <code>deliveryDelay</code>, <code>visibilityTimeout</code>, <code>messageRetentionPeriod</code>, <code>redrivePolicy</code>, <code>policy</code> and <code>tags</code>, plus an optional <code>deadLetterQueue</code> of the same shape.',
    },
    {
      q: 'How do I describe a dead-letter queue?',
      a: 'Add <code>deadLetterQueue</code> to the channel binding and a <code>redrivePolicy</code> with <code>deadLetterQueue</code> and <code>maxReceiveCount</code> on the queue that sends to it.',
    },
    {
      q: 'How do SQS and SNS bindings work together?',
      a: 'An SNS <a href="/bindings/amazon-sns/0.2.0/operation.html">operation binding</a> lists its <code>consumers</code>; an SQS consumer names a queue, and the queue itself is defined in the SQS <a href="/bindings/amazon-sqs/0.3.0/operation.html">operation binding</a> <code>queues</code> on the same operation.',
    },
  ],
  'amazon-sns': [
    {
      q: 'How do I describe an Amazon SNS topic in AsyncAPI?',
      a: 'With the <a href="/bindings/amazon-sns/0.2.0/channel.html">SNS channel binding</a>: a required <code>name</code>, <code>ordering</code> for FIFO topics (<code>type</code> and <code>contentBasedDeduplication</code>), an access <code>policy</code> and <code>tags</code>.',
    },
    {
      q: 'How do I describe SNS subscriptions?',
      a: 'In the <a href="/bindings/amazon-sns/0.2.0/operation.html">operation binding</a>: each entry of <code>consumers</code> has a <code>protocol</code> (such as <code>sqs</code>, <code>http</code>, <code>lambda</code> or <code>email</code>), an <code>endpoint</code>, and optional <code>filterPolicy</code>, <code>rawMessageDelivery</code>, <code>redrivePolicy</code> and <code>deliveryPolicy</code>.',
    },
  ],
  ibmmq: [
    {
      q: 'How do I set the message expiry (TTL) for IBM MQ in AsyncAPI?',
      a: 'With <code>expiry</code> in the <a href="/bindings/ibmmq/0.1.0/message.html">IBM MQ message binding</a>: the time-to-live the client should set, in milliseconds. The units and the value for "never expires" depend on the API: MQI and JMS use different ones.',
    },
    {
      q: 'How do I describe an IBM MQ queue or topic?',
      a: 'In the <a href="/bindings/ibmmq/0.1.0/channel.html">channel binding</a>, set <code>destinationType</code> to <code>queue</code> or <code>topic</code> and fill the matching object: <code>queue.objectName</code>, <code>exclusive</code>, <code>isPartitioned</code>, or <code>topic.string</code>, <code>objectName</code>, <code>durablePermitted</code>, <code>lastMsgRetained</code>. <code>maxMsgLength</code> caps the message size.',
    },
    {
      q: 'How do I describe a queue manager connection?',
      a: 'In the <a href="/bindings/ibmmq/0.1.0/server.html">server binding</a>: <code>ccdtQueueManagerName</code>, <code>cipherSpec</code> for TLS, <code>heartBeatInterval</code>, and <code>groupId</code> with <code>multiEndpointServer</code> for highly available setups.',
    },
  ],
  jms: [
    {
      q: 'Can AsyncAPI describe JMS?',
      a: 'Yes. The <a href="/bindings/jms/0.0.1/server.html">JMS server binding</a> names the <code>jmsConnectionFactory</code> class and its <code>properties</code>, the channel binding sets <code>destination</code> and <code>destinationType</code> (<code>queue</code> or <code>fifo-queue</code>), and the message binding defines JMS <code>headers</code>.',
    },
    {
      q: 'How do I document JMS headers such as JMSCorrelationID?',
      a: 'As a schema in the <code>headers</code> field of the <a href="/bindings/jms/0.0.1/message.html">JMS message binding</a>: an object whose <code>properties</code> are the header names, for example <code>JMSCorrelationID</code> or <code>JMSExpiration</code>.',
    },
  ],
  websockets: [
    {
      q: 'How do I describe a WebSocket API in AsyncAPI?',
      a: 'Use a server with the <code>ws</code> or <code>wss</code> protocol, one channel per endpoint, and the <a href="/bindings/websockets/0.1.0/channel.html">WebSockets channel binding</a> for the handshake: the HTTP <code>method</code> (<code>GET</code> or <code>POST</code>), <code>query</code> parameters and <code>headers</code>, each as a schema.',
    },
    {
      q: 'Does the WebSockets binding have message or operation fields?',
      a: 'No. Only the channel binding has fields; messages and operations are described with plain AsyncAPI objects.',
    },
  ],
  nats: [
    {
      q: 'How do I describe a NATS queue group in AsyncAPI?',
      a: 'With <code>queue</code> in the <a href="/bindings/nats/0.1.0/operation.html">NATS operation binding</a>: the queue group name, up to 255 characters. The subject is the channel address.',
    },
  ],
  http: [
    {
      q: 'How do I describe an HTTP request in AsyncAPI?',
      a: 'With the <a href="/bindings/http/0.3.0/operation.html">HTTP operation binding</a>: <code>method</code> and a <code>query</code> schema. The <a href="/bindings/http/0.3.0/message.html">message binding</a> adds <code>headers</code> and, since 0.3.0, <code>statusCode</code> for responses.',
    },
    {
      q: 'What happened to type: request in the HTTP binding?',
      a: 'Version 0.2.0 removed the operation <code>type</code> field. In AsyncAPI 3 the operation <code>action</code> and <code>reply</code> say who sends and who answers.',
    },
  ],
  'apache-pulsar': [
    {
      q: 'How do I describe a Pulsar topic in AsyncAPI?',
      a: 'With the <a href="/bindings/apache-pulsar/0.1.0/channel.html">Pulsar channel binding</a>: required <code>namespace</code> and <code>persistence</code> (<code>persistent</code> or <code>non-persistent</code>), plus <code>retention</code> (size in MB, time in minutes), <code>ttl</code>, <code>compaction</code>, <code>deduplication</code> and <code>geo-replication</code>. The <code>tenant</code> goes in the server binding and defaults to <code>public</code>.',
    },
  ],
  solace: [
    {
      q: 'How do I describe Solace destinations in AsyncAPI?',
      a: 'With <code>destinations</code> in the <a href="/bindings/solace/0.4.0/operation.html">Solace operation binding</a>: each a queue or a topic, with its delivery mode. Version 0.4.0 adds <code>timeToLive</code>, <code>priority</code> and <code>dmqEligible</code>.',
    },
    {
      q: 'Where does the Message VPN go?',
      a: 'In the <a href="/bindings/solace/0.4.0/server.html">server binding</a> as <code>msgVpn</code>, next to <code>clientName</code>. Version 0.2.0 spelled it <code>msvVpn</code>; 0.3.0 fixed the name.',
    },
  ],
  googlepubsub: [
    {
      q: 'How do I describe a Google Cloud Pub/Sub topic in AsyncAPI?',
      a: 'With the <a href="/bindings/googlepubsub/0.2.0/channel.html">Pub/Sub channel binding</a>: required <code>schemaSettings</code> (schema <code>name</code>, <code>encoding</code> and revision range), plus <code>labels</code>, <code>messageRetentionDuration</code> and <code>messageStoragePolicy</code>. The message binding sets <code>attributes</code>, <code>orderingKey</code> and <code>schema</code>.',
    },
  ],
  anypointmq: [
    {
      q: 'How do I describe Anypoint MQ in AsyncAPI?',
      a: 'With the <a href="/bindings/anypointmq/0.0.1/channel.html">channel binding</a>: <code>destination</code> and <code>destinationType</code> (<code>exchange</code>, <code>queue</code> or <code>fifo-queue</code>). The message binding defines protocol <code>headers</code> as a schema.',
    },
  ],
  ros2: [
    {
      q: 'How do I describe a ROS 2 publisher or subscriber in AsyncAPI?',
      a: 'With the <a href="/bindings/ros2/0.1.0/operation.html">ROS 2 operation binding</a>: <code>role</code>, <code>node</code> and <code>qosPolicies</code> (reliability, history, durability, lifespan, deadline, liveliness). The server binding sets <code>rmwImplementation</code> and <code>domainId</code>.',
    },
  ],
}

/** Brokers whose binding objects have no fields: the binding exists only to reserve the name. */
export const reservedFaq = (name: string): Qa => ({
  q: `Does AsyncAPI have a ${name} binding?`,
  a: `The ${name} binding is reserved: its objects have no fields yet, only <code>bindingVersion</code>. Describe ${name} with the server <code>protocol</code>, channel addresses and messages, and keep broker-specific settings in a specification extension (<code>x-…</code>) until the binding defines them.`,
})
