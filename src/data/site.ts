// Facts about the site itself, shared by the Astro config, the head tags and the pages.

export const SITE_URL = 'https://asyncapi.pavelon.dev'
export const SITE_NAME = 'Pavel on AsyncAPI'
export const SITE_DESCRIPTION =
  'AsyncAPI tools and reference by an AsyncAPI TSC member: JetBrains plugin, Kurkik, JAsyncAPI, protocol bindings for 20 brokers and a JSON Schema registry.'
export const DEFAULT_IMAGE = '/asyncapi.png'

/** Google Analytics measurement ID; loaded only after the visitor accepts (see Consent.astro). */
export const GA_ID = 'G-G03BQZSMD1'
/** How long a consent answer is remembered before asking again. */
export const CONSENT_MAX_AGE_DAYS = 180

export const REPO_URL = 'https://github.com/Pakisan/asyncapi-developer-portal'
