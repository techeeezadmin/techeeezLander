import { BrandMark } from "./BrandMarks";
import { clients } from "../data/content";

const loop = [...clients, ...clients, ...clients, ...clients];

export function LogoMarquee() {
  return (
    <div className="logo-marquee mt-24 w-full">
      <p className="mb-8 text-center text-sm font-medium text-[#A1A1AA]">
        Trusted by industry leaders
      </p>
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max">
          {loop.map((client, index) => (
            <a
              key={`${client.name}-${index}`}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="flex shrink-0 items-center gap-3 px-8 text-sm font-medium text-white"
            >
              <BrandMark name={client.name} />
              {client.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
