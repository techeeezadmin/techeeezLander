# 30-day execution roadmap

Starts after owner approval. Do not treat this as authorised production work.

Today: **2026-11-13**. Window: 14 Nov – 13 Dec 2026.

## North star

Qualified enquiries for AI automation, AI agents, custom software, web, and mobile from the UK, Dubai/UAE, and Mumbai.

## Week 1 — Foundations (14–20 Nov)

P1 technical and measurement. No new geo pages.

| # | Action | Impact | Approval |
| --- | --- | --- | --- |
| 1 | Stop SPA fallback: serve prerendered `dist/**/index.html` and return HTTP 404 for unknown URLs | Critical. Unique titles, canonicals, and schema actually reach crawlers and social cards | **Yes — production/hosting** |
| 2 | Add GA4 + Search Console verification | Makes every KPI in the brief measurable | **Yes — tracking codes** |
| 3 | PNG Open Graph image (1200×630) instead of `og.svg` | Social and some crawlers ignore SVG OG | PR is enough |
| 4 | Primary nav: link `/about`, `/services`, `/contact` instead of hash-only homepage jumps | Internal PageRank to money pages | PR |
| 5 | Render service FAQs on service templates + FAQPage JSON-LD where FAQs are visible | AEO + on-page depth | PR |
| 6 | Confirm sold services (agents, automation, voice, RAG, SaaS) | Prevents pages for work we cannot deliver | Owner |

## Week 2 — Money pages (21–27 Nov)

| # | Action | Impact | Approval |
| --- | --- | --- | --- |
| 7 | Rewrite homepage H1/description around “AI and software engineering partner in Mumbai, working with UK, UAE and India businesses” | Align visible H1 with commercial intent | PR |
| 8 | Expand `/services/ai-solutions` with automation vs agents vs assistants, implementation steps, honest constraints, CTAs | P1 cluster currently under-served | PR + publish |
| 9 | Expand `/services/web-development` and `/services/mobile-development` with process, stack, and who it is for | Existing URLs, wasted if thin | PR |
| 10 | Replace `mailto:` contact with a server-side form (or Formspree/Getform) and optional WhatsApp | Conversion | **Yes — form backend / WhatsApp number** |
| 11 | First article: AI agents vs chatbots (1,500+ words, sourced, links to AI service) | P3 → P1 assist | Publish permission |

## Week 3 — Authority and geo honesty (28 Nov – 4 Dec)

| # | Action | Impact | Approval |
| --- | --- | --- | --- |
| 12 | Upgrade 3 existing thin posts (web builders, native vs cross, AI search) to useful length | Index bloat of 60–130 word URLs is a quality risk | Publish |
| 13 | One genuine project write-up if the client allows (start with Loft64 or Aura Eye Hospital) | GEO citations need proof | **Yes — client permission** |
| 14 | Mumbai-focused AI automation article using real local business contexts (no fake clients) | Only geo we can claim | Publish |
| 15 | Add Organization `areaServed` for IN, and *service area* language for UK/UAE without LocalBusiness in those cities | International without fake NAP | PR |
| 16 | Directory shortlist (Clutch, GoodFirms, Google Business Profile for Mumbai only) | Authority | **Yes — profiles** |

## Week 4 — Selective expansion (5–13 Dec)

| # | Action | Impact | Approval |
| --- | --- | --- | --- |
| 17 | Decide URL architecture for geo pages using GSC demand if available. Default: **do not ship `/uk/` or `/uae/` yet** unless unique copy is ready | Avoid doorways | Owner |
| 18 | If agents are a sold service: `/services/ai-agents` with canonical distinction from `/services/ai-solutions` | P1 cluster | Owner + PR |
| 19 | UK-targeted article in British English: implementing AI automation in an SME | 40% market weight | Publish |
| 20 | Dubai-targeted article: operations automation for service businesses, remote delivery model stated clearly | 35% market weight | Publish |
| 21 | Monthly checkpoint: indexed URLs, form leads, GSC queries, technical regressions | Feedback loop | — |

## Explicitly out of scope for 30 days

- Buying backlinks or PBNs
- Fabricated testimonials, awards, or offices
- Mass city pages (London, Manchester, Abu Dhabi, Pune…) 
- Guaranteeing rankings or AI citations
- Changing DNS, contact details, or deleting URLs

## Success checks at day 30 (only if measurement is live)

- All sitemap URLs return unique 200 HTML (not homepage body)
- Unknown URLs return 404
- GSC property verified; sitemap submitted
- At least one AI service page substantially deeper than today
- At least one article >1,200 words live
- Contact submissions tracked
- Zero fake geo claims shipped
