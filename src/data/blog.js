const cover = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const blogPosts = [
  {
    slug: "ai-agents-vs-chatbots",
    title: "AI Agents vs Chatbots: What Businesses Should Build First",
    excerpt:
      "A chatbot answers questions. An AI agent is given a job, uses your tools, and completes a sequence of steps. Here is how to choose, and how to start without a risky rewrite.",
    category: "AI",
    topic: "ai",
    layout: "vs-choice",
    kicker: "Decision guide",
    overlay: "Agent vs chatbot",
    publishedAt: "2026-11-18",
    author: "Tech Eeez",
    seoTitle: "AI Agents vs Chatbots for Business | Tech Eeez",
    seoDescription:
      "Compare AI agents and chatbots for real business workflows. When a chatbot is enough, when you need an agent with tools and human approval, and how to start.",
    relatedService: "ai-agents",
    image: cover("photo-1677442136019-21780ecad995"),
    imageAlt: "Abstract visualization of connected data used to explain AI agents and chatbots",
    sections: [
      {
        heading: null,
        paragraphs: [
          "Most teams do not need a science-fiction assistant. They need fewer copy-paste steps between email, CRM, spreadsheets, and the tools people already use. That is why the phrase AI agent is everywhere, and why it gets mixed up with chatbot.",
          "The two are related, and they are not the same product. A chatbot is built to reply. An AI agent is built to finish a defined job, using data and tools, with a person in the loop where judgement, money, or records are at stake. If you pick the wrong one, you either overbuild a FAQ, or you ship a demo that nobody trusts in production.",
        ],
      },
      {
        heading: "What a chatbot actually does",
        paragraphs: [
          "A chatbot sits on a website, in WhatsApp, or inside an app. A person types a question. The bot returns an answer from a script, a knowledge base, or a language model. The conversation can feel natural. The work still ends at the reply.",
          "That is useful. Support teams field the same questions every day: opening hours, pricing bands, document lists, how to reset a password. A well-scoped chatbot reduces waiting and keeps a consistent answer on the record. It does not log into your CRM, move a deal, raise an invoice, or book a slot unless you have bolted those actions on afterwards — and at that point you have started building an agent, whether you named it that or not.",
          "Chatbots fail in a familiar way. They sound confident on questions they cannot ground. They stall when the user needs a change in a system of record. They also get treated as a complete AI strategy, which they are not.",
        ],
      },
      {
        heading: "What an AI agent actually does",
        paragraphs: [
          "An agent is given a job, not only a prompt. Example jobs: draft a reply from a customer email and the matching order, update a ticket with the right fields, pull three facts from an internal wiki and refuse if the sources are weak, or prepare a summary for a human to approve before anything is sent.",
          "To do that, the agent needs three things a chatbot often lacks. First, tools: APIs, mailbox access, a CRM connector, a search index over your documents. Second, a boundary: which actions it may take alone, and which need a person. Third, a trace: what it read, what it called, and what it proposed, so you can debug a bad run instead of arguing with a black box.",
          "Tech Eeez builds this as custom AI agent development for a single workflow first. We do not start with a swarm of agents. One reliable path beats five overlapping ones that nobody owns.",
        ],
      },
      {
        heading: "A plain comparison",
        paragraphs: [
          "Input: a chatbot takes a message. An agent takes a message plus a goal, and often a record in a business system.",
          "Memory: a chatbot may keep short conversation state. An agent also needs access to the systems where the real data lives, with least privilege, not a dump of every spreadsheet the company has ever saved.",
          "Output: a chatbot returns text. An agent returns a completed step, a draft, or a request for approval — and it should be able to stop when retrieval is weak rather than inventing the missing fact.",
          "Risk: a wrong chatbot answer is embarrassing. A wrong agent action can change a customer record, send a message, or spend money. That is why human approval is not a nice extra. It is part of the product for anything that is hard to undo.",
        ],
      },
      {
        heading: "When a chatbot is the right first build",
        paragraphs: [
          "Choose a chatbot when the work is answering, routing, or collecting a structured form. Typical fits: website FAQs, after-hours questions, qualifying whether someone wants a callback, and handing a clean summary to a human inbox.",
          "It is also the right first build when your knowledge is messy. If policies live in six decks and two people's heads, an agent with tool access will guess. Clean the source, or start with a retrieval-backed chatbot that cites what it used and refuses when nothing relevant is found. Retrieval-augmented generation, which we ship as RAG applications, is often the layer under both products.",
        ],
      },
      {
        heading: "When you need an agent",
        paragraphs: [
          "You need an agent when a person currently jumps between tools to finish one task. Look for work that is frequent, rules-based in the middle, and expensive when it waits in a queue. Examples we see: reading inbound mail, looking up the account, drafting a reply, and logging the outcome. Or taking a completed form and creating the records in two systems that do not talk to each other.",
          "Voice sits in the same family. An AI voice agent is still an agent with a spoken interface. The same rules apply: a defined job, tool access, transcripts, and a human path when the caller needs judgement. Do not buy a voice demo if the underlying workflow is still undefined.",
        ],
      },
      {
        heading: "Start with one workflow, not a platform rewrite",
        paragraphs: [
          "The projects that stall try to automate the whole company in month one. The projects that ship pick one workflow with a clear owner, a measurable volume, and a system of record you can actually call.",
          "Map the steps a person takes today. Mark which steps are lookup, which are writing, and which need a human. Give the agent only the tools those steps need. Test on live examples, including the ugly ones: missing fields, duplicate accounts, customers who change the subject. Expand after the first path is boringly reliable.",
          "This is also how we treat AI automation more broadly. Automation without an LLM is still the better choice when the rule is stable. Use a model where language, classification, or messy input is the bottleneck. Mixing both is normal. Calling everything an agent is not.",
        ],
      },
      {
        heading: "Guardrails that make production possible",
        paragraphs: [
          "Keep a person in the loop for actions that change records, send external messages, or move money. The agent can prepare the work. A named role clicks send. That is slower than a fully autonomous demo, and it is how teams actually adopt the tool.",
          "Log every tool call. If you cannot explain why a reply mentioned a price, you cannot put the system in front of customers. Evaluation is not a slide. It is a set of real examples you re-run when you change the prompt, the model, or the data.",
          "Do not lock the product to a proprietary Tech Eeez platform. The stack should be the one agreed in the proposal, with your data remaining yours. If retrieval is weak, the system should say so instead of filling the gap with fluent nonsense.",
        ],
      },
      {
        heading: "What this is not",
        paragraphs: [
          "It is not a guarantee that an agent will replace a team. It is not a promise of a ranking, an AI citation, or a specific cost saving. Those depend on your volume, your data quality, and how tightly the workflow is defined.",
          "It is also not the same as the generic search phrase AI agents, which is a broad head term. The useful queries are closer to AI agent development, AI automation for a named process, and the systems you already run. Tech Eeez is a Mumbai studio working with businesses in India, the UK, and the UAE. We do not invent extra offices, and we do not sell a chatbot as an agent.",
        ],
      },
      {
        heading: "What a first month usually looks like",
        paragraphs: [
          "Week one is discovery, not model shopping. We sit with the people who do the work today, export real examples, and write the job as a sequence: trigger, lookups, draft, approval, write-back. If that sequence cannot be written on one page, the agent is not the problem yet.",
          "Week two is a thin path in a staging setup: one inbox or one form, one or two tools, logging on, no unsupervised send. Week three is evaluation on the ugly cases. Week four is a decision: keep the chatbot, promote the agent to a watched production lane, or stop because the data is not ready. That last option is a valid outcome. It is cheaper than a year of a demo that never leaves Slack.",
        ],
      },
      {
        heading: "How to brief a first project",
        paragraphs: [
          "Write down the job in one sentence, the systems involved, who approves irreversible steps, and how you will know it worked in four weeks. Bring a handful of real examples, including failures. If you cannot name those, you are not ready for an agent. You may still be ready for a chatbot or a cleaner knowledge base.",
          "From there we usually split the work: AI agent development for tool-using workflows, AI automation for rules and integrations, RAG when the model must ground answers in your documents, and custom SaaS when the product itself is the system. The labels matter less than the job.",
          "If you want that conversation, start on the contact page, call or WhatsApp +91 9619118917, or read the AI agent development service page. Bring the workflow. We will tell you if a chatbot is enough.",
        ],
      },
      {
        heading: "Questions we hear often",
        paragraphs: [
          "How is an AI agent different from a chatbot? A chatbot answers questions. An agent is given a job, uses tools or data to make progress, and can complete a sequence of steps. We still keep a person in the loop for actions that change records, spend money, or need judgement.",
          "Do you build multi-agent systems? Yes, when the work splits cleanly — for example one agent that retrieves knowledge and another that drafts a reply. We start with a single agent unless the workflow truly needs more than one.",
          "Can this sit on an existing website or internal tool? Yes. Many projects start by embedding an assistant, search, or a guarded workflow into systems you already use, rather than replacing them.",
        ],
      },
    ],
  },
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
  post.sections
    .flatMap((section) => section.paragraphs || (section.body ? [section.body] : []))
    .join(" ");

export const estimateReadingTime = (post) => {
  const words = postPlainText(post).split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
};

export const categoryAccents = {
  AI: "#c4b5fd",
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
  { id: "ai", label: "AI" },
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
