import { Breadcrumbs } from "../components/Breadcrumbs";
import { FadeInUp } from "../components/FadeInUp";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import { Seo, breadcrumbJsonLd, serviceJsonLd } from "../components/Seo";
import { getServiceBySlug } from "../data/services";
import {
  aiSearchServices,
  builtInStack,
  discoveryChannels,
  dualSearch,
  seoFaqs,
  seoJourney,
  seoMetrics,
  seoProcess,
  seoServiceGroups,
} from "../data/seo";

const service = getServiceBySlug("seo-ai-search");

export function SeoPage() {
  return (
    <>
      <Seo
        title={service.seoTitle}
        description={service.seoDescription}
        path="/seo"
        jsonLd={[
          serviceJsonLd({ ...service, canonicalPath: "/seo" }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "SEO & AI Search", path: "/seo" },
          ]),
          faqJsonLd(),
        ]}
      />
      <main className="seo-page">
        <section className="relative overflow-hidden px-6 pb-24 pt-36">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,#2a2a38_0%,#121214_55%)]" />
          <div className="pointer-events-none absolute -right-24 top-24 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="mx-auto max-w-7xl">
            <FadeInUp>
              <Breadcrumbs
                items={[
                  { name: "Home", path: "/" },
                  { name: "Services", path: "/services" },
                  { name: "SEO & AI Search", path: "/seo" },
                ]}
              />
              <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#A1A1AA]">
                SEO & AI Search
              </p>
              <h1 className="mt-5 max-w-5xl text-[clamp(2.6rem,7vw,6.2rem)] font-medium leading-[0.95] tracking-tight">
                Get Found on Google.{" "}
                <span className="font-serif italic font-normal">Get Discovered by AI.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#D4D4D8]">
                We build and optimize websites that are designed to perform in search engines
                and the new era of AI-powered discovery.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton to="/contact?intent=visibility">Boost My Visibility</PrimaryButton>
                <SecondaryButton to="#seo-solutions">Explore SEO Solutions</SecondaryButton>
              </div>
            </FadeInUp>

            <FadeInUp delay={80} className="mt-16">
              <ol className="seo-journey" aria-label="Path from website to customers">
                {seoJourney.map((step, index) => (
                  <li key={step.label} className="seo-journey__item">
                    <span className="seo-journey__index">{String(index + 1).padStart(2, "0")}</span>
                    <strong>{step.label}</strong>
                    <span>{step.note}</span>
                  </li>
                ))}
              </ol>
            </FadeInUp>
          </div>
        </section>

        <section id="seo-solutions" className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <FadeInUp>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
                SEO services
              </p>
              <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4.5vw,3.8rem)] font-medium leading-[1.05] tracking-tight">
                SEO That Builds Long-Term Visibility
              </h2>
              <p className="mt-5 max-w-2xl text-[16px] leading-7 text-[#D4D4D8]">
                Your website shouldn&apos;t just exist. It should be discoverable. We optimize
                technical structure, content, performance, and search signals so search engines
                can understand your business and your customers can find you.
              </p>
            </FadeInUp>
            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {seoServiceGroups.map((group, index) => (
                <FadeInUp key={group.title} delay={index * 60}>
                  <article className="h-full rounded-[24px] border border-white/10 bg-[#1C1C22] p-8">
                    <h3 className="text-xl font-medium">{group.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#D4D4D8]">{group.value}</p>
                    <ul className="mt-6 space-y-5">
                      {group.items.map((item) => (
                        <li key={item.title}>
                          <p className="text-sm font-medium text-white">{item.title}</p>
                          <p className="mt-1 text-sm leading-6 text-[#A1A1AA]">{item.copy}</p>
                        </li>
                      ))}
                    </ul>
                  </article>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-white/10 px-6 py-24">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(103,232,249,0.05),transparent_40%,rgba(196,181,253,0.06))]" />
          <div className="relative mx-auto max-w-7xl">
            <FadeInUp>
              <h2 className="max-w-3xl text-[clamp(2rem,4.5vw,3.8rem)] font-medium leading-[1.05] tracking-tight">
                SEO Is Changing. Search Is Becoming{" "}
                <span className="font-serif italic font-normal">AI.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-[16px] leading-7 text-[#D4D4D8]">
                People increasingly discover information through AI-powered search and answer
                experiences. Be visible where your customers are searching—even when the search
                doesn&apos;t start with Google.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#A1A1AA]">
                We prepare websites and content for this shift. We do not claim to control whether
                an AI system mentions a business.
              </p>
            </FadeInUp>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {aiSearchServices.map((item, index) => (
                <FadeInUp key={item.title} delay={index * 40}>
                  <article className="h-full rounded-2xl border border-white/10 bg-[#18181c]/80 p-6 backdrop-blur">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#D4D4D8]">{item.copy}</p>
                  </article>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <FadeInUp className="text-center">
              <h2 className="text-[clamp(2rem,4.5vw,3.6rem)] font-medium tracking-tight">
                One strategy. Two search worlds.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-7 text-[#D4D4D8]">
                Tech Eeez helps businesses optimize for both traditional search engines and
                emerging AI-powered discovery platforms.
              </p>
            </FadeInUp>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {[dualSearch.traditional, dualSearch.ai].map((column) => (
                <FadeInUp key={column.title}>
                  <article className="rounded-[24px] border border-white/10 bg-[#1C1C22] p-8">
                    <h3 className="text-2xl font-medium">{column.title}</h3>
                    <ol className="mt-8 flex flex-wrap items-center gap-2">
                      {column.steps.map((step, index) => (
                        <li key={step} className="flex items-center gap-2">
                          <span className="rounded-full border border-white/15 bg-[#2A2A32] px-3 py-1.5 text-sm">
                            {step}
                          </span>
                          {index < column.steps.length - 1 ? (
                            <span className="text-[#A1A1AA]" aria-hidden>
                              →
                            </span>
                          ) : null}
                        </li>
                      ))}
                    </ol>
                  </article>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <FadeInUp>
              <h2 className="text-[clamp(2.2rem,5vw,4.4rem)] font-medium leading-[0.95] tracking-tight">
                Rank Where People Search
              </h2>
              <p className="mt-5 max-w-2xl text-[18px] leading-8 text-[#D4D4D8]">
                Search is no longer limited to ten blue links.
              </p>
              <p className="mt-4 max-w-2xl text-[16px] leading-7 text-[#A1A1AA]">
                Your customers may discover your business through Google, maps, social platforms,
                AI assistants, answer engines, and other digital discovery channels. We help
                create a visibility strategy around that modern journey.
              </p>
            </FadeInUp>
            <ul className="mt-10 flex flex-wrap gap-3">
              {discoveryChannels.map((channel) => (
                <li
                  key={channel}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-[#D4D4D8]"
                >
                  {channel}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <FadeInUp>
              <h2 className="max-w-3xl text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.05] tracking-tight">
                SEO shouldn&apos;t be added after your website is finished. It should be{" "}
                <span className="font-serif italic font-normal">built into it.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-[16px] leading-7 text-[#D4D4D8]">
                Tech Eeez combines design, development, performance, technical SEO, content, and
                AI search readiness. That is different from agencies that only tune keywords after
                a site has already shipped.
              </p>
            </FadeInUp>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {builtInStack.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#18181c] px-5 py-4 text-lg font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <FadeInUp>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
                Process
              </p>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] font-medium tracking-tight">
                How visibility work actually proceeds
              </h2>
            </FadeInUp>
            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {seoProcess.map((step, index) => (
                <FadeInUp key={step.number} delay={index * 50}>
                  <li className="seo-step h-full rounded-[24px] border border-white/10 p-7">
                    <p className="text-xs tracking-[0.18em] text-[#A1A1AA]">{step.number}</p>
                    <h3 className="mt-3 text-2xl font-medium">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#D4D4D8]">{step.description}</p>
                  </li>
                </FadeInUp>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <FadeInUp>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-medium tracking-tight">
                Metrics that matter
              </h2>
              <p className="mt-4 max-w-2xl text-[16px] leading-7 text-[#D4D4D8]">
                We report on the signals SEO teams actually use. Case-study figures will appear
                here when they are published—no invented client statistics.
              </p>
            </FadeInUp>
            <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {seoMetrics.map((metric) => (
                <article key={metric.label} className="bg-[#121214] p-6">
                  <h3 className="text-lg font-medium">{metric.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#A1A1AA]">{metric.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-[#1C1C22] px-8 py-14 text-center md:px-14">
            <FadeInUp>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-medium leading-[1.1] tracking-tight">
                Wonder How Visible Your Website Really Is?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[16px] leading-7 text-[#D4D4D8]">
                Get a clear view of your website&apos;s SEO health, search visibility, technical
                issues, and opportunities for growth.
              </p>
              <div className="mt-8 flex justify-center">
                <PrimaryButton to="/contact?intent=seo-audit">Get an SEO Audit</PrimaryButton>
              </div>
            </FadeInUp>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 pb-28 pt-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-medium">Questions we hear often</h2>
            <div className="mt-8 space-y-4">
              {seoFaqs.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-white/10 bg-[#18181c] px-5 py-4"
                >
                  <summary className="cursor-pointer text-lg font-medium">{item.question}</summary>
                  <p className="mt-3 text-sm leading-6 text-[#D4D4D8]">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: seoFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
