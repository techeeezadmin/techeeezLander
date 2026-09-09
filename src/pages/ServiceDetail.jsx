import { Link, Navigate, useParams } from "react-router-dom";
import { FadeInUp } from "../components/FadeInUp";
import { PrimaryButton } from "../components/Buttons";
import { ServiceProductStage } from "../components/ServiceProductStage";
import { Seo, breadcrumbJsonLd, serviceJsonLd } from "../components/Seo";
import { processSteps } from "../data/content";
import { getServiceBySlug, getServicePath, services } from "../data/services";
import { blogPosts } from "../data/blog";
import { NotFound } from "./NotFound";

export function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <NotFound />;
  if (service.canonicalPath) return <Navigate to={service.canonicalPath} replace />;

  const [label, ...rest] = service.title.split(" ");
  const restTitle = rest.join(" ");
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const relatedPosts = blogPosts
    .filter((post) => post.relatedService === service.slug)
    .slice(0, 2);

  return (
    <>
      <Seo
        title={service.seoTitle}
        description={service.seoDescription}
        path={`/services/${service.slug}`}
        jsonLd={[
          serviceJsonLd(service),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />
      <main className="relative" style={{ "--accent": service.accent }}>
        <div className="mx-auto max-w-7xl px-6 pt-32 md:hidden">
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#D4D4D8]">
            {service.shortLabel}
          </p>
          <h1 className="mt-3 text-[clamp(3.2rem,12vw,4.6rem)] font-medium leading-[0.9] tracking-tight">
            {label}
            {restTitle ? (
              <>
                <br />
                <span className="font-serif italic font-normal">{restTitle}</span>
              </>
            ) : null}
          </h1>
          <p className="mt-5 text-[16px] leading-7 text-[#D4D4D8]">{service.pitch}</p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-32 z-20 mx-auto hidden max-w-7xl px-6 md:block">
          <div className="service-copy pointer-events-auto max-w-xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#D4D4D8]">
              {service.shortLabel}
            </p>
            <h1 className="mt-3 text-[clamp(3.2rem,8vw,7.2rem)] font-medium leading-[0.9] tracking-tight">
              {label}
              {restTitle ? (
                <>
                  <br />
                  <span className="font-serif italic font-normal">{restTitle}</span>
                </>
              ) : null}
            </h1>
            <p className="mt-6 max-w-md text-[16px] leading-7 text-[#D4D4D8]">{service.pitch}</p>
          </div>
        </div>

        <ServiceProductStage service={service} />

        <div className="mx-auto max-w-7xl px-6 pb-28">
          <div className="mt-8 grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
            <FadeInUp>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
                Capabilities
              </p>
              <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
                Built into the product, not around it.
              </h2>
              <ul className="mt-8">
                {service.capabilities.map((item, index) => (
                  <li key={item} className="detail-card">
                    <p className="text-xs tracking-[0.18em] text-[#A1A1AA]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-lg text-white md:text-xl">{item}</p>
                  </li>
                ))}
              </ul>
            </FadeInUp>

            <FadeInUp delay={80}>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
                Process
              </p>
              <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
                From discovery to{" "}
                <span className="font-serif italic">scale.</span>
              </h2>
              <ol className="process-rail mt-10">
                {processSteps.map((step) => (
                  <li key={step.number} className="process-step">
                    <p className="text-xs tracking-[0.16em] text-[#A1A1AA]">{step.number}</p>
                    <h3 className="mt-1 text-lg text-white">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#D4D4D8]">{step.description}</p>
                  </li>
                ))}
              </ol>
            </FadeInUp>
          </div>

          <div className="mt-8 grid gap-16 border-t border-white/10 pt-20 lg:grid-cols-2">
            <FadeInUp>
              <h2 className="text-3xl font-medium tracking-tight">Approach</h2>
              <ul className="mt-6">
                {service.approach.map((item, index) => (
                  <li key={item} className="detail-card">
                    <p className="text-lg leading-7 text-[#D4D4D8]">
                      <span className="mr-3 text-xs tracking-[0.16em] text-[#A1A1AA]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </FadeInUp>
            <FadeInUp delay={80}>
              <h2 className="text-3xl font-medium tracking-tight">Benefits</h2>
              <ul className="mt-6">
                {service.benefits.map((item) => (
                  <li key={item} className="detail-card">
                    <p className="text-lg leading-7 text-[#D4D4D8]">{item}</p>
                  </li>
                ))}
              </ul>
            </FadeInUp>
          </div>

          <FadeInUp className="mt-20 overflow-hidden border-t border-white/10 py-20">
            <h2 className="max-w-3xl text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.05] tracking-tight">
              Need this capability in{" "}
              <span className="font-serif italic">action?</span>
            </h2>
            <p className="mt-5 max-w-xl text-[#D4D4D8]">
              Talk to Tech Eeez in Mumbai about your current requirements and next-phase roadmap.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton to="/contact">Start a project</PrimaryButton>
              <Link
                to="/services"
                data-cursor="link"
                className="px-5 py-2.5 text-sm text-[#D4D4D8] hover:text-white"
              >
                All services
              </Link>
            </div>
          </FadeInUp>

          <div className="grid gap-12 border-t border-white/10 pt-14 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-medium">Related services</h2>
              <ul className="mt-5">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      to={getServicePath(item)}
                      data-cursor="link"
                      className="group flex items-center justify-between border-t border-white/10 py-4 text-[#D4D4D8] hover:text-white"
                    >
                      {item.title}
                      <span className="btn-arrow">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {relatedPosts.length ? (
              <div>
                <h2 className="text-lg font-medium">From the journal</h2>
                <ul className="mt-5">
                  {relatedPosts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        to={`/blog/${post.slug}`}
                        data-cursor="link"
                        className="group block border-t border-white/10 py-4 text-[#D4D4D8] hover:text-white"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
}
