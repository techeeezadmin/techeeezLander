import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FadeInUp } from "../components/FadeInUp";
import { BlogCard } from "../components/BlogCard";
import { BlogCover } from "../components/BlogCover";
import { PrimaryButton } from "../components/Buttons";
import { Seo } from "../components/Seo";
import {
  estimateReadingTime,
  formatPostDate,
  getCategoryAccent,
  getPostBySlug,
  getRelatedPosts,
} from "../data/blog";
import { getServiceBySlug } from "../data/services";
import { siteConfig } from "../data/site";
import { NotFound } from "./NotFound";

export function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("article-body");
      if (!el) return;
      const start = el.offsetTop - 120;
      const height = el.offsetHeight - window.innerHeight * 0.45;
      const value = (window.scrollY - start) / Math.max(height, 1);
      setProgress(Math.min(1, Math.max(0, value)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);

  if (!post) return <NotFound />;

  const related = getRelatedPosts(post.slug);
  const relatedService = getServiceBySlug(post.relatedService);
  const minutes = estimateReadingTime(post);
  const accent = getCategoryAccent(post.category);

  return (
    <>
      <Seo
        title={post.seoTitle}
        description={post.seoDescription}
        path={`/blog/${post.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.seoDescription,
          datePublished: post.publishedAt,
          author: { "@type": "Organization", name: "Tech Eeez" },
          publisher: { "@type": "Organization", name: "Tech Eeez", url: siteConfig.url },
        }}
      />
      <div className="reading-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})`, background: accent }} />
      </div>
      <main className="px-6 pb-28 pt-32">
        <article className="mx-auto max-w-5xl">
          <FadeInUp>
            <p className="text-sm text-[#A1A1AA]">
              <Link to="/blog" className="hover:text-white">
                Blog
              </Link>
              <span className="mx-2">/</span>
              {post.category}
            </p>
            <h1 className="mt-4 max-w-4xl text-[clamp(2.2rem,5.4vw,4.4rem)] font-medium leading-[1.05] tracking-tight">
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[#D4D4D8]">{post.excerpt}</p>
            <p className="mt-4 text-sm text-[#A1A1AA]">
              {formatPostDate(post.publishedAt)} · {minutes} min read
            </p>
          </FadeInUp>

          <FadeInUp className="mt-10 overflow-hidden rounded-[28px] border border-white/12">
            <BlogCover post={post} className="is-hero" showScene />
          </FadeInUp>

          <div
            id="article-body"
            className="article-frame mx-auto mt-12 max-w-[720px] px-5 py-10 md:px-10"
          >
            <FadeInUp className="space-y-6 text-[17px] leading-8 text-[#E4E4E7]">
              {post.content.map((paragraph, index) => (
                <div key={paragraph}>
                  {index === 1 ? (
                    <h2 className="mb-4 text-2xl font-medium tracking-tight text-white">
                      The practical view
                    </h2>
                  ) : null}
                  {index === 3 ? (
                    <h2 className="mb-4 text-2xl font-medium tracking-tight text-white">
                      How teams should decide
                    </h2>
                  ) : null}
                  {index === 0 ? (
                    <p className="article-lead">{paragraph}</p>
                  ) : (
                    <p>{paragraph}</p>
                  )}
                </div>
              ))}
            </FadeInUp>
          </div>

          <div className="mx-auto mt-16 max-w-[720px] rounded-[24px] border border-white/12 bg-[#1C1C22] p-8">
            <h2 className="text-2xl font-medium">Keep building</h2>
            <p className="mt-3 text-sm leading-6 text-[#D4D4D8]">
              If this topic is on your roadmap, Tech Eeez can help turn it into a working system.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <PrimaryButton to="/contact">Start a project</PrimaryButton>
              {relatedService ? (
                <Link
                  to={`/services/${relatedService.slug}`}
                  data-cursor="link"
                  className="inline-flex items-center px-5 py-2.5 text-sm text-[#D4D4D8] hover:text-white"
                >
                  {relatedService.title}
                  <span className="btn-arrow">→</span>
                </Link>
              ) : null}
            </div>
          </div>

          <aside className="mt-20">
            <h2 className="text-2xl font-medium">Related articles</h2>
            <div className="blog-index-grid mt-6">
              {related.map((item, index) => (
                <BlogCard key={item.slug} post={item} index={index} />
              ))}
            </div>
            <Link to="/blog" className="mt-8 inline-flex text-sm text-[#D4D4D8] hover:text-white">
              ← All articles
            </Link>
          </aside>
        </article>
      </main>
    </>
  );
}
