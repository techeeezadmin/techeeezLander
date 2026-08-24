import { useState } from "react";
import { getCategoryAccent } from "../data/blog";

export function BlogCover({ post, className = "", featured = false }) {
  const accent = getCategoryAccent(post.category);
  const [showImage, setShowImage] = useState(Boolean(post.image));

  return (
    <div
      className={`blog-cover layout-${post.layout} ${featured ? "is-featured" : ""} ${className}`}
      style={{ "--accent": accent }}
    >
      {showImage ? (
        <img
          className="blog-cover__img"
          src={post.image}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          loading={featured ? "eager" : "lazy"}
          decoding="async"
          onError={() => setShowImage(false)}
        />
      ) : (
        <span className="blog-cover__glow" style={{ background: accent }} />
      )}
      <span className="blog-cover__shade" />
      <CoverArt layout={post.layout} overlay={post.overlay} />
      <p className="blog-cover__label">{post.kicker}</p>
    </div>
  );
}

export function CoverArt({ layout, overlay }) {
  return (
    <div className="cover-art" aria-hidden="true">
      {layout === "scale-web" ? (
        <div className="art-scale">
          <span />
          <span />
          <span />
          <span />
          <span />
          <b>{overlay}</b>
        </div>
      ) : null}
      {layout === "vs-choice" ? (
        <div className="art-vs">
          <em>Builder</em>
          <i>vs</i>
          <em>Custom</em>
        </div>
      ) : null}
      {layout === "cloud-lift" ? (
        <div className="art-cloud">
          <span className="art-cloud__ring" />
          <span className="art-cloud__ring delay" />
          <b>{overlay}</b>
        </div>
      ) : null}
      {layout === "cloud-compare" ? (
        <div className="art-compare">
          <em>AWS</em>
          <em>Azure</em>
        </div>
      ) : null}
      {layout === "data-pulse" ? (
        <div className="art-pulse">
          <svg viewBox="0 0 160 56" fill="none">
            <path d="M2 40 L22 36 L38 44 L58 18 L78 28 L98 8 L118 22 L138 14 L158 24" />
          </svg>
          <b>{overlay}</b>
        </div>
      ) : null}
      {layout === "secure-core" ? (
        <div className="art-secure">
          <span className="art-secure__scan" />
          <b>SECURE</b>
        </div>
      ) : null}
      {layout === "api-flow" ? (
        <div className="art-flow">
          <em>CRM</em>
          <i />
          <em>API</em>
          <i />
          <em>App</em>
        </div>
      ) : null}
      {layout === "two-phones" ? (
        <div className="art-phones">
          <span>Native</span>
          <span>Cross</span>
        </div>
      ) : null}
    </div>
  );
}
