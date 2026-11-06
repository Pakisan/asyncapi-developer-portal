// Questions on the payload format guides (`/schemas/formats/*`), from the search queries that lead there. They show
// at the end of the guide and become its FAQPage JSON-LD.
import type { Qa } from './binding-faq'

export const formatFaq: Record<string, Qa[]> = {
  'schemas/formats/avro': [
    {
      q: 'Why does validation say the payload "must match else schema"?',
      a: 'AsyncAPI 3.0 checks a payload with an <code>if</code>/<code>then</code>/<code>else</code>: if it has a <code>schema</code> property it is a Multi Format Schema, otherwise it must be a plain AsyncAPI Schema Object. An Avro record put straight under <code>payload</code>, or a 2.x-style <code>schemaFormat</code> on the message, lands in the <code>else</code> branch and fails. Wrap the Avro schema as <code>payload: { schemaFormat: …, schema: … }</code>.',
    },
    {
      q: 'Can one document mix Avro and JSON Schema payloads?',
      a: 'Yes. <code>schemaFormat</code> is set per payload, so each message can use its own format. Payloads without it are AsyncAPI Schema Objects.',
    },
    {
      q: 'Can I design Avro schemas in AsyncAPI Studio?',
      a: 'Studio renders and validates documents that use Avro payloads, because it includes the Avro parser. It has no Avro designer; write the <code>.avsc</code> in your editor and reference it.',
    },
  ],
  'schemas/formats/protobuf': [
    {
      q: 'Can I reference a .proto file instead of inlining it?',
      a: 'Not with the AsyncAPI Protobuf parser: it supports neither <code>$ref</code> to a <code>.proto</code> file nor <code>import</code>, except the bundled <code>google/protobuf/*</code>, <code>google/type/*</code> and validation definitions. Inline the source; many teams generate the inline text from their <code>.proto</code> files at build time.',
    },
    {
      q: 'Which contentType should Protobuf messages have?',
      a: '<code>application/x-protobuf</code> and <code>application/protobuf</code> are both in use. Pick the one your producers set in message headers and use it consistently.',
    },
    {
      q: 'Does AsyncAPI describe gRPC services?',
      a: 'Not directly. AsyncAPI describes message-driven APIs: channels, operations and messages. It can describe Protobuf messages flowing through Kafka, MQTT, NATS or WebSocket channels; gRPC services are described by their <code>.proto</code> service definitions.',
    },
  ],
  'schemas/formats/json-schema': [
    {
      q: 'Which JSON Schema version does AsyncAPI use?',
      a: `Draft 07, in AsyncAPI 2.x and 3.0. For newer drafts, AsyncAPI has no <code>schemaFormat</code> that tools must support, so features such as <code>dependentRequired</code>, <code>unevaluatedProperties</code> and <code>$defs</code> aren't guaranteed to work.`,
    },
    {
      q: 'Why does validation say a payload "must match else schema"?',
      a: 'The AsyncAPI 3.0 JSON Schema treats a payload with a <code>schema</code> property as a Multi Format Schema and anything else as a Schema Object, using <code>if</code>/<code>then</code>/<code>else</code>. The error means the payload went to the <code>else</code> branch and is not a valid Schema Object, often because <code>schemaFormat</code> was set on the message 2.x-style, or a non-JSON-Schema definition was put directly in <code>payload</code>.',
    },
    {
      q: 'Why do generated docs show "anonymous-schema-1"?',
      a: 'The AsyncAPI parser gives every inline schema without an ID a generated name. Define the schema under <code>components.schemas</code> and reference it with <code>$ref</code>: the parser then uses the component name.',
    },
  ],
}
