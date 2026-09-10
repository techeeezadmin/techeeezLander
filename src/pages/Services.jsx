import { Link } from "react-router-dom";
import { FadeInUp } from "../components/FadeInUp";
import { ExpertiseMarquee } from "../components/ExpertiseMarquee";
import { PageShell } from "../components/PageShell";
import { Seo, breadcrumbJsonLd } from "../components/Seo";
import { services } from "../data/services";

export function Services() {
  return (
    <>
      <Seo
        title="Software, SEO & Digital Services | Tech Eeez"
        description="Explore Tech Eeez services in SEO, AI search, web, mobile, cloud, analytics, cybersecurity, and system integration — built for businesses in Mumbai."
        path="/services"
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageShell
        eyebrow="Services"
        title="Eight capabilities. One technology"
        serifWord="partner."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
        description="Our services help businesses get found, build faster, and operate with clarity — from SEO and AI search to web, cloud, mobile, and secure systems."
      >
        <div className="-mx-6 mb-16">
          <ExpertiseMarquee />
        </div>
        <div className="grid gap-px bg-white/10 md:grid-cols-2">
          {services.map((service, index) => (
            <FadeInUp key={service.slug} delay={index * 50}>
              <article className="group relative h-full bg-[#1C1C22] p-8 transition duration-300 hover:-translate-y-1 hover:bg-[#24242B]">
                <span
                  className="absolute left-0 top-8 h-8 w-px opacity-0 transition group-hover:opacity-100"
                  style={{ background: service.accent }}
                />
                <p className="text-xs tracking-[0.2em] text-[#A1A1AA]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-3xl font-medium tracking-tight">{service.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#D4D4D8]">{service.pitch}</p>
                <ul className="mt-5 space-y-1 text-sm text-[#D4D4D8]">
                  {service.capabilities.map((capability) => (
                    <li key={capability}>— {capability}</li>
                  ))}
                </ul>
                <Link
                  to={service.canonicalPath || `/services/${service.slug}`}
                  data-cursor="link"
                  className="mt-6 inline-flex text-sm font-medium text-white"
                >
                  Learn more
                  <span className="btn-arrow">→</span>
                </Link>
              </article>
            </FadeInUp>
          ))}
        </div>
      </PageShell>
    </>
  );
}
