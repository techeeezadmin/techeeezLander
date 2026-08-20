import { useMemo, useState } from "react";
import { FadeInUp } from "../components/FadeInUp";
import { BlogCard } from "../components/BlogCard";
import { Seo, breadcrumbJsonLd } from "../components/Seo";
import { blogCategories, blogPosts } from "../data/blog";

export function Blog() {
  const [active, setActive] = useState("All");
  const posts = useMemo(
    () =>
      active === "All"
        ? blogPosts
        : blogPosts.filter((post) => post.category === active),
    [active],
  );
  const [featured, ...rest] = posts;

  return (
    <>
      <Seo
        title="Tech Eeez Insights | Software, AI, Cloud & Technology"
        description="Practical writing from Tech Eeez on web development, cloud, analytics, security, mobile, and integration."
        path="/blog"
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <main className="px-6 pb-28 pt-36">
        <div className="mx-auto max-w-7xl">
          <FadeInUp>
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
              Blog
            </p>
            <h1 className="mt-4 max-w-4xl text-[clamp(2.6rem,6vw,5.2rem)] font-medium leading-[1.02] tracking-tight">
              Ideas for building software that{" "}
              <span className="font-serif italic font-normal">lasts.</span>
            </h1>
            <p className="mt-5 max-w-xl text-[#D4D4D8]">
              Clear writing on the systems and decisions that help teams ship with
              confidence.
            </p>
          </FadeInUp>

          <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Article categories">
            {blogCategories.map((category) => {
              const on = category === active;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(category)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    on
                      ? "border-white bg-white text-black"
                      : "border-white/15 text-[#D4D4D8] hover:border-white/40 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {featured ? (
            <FadeInUp className="mt-12">
              <BlogCard post={featured} featured />
            </FadeInUp>
          ) : null}

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {rest.map((post, index) => (
              <FadeInUp key={post.slug} delay={index * 50}>
                <BlogCard post={post} />
              </FadeInUp>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
