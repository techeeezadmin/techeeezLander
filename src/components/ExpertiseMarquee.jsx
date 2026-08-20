import { Link } from "react-router-dom";
import { services } from "../data/services";

const serviceItems = services.map((service) => ({
  label: service.title,
  href: `/services/${service.slug}`,
}));

const capabilityItems = services.flatMap((service) =>
  service.capabilities.map((capability) => ({
    label: capability,
    href: `/services/${service.slug}`,
  })),
);

function MarqueeRow({ items, reverse = false, outlined = false }) {
  const sequence = [...items, ...items];

  return (
    <div className="expertise-marquee__row">
      <div className={`expertise-marquee__track ${reverse ? "is-reverse" : ""}`}>
        {sequence.map((item, index) => {
          const duplicate = index >= items.length;
          return (
            <Link
              key={`${item.href}-${item.label}-${index}`}
              to={item.href}
              className={`mq-link ${outlined ? "mq-link--outline" : ""}`}
              aria-hidden={duplicate}
              tabIndex={duplicate ? -1 : undefined}
            >
              {item.label}
              <span
                className={`mq-link__plus ${outlined ? "mq-link__plus--teal" : ""}`}
                aria-hidden
              >
                +
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function ExpertiseMarquee() {
  return (
    <div className="expertise-marquee">
      <MarqueeRow items={serviceItems} />
      <MarqueeRow items={capabilityItems} reverse outlined />
    </div>
  );
}
