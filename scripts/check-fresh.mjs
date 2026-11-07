// `--check` for generated files that are committed (vercel.json, registry/head.html): is the file what the generator
// would write now? Locally a stale file fails the build, so it gets regenerated and committed. On Vercel it only warns:
// Vercel takes its config from the committed file whatever the build does, and failing there blocks a deploy for a
// difference that can't change it. Either way the first differing line is printed.
import fs from 'node:fs'

/** The same JSON, whatever the formatting: Vercel minifies vercel.json in its build checkout. */
function sameJson(a, b) {
  try {
    return JSON.stringify(JSON.parse(a)) === JSON.stringify(JSON.parse(b))
  } catch {
    return false
  }
}

export function checkFresh(file, expected, command) {
  const current = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : ''
  if (current === expected || (file.endsWith('.json') && sameJson(current, expected))) return
  const a = current.split('\n')
  const b = expected.split('\n')
  const i = a.findIndex((line, n) => line !== b[n])
  const at = i === -1 ? a.length : i
  const message = [
    `${file} is out of date: run \`${command}\` and commit it.`,
    `  first difference at line ${at + 1}:`,
    `  committed: ${a[at] ?? '(end of file)'}`,
    `  generated: ${b[at] ?? '(end of file)'}`,
  ].join('\n')
  if (process.env.VERCEL) {
    console.warn(`[warning] ${message}`)
    return
  }
  console.error(message)
  process.exit(1)
}
