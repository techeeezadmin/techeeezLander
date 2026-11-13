import { useEffect } from "react";
import { siteConfig } from "../data/site";
import { absoluteUrl } from "../lib/schema";

export {
  breadcrumbJsonLd,
  faqJsonLd,
  organizationJsonLd,
  personJsonLd,
  serviceJsonLd,
} from "../lib/schema";

export function Seo({ title, description, path = "/", jsonLd, image, robots = "index, follow" }) {
  const serialized = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    const fullTitle = title.includes("Tech Eeez") ? title : `${title} | Tech Eeez`;
    document.title = fullTitle;

    const canonicalHref = absoluteUrl(path);
    const ogImage = image || `${siteConfig.url}/og.svg`;
    const isArticle = path.startsWith("/blog/") && path !== "/blog";

    const upsertMeta = (attribute, key, value) => {
      const selector = `meta[${attribute}="${key}"]`;
      let node = document.head.querySelector(selector);
      if (!node) {
        node = document.createElement("meta");
        node.setAttribute(attribute, key);
        document.head.appendChild(node);
      }
      node.setAttribute("content", value);
    };

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", robots);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalHref);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:type", isArticle ? "article" : "website");
    upsertMeta("property", "og:site_name", siteConfig.name);
    upsertMeta("property", "og:locale", "en_IN");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);

    const existing = document.getElementById("page-jsonld");
    if (existing) existing.remove();

    if (serialized) {
      const script = document.createElement("script");
      script.id = "page-jsonld";
      script.type = "application/ld+json";
      script.text = serialized;
      document.head.appendChild(script);
    }
  }, [title, description, path, serialized, image, robots]);

  return null;
}
