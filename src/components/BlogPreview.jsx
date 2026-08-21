import { Link } from "react-router-dom";
import { FadeInUp } from "./FadeInUp";
import { blogPosts, getCategoryAccent } from "../data/blog";
import { getServiceBySlug } from "../data/services";
import { ServiceScene } from "./ServiceScenes";

export function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="blog-stack" aria-label="Journal">
      <div className="blog-stack__intro">
        <FadeInUp>
          <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-4 px-6">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
                Journal
              </p>
              <h2 className="mt-3 max-w-3xl text-[clamp(2.2rem,5vw,4.2rem)] font-medium tracking-tight">
                Ideas for building software that{" "}
                <span className="font-serif italic">lasts.</span>
              </h2>
            </div>
            <Link
              to="/blog"
              data-cursor="link"
              className="group inline-flex items-center text-sm text-[#D4D4D8] hover:text-white"
            >
              View all articles
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </FadeInUp>
      </div>

      {posts.map((post, index) => {
        const accent = getCategoryAccent(post.category);
        const service = getServiceBySlug(post.relatedService);
        return (
          <article
            key={post.slug}
            className="sticky-stack__panel blog-stack__panel"
            style={{ zIndex: index + 1 }}
          >
            <img
              className="sticky-stack__video"
              src={post.image}
              alt=""
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            <div className="sticky-stack__veil" />
            {service ? (
              <div className="blog-stack__scene" aria-hidden="true">
                <ServiceScene slug={service.slug} accent={accent} />
              </div>
            ) : null}
            <div className="sticky-stack__copy blog-stack__copy">
              <p style={{ color: accent }}>{post.category}</p>
              <h2>{post.title}</h2>
              <span>{post.excerpt}</span>
              <Link
                to={`/blog/${post.slug}`}
                data-cursor="link"
                className="blog-stack__cta"
              >
                Read article
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
}
