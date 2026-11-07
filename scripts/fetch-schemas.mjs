// Downloads the JSON Schemas the docs are generated from (binding version history and fields, security scheme fields)
// from the registry, schemas.asyncapi.pavelon.dev, which is where they live. They land in node_modules/.cache, so they
// are never committed or deployed, and Vercel keeps them between builds. Runs before `build` and `dev`.
//
// If the registry can't be reached, the copy from the last run is used; with no copy at all, the run fails.
import fs from 'node:fs'
import path from 'node:path'

export const REGISTRY = 'https://schemas.asyncapi.pavelon.dev'
export const CACHE = path.resolve('node_modules/.cache/json-schemas')
const ROOTS = ['/draft-07/bindings/', '/draft-07/schemas/v3/security/']
const CONCURRENCY = 8
const HEADERS = { 'User-Agent': 'asyncapi.pavelon.dev docs build', Accept: 'application/json' }

/** Cache file of a registry path or URL: `/draft-07/bindings/amqp/0.3.0/channel` -> `<cache>/draft-07/bindings/amqp/0.3.0/channel.json` */
export const cacheFile = (url) => path.join(CACHE, `${new URL(url, REGISTRY).pathname.replace(/\/$/, '')}.json`)

async function get(url, attempt = 1) {
  try {
    const res = await fetch(url, { headers: HEADERS, signal: AbortSignal.timeout(20000) })
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
    return await res.json()
  } catch (error) {
    if (attempt < 3) return get(url, attempt + 1)
    throw new Error(`GET ${url}: ${error.message}`)
  }
}

/** Every schema under a registry directory, from the registry's listing API. */
async function list(dir) {
  const { entries } = await get(`${REGISTRY}/self/v1/api/list${dir}`)
  const nested = await Promise.all(entries.filter((e) => e.type === 'directory').map((e) => list(e.path)))
  return [...entries.filter((e) => e.type === 'schema').map((e) => e.path), ...nested.flat()]
}

async function main() {
  const started = Date.now()
  let schemas
  try {
    schemas = (await Promise.all(ROOTS.map(list))).flat()
  } catch (error) {
    if (fs.existsSync(CACHE)) {
      console.warn(`[fetch-schemas] ${error.message}; using the cached schemas from the last run`)
      return
    }
    throw error
  }
  const queue = [...schemas]
  let failed = 0
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      for (let p = queue.shift(); p; p = queue.shift()) {
        const file = cacheFile(p)
        try {
          const schema = await get(`${REGISTRY}${p}`)
          fs.mkdirSync(path.dirname(file), { recursive: true })
          fs.writeFileSync(file, JSON.stringify(schema))
        } catch (error) {
          if (!fs.existsSync(file)) throw error
          failed++
        }
      }
    }),
  )
  console.log(`[fetch-schemas] ${schemas.length} schemas from ${REGISTRY} in ${Date.now() - started} ms${failed ? `, ${failed} from cache` : ''}`)
}

if (import.meta.url === `file://${process.argv[1]}`) await main()
