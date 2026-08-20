import { useEffect, useState } from "react";
import { FadeInUp } from "../components/FadeInUp";
import { PageShell } from "../components/PageShell";
import { ProjectPreview } from "../components/ProjectPreview";
import { Seo, breadcrumbJsonLd } from "../components/Seo";
import { clients, featuredTestimonial } from "../data/content";

export function Work() {
  const [hover, setHover] = useState({ project: null, index: 0, x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event) => {
      setHover((prev) => ({ ...prev, x: event.clientX, y: event.clientY }));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <Seo
        title="Tech Eeez Projects & Case Studies"
        description="Selected clients and partnerships by Tech Eeez — product, platform, and digital delivery in Mumbai."
        path="/work"
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />
      <PageShell
        eyebrow="Work"
        title="Selected"
        serifWord="clients."
        description="A focused snapshot of organizations that have worked with Tech Eeez."
      >
        <FadeInUp>
          <blockquote className="mb-16 max-w-3xl border-l border-white/20 pl-6">
            <p className="text-2xl leading-snug tracking-tight md:text-3xl">
              {featuredTestimonial.quote}
            </p>
            <footer className="mt-6 text-sm text-[#D4D4D8]">
              <cite className="not-italic text-white">{featuredTestimonial.person}</cite>
              {" — "}
              {featuredTestimonial.role}
            </footer>
          </blockquote>
        </FadeInUp>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {clients.map((client, index) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="project"
              onMouseEnter={() => setHover((prev) => ({ ...prev, project: client, index }))}
              onMouseLeave={() => setHover((prev) => ({ ...prev, project: null }))}
              className="group grid gap-4 py-8 transition duration-300 hover:-translate-y-1 md:grid-cols-[80px_1fr_auto]"
            >
              <p className="text-[13px] tracking-[0.16em] text-[#A1A1AA]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h2 className="text-2xl font-medium tracking-tight md:text-3xl">{client.name}</h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-[#D4D4D8]">{client.statement}</p>
              </div>
              <span className="inline-flex items-center self-center text-sm text-white">
                View project
                <span className="btn-arrow">→</span>
              </span>
            </a>
          ))}
        </div>
      </PageShell>
      <ProjectPreview
        project={hover.project}
        index={hover.index}
        x={hover.x}
        y={hover.y}
      />
    </>
  );
}
