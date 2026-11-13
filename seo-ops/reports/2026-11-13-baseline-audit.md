# TECH EEEZ — INITIAL BASELINE AUDIT

Date: 2026-11-13  
Site: https://techeeez.com/  
Repo: https://github.com/techeeezadmin/techeeezLander  
Workspace: `/var/www/html/TeechEeezLander`  
Phase: First execution. No production deploy. No new articles published.

Evidence was taken from live HTTP responses, the GitHub-tracked source, and public SERP/research pages. Search Console, Analytics, Ahrefs, and Semrush were **not available**.

---

## Executive summary

Tech Eeez is a real Mumbai software studio with a designed marketing site, prerendered metadata in the build, AI-crawler allowances, and an `llms.txt`. That foundation is currently wasted in production.

**The single most important finding:** nginx proxies to `npx serve dist -s`. The `-s` flag is SPA mode. Every HTML URL, including `/about`, `/services/ai-solutions`, `/seo`, and unknown paths, returns the **homepage HTML** (same 3,488-byte body, same ETag). Unique titles, canonicals, Open Graph tags, and JSON-LD that exist in `dist/<path>/index.html` never reach crawlers or social cards unless JavaScript runs. Unknown URLs return **HTTP 200** with the homepage canonical.

Until that is fixed, new articles and geo pages will not be independently crawlable in the HTML.

The business positioning in the brief (AI-first partner for UK, Dubai, Mumbai) is ahead of the website. Live copy and schema present a **Mumbai digital studio**. There is no UK or Dubai office in source or on-page — correctly, none should be invented. There are no landing pages for AI automation, AI agents, or any geography except Mumbai-byline copy. Eleven blog posts are 59–133 words. Contact is `mailto:`. There is no analytics.

**Do not publish a content burst.** Fix serving, add measurement, then deepen money pages.

---

## 1. Website health

| Check | Result |
| --- | --- |
| HTTPS | Live. HTTP → `https://techeeez.com/` 301 |
| www | `https://www.techeeez.com/` → apex 301 |
| Homepage | 200 |
| Sitemap URLs | All 200 **but homepage HTML body** |
| Unknown URL `/does-not-exist-xyz` | **200**, title/canonical of homepage, `index, follow` |
| robots.txt | 200, allows Google, Bing, GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended |
| sitemap.xml | 200, 26 URLs, matches source routes |
| llms.txt | 200, accurate company facts |
| HSTS / CSP / X-Content-Type-Options / Referrer-Policy | **Absent** on HTML responses |
| Cache-Control on HTML | Not set (ETag only) |
| PageSpeed Insights | API 429 this session — scores **unavailable** |
| CrUX / Core Web Vitals field data | **Unavailable** |
| Search Console | **Unavailable** |
| Analytics | **None in source** |

### Production stack (evidence)

`ecosystem.config.cjs` runs:

```js
args: "serve dist -s -l 3000"
```

nginx `techeeez.com` proxies `/` to `127.0.0.1:3000`.

Live vs local `dist`:

| URL | Live SHA1 prefix | Local dist | Match? |
| --- | --- | --- | --- |
| `/` | 0d620c77e3dd (3488 bytes) | homepage | yes |
| `/about` | 0d620c77e3dd | unique About HTML (2493 bytes) | **no** |
| `/services/ai-solutions` | 0d620c77e3dd | unique service HTML | **no** |
| `/seo` | 0d620c77e3dd | unique SEO HTML | **no** |
| `/about/` | homepage body | would be About if static hosted | **no** |

Impact: Google can still render JS, so Google *may* index routes, but first-wave HTML, Bing, many AI crawlers, WhatsApp/LinkedIn/Slack unfurls, and any no-JS fetch see only the homepage. Canonical on missing URLs points at `/`. Soft-404 risk is high.

**Priority: Critical.**  
**Fix (needs production approval):** serve `dist` as static files (`try_files $uri $uri/index.html $uri/ /404.html`) or drop `serve -s`. Unknown paths must 404. Do not change DNS.

---

## 2. Page inventory

| Path | Role | Indexable in source | Live HTML unique? |
| --- | --- | --- | --- |
| `/` | Home | yes | yes (the only one) |
| `/about` | About | yes | no |
| `/services` | Service index | yes | no |
| `/seo` | SEO & AI search service | yes | no |
| `/services/ai-solutions` | AI | yes | no |
| `/services/web-development` | Web | yes | no |
| `/services/mobile-development` | Mobile | yes | no |
| `/services/cloud-solutions` | Cloud | yes | no |
| `/services/data-analytics` | Analytics | yes | no |
| `/services/cybersecurity` | Security | yes | no |
| `/services/system-integration` | APIs / automation | yes | no |
| `/work` | Clients | yes | no |
| `/blog` | Journal index | yes | no |
| `/blog/<11 slugs>` | Articles | yes | no |
| `/contact` | Enquiry | yes | no |
| `/privacy-policy` | Legal | yes | no |
| `/terms` | Legal | yes | no |
| `/404` | Not found | noindex in component | unused in prod |

Missing vs brief (do not auto-create):

- AI automation service URL
- AI agent development URL
- Custom software / SaaS URL
- UK / Dubai / Mumbai geo-service URLs
- Cost guides
- Real case studies

---

## 3. Service inventory (what the site actually sells)

From `src/data/services.js` and visible copy. Only these should be marketed until the owner extends the list.

| Service | URL | Honest scope on-page |
| --- | --- | --- |
| AI Solutions | `/services/ai-solutions` | Assistants, copilots, process automation with ML, document intelligence / computer vision |
| SEO & AI Search | `/seo` | Technical SEO, content, performance, schema, AI search *readiness* — **no ranking guarantees** |
| Web Development | `/services/web-development` | Sites and web apps, performance, modernization |
| Mobile Development | `/services/mobile-development` | iOS, Android, cross-platform |
| Cloud Solutions | `/services/cloud-solutions` | AWS, Azure, DevOps |
| Data Analytics | `/services/data-analytics` | BI, visualisation, predictive analytics |
| Cybersecurity | `/services/cybersecurity` | Audits, threat protection, compliance support |
| System Integration | `/services/system-integration` | APIs, legacy modernization, workflow automation |

**Not present as sold, named offerings:** AI voice agents, multi-agent systems, RAG products, Flutter-by-name, React Native-by-name, SaaS product studio as a distinct offer.

Stats on About (must remain consistent with reality): 48 projects, 13 clients, 5 years.

Named clients: Loft64, Audio Monkeys, Aura Eye Hospital, Airway Management, Klick n Capture Studioz. One testimonial: Neeraj Shukla, Founder of Loft64. Do not add reviews in schema.

Office (verified in source and llms.txt): Shop No 4017, 2nd Floor Eaze Zone Mall, Sunder Nagar, Malad West, Mumbai 400064. Phone +91 9619118917. Email support@techeeez.com.

---

## 4. Technical SEO issues

| ID | Issue | Evidence | Impact | Priority | Recommendation |
| --- | --- | --- | --- | --- | --- |
| T1 | SPA fallback serves homepage for all HTML routes | curl body/ETag identical; `serve -s` | Crawlers and social cards see one page | **Critical** | Static hosting of prerendered files |
| T2 | Soft 404s (unknown URLs = 200 + homepage canonical) | `/does-not-exist-xyz` | Index pollution, diluted entity | **Critical** | HTTP 404 + `noindex` 404 document |
| T3 | Trailing-slash duplicates both 200 | `/about` and `/about/` | Duplicate URLs | **High** | One canonical form + 301 |
| T4 | No GSC / Bing / GA4 | no verification tags, no gtag | Cannot measure the brief’s KPIs | **High** | Owner provides codes |
| T5 | OG image is SVG | `https://techeeez.com/og.svg` | LinkedIn/Facebook often skip SVG | **High** | 1200×630 PNG/JPG |
| T6 | Homepage visible H1 ≠ prerender H1 | Visible: “We build the systems that make business move.” Noscript: “Tech Eeez — AI, software, and digital solutions in Mumbai” | Confusing entity/topic signal | **High** | One commercial H1 |
| T7 | Service FAQs exist in data but are not rendered | `services.js` faq[] vs `ServiceDetail.jsx` | Thin pages; no FAQ schema except `/seo` | **High** | Render + FAQPage JSON-LD |
| T8 | Primary nav uses `/#about`, `/#services`, `/#contact` | `site.js` navLinks | Money pages under-linked | **High** | Point to real routes |
| T9 | Blog posts 59–133 words | source word count | Thin-content risk if indexed | **High** | Expand or noindex until expanded |
| T10 | `areaServed` only IN / Mumbai | `schema.js` | Correct today; blocks UK/UAE entity if we expand claims | **Medium** | Extend only with honest service-area language |
| T11 | Empty `sameAs` / social | `siteConfig.social = []` | Weaker Knowledge Graph | **Medium** | Add real profiles only |
| T12 | Unsplash covers, empty `alt` on BlogCover | `alt=""`, `aria-hidden` | Fine if decorative; `imageAlt` unused | **Medium** | Use `imageAlt` on meaningful images; prefer original assets |
| T13 | No hreflang | none | Correct — no locale pairs | — | Add only when equivalents exist |
| T14 | Privacy/terms in sitemap | sitemap | Fine at 0.3 priority | **Low** | Keep |
| T15 | Missing security headers | response headers | Indirect trust/SEO hygiene | **Medium** | Add at nginx (approval) |
| T16 | Hero video + Three.js particles | `cdn.sceneai.art` video, R3F | Likely LCP/TBT risk | **Medium** | Re-test PSI after serving fix |
| T17 | `lang="en"` while schema `en-IN` | index.html / schema | Minor | **Low** | Align with `en-IN` or keep generic `en` |
| T18 | Sitemap lastmod only on blog | sitemap.xml | Weaker recrawl hints | **Low** | lastmod on all pages |

---

## 5. Structured data audit

Implemented in source (`src/lib/schema.js`, prerender, Seo.jsx):

- Organization + LocalBusiness + WebSite on home
- Service + BreadcrumbList on service pages and `/seo`
- FAQPage on `/seo` only
- BlogPosting + BreadcrumbList on posts
- WebPage helper exists but is barely used

Problems:

- Production HTML for non-home routes does not include that JSON-LD (T1).
- LocalBusiness is appropriate for Mumbai. It is **not** appropriate to add UK or Dubai LocalBusiness.
- No Review/AggregateRating (correct).
- No Person authors (posts attributed to Organization / “Tech Eeez”).
- Service `areaServed: "IN"` only.
- FAQs on other services are not in the graph because they are not on the page.

Validate with Google Rich Results after T1 is fixed. Do not add fake ratings.

---

## 6. AEO readiness

| Signal | Status |
| --- | --- |
| Direct-answer openings on service pages | Weak — pitch paragraphs, not question/answer |
| FAQ visible | `/seo` only |
| Question-shaped headings | Rare |
| Citeable facts (NAP, services, constraints) | Present in llms.txt and contact |
| “We do not guarantee rankings / AI citations” | Present — keep |
| Depth | Blog answers are 3–4 sentences |

Priority questions from the brief that **have no dedicated URL**:

- What is an AI agent?
- AI agents vs chatbots
- How can AI agents automate operations?
- How much does AI automation cost?
- What is RAG?
- How much does custom software / a mobile app cost?

`/seo` is the only page written in an AEO style. Use it as the template.

---

## 7. GEO readiness

Strengths:

- `llms.txt` with identity, NAP, services, and a ranking disclaimer
- robots.txt allows major AI crawlers
- Consistent brand string “Tech Eeez”
- Organization JSON-LD in homepage HTML

Gaps:

- Brand SERP is noisy (TechTez, Techeezy, The Techeez, Techneez)
- No `sameAs`
- No original research, no substantial guides, no detailed case studies
- Client list is one line each
- UK/Dubai identity is absent (correct until we write honest remote-delivery copy)
- HTML entity for inner pages is the homepage (T1)

Do not claim ChatGPT/Perplexity citations. None were verified.

---

## 8. Internal linking

- Footer lists all eight services (good).
- Blog posts have `relatedService` and CTA to `/contact` plus the service (good pattern, thin bodies).
- Service pages link three other services and related posts.
- Primary nav **does not** send users to `/about`, `/services`, `/contact`.
- No hub-and-spoke around AI automation.
- No breadcrumbs in the HTML shell (they exist in React).

---

## 9. Conversion audit

| Element | Status |
| --- | --- |
| Value proposition | Aesthetic, not commercial. H1 does not name AI automation, agents, or software delivery |
| Contact form | Client-side `mailto:` — fails on mobile without a mail app; no lead store |
| WhatsApp | Absent |
| Phone / email / address | Present in footer and contact |
| Trust | One quote, five client names, no logos as files, no case metrics |
| CTA copy | “Get started”, “Start a project”, “Boost My Visibility” on SEO |
| Analytics on submit | None |
| Intent query params | `?intent=seo-audit` and `visibility` prefill message — keep |

Highest CRO leverage after T1: a real form endpoint and a specific homepage promise.

---

## 10. International architecture recommendation

**Do not ship `/uk/`, `/uae/`, `/mumbai/` now.**

Rationale: no unique geo copy, no verified demand, and production would duplicate the homepage HTML anyway.

Recommended sequence:

1. Keep current service URLs as canonical hubs.
2. Mumbai remains the LocalBusiness entity.
3. On hubs, add a short “Who we work with” section: businesses in India, the UK, and the UAE, delivered from Mumbai — no foreign addresses.
4. After T1 + measurement, create a geo page **only** when (a) GSC or Planner shows query demand, (b) the page has unique examples/FAQs, (c) it does not clone another city.
5. Preferred future tree, if justified:

```
/services/ai-solutions          (hub)
/services/ai-agents             (only if sold and distinct)
/mumbai/ai-automation           (local, NAP allowed)
/uk/ai-automation               (service area, no LocalBusiness)
/uae/ai-automation              (service area, no LocalBusiness)
```

hreflang: not yet.

British English on UK URLs only.

---

## 11. Content gap vs competitors

Competitors in all three markets already own:

- `/ai-automation` or `/ai-agents` URLs
- Use-case pages (support, documents, CRM)
- Price or process transparency
- WhatsApp or calendars
- Reviews

Tech Eeez unique assets we should use, not invent:

- Real Mumbai workshop address
- Named clients
- Combined engineering + SEO/AI-search practice (`/seo` is unusually honest)
- llms.txt / AEO posture

First content that can win: **useful explanations of AI agents and automation that lead to a scoped engineering conversation**, plus a Mumbai page that is actually local.

---

## 12. Classification of issues

**Critical:** T1 SPA HTML, T2 soft 404s.

**High:** measurement gap, SVG OG, H1 mismatch, unrendered FAQs, hash nav, thin posts, mailto form, missing AI-automation/agent hubs.

**Medium:** security headers, social sameAs, performance of video/WebGL, unused image alt, areaServed.

**Low:** lang attribute, sitemap lastmod, legal pages in sitemap.

---

## 13. GitHub / source notes

- App: Vite + React 19 + prerender (`scripts/prerender.mjs`)
- Branch on disk: `main` tracking `origin/main`
- Last relevant commit: `3e8bde8` prerender, robots, sitemap, breadcrumbs
- Untracked: `ecosystem.config.cjs` (production PM2 config)
- `gh` CLI not installed in this environment; no PR opened
- Do not force-push or deploy from this agent without approval

Prepared (not implemented) production fix:

- nginx `root` to `dist` with `try_files $uri $uri/index.html /404.html;` **or**
- `serve dist` without `-s`, plus tests that `/about` HTML title is About and `/missing` is 404

---

## 14. Access still required

1. Google Search Console
2. GA4
3. Keyword Planner or Ahrefs/Semrush
4. Approval for nginx/PM2 static serving
5. Form backend
6. Service-offer confirmation
7. Client permission for case studies
8. Social profile URLs
9. WhatsApp number if desired
