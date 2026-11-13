# Tech Eeez SEO task log

## 2026-11-13 — First execution (baseline)

Status: **Baseline complete. Awaiting owner approval before production changes and publishing.**

### Completed

- Live site crawl of all sitemap URLs plus 404, www, HTTP, robots, sitemap, llms.txt
- Source audit of routes, metadata, schema, prerender, services, blog, contact, work
- Confirmed production serves homepage HTML for every HTML route (`npx serve dist -s`)
- Service, page, and content inventory
- UK / Dubai / Mumbai keyword universe (volumes unverified except cited Planner figures)
- Competitor set for three markets
- AEO / GEO / schema / internal-link / CRO / international architecture assessment
- 30-day roadmap drafted
- Daily 09:00 Asia/Kolkata automation **configured**
  - Name: Tech Eeez daily SEO AEO GEO agent
  - ID: `e0e87afe-d89c-4e45-837c-26b0bd696cea`
  - Next run: 2026-11-14 09:00 IST (2026-11-14T03:30:00Z)
  - Cadence: daily
- Git branch pushed: `seo/baseline-audit-2026-11-13` (commit `50955c7`)

### Owner decisions (2026-11-13, same day)

- **Do not deploy.** Create PRs only. Merge to `main` does **not** auto-deploy on this host (no GitHub Actions, no git hook, PM2 watch is off). After review and merge, owner will instruct the agent to run `scripts/deploy.sh`.
- **Services confirmed:** AI agents, AI automation, voice agents, RAG, custom SaaS. Market these. Do not invent offices or stats.
- **Articles:** draft on a branch and open a PR. Do not publish or deploy articles.
- **WhatsApp:** show `+91 9619118917` via `https://wa.me/919619118917`.
- **LinkedIn (people, not a company page):**
  - Neeraj Shukla — https://www.linkedin.com/in/neeraj-shukla-35429911a/
  - Aman Satija — https://www.linkedin.com/in/aman-satija/
  Put these on Person / team markup. Do not add personal profiles to Organization `sameAs`.
- **Keyword Planner:** allowed. No Google Ads login on this host, so volumes stay cited-or-unverified until an Ads account is connected.

### PRs opened (code pushed; GitHub PR objects need owner click if `gh` is unauthenticated)

1. Serving / 404s — branch `seo/serve-prerendered-html` (`2a8de90`)
   - https://github.com/techeeezadmin/techeeezLander/pull/new/seo/serve-prerendered-html
2. WhatsApp, LinkedIn, new AI/SaaS service pages — branch `seo/services-whatsapp-linkedin` (`70b112e`)
   - https://github.com/techeeezadmin/techeeezLander/pull/new/seo/services-whatsapp-linkedin

Production is unchanged. Live site still uses `npx serve dist -s`.

### Still blocked

1. Google Search Console and GA4 access (or verification codes).
2. Google Ads / Keyword Planner login for verified volumes by UK / UAE / India.
3. Owner instruction to deploy after a PR is merged.

### Do not repeat

- Full baseline audit of every page (re-check health only).
- Creating geo doorway pages.
- Publishing thin blog posts.
- Deploying, restarting PM2, or pulling `main` on this host without an explicit deploy instruction.

### Next highest-priority actions

1. Owner reviews and merges serving PR, then instructs deploy.
2. Owner reviews and merges services/WhatsApp/LinkedIn PR, then instructs deploy.
3. First article PR: AI agents vs chatbots (do not publish).
4. GSC + GA4 when codes exist.
