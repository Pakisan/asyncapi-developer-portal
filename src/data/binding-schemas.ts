// What every binding version actually contains, read from the JSON Schemas in public/bindings (the same files the
// registry serves). Version history and field lists on the broker pages come from here, so they cannot drift from the
// schemas the way hand-written "what changed" notes did.
import fs from 'node:fs'
import path from 'node:path'

export const BINDING_OBJECTS = ['server', 'channel', 'operation', 'message'] as const
export type BindingObject = (typeof BINDING_OBJECTS)[number]

const ROOT = path.resolve('public/bindings')
const REGISTRY = 'https://schemas.asyncapi.pavelon.dev/draft-07/bindings'

type Schema = Record<string, any>

export interface Field {
  /** Dotted path; array items are written `consumers[]` */
  path: string
  type: string
  description: string
  required: boolean
  values?: (string | number)[]
}

const semver = (v: string) => v.split('.').map(Number)
export const byVersion = (a: string, b: string) => {
  const [x, y] = [semver(a), semver(b)]
  return x[0] - y[0] || x[1] - y[1] || x[2] - y[2]
}

export function schemaVersions(broker: string): string[] {
  const dir = path.join(ROOT, broker)
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((v) => /^\d+\.\d+\.\d+$/.test(v)).sort(byVersion)
}

function load(broker: string, version: string, object: BindingObject): Schema | undefined {
  const file = path.join(ROOT, broker, version, `${object}.json`)
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : undefined
}

/**
 * Follows references into the same file: `#/definitions/queue`, or the same written with the schema's own `$id` in
 * front (`https://…/channel.json#/definitions/queue`). References to other files are left as they are.
 */
function deref(node: Schema, root: Schema, seen = new Set<string>()): Schema {
  const raw = node?.$ref
  const ref = typeof raw === 'string' && root.$id && raw.startsWith(`${root.$id}#`) ? raw.slice(root.$id.length) : raw
  if (typeof ref !== 'string' || !ref.startsWith('#/') || seen.has(ref)) return node
  seen.add(ref)
  const target = ref.slice(2).split('/').reduce((n: Schema, k) => n?.[k], root) ?? {}
  const { $ref: _, ...rest } = node
  return deref({ ...target, ...rest }, root, seen)
}

/** Plain text: the schemas use Markdown links and long whitespace runs. */
const plain = (s: unknown) =>
  String(s ?? '')
    .replace(/\[`?([^\]`]+)`?\]\([^)]+\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim()

function typeOf(s: Schema): string {
  if ('const' in s) return typeof s.const
  if (s.type) return Array.isArray(s.type) ? s.type.join(' | ') : s.type === 'array' && s.items?.type ? `array of ${s.items.type}` : s.type
  if (s.enum) return typeof s.enum[0] === 'number' ? 'integer' : 'string'
  if (s.oneOf || s.anyOf) return [...new Set((s.oneOf ?? s.anyOf).map((o: Schema) => (o.$ref ? 'Schema Object' : o.type ?? 'object')))].join(' | ')
  if (s.$ref) return 'Schema Object'
  return 'any'
}

/** Own properties plus those of `oneOf`/`anyOf`/`allOf` branches (Solace destinations are a queue OR a topic). */
function properties(s: Schema, root: Schema): Record<string, Schema> {
  const branches = [...(s.allOf ?? []), ...(s.oneOf ?? []), ...(s.anyOf ?? [])].map((b: Schema) => deref(b, root))
  return Object.assign({}, ...branches.map((b) => properties(b, root)).reverse(), s.properties ?? {})
}

const hasProperties = (s: Schema, root: Schema) => Object.keys(properties(s, root)).length > 0

/** Every field of a binding object, nested ones included (to `depth` levels), in schema order. */
function walk(node: Schema, root: Schema, prefix = '', depth = 3): Field[] {
  const s = deref(node, root)
  const required = new Set<string>(s.required ?? [])
  const out: Field[] = []
  for (const [name, raw] of Object.entries<Schema>(properties(s, root))) {
    if (name === 'bindingVersion' || name.startsWith('$')) continue
    const p = deref(raw, root)
    const fieldPath = prefix + name
    const values = p.enum ?? p.items?.enum
    out.push({ path: fieldPath, type: typeOf(p), description: plain(p.description), required: required.has(name), ...(values && { values }) })
    if (depth > 1) {
      if (hasProperties(p, root)) out.push(...walk(p, root, `${fieldPath}.`, depth - 1))
      const items = p.items && deref(p.items, root)
      if (items && hasProperties(items, root)) out.push(...walk(items, root, `${fieldPath}[].`, depth - 1))
    }
  }
  return out
}

export function fields(broker: string, version: string, object: BindingObject): Field[] {
  const s = load(broker, version, object)
  return s ? walk(s, s) : []
}

export interface Change {
  object: BindingObject
  added: string[]
  removed: string[]
}

export interface VersionHistory {
  version: string
  /** Changes against the previous version; for the first version, the fields it introduced */
  changes: Change[]
  /** Objects that have at least one field in this version */
  objects: BindingObject[]
}

export function history(broker: string): VersionHistory[] {
  let previous: Partial<Record<BindingObject, string[]>> = {}
  return schemaVersions(broker).map((version) => {
    const current = Object.fromEntries(BINDING_OBJECTS.map((o) => [o, fields(broker, version, o).map((f) => f.path)])) as Record<BindingObject, string[]>
    const changes = BINDING_OBJECTS.map((object) => {
      const before = new Set(previous[object] ?? [])
      const now = new Set(current[object])
      return { object, added: [...now].filter((f) => !before.has(f)), removed: [...before].filter((f) => !now.has(f)) }
    }).filter((c) => c.added.length || c.removed.length)
    previous = current
    return { version, changes, objects: BINDING_OBJECTS.filter((o) => current[o].length) }
  })
}

export const registryUrl = (broker: string, version: string, object: BindingObject) => `${REGISTRY}/${broker}/${version}/${object}`
