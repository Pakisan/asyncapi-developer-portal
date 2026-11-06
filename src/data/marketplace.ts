// Live facts about the plugin from the public JetBrains Marketplace API, read once per build. They go into the page and
// its SoftwareApplication JSON-LD, so both always say the same thing. If the API is down the build still works, with the
// values committed below: update them now and then so the fallback never drifts far from the truth.

export const PLUGIN_ID = 15673
export const MARKETPLACE_URL = `https://plugins.jetbrains.com/plugin/${PLUGIN_ID}-asyncapi`
const API = `https://plugins.jetbrains.com/api/plugins/${PLUGIN_ID}`

export interface MarketplaceFacts {
  version: string
  /** ISO date of the latest release */
  released: string
  downloads: number
  rating: number
  ratingCount: number
  /** Marketplace product codes the latest release is compatible with */
  products: string[]
  trialDays: number
}

const FALLBACK: MarketplaceFacts = {
  version: '5.1.0',
  released: '2026-11-03',
  downloads: 63716,
  rating: 4.06,
  ratingCount: 7,
  products: ['IDEA', 'IDEA_COMMUNITY', 'WEBSTORM', 'PYCHARM', 'PYCHARM_COMMUNITY', 'GOLAND', 'PHPSTORM', 'RIDER', 'RUST', 'CLION', 'RUBYMINE', 'DATASPELL', 'ANDROID_STUDIO'],
  trialDays: 30,
}

async function json(url: string) {
  const res = await fetch(url, { signal: AbortSignal.timeout(8000) })
  if (!res.ok) throw new Error(`${url}: ${res.status}`)
  return res.json()
}

async function load(): Promise<MarketplaceFacts> {
  try {
    const [plugin, updates, rating] = await Promise.all([json(API), json(`${API}/updates?size=1`), json(`${API}/rating`)])
    const latest = updates[0]
    const votes = Object.values(rating.votes as Record<string, number>).reduce((a, b) => a + b, 0)
    return {
      version: latest.version,
      released: new Date(Number(latest.cdate)).toISOString().slice(0, 10),
      downloads: plugin.downloads,
      rating: rating.meanRating,
      ratingCount: votes,
      products: Object.keys(latest.compatibleVersions ?? {}),
      trialDays: plugin.purchaseInfo?.trialPeriod ?? FALLBACK.trialDays,
    }
  } catch (e) {
    console.warn(`[marketplace] using committed plugin facts: ${(e as Error).message}`)
    return FALLBACK
  }
}

export const marketplace = await load()

/** IDEs to name on the page, in the order people look for them; only those the latest release supports. */
const IDE_NAMES: [code: string, name: string][] = [
  ['IDEA', 'IntelliJ IDEA'],
  ['WEBSTORM', 'WebStorm'],
  ['PYCHARM', 'PyCharm'],
  ['GOLAND', 'GoLand'],
  ['PHPSTORM', 'PhpStorm'],
  ['RIDER', 'Rider'],
  ['RUST', 'RustRover'],
  ['CLION', 'CLion'],
  ['RUBYMINE', 'RubyMine'],
  ['DATASPELL', 'DataSpell'],
  ['ANDROID_STUDIO', 'Android Studio'],
]
export const supportedIdes = IDE_NAMES.filter(([code]) => marketplace.products.includes(code)).map(([, name]) => name)

/** 63716 -> "63k+": rounded down, so the page never claims more than the Marketplace shows. */
export const roundedDownloads = (n: number) => (n >= 1000 ? `${Math.floor(n / 1000)}k+` : String(n))
