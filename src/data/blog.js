const cover = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const blogPosts = [
  {
    slug: "how-modern-web-development-helps-businesses-scale",
    title: "How Modern Web Development Helps Businesses Scale",
    excerpt:
      "A practical overview of how modern web architecture supports growth, speed, and customer experience.",
    category: "Web Development",
    topic: "web",
    layout: "scale-web",
    kicker: "Architecture",
    overlay: "Scale the stack",
    publishedAt: "2026-07-01",
    seoTitle: "How Modern Web Development Helps Businesses Scale",
    seoDescription:
      "Learn how modern web development decisions improve speed, reliability, and long-term business scalability for teams in Mumbai.",
    relatedService: "web-development",
    image: cover("photo-1498050108023-c3279e81b4d4"),
    imageAlt: "Developer working on a modern web application at a desk",
    sections: [
      {
        heading: null,
        body: "Modern web development is not only about visual polish. It is about creating systems that remain fast, maintainable, and adaptable as business needs evolve.",
      },
      {
        heading: "Why scale starts in the architecture",
        body: "Scalable architecture reduces technical rework. Teams can add new pages, campaigns, and workflows without rebuilding core foundations every quarter.",
      },
      {
        heading: "Performance is a business metric",
        body: "Performance improvements influence outcomes directly. Faster pages help users complete actions, which can improve lead generation and conversion.",
      },
      {
        heading: "What to put in place first",
        body: "A modern stack also supports stronger accessibility and SEO practices, helping businesses reach more users and rank better for relevant searches.",
      },
    ],
  },
  {
    slug: "web-development-vs-website-builders",
    title: "Web Development vs Website Builders: What Should Businesses Choose?",
    excerpt:
      "A balanced framework to decide when website builders are enough and when custom development is a better fit.",
    category: "Web Development",
    topic: "web",
    layout: "vs-choice",
    kicker: "Decision guide",
    overlay: "Builder vs custom",
    publishedAt: "2026-07-03",
    seoTitle: "Web Development vs Website Builders for Businesses",
    seoDescription:
      "Compare custom web development and website builders with a practical decision framework for growing businesses.",
    relatedService: "web-development",
    image: cover("photo-1461749280684-dccba630e2f6"),
    imageAlt: "Code editor showing a custom web development project",
    sections: [
      {
        heading: null,
        body: "Website builders are useful when speed and low setup effort are top priorities. They can work well for very small or early-stage content needs.",
      },
      {
        heading: "When a builder is enough",
        body: "If the site is mostly pages, forms, and light content updates, a builder can get a team live quickly without a large engineering investment.",
      },
      {
        heading: "When custom development wins",
        body: "Custom development becomes more valuable when businesses need deeper integrations, stronger performance control, and long-term flexibility.",
      },
      {
        heading: "A practical way to choose",
        body: "Define where growth constraints are likely to appear, then choose the path that avoids expensive platform limitations later.",
      },
    ],
  },
  {
    slug: "why-businesses-are-moving-to-cloud-solutions",
    title: "Why Businesses Are Moving to Cloud Solutions",
    excerpt:
      "What cloud migration means in practical terms, and why scalability and reliability are major decision drivers.",
    category: "Cloud Solutions",
    topic: "cloud",
    layout: "cloud-lift",
    kicker: "Infrastructure",
    overlay: "Move to cloud",
    publishedAt: "2026-07-05",
    seoTitle: "Why Businesses Are Moving to Cloud Solutions",
    seoDescription:
      "Understand why modern businesses are adopting cloud solutions to improve scalability, resilience, and operational agility.",
    relatedService: "cloud-solutions",
    image: cover("photo-1451187580459-43490279c0fa"),
    imageAlt: "Earth seen from orbit representing global cloud infrastructure",
    sections: [
      {
        heading: null,
        body: "Cloud solutions help teams avoid infrastructure bottlenecks by making scaling more predictable and operationally simpler.",
      },
      {
        heading: "Reliability without owning every server",
        body: "Businesses also benefit from improved reliability models and more resilient deployment workflows.",
      },
      {
        heading: "Migration does not have to be all at once",
        body: "Incremental transitions can reduce risk while delivering value early, especially when critical systems stay in place during the first phase.",
      },
      {
        heading: "Connect cloud work to business goals",
        body: "When aligned with clear business goals, cloud initiatives improve both delivery velocity and long-term system health.",
      },
    ],
  },
  {
    slug: "aws-vs-azure-understanding-cloud-infrastructure",
    title: "AWS vs Azure: Understanding Cloud Infrastructure for Businesses",
    excerpt:
      "A practical comparison of AWS and Azure priorities to guide platform selection discussions.",
    category: "Cloud Solutions",
    topic: "cloud",
    layout: "cloud-compare",
    kicker: "Platforms",
    overlay: "AWS or Azure",
    publishedAt: "2026-07-08",
    seoTitle: "AWS vs Azure: Which Cloud Platform Is Right for Your Business?",
    seoDescription:
      "Compare AWS and Azure across scalability, services, pricing, DevOps, security and business requirements to choose the right cloud platform.",
    relatedService: "cloud-solutions",
    image: cover("photo-1544197150-b99a580bb7a2"),
    imageAlt: "Server racks in a cloud data center aisle",
    sections: [
      {
        heading: null,
        body: "Both AWS and Azure provide broad cloud capabilities. The better fit depends on existing tooling, team familiarity, and integration requirements.",
      },
      {
        heading: "Evaluate the operating model, not the brand",
        body: "A useful evaluation model includes governance requirements, deployment workflows, and future growth patterns.",
      },
      {
        heading: "Match the platform to the workload",
        body: "Decision quality improves when teams prioritize workload characteristics and operational needs over brand preference.",
      },
      {
        heading: "Keep the strategy flexible",
        body: "A platform strategy should stay flexible enough to support future architecture evolution, including hybrid and multi-cloud paths.",
      },
    ],
  },
  {
    slug: "how-data-analytics-improves-business-decisions",
    title: "How Data Analytics Can Improve Business Decision Making",
    excerpt:
      "How to move from raw data to operational insight using practical analytics foundations.",
    category: "Data Analytics",
    topic: "analytics",
    layout: "data-pulse",
    kicker: "Insight",
    overlay: "From data to action",
    publishedAt: "2026-07-11",
    seoTitle: "How Data Analytics Improves Business Decision Making",
    seoDescription:
      "Explore practical ways data analytics helps teams make faster, clearer, and more confident decisions.",
    relatedService: "data-analytics",
    image: cover("photo-1551288049-bebda4e38f71"),
    imageAlt: "Analytics dashboard with colorful charts and business metrics",
    sections: [
      {
        heading: null,
        body: "Analytics becomes valuable when metrics are tied directly to business decisions, not only dashboards.",
      },
      {
        heading: "Make the signal visible",
        body: "Visualization helps teams understand performance patterns quickly and spot issues before they become costly.",
      },
      {
        heading: "Give every metric an owner",
        body: "Clear ownership of key metrics improves accountability and helps leadership align strategy with outcomes.",
      },
      {
        heading: "Then look forward",
        body: "Predictive analytics can extend this foundation by supporting forward-looking planning once the core numbers are trusted.",
      },
    ],
  },
  {
    slug: "why-cybersecurity-should-be-part-of-digital-strategy",
    title: "Why Cybersecurity Should Be Part of Your Digital Strategy",
    excerpt:
      "Why security works best as a strategic function, not only a technical afterthought.",
    category: "Cybersecurity",
    topic: "security",
    layout: "secure-core",
    kicker: "Risk",
    overlay: "Secure by design",
    publishedAt: "2026-07-13",
    seoTitle: "Why Cybersecurity Belongs in Digital Strategy",
    seoDescription:
      "Learn why cybersecurity should be integrated into digital strategy through audits, protection, and compliance readiness.",
    relatedService: "cybersecurity",
    image: cover("photo-1550751827-4bd374c3f58b"),
    imageAlt: "Circuit board close-up suggesting cybersecurity and digital protection",
    sections: [
      {
        heading: null,
        body: "Security is strongest when planned early. Late-stage security fixes are typically more expensive and more disruptive.",
      },
      {
        heading: "Treat security as a product decision",
        body: "Strategic security planning helps reduce avoidable risk across applications, workflows, and operations.",
      },
      {
        heading: "Start with a clear baseline",
        body: "Security audits provide a practical baseline for prioritizing improvements instead of reacting only after incidents.",
      },
      {
        heading: "Build compliance into delivery",
        body: "Compliance support is easier when security practices are embedded in delivery processes rather than added at the end.",
      },
    ],
  },
  {
    slug: "how-api-integration-connects-modern-business-systems",
    title: "How API Integration Connects Modern Business Systems",
    excerpt:
      "How integration strategy reduces manual work and improves operational consistency.",
    category: "System Integration",
    topic: "integration",
    layout: "api-flow",
    kicker: "Operations",
    overlay: "Connect the stack",
    publishedAt: "2026-07-16",
    seoTitle: "How API Integration Connects Business Systems",
    seoDescription:
      "Understand how API integration and workflow automation help modern businesses reduce friction and scale operations.",
    relatedService: "system-integration",
    image: cover("photo-1558494949-ef010cbdcc31"),
    imageAlt: "Network cables connecting servers in a data center",
    sections: [
      {
        heading: null,
        body: "Disconnected systems create duplicated effort and inconsistent data. API integration addresses this by creating reliable data flow between tools.",
      },
      {
        heading: "Remove the copy-paste layer",
        body: "Integration can reduce manual task repetition and improve process clarity across teams that currently jump between tools.",
      },
      {
        heading: "Modernize without a full rewrite",
        body: "Legacy modernization often starts with targeted integration layers rather than full platform replacement.",
      },
      {
        heading: "Phase the roadmap",
        body: "A phased roadmap helps teams deliver integration value while maintaining operational stability.",
      },
    ],
  },
  {
    slug: "native-vs-cross-platform-mobile-app-development",
    title: "Native vs Cross-Platform Mobile App Development",
    excerpt:
      "How to evaluate native and cross-platform app paths based on product goals and team constraints.",
    category: "Mobile Development",
    topic: "mobile",
    layout: "two-phones",
    kicker: "Product",
    overlay: "Native or cross",
    publishedAt: "2026-07-20",
    seoTitle: "Native vs Cross-Platform Mobile App Development",
    seoDescription:
      "Compare native and cross-platform development trade-offs for product quality, speed, and long-term maintenance.",
    relatedService: "mobile-development",
    image: cover("photo-1512941937669-90a1b58e7e9c"),
    imageAlt: "Person using a mobile app on a smartphone",
    sections: [
      {
        heading: null,
        body: "Native development may provide deeper platform optimization, while cross-platform approaches can improve delivery speed for multi-platform products.",
      },
      {
        heading: "Start from the product, not the framework",
        body: "The right decision depends on product complexity, interaction quality targets, and release timelines.",
      },
      {
        heading: "Map capabilities before choosing a stack",
        body: "A useful strategy is to map required capabilities first, then choose the architecture that best supports those priorities.",
      },
      {
        heading: "Count the years after launch",
        body: "Long-term maintenance and team expertise should be considered as strongly as initial launch speed.",
      },
    ],
  },
  {
    slug: "seo-starts-when-the-website-is-built",
    title: "SEO Starts When the Website Is Built",
    excerpt:
      "Why technical structure, performance, and content architecture should be designed before launch—not bolted on afterwards.",
    category: "SEO",
    topic: "seo",
    layout: "scale-web",
    kicker: "Foundations",
    overlay: "Built-in SEO",
    publishedAt: "2026-09-01",
    author: "Tech Eeez",
    seoTitle: "SEO Starts When the Website Is Built | Tech Eeez",
    seoDescription:
      "Learn why SEO belongs in website design and development: crawlability, performance, structure, and content that search engines can understand.",
    relatedService: "seo-ai-search",
    image: cover("photo-1432888498266-38ffec3eaf0a"),
    imageAlt: "Person reviewing website analytics and search data on a laptop",
    sections: [
      {
        heading: null,
        body: "Search visibility is easier to earn when the website is structured for it from the first templates. Adding SEO after launch often means reworking URLs, headings, speed, and content that were never designed to be found.",
      },
      {
        heading: "Technical choices show up in search",
        body: "Crawlability, canonical URLs, metadata, and Core Web Vitals are engineering decisions. They determine whether pages can be indexed and how they feel to visitors who arrive from search.",
      },
      {
        heading: "Content needs a place to live",
        body: "Keyword research only helps if the site has clear pages, internal links, and topics with enough depth. Architecture is the difference between a brochure and a discoverable resource.",
      },
      {
        heading: "What to do on an existing site",
        body: "If the site is already live, start with an audit: indexing, performance, content gaps, and schema. Then change the foundation before chasing more keywords.",
      },
    ],
  },
  {
    slug: "how-ai-search-changes-discovery",
    title: "How AI Search Changes Discovery (Without the Hype)",
    excerpt:
      "People still search, but more journeys start as questions in assistants and answer engines. Here is what businesses can actually prepare for.",
    category: "AI Search",
    topic: "ai-search",
    layout: "data-pulse",
    kicker: "Discovery",
    overlay: "Search is changing",
    publishedAt: "2026-09-04",
    author: "Tech Eeez",
    seoTitle: "How AI Search Changes Discovery | Tech Eeez",
    seoDescription:
      "A practical look at AI-powered search, answer engines, and how businesses can make websites easier to understand and cite—without claiming guaranteed AI mentions.",
    relatedService: "seo-ai-search",
    image: cover("photo-1677442136019-21780ecad995"),
    imageAlt: "Abstract visualization of connected data and digital networks",
    sections: [
      {
        heading: null,
        body: "AI search does not replace Google overnight. It does change how some people ask questions and how answers are assembled from sources. Businesses that explain who they are, what they do, and why it is true are easier for both classic search and answer engines to use.",
      },
      {
        heading: "What you cannot control",
        body: "No agency can promise that an AI system will mention your brand. Those systems choose sources based on their own models, policies, and available web content.",
      },
      {
        heading: "What you can improve",
        body: "Clear entities, structured data, intent-led pages, and consistent naming help machines map your business to real topics. That is useful in Google results and in AI-assisted discovery.",
      },
      {
        heading: "Keep one strategy",
        body: "Treat traditional SEO and AI search readiness as the same program: useful pages, technical health, and measurement. Generative engine optimization is an extension of that work, not a separate magic layer.",
      },
    ],
  },
  {
    slug: "technical-seo-and-local-search-for-growing-sites",
    title: "Technical SEO and Local Search for Growing Sites",
    excerpt:
      "A practical checklist for indexation, local visibility, and the measurements teams should actually watch.",
    category: "SEO",
    topic: "seo",
    layout: "vs-choice",
    kicker: "Playbook",
    overlay: "Technical & local",
    publishedAt: "2026-09-08",
    author: "Tech Eeez",
    seoTitle: "Technical SEO and Local Search | Tech Eeez",
    seoDescription:
      "Practical guidance on technical SEO, local search, Search Console, and reporting metrics for businesses that need organic visibility.",
    relatedService: "seo-ai-search",
    image: cover("photo-1460925895917-afdab827c52f"),
    imageAlt: "Dashboard charts showing website traffic and performance metrics",
    sections: [
      {
        heading: null,
        body: "Growing sites often stall because pages never get indexed, local signals are inconsistent, or reporting tracks vanity rankings instead of qualified demand.",
      },
      {
        heading: "Indexation before ambition",
        body: "Confirm that important URLs are in the sitemap, allowed in robots.txt, and free of accidental noindex or canonical conflicts. Search Console is the source of truth.",
      },
      {
        heading: "Local search is still a channel",
        body: "For businesses that serve a city or region, NAP consistency, location pages, and map presence sit alongside classic keyword work.",
      },
      {
        heading: "Report what operations can use",
        body: "Organic traffic, visibility for relevant queries, indexed pages, leads, and conversion rate beat screenshots of a number-one ranking that may not convert.",
      },
    ],
  },
];

export const getPostBySlug = (slug) =>
  blogPosts.find((post) => post.slug === slug);

export const getRelatedPosts = (slug, limit = 2) => {
  const current = getPostBySlug(slug);
  if (!current) return blogPosts.slice(0, limit);
  const same = blogPosts.filter(
    (post) => post.slug !== slug && post.category === current.category,
  );
  const rest = blogPosts.filter(
    (post) => post.slug !== slug && post.category !== current.category,
  );
  return [...same, ...rest].slice(0, limit);
};

export const postPlainText = (post) =>
  post.sections.map((section) => section.body).join(" ");

export const estimateReadingTime = (post) => {
  const words = postPlainText(post).split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
};

export const categoryAccents = {
  "Web Development": "#67e8f9",
  SEO: "#67e8f9",
  "AI Search": "#c4b5fd",
  "Cloud Solutions": "#7dd3fc",
  "Data Analytics": "#86efac",
  Cybersecurity: "#f9a8d4",
  "System Integration": "#94a3b8",
  "Mobile Development": "#5eead4",
};

export const getCategoryAccent = (category) =>
  categoryAccents[category] ?? "#c4b5fd";

export const blogTopics = [
  { id: "all", label: "All" },
  { id: "seo", label: "SEO" },
  { id: "ai-search", label: "AI Search" },
  { id: "web", label: "Web Development" },
  { id: "cloud", label: "Cloud Solutions" },
  { id: "analytics", label: "Data Analytics" },
  { id: "security", label: "Cybersecurity" },
  { id: "integration", label: "System Integration" },
  { id: "mobile", label: "Mobile Development" },
];

export const filterPostsByTopic = (topic) =>
  !topic || topic === "all"
    ? blogPosts
    : blogPosts.filter((post) => post.topic === topic);

export const formatPostDate = (value) =>
  new Date(`${value}T00:00:00`).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
