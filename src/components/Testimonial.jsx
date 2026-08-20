import { FadeInUp } from "./FadeInUp";
import { featuredTestimonial } from "../data/content";

export function Testimonial() {
  return (
    <section className="px-6 py-24 md:py-32" aria-label="Client testimonial">
      <div className="mx-auto max-w-7xl">
        <FadeInUp>
          <blockquote className="border-l border-white/25 pl-6 md:pl-10">
            <span className="mb-4 block font-serif text-6xl leading-none text-white/25" aria-hidden>
              “
            </span>
            <p className="max-w-4xl text-[clamp(1.6rem,3.6vw,2.8rem)] leading-[1.2] tracking-tight">
              {featuredTestimonial.quote}
            </p>
            <footer className="mt-10 text-sm text-[#D4D4D8]">
              <cite className="not-italic text-white">{featuredTestimonial.person}</cite>
              <span className="mx-2 text-white/30">—</span>
              {featuredTestimonial.role}
            </footer>
          </blockquote>
        </FadeInUp>
      </div>
    </section>
  );
}
