import { Link } from "react-router-dom";
import { BlogCover } from "./BlogCover";
import { estimateReadingTime, formatPostDate, getCategoryAccent } from "../data/blog";

export function BlogCard({ post, featured = false }) {
  const accent = getCategoryAccent(post.category);
  const minutes = estimateReadingTime(post);

  return (
    <article className={`blog-card ${featured ? "is-featured" : ""}`}>
      <Link to={`/blog/${post.slug}`} data-cursor="link" className="blog-card__link">
        <BlogCover post={post} />
        <div className="blog-card__body">
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
