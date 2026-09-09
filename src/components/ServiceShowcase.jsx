import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LazyServiceParticlesCanvas } from "../three/LazyServiceParticlesCanvas";
import { getServicePath, services } from "../data/services";

const COUNT = services.length;

export function ServiceShowcase() {
  const pinRef = useRef(null);
  const lastIndex = useRef(0);
  const [horizontal, setHorizontal] = useState(false);
  const [active, setActive] = useState(0);
  const [fromIndex, setFromIndex] = useState(0);
  const [toIndex, setToIndex] = useState(0);
  const [morph, setMorph] = useState(0);
  const [burstKey, setBurstKey] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setHorizontal(desktop.matches && !reduce.matches);
    sync();
    desktop.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    return () => {
      desktop.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const el = pinRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(
        Math.max(-el.getBoundingClientRect().top, 0),
        Math.max(total, 0),
      );
      const value = total > 0 ? scrolled / total : 0;
      const scaled = value * (COUNT - 1);
      const from = Math.min(COUNT - 1, Math.floor(scaled));
      const to = Math.min(COUNT - 1, from + 1);
      const local = scaled - from;
      const next = Math.min(COUNT - 1, Math.round(scaled));

      setProgress(value);
      setFromIndex(from);
      setToIndex(to);
      setMorph(local);
      if (next !== lastIndex.current) {
        lastIndex.current = next;
        setActive(next);
        setBurstKey((key) => key + 1);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const service = services[active];
  const [label, ...rest] = service.title.split(" ");
  const restTitle = rest.join(" ");

  return (
    <section
      id="services"
      ref={pinRef}
      className="relative bg-[#121214]"
      style={{ height: `${COUNT * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <LazyServiceParticlesCanvas
          slug={services[fromIndex].slug}
          nextSlug={services[toIndex].slug}
          morph={morph}
          accent={service.accent}
          burstKey={burstKey}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#121214] via-[#121214]/70 to-transparent" />
        {horizontal ? (
          <div
            className="relative z-10 flex h-full will-change-transform"
            style={{
              width: `${COUNT * 100}vw`,
              transform: `translate3d(-${progress * (COUNT - 1) * 100}vw, 0, 0)`,
            }}
          >
            {services.map((item, index) => (
              <ServiceCopy key={item.slug} item={item} index={index} />
            ))}
          </div>
        ) : (
          <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 md:px-11">
            <ServiceCopy item={service} index={active} compact />
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 z-20 px-6 pb-4 md:px-11">
          <div className="mb-3 hidden justify-between text-[11px] tracking-[0.18em] text-[#A1A1AA] md:flex">
            {services.map((item, index) => (
              <span
                key={item.slug}
                style={{ color: index === active ? service.accent : undefined }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            ))}
          </div>
          <div className="h-[3px] bg-white/10">
            <div
              className="h-full origin-left"
              style={{
                transform: `scaleX(${progress})`,
                background: service.accent,
              }}
            />
          </div>
        </div>
        <p className="sr-only">
          {label} {restTitle}. {service.pitch}
        </p>
      </div>
    </section>
  );
}

function ServiceCopy({ item, index, compact = false }) {
  const [label, ...rest] = item.title.split(" ");
  const restTitle = rest.join(" ") || label;

  return (
    <article
      className={`relative z-10 flex h-full ${compact ? "" : "w-screen shrink-0"} flex-col justify-end px-6 pb-16 md:px-11 md:pb-[72px]`}
    >
      <div className="max-w-xl lg:max-w-[min(720px,50vw)]">
        <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#D4D4D8]">
          {String(index + 1).padStart(2, "0")} · {item.shortLabel}
        </p>
        <h2 className="text-[clamp(2.8rem,7vw,5.6rem)] font-semibold leading-[0.94] tracking-tight text-white">
          {label}
          {rest.length ? (
            <>
              <br />
              <span className="font-serif italic font-normal">{restTitle}</span>
            </>
          ) : null}
        </h2>
        <p className="mt-[26px] max-w-[640px] text-[15px] leading-[1.72] text-[#D4D4D8] md:text-base">
          {item.pitch}
        </p>
        <Link
          to={getServicePath(item)}
          data-cursor="link"
          className="group mt-8 inline-flex text-sm font-medium text-white"
        >
          Explore service
          <span className="btn-arrow">→</span>
        </Link>
      </div>
    </article>
  );
}
