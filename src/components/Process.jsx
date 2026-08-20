import { useEffect, useRef, useState } from "react";
import { FadeInUp } from "./FadeInUp";
import { processSteps } from "../data/content";

export function Process() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const update = () => {
      const rect = node.getBoundingClientRect();
      const view = window.innerHeight;
      const start = view * 0.75;
      const end = view * 0.25;
      const t = (start - rect.top) / (start - end + rect.height);
      setProgress(Math.min(1, Math.max(0, t)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const active = Math.min(
    processSteps.length - 1,
    Math.floor(progress * processSteps.length),
  );

  return (
    <section className="px-6 py-28 md:py-36" aria-label="Suggested delivery process">
      <div className="mx-auto max-w-7xl" ref={ref}>
        <FadeInUp>
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
            Suggested workflow
          </p>
          <h2 className="mt-3 text-[clamp(2.2rem,5vw,4.2rem)] font-medium tracking-tight">
            From discovery to{" "}
            <span className="font-serif italic">scale</span>
          </h2>
        </FadeInUp>
        <div className="relative mt-16">
          <div className="absolute left-0 top-3 hidden h-px w-full bg-white/10 md:block" />
          <div
            className="absolute left-0 top-3 hidden h-px origin-left bg-white md:block"
            style={{ width: "100%", transform: `scaleX(${progress})` }}
          />
          <div className="grid gap-10 md:grid-cols-5">
            {processSteps.map((step, index) => {
              const on = index <= active;
              return (
                <article
                  key={step.number}
                  className={`relative border-l border-white/10 pl-5 transition-colors duration-500 md:border-l-0 md:pl-0 ${
                    on ? "text-white" : "text-[#A1A1AA]"
                  }`}
                >
                  <span
                    className={`absolute -left-[5px] top-1.5 h-2 w-2 rounded-full md:relative md:left-0 md:top-0 md:mb-5 md:block ${
                      on ? "bg-white" : "bg-white/20"
                    }`}
                  />
                  <p className="text-xs tracking-[0.2em]">{step.number}</p>
                  <h3 className={`mt-4 text-lg font-medium ${on ? "md:text-xl" : ""}`}>
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#D4D4D8]">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
