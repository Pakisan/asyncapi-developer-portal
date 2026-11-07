# IndexNow: telling search engines what changed

[IndexNow](https://www.indexnow.org) lets a site tell search engines that pages were added or changed, instead of
waiting for a crawl. One request to `api.indexnow.org` reaches every engine in the protocol: Bing (which also feeds
Copilot, DuckDuckGo and Yahoo), Yandex, Seznam, Naver and others.

**Google does not use IndexNow.** For Google, the sitemap and Search Console do the job (see [After the first send](#after-the-first-send)).

Sending is a manual step, run from your machine after a production deploy: `scripts/indexnow.mjs`.

## How it works

- **The key** is a random string you make yourself; nobody issues it and there is no account. The site proves it owns
  the key by serving it at `https://asyncapi.pavelon.dev/<key>.txt`. Every request names the key, and engines fetch
  that file to check it.
- **What gets sent** comes from the sitemap of the **live** site, so a page is only sent once it is deployed. Each
  page's `lastmod` is the date of the last commit that touched its source. That needs the full git history in the
  build: set `VERCEL_DEEP_CLONE=true` in the Vercel project, or a shallow clone leaves pages without dates and the
  script can't tell what changed.
- **`indexnow.json`** (committed) remembers the `lastmod` of every page sent. The next run sends only pages that are
  new or whose `lastmod` changed since.

## One-time setup

### 1. The key

The repository already has one: `public/587c3f4a6ab199445038763851fae53a.txt`, containing `587c3f4a6ab199445038763851fae53a`.
The key is public by design, so there is nothing secret to protect; you only need a new one if you want to rotate it.

To make a new key:

```bash
KEY=$(openssl rand -hex 16)
git rm public/587c3f4a6ab199445038763851fae53a.txt
printf '%s' "$KEY" > "public/$KEY.txt"
git add "public/$KEY.txt"
```

Rules: 8 to 128 characters of `a-z`, `A-Z`, `0-9` and `-`; the file name and its content are the same key. Keep exactly
one key file in `public/`; the script refuses to run otherwise.

### 2. Deploy and check the key is live

After the site is deployed to production, this must print the key:

```bash
curl https://asyncapi.pavelon.dev/587c3f4a6ab199445038763851fae53a.txt
```

### 3. Bing Webmaster Tools (recommended)

IndexNow works without it, but Bing Webmaster Tools is where you see what arrived.

1. Open [bing.com/webmasters](https://www.bing.com/webmasters) and sign in.
2. **Add a site**: `https://asyncapi.pavelon.dev`. The quickest verification is **Import from Google Search Console**;
   otherwise use the DNS (CNAME) option.
3. Submit the sitemap: **Sitemaps → Submit sitemap** → `https://asyncapi.pavelon.dev/sitemap-index.xml`.
4. After the first send, **IndexNow** in the left menu lists the URLs Bing received and any key errors.

Yandex Webmaster ([webmaster.yandex.com](https://webmaster.yandex.com)) shows the same for Yandex; the site already
carries its verification tag.

## Sending

All commands run from the repository root. Without `--send` nothing is sent: the script prints the URLs it would send.

| Command | What it does |
|---|---|
| `npm run indexnow` | Lists pages that are new or changed since the last send |
| `npm run indexnow -- --send` | Sends them and updates `indexnow.json` |
| `npm run indexnow -- --all` | Lists every page in the sitemap |
| `npm run indexnow -- --all --send` | Sends every page (first launch) |
| `npm run indexnow -- --send <url> [<url>…]` | Sends only these URLs, for example one page you fixed |

`INDEXNOW_SITE=<preview URL> npm run indexnow` runs the same comparison against a preview deployment or
`npm run preview`, as a dry run. Sending always goes to production.

### First launch, once the new site is live

1. Deploy to production and wait until the deployment is ready.
2. Check the key file is live (step 2 above).
3. See what would be sent:
   ```bash
   npm run indexnow -- --all
   ```
4. Send it:
   ```bash
   npm run indexnow -- --all --send
   ```
   Expect `200 OK` or `202 Accepted` (accepted, key check still pending). Any other status stops the script; see
   [Responses](#responses).
5. Commit the record:
   ```bash
   git add indexnow.json
   git commit -m "chore: IndexNow submission"
   git push
   ```

### Every deploy after that

1. Deploy and wait until it is live.
2. `npm run indexnow` to see what changed.
3. `npm run indexnow -- --send`.
4. Commit `indexnow.json`.

Send only real changes. Engines may slow down or ignore a site that resubmits unchanged pages, which is why the
script keeps the record instead of sending everything each time.

## Responses

| Status | Meaning | What to do |
|---|---|---|
| 200 | URLs received | Nothing |
| 202 | URLs received, key validation pending | Nothing; check Bing Webmaster Tools later |
| 400 | Bad request | Report it: the request format is wrong |
| 403 | Key not valid | The key file is missing on the live site or its content differs from its name |
| 422 | URLs don't belong to the host, or the key doesn't match | Only send `https://asyncapi.pavelon.dev/` URLs; check the key file |
| 429 | Too many requests | Wait and run again; nothing was recorded |

`indexnow.json` is updated only after every batch succeeded, so a failed run can simply be repeated.

## After the first send

- **Google**: in Search Console, submit `https://asyncapi.pavelon.dev/sitemap-index.xml` under **Sitemaps**, and
  use **Validate fix** on the 404 and "Discovered, currently not indexed" reports.
- **Bing**: **IndexNow** and **URL Inspection** in Bing Webmaster Tools show what was received and crawled.
