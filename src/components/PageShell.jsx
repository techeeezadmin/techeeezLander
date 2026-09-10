import { FadeInUp } from "./FadeInUp";
import { Breadcrumbs } from "./Breadcrumbs";

export function PageShell({ eyebrow, title, description, children, serifWord, crumbs }) {
  return (
    <main className="px-6 pb-24 pt-36">
      <div className="mx-auto max-w-7xl">
        <FadeInUp>
          {crumbs ? <div className="mb-6"><Breadcrumbs items={crumbs} /></div> : null}
          {eyebrow ? (
            <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-4xl text-[clamp(2.6rem,6vw,5.4rem)] font-medium leading-[1.02] tracking-tight">
            {title}
            {serifWord ? (
              <>
                {" "}
                <span className="font-serif italic font-normal">{serifWord}</span>
              </>
            ) : null}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-[16px] leading-7 text-[#D4D4D8]">
              {description}
            </p>
          ) : null}
        </FadeInUp>
        <div className="mt-14">{children}</div>
      </div>
    </main>
  );
}
