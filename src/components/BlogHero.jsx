import { Link } from "react-router-dom";
import { BlogCover } from "./BlogCover";
import { PrimaryButton } from "./Buttons";
import { useMouseTilt } from "../lib/parallax";
import { estimateReadingTime, formatPostDate, getCategoryAccent } from "../data/blog";

export function BlogHero({ post }) {
  const tiltRef = useMouseTilt(true);
  const accent = getCategoryAccent(post.category);
  const minutes = estimateReadingTime(post);

  return (
    <article className="blog-hero" aria-labelledby="featured-article-title">
      <Link to={`/blog/${post.slug}`} data-cursor="link" className="blog-hero__link">
        <div ref={tiltRef} className="blog-hero__visual">
          <BlogCover post={post} featured className="is-hero" />
        </div>
        <div className="blog-hero__copy">
          <p className="blog-hero__kicker" style={{ color: accent }}>
            Featured · {post.kicker}
          </p>
          <h2 id="featured-article-title" className="blog-hero__title">
            {post.title}
          </h2>
          <p className="blog-hero__excerpt">{post.excerpt}</p>
          <p className="blog-hero__meta">
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            <span aria-hidden="true"> · </span>
            {minutes} min read
          </p>
          <span className="blog-hero__cta">
            Read article
            <span className="btn-arrow">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}

export function BlogPageIntro() {
  return (
    <header className="blog-intro">
      <p className="blog-intro__eyebrow">Journal</p>
      <h1 className="blog-intro__title">
        <span className="reveal-line">
          <span>Ideas for software</span>
        </span>
        <span className="reveal-line">
          <span className="font-serif italic font-normal" style={{ animationDelay: "90ms" }}>
            that lasts.
          </span>
        </span>
      </h1>
      <p className="blog-intro__lede">
        Practical writing from Tech Eeez in Mumbai on web development, cloud,
        analytics, cybersecurity, mobile apps, and system integration — written
        for teams that need to ship with clarity.
      </p>
      <div className="blog-intro__actions">
        <PrimaryButton to="/contact">Talk to our team</PrimaryButton>
        <Link
          to="/services"
          data-cursor="link"
          className="inline-flex items-center text-sm text-[#D4D4D8] hover:text-white"
        >
          Explore services
          <span className="btn-arrow">→</span>
        </Link>
      </div>
    </header>
  );
}
