import { getCategoryAccent } from "../data/blog";

export function BlogCover({ post, className = "" }) {
  const accent = getCategoryAccent(post.category);

  return (
    <div className={`blog-cover ${className}`} aria-hidden="true">
      <span className="blog-cover__glow" style={{ background: accent }} />
      <span className="blog-cover__grid" />
      <span className="blog-cover__frame" style={{ borderColor: `${accent}66` }} />
      <span className="blog-cover__orb" style={{ background: accent }} />
      <span className="blog-cover__line" style={{ background: accent }} />
      <p className="blog-cover__label" style={{ color: accent }}>
        {post.category}
      </p>
    </div>
  );
}
