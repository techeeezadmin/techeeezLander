import { Link } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { FadeInUp } from "../components/FadeInUp";
import { CountUp } from "../components/CountUp";
import { Process } from "../components/Process";
import { Seo, organizationJsonLd, breadcrumbJsonLd } from "../components/Seo";
import { siteConfig } from "../data/site";
import { getServicePath, services } from "../data/services";

export function About() {
  return (
    <>
      <Seo
        title="About Tech Eeez | Software & Technology Solutions Company"
        description="Learn how Tech Eeez delivers software, websites, SEO, and AI search visibility for business growth across web, mobile, cloud, data, security, and integration."
        path="/about"
        jsonLd={[
          organizationJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <main className="px-6 pb-8 pt-36">
        <div className="mx-auto max-w-7xl">
          <FadeInUp>
            <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
            <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
              About
            </p>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.6rem,6vw,5.2rem)] font-medium leading-[1.02] tracking-tight">
              Engineering built around business{" "}
              <span className="font-serif italic font-normal">goals.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[16px] leading-7 text-[#D4D4D8]">
              Tech Eeez is a software solutions company in Mumbai focused on
              innovation and business growth. We combine modern engineering with
              practical delivery across AI, web, mobile, cloud, data, security, and
              integration.
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

          <div className="mt-8">
            <Process />
          </div>

          <FadeInUp className="mt-8 border-t border-white/10 py-16">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
              Capabilities
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={getServicePath(service)}
                  data-cursor="link"
                  className="group text-lg text-[#D4D4D8] hover:text-white"
                >
                  {service.title}
                  <span className="btn-arrow text-sm">→</span>
                </Link>
              ))}
            </div>
          </FadeInUp>
        </div>
      </main>
    </>
  );
}
