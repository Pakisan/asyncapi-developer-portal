// The fields a JSON Schema describes, as rows for a table: used by the binding pages (binding-schemas.ts) and the
// security scheme pages (security-schemes.ts).
type Schema = Record<string, any>

export interface Field {
  /** Dotted path; array items are written `consumers[]` */
  path: string
  type: string
  description: string
  required: boolean
  values?: (string | number | boolean)[]
}

/** Loads a schema that a reference points to in another file; return undefined to leave the reference as it is. */
export type Resolve = (ref: string) => Schema | undefined

interface Ctx {
  root: Schema
  resolve?: Resolve
}

/**
 * Follows references into the same file: `#/definitions/queue`, or the same written with the schema's own `$id` in
 * front (`https://…/channel.json#/definitions/queue`). References to other files go through `resolve`, if given.
 */
function deref(node: Schema, ctx: Ctx, seen = new Set<string>()): Schema {
  const raw = node?.$ref
  if (typeof raw !== 'string' || seen.has(raw)) return node
  const { root } = ctx
  const ref = root.$id && raw.startsWith(`${root.$id}#`) ? raw.slice(root.$id.length) : raw
  const { $ref: _, ...rest } = node
  seen.add(raw)
  if (ref.startsWith('#/')) {
    const target = ref.slice(2).split('/').reduce((n: Schema, k) => n?.[k], root) ?? {}
    return deref({ ...target, ...rest }, ctx, seen)
  }
  const external = ctx.resolve?.(ref)
  return external ? { ...external, ...rest } : node
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
function properties(s: Schema, ctx: Ctx): Record<string, Schema> {
  const branches = [...(s.allOf ?? []), ...(s.oneOf ?? []), ...(s.anyOf ?? [])].map((b: Schema) => deref(b, ctx))
  return Object.assign({}, ...branches.map((b) => properties(b, ctx)).reverse(), s.properties ?? {})
}

const hasProperties = (s: Schema, ctx: Ctx) => Object.keys(properties(s, ctx)).length > 0

/** Every field of an object schema, nested ones included (to `depth` levels), in schema order. */
function walk(node: Schema, ctx: Ctx, prefix = '', depth = 3): Field[] {
  const s = deref(node, ctx)
  const required = new Set<string>(s.required ?? [])
  const out: Field[] = []
  for (const [name, raw] of Object.entries<Schema>(properties(s, ctx))) {
    if (name === 'bindingVersion' || name.startsWith('$')) continue
    const p = deref(raw, ctx)
    const fieldPath = prefix + name
    const values = p.enum ?? p.items?.enum ?? ('const' in p ? [p.const] : undefined)
    out.push({ path: fieldPath, type: typeOf(p), description: plain(p.description), required: required.has(name), ...(values && { values }) })
    if (depth > 1) {
      if (hasProperties(p, ctx)) out.push(...walk(p, ctx, `${fieldPath}.`, depth - 1))
      const items = p.items && deref(p.items, ctx)
      if (items && hasProperties(items, ctx)) out.push(...walk(items, ctx, `${fieldPath}[].`, depth - 1))
    }
  }
  return out
}

export const schemaFields = (schema: Schema, resolve?: Resolve, depth = 3): Field[] => walk(schema, { root: schema, resolve }, '', depth)
