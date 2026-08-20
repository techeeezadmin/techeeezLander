import { Link } from "react-router-dom";
import { FadeInUp } from "./FadeInUp";
import { BlogCard } from "./BlogCard";
import { blogPosts } from "../data/blog";

export function BlogPreview() {
  const [featured, ...rest] = blogPosts;
  const side = rest.slice(0, 2);

  return (
    <section id="blog" className="bg-[#1A1A1F] px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <FadeInUp>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
                Journal
              </p>
              <h2 className="mt-3 text-[clamp(2.2rem,5vw,4.2rem)] font-medium tracking-tight">
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

        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.9fr]">
          <FadeInUp>
            <BlogCard post={featured} featured />
          </FadeInUp>
          <div className="grid gap-5">
            {side.map((post, index) => (
              <FadeInUp key={post.slug} delay={80 + index * 70}>
                <BlogCard post={post} />
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
