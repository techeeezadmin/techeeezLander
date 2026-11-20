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
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "India" },
      { "@type": "City", name: "Mumbai" },
    ],
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

  const founder = (siteConfig.people || []).find((person) => person.founder);
  if (founder) {
    entity.founder = { "@id": `${siteConfig.url}/#${founder.slug}` };
  }
  if (siteConfig.people?.length) {
    entity.employee = siteConfig.people.map((person) => ({
      "@id": `${siteConfig.url}/#${person.slug}`,
    }));
  }

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
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "India" },
    ],
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

export function faqJsonLd(faq) {
  if (!faq?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function personJsonLd(person) {
  const entity = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#${person.slug}`,
    name: person.name,
    worksFor: { "@id": `${siteConfig.url}/#organization` },
  };
  if (person.role) entity.jobTitle = person.role;
  if (person.image) entity.image = absoluteUrl(person.image);
  if (person.href) {
    entity.url = person.href;
    entity.sameAs = [person.href];
  }
  return entity;
}
