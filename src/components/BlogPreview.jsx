import { Link } from "react-router-dom";
import { FadeInUp } from "./FadeInUp";
import { CoverArt } from "./BlogCover";
import { blogPosts, getCategoryAccent } from "../data/blog";

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
              <h2 className="mt-3 max-w-2xl text-[clamp(1.8rem,3.6vw,2.8rem)] font-medium tracking-tight">
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
        return (
          <article
            key={post.slug}
            className="sticky-stack__panel blog-stack__panel"
            style={{ zIndex: index + 1, "--accent": accent }}
          >
            <div
              className="blog-stack__media"
              style={{ backgroundImage: `url("${post.image}")` }}
              aria-hidden="true"
            />
            <div className="sticky-stack__veil" />
            <div className="blog-stack__art" aria-hidden="true">
              <CoverArt layout={post.layout} overlay={post.overlay} />
            </div>
            <div className="sticky-stack__copy blog-stack__copy">
              <p style={{ color: accent }}>{post.kicker}</p>
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
