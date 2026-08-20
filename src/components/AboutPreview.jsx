import { FadeInUp } from "./FadeInUp";
import { CountUp } from "./CountUp";
import { siteConfig } from "../data/site";

export function AboutPreview() {
  return (
    <section id="about" className="relative bg-[#1A1A1F] px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
          About
        </p>
        <h2 className="mt-5 max-w-4xl text-[clamp(2.2rem,5.4vw,4.6rem)] font-medium leading-[1.05] tracking-tight">
          <span className="block">Technology should not just work.</span>
          <span className="mt-1 block text-[#D4D4D8]">
            It should move your business{" "}
            <span className="font-serif italic text-white">forward.</span>
          </span>
        </h2>
        <FadeInUp>
          <p className="mt-8 max-w-2xl text-[16px] leading-7 text-[#D4D4D8]">
            Tech Eeez delivers AI, web, mobile, cloud, analytics, cybersecurity and
            system integration. The focus stays on business growth, practical
            outcomes and scalable execution.
          </p>
        </FadeInUp>

        <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-3">
          {siteConfig.stats.map((item) => (
            <article key={item.label}>
              <p className="text-[clamp(2.4rem,5vw,3.6rem)] font-medium tracking-tight">
                <CountUp value={item.value} />
              </p>
              <p className="mt-2 text-sm text-[#D4D4D8]">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
