import { siteConfig } from "../data/site";

export const absoluteUrl = (path = "/") => {
  const clean = path.split("?")[0] || "/";
  if (clean === "/") return siteConfig.url;
  return `${siteConfig.url}${clean.startsWith("/") ? clean : `/${clean}`}`;
};

export function organizationJsonLd() {
  const entity = {
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.png`,
    },
    image: `${siteConfig.url}/logo.png`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    description: siteConfig.description,
    areaServed: ["IN", "Mumbai"],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1} ${siteConfig.address.line2}`.trim(),
      addressLocality: "Mumbai",
      postalCode: "400064",
      addressRegion: "MH",
      addressCountry: "IN",
    },
  };

  const sameAs = (siteConfig.social || [])
    .map((item) => item.href)
    .filter((href) => href && !isPlaceholderSocial(href));
  if (sameAs.length) entity.sameAs = sameAs;

  return {
    "@context": "https://schema.org",
    "@graph": [
      entity,
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en-IN",
      },
    ],
  };
}

export function isPlaceholderSocial(href) {
  return /^https?:\/\/(www\.)?(instagram|youtube|linkedin|x|twitter|facebook)\.com\/?$/i.test(
    href,
  );
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(service) {
  const path = service.canonicalPath || `/services/${service.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "IN",
    url: absoluteUrl(path),
  };
}

export function webpageJsonLd({ title, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": `${siteConfig.url}/#website` },
  };
}
