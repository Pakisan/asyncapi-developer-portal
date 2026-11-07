// What every binding version actually contains, read from the JSON Schemas in json-schemas/bindings (the same files the
// registry serves). Version history and field lists on the broker pages come from here, so they cannot drift from the
// schemas the way hand-written "what changed" notes did.
import fs from 'node:fs'
import path from 'node:path'
import { type Field, schemaFields } from './schema-fields'

export type { Field }

export const BINDING_OBJECTS = ['server', 'channel', 'operation', 'message'] as const
export type BindingObject = (typeof BINDING_OBJECTS)[number]

const ROOT = path.resolve('json-schemas/bindings')
const REGISTRY = 'https://schemas.asyncapi.pavelon.dev/draft-07/bindings'

type Schema = Record<string, any>

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

export function fields(broker: string, version: string, object: BindingObject): Field[] {
  const s = load(broker, version, object)
  return s ? schemaFields(s) : []
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
