import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { FadeInUp } from "../components/FadeInUp";
import { BlogCard } from "../components/BlogCard";
import { BlogHero, BlogPageIntro } from "../components/BlogHero";
import { Seo, breadcrumbJsonLd } from "../components/Seo";
import {
  blogPosts,
  blogTopics,
  filterPostsByTopic,
} from "../data/blog";
import { siteConfig } from "../data/site";

export function Blog() {
  const [params, setParams] = useSearchParams();
  const topic = blogTopics.some((item) => item.id === params.get("topic"))
    ? params.get("topic")
    : "all";
  const posts = useMemo(() => filterPostsByTopic(topic), [topic]);
  const [featured, ...rest] = posts;
  const activeLabel = blogTopics.find((item) => item.id === topic)?.label ?? "All";

  return (
    <>
      <Seo
        title="Tech Eeez Blog | Web, Cloud, AI & Software Insights from Mumbai"
        description="Read practical articles from Tech Eeez on SEO, AI search, web development, cloud, data, security, and software for growing businesses in Mumbai."
        path={topic === "all" ? "/blog" : `/blog?topic=${topic}`}
        jsonLd={blogIndexJsonLd()}
      />
      <main className="blog-page">
        <BlogPageIntro />

        <nav className="blog-filters" aria-label="Filter articles by topic">
          {blogTopics.map((item) => {
            const on = item.id === topic;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={on}
                onClick={() => setParams(item.id === "all" ? {} : { topic: item.id })}
                className={`blog-filter ${on ? "is-on" : ""}`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <p className="blog-count" aria-live="polite">
          {posts.length} {posts.length === 1 ? "article" : "articles"}
          {topic === "all" ? "" : ` in ${activeLabel}`}
        </p>

        {featured ? (
          <FadeInUp>
            <BlogHero post={featured} />
          </FadeInUp>
        ) : (
          <p className="blog-empty">No articles in this topic yet.</p>
        )}

        {rest.length ? (
          <div className="blog-mosaic">
            {rest.map((post, index) => (
              <FadeInUp key={post.slug} delay={index * 70} className="h-full">
                <BlogCard post={post} />
              </FadeInUp>
            ))}
          </div>
        ) : null}
      </main>
    </>
  );
}

function blogIndexJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
      ]),
      {
        "@type": "Blog",
        name: "Tech Eeez Insights",
        description:
          "Practical writing on SEO, AI search, web development, cloud, analytics, and software from Tech Eeez in Mumbai.",
        url: `${siteConfig.url}/blog`,
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        blogPost: blogPosts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.seoDescription,
          datePublished: post.publishedAt,
          image: post.image,
          url: `${siteConfig.url}/blog/${post.slug}`,
        })),
      },
      {
        "@type": "ItemList",
        name: "Tech Eeez blog articles",
        itemListElement: blogPosts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteConfig.url}/blog/${post.slug}`,
          name: post.title,
        })),
      },
    ],
  };
}
