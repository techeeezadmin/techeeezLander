import { videos } from "../data/site";
import { services } from "../data/services";

const CHAPTERS = [
  {
    kicker: "Product intelligence",
    title: (
      <>
        The smartest stack in the{" "}
        <span className="font-serif italic font-normal">room.</span>
      </>
    ),
    line: "Only one partner that solves for the whole product.",
    tint: "default",
  },
  {
    kicker: "Ways to integrate",
    title: (
      <>
        Search, chat, ship, filter,{" "}
        <span className="font-serif italic font-normal">scale.</span>
      </>
    ),
    line: "Plug Tech Eeez into the way your teams already work.",
    tint: "violet",
  },
  {
    kicker: "Platform",
    title: (
      <>
        One partner,{" "}
        <span className="font-serif italic font-normal">endless use cases.</span>
      </>
    ),
    line: "AI, web, mobile, cloud, analytics, security, integration.",
    tint: "cyan",
    chips: true,
  },
];

export function StickyChapters() {
  return (
    <section className="sticky-stack" aria-label="How Tech Eeez works">
      {CHAPTERS.map((chapter, index) => (
        <article
          key={chapter.kicker}
          className={`sticky-stack__panel is-${chapter.tint}`}
          style={{ zIndex: index + 1 }}
        >
          <video
            className="sticky-stack__video"
            src={videos.hero}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="sticky-stack__veil" />
          <div className="sticky-stack__copy">
            <p>{chapter.kicker}</p>
            <h2>{chapter.title}</h2>
            <span>{chapter.line}</span>
            {chapter.chips ? (
              <ul className="sticky-stack__chips">
                {services.map((service) => (
                  <li key={service.slug} style={{ "--accent": service.accent }}>
                    {service.shortLabel}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </article>
      ))}
    </section>
  );
}
