import { FadeInUp } from "./FadeInUp";
import { PrimaryButton, SecondaryButton } from "./Buttons";

export function SeoPreview() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(103,232,249,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl">
        <FadeInUp>
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
            Search visibility
          </p>
          <h2 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.02] tracking-tight">
            Get Found on Google.{" "}
            <span className="font-serif italic font-normal">Get Discovered by AI.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[16px] leading-7 text-[#D4D4D8]">
            We help businesses build websites, improve SEO, and become more visible across
            traditional search and AI-powered discovery—without ranking guarantees.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton to="/seo">Explore SEO & AI Search</PrimaryButton>
            <SecondaryButton to="/contact?intent=seo-audit">Get an SEO Audit</SecondaryButton>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
