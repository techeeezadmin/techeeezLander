import { Link } from "react-router-dom";
import { BlogCover } from "./BlogCover";
import { estimateReadingTime, formatPostDate, getCategoryAccent } from "../data/blog";

export function BlogCard({ post, featured = false, index }) {
  const accent = getCategoryAccent(post.category);
  const minutes = estimateReadingTime(post);
  const number = String((index ?? 0) + 1).padStart(2, "0");

  return (
    <article className={`blog-card ${featured ? "is-featured" : ""}`}>
      <Link to={`/blog/${post.slug}`} data-cursor="link" className="blog-card__link">
        <span className="blog-card__accent" style={{ background: accent }} />
        <BlogCover post={post} showScene={featured} />
        <div className="blog-card__body">
          <p className="blog-card__index">{number}</p>
          <div className="blog-card__meta">
            <span className="blog-chip" style={{ color: accent, borderColor: `${accent}55` }}>
              {post.category}
            </span>
            <span>
              {formatPostDate(post.publishedAt)} · {minutes} min read
            </span>
          </div>
          <h3 className="blog-card__title">{post.title}</h3>
          <p className="blog-card__excerpt">{post.excerpt}</p>
          <span className="blog-card__cta">
            Read article
            <span className="btn-arrow">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
