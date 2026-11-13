# 2026-11-13 — Owner decisions (same-day follow-up)

## Deploy

Merge to `main` does not auto-deploy. No GitHub Actions, no deploy hook, PM2 watch off. After merge, owner will instruct a deploy. Script: `scripts/deploy.sh`.

## Content / commercial

- Articles: PR only. Do not publish.
- Services sold: AI agents, AI automation, voice agents, RAG, custom SaaS.
- WhatsApp: +91 9619118917 / https://wa.me/919619118917
- LinkedIn people: Neeraj Shukla, Aman Satija (Person schema, not Organization sameAs)
- Keyword Planner: allowed; Ads login still missing

## Code pushed, not live

| Branch | Commit | Create PR |
| --- | --- | --- |
| `seo/serve-prerendered-html` | `2a8de90` | https://github.com/techeeezadmin/techeeezLander/pull/new/seo/serve-prerendered-html |
| `seo/services-whatsapp-linkedin` | `70b112e` | https://github.com/techeeezadmin/techeeezLander/pull/new/seo/services-whatsapp-linkedin |

Live site still serves homepage HTML for nested routes.
