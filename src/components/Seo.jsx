import { useEffect } from "react";
import { siteConfig } from "../data/site";

export function Seo({ title, description, path = "/", jsonLd, image }) {
  const serialized = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    const fullTitle = title.includes("Tech Eeez") ? title : `${title} | Tech Eeez`;
    document.title = fullTitle;

    const canonicalHref = `${siteConfig.url}${path}`;
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
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalHref.split("?")[0]);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:type", isArticle ? "article" : "website");
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
    canonical.setAttribute("href", canonicalHref.split("?")[0]);

    const existing = document.getElementById("page-jsonld");
    if (existing) existing.remove();

    if (serialized) {
      const script = document.createElement("script");
      script.id = "page-jsonld";
      script.type = "application/ld+json";
      script.text = serialized;
      document.head.appendChild(script);
    }
  }, [title, description, path, serialized, image]);

  return null;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        description: siteConfig.description,
        areaServed: "IN",
        address: {
          "@type": "PostalAddress",
          streetAddress: `${siteConfig.address.line1} ${siteConfig.address.line2}`,
          addressLocality: "Mumbai",
          postalCode: "400064",
          addressCountry: "IN",
        },
      },
      {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    ],
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function serviceJsonLd(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "IN",
    url: `${siteConfig.url}/services/${service.slug}`,
  };
}
