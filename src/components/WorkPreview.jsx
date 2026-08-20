import { useEffect, useState } from "react";
import { FadeInUp } from "./FadeInUp";
import { ProjectPreview } from "./ProjectPreview";
import { clients } from "../data/content";

export function WorkPreview() {
  const [hover, setHover] = useState({ project: null, index: 0, x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event) => {
      setHover((prev) => ({ ...prev, x: event.clientX, y: event.clientY }));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section id="work" className="bg-[#1A1A1F] px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <FadeInUp>
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
            Selected work
          </p>
          <h2 className="mt-3 max-w-3xl text-[clamp(2.2rem,5vw,4.2rem)] font-medium tracking-tight">
            Built with teams that{" "}
            <span className="font-serif italic">ship.</span>
          </h2>
        </FadeInUp>
        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
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
                <h3 className="text-2xl font-medium tracking-tight md:text-3xl">{client.name}</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-[#D4D4D8]">
                  {client.statement}
                </p>
              </div>
              <span className="inline-flex items-center self-center text-sm text-white">
                View project
                <span className="btn-arrow">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
      <ProjectPreview
        project={hover.project}
        index={hover.index}
        x={hover.x}
        y={hover.y}
      />
    </section>
  );
}
