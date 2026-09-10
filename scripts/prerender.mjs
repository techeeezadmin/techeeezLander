import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { getPublicRoutes, sitemapXml } from "../src/lib/seo-routes.js";
import { siteConfig } from "../src/data/site.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function setMeta(html, attr, key, value) {
  const pattern = new RegExp(`<meta\\s+${attr}="${key}"[\\s\\S]*?\\/>`, "i");
  const tag = `<meta ${attr}="${key}" content="${escapeHtml(value)}" />`;
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function applyHead(html, route, extra = {}) {
  const url = extra.url || (route.path === "/" ? `${siteConfig.url}/` : `${siteConfig.url}${route.path}`);
  const image = route.image || `${siteConfig.url}/og.svg`;
  const jsonLd = route.jsonLd ? JSON.stringify(route.jsonLd) : "";
  const noscript = `<noscript><main><h1>${escapeHtml(route.h1)}</h1><p>${escapeHtml(route.excerpt)}</p></main></noscript>`;
  const robots = extra.robots || route.robots || "index, follow";

  let next = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(route.title)}</title>`);
  next = setMeta(next, "name", "description", route.description);
  next = setMeta(next, "name", "robots", robots);
  next = next.replace(/<link\s+rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`);
  next = setMeta(next, "property", "og:title", route.title);
  next = setMeta(next, "property", "og:description", route.description);
  next = setMeta(next, "property", "og:url", url);
  next = setMeta(next, "property", "og:image", image);
  next = setMeta(next, "name", "twitter:title", route.title);
  next = setMeta(next, "name", "twitter:description", route.description);
  next = setMeta(next, "name", "twitter:image", image);

  if (jsonLd && !next.includes("application/ld+json")) {
    next = next.replace(
      "</head>",
      `    <script type="application/ld+json">${jsonLd}</script>\n  </head>`,
    );
  } else if (jsonLd) {
    next = next.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">${jsonLd}</script>`,
    );
  }

  if (!next.includes("<noscript>")) {
    next = next.replace('<div id="root"></div>', `<div id="root"></div>\n    ${noscript}`);
  }

  return next;
}

export function prerender() {
  const index = readFileSync(join(dist, "index.html"), "utf8");
  const routes = getPublicRoutes();

  for (const route of routes) {
    const html = applyHead(index, route);
    const file =
      route.path === "/" ? join(dist, "index.html") : join(dist, route.path.replace(/^\//, ""), "index.html");
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, html);
  }

  writeFileSync(join(dist, "sitemap.xml"), sitemapXml());
  writeFileSync(join(root, "public", "sitemap.xml"), sitemapXml());

  writeFileSync(
    join(dist, "404.html"),
    applyHead(
      index,
      {
        path: "/404",
        title: "Page not found | Tech Eeez",
        description: "The page you are looking for does not exist.",
        h1: "Page not found",
        excerpt: "This URL is not a published page on techeeez.com.",
        image: `${siteConfig.url}/og.svg`,
      },
      { robots: "noindex, follow" },
    ),
  );

  console.log(`Prerendered ${routes.length} public routes`);
}

const isDirect =
  process.argv[1] &&
  (process.argv[1].endsWith("prerender.mjs") || process.argv[1].includes("prerender"));
if (isDirect) prerender();
