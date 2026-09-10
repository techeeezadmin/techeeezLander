import { blogPosts, postPlainText } from "../data/blog";
import { services } from "../data/services";
import { siteConfig } from "../data/site";
import { breadcrumbJsonLd, organizationJsonLd, serviceJsonLd } from "./schema";

const defaultImage = `${siteConfig.url}/og.svg`;

const staticPages = [
  {
    path: "/",
    title: "Tech Eeez | AI, Software & Digital Solutions Company in Mumbai",
    description:
      "Tech Eeez builds websites, AI, and software systems — and helps businesses get found on Google and discovered in AI-powered search.",
    h1: "Tech Eeez — AI, software, and digital solutions in Mumbai",
    excerpt: siteConfig.description,
    changefreq: "weekly",
    priority: "1.0",
    jsonLd: organizationJsonLd(),
  },
  {
    path: "/about",
    title: "About Tech Eeez | Software & Technology Solutions Company",
    description:
      "Learn how Tech Eeez delivers software, websites, SEO, and AI search visibility for business growth across web, mobile, cloud, data, security, and integration.",
    h1: "Engineering built around business goals",
    excerpt:
      "Tech Eeez is a software solutions company in Mumbai focused on innovation and business growth.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/services",
    title: "Software, SEO & Digital Services | Tech Eeez",
    description:
      "Explore Tech Eeez services in SEO, AI search, web, mobile, cloud, analytics, cybersecurity, and system integration — built for businesses in Mumbai.",
    h1: "Eight capabilities. One technology partner.",
    excerpt:
      "SEO, AI search, web, mobile, cloud, analytics, cybersecurity, and system integration.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/seo",
    title: "SEO & AI Search Optimization | Tech Eeez",
    description:
      "Tech Eeez helps businesses rank in Google and become easier to discover in AI-powered search — technical SEO, content strategy, and websites built for visibility.",
    h1: "Get found on Google. Get discovered by AI.",
    excerpt:
      "Technical SEO, content, performance, structured data, and AI search readiness — without ranking guarantees.",
    changefreq: "weekly",
    priority: "0.9",
    jsonLd: [
      serviceJsonLd({
        ...services.find((item) => item.slug === "seo-ai-search"),
        canonicalPath: "/seo",
      }),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "SEO & AI Search", path: "/seo" },
      ]),
    ],
  },
  {
    path: "/work",
    title: "Tech Eeez Projects & Case Studies",
    description:
      "Selected clients and partnerships by Tech Eeez — product, platform, and digital delivery in Mumbai.",
    h1: "Selected clients",
    excerpt: "A focused snapshot of organizations that have worked with Tech Eeez.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/blog",
    title: "Tech Eeez Blog | Web, Cloud, AI & Software Insights from Mumbai",
    description:
      "Read practical articles from Tech Eeez on SEO, AI search, web development, cloud, data, security, and software for growing businesses in Mumbai.",
    h1: "Journal",
    excerpt: "Practical writing on software, search, and systems.",
    changefreq: "weekly",
    priority: "0.7",
  },
  {
    path: "/contact",
    title: "Contact Tech Eeez | Build Your Next Digital Product",
    description:
      "Talk to Tech Eeez in Mumbai about websites, SEO, AI search visibility, or software projects.",
    h1: "Start a project",
    excerpt: `Email ${siteConfig.email} or call ${siteConfig.phone}.`,
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Tech Eeez",
    description: "Privacy policy for Tech Eeez website visitors.",
    h1: "Privacy Policy",
    excerpt: "How Tech Eeez handles contact details submitted through the website.",
    changefreq: "yearly",
    priority: "0.3",
    index: true,
  },
  {
    path: "/terms",
    title: "Terms of Service | Tech Eeez",
    description: "Terms and conditions for Tech Eeez website usage.",
    h1: "Terms & Conditions",
    excerpt: "Terms for using the Tech Eeez website.",
    changefreq: "yearly",
    priority: "0.3",
    index: true,
  },
];

export function getPublicRoutes() {
  const servicePages = services
    .filter((service) => !service.canonicalPath)
    .map((service) => ({
      path: `/services/${service.slug}`,
      title: service.seoTitle,
      description: service.seoDescription,
      h1: service.title,
      excerpt: service.pitch,
      changefreq: "weekly",
      priority: "0.7",
      jsonLd: [
        serviceJsonLd(service),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]),
      ],
    }));

  const posts = blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    title: post.seoTitle,
    description: post.seoDescription,
    h1: post.title,
    excerpt: post.excerpt,
    image: post.image,
    lastmod: post.updatedAt || post.publishedAt,
    changefreq: "monthly",
    priority: "0.6",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]),
        {
          "@type": "BlogPosting",
          headline: post.title,
          description: post.seoDescription,
          image: post.image,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt || post.publishedAt,
          wordCount: postPlainText(post).split(/\s+/).length,
          articleSection: post.category,
          mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
          author: { "@type": "Organization", name: post.author || siteConfig.name },
          publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
          },
        },
      ],
    },
  }));

  return [...staticPages, ...servicePages, ...posts].map((route) => ({
    image: defaultImage,
    robots: "index, follow",
    ...route,
  }));
}

export function sitemapXml() {
  const urls = getPublicRoutes()
    .map((route) => {
      const loc = route.path === "/" ? `${siteConfig.url}/` : `${siteConfig.url}${route.path}`;
      const lastmod = route.lastmod ? `<lastmod>${route.lastmod}</lastmod>` : "";
      return `  <url><loc>${loc}</loc>${lastmod}<changefreq>${route.changefreq}</changefreq><priority>${route.priority}</priority></url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
