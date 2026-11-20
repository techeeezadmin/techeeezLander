import { siteConfig } from "../data/site";
import { FadeInUp } from "./FadeInUp";

export function Team({ compact = false }) {
  return (
    <section
      id="team"
      className={compact ? "relative px-6 py-24 md:py-28" : "relative px-6 pb-8 pt-16"}
    >
      <div className="mx-auto max-w-7xl">
        <FadeInUp>
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
            Team
          </p>
          <h2 className="mt-5 max-w-3xl text-[clamp(2rem,4.6vw,3.8rem)] font-medium leading-[1.05] tracking-tight">
            The people behind the{" "}
            <span className="font-serif italic font-normal">work.</span>
          </h2>
        </FadeInUp>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.people.map((person) => (
            <li key={person.slug}>
              <article>
                <div className="overflow-hidden rounded-[24px] border border-white/12 bg-[#18181c]">
                  <img
                    src={person.image}
                    alt={person.name}
                    width={900}
                    height={1125}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover object-[center_18%]"
                  />
                </div>
                <h3 className="mt-5 text-xl font-medium tracking-tight">{person.name}</h3>
                <p className="mt-1 text-sm leading-6 text-[#D4D4D8]">{person.role}</p>
                {person.href ? (
                  <a
                    href={person.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="link"
                    className="mt-3 inline-flex text-sm text-[#D4D4D8] hover:text-white"
                  >
                    LinkedIn
                    <span className="btn-arrow">→</span>
                  </a>
                ) : null}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
