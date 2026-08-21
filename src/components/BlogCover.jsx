import { getCategoryAccent } from "../data/blog";
import { getServiceBySlug } from "../data/services";
import { ServiceScene } from "./ServiceScenes";

export function BlogCover({ post, className = "", showScene = false }) {
  const accent = getCategoryAccent(post.category);
  const service = getServiceBySlug(post.relatedService);

  return (
    <div className={`blog-cover ${className}`} aria-hidden="true">
      {post.image ? (
        <img className="blog-cover__img" src={post.image} alt="" loading="lazy" decoding="async" />
      ) : (
        <span className="blog-cover__glow" style={{ background: accent }} />
      )}
      <span className="blog-cover__shade" />
      {showScene && service ? (
        <div className="blog-cover__scene">
          <ServiceScene slug={service.slug} accent={accent} />
        </div>
      ) : null}
      <p className="blog-cover__label" style={{ color: accent }}>
        {post.category}
      </p>
    </div>
  );
}
