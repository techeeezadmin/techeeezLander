import { useMouseTilt, useScrollParallax } from "../lib/parallax";
import { ServiceScene } from "./ServiceScenes";

export function ServiceProductStage({ service }) {
  const tiltRef = useMouseTilt(true);
  const parallaxRef = useScrollParallax();

  return (
    <section
      ref={parallaxRef}
      className="service-stage"
      style={{ "--accent": service.accent }}
    >
      <div className="service-stage__glow" />
      <div className="service-stage__stars" aria-hidden="true" />
      <div ref={tiltRef} className="service-stage__world">
        <div className="service-stage__floor" />
        <div className="service-stage__product">
          <ServiceScene slug={service.slug} accent={service.accent} />
        </div>
      </div>
      <p className="service-stage__caption">
        <span style={{ color: service.accent }}>{service.title.toUpperCase()}</span>
        {" · LIVE PRODUCT"}
      </p>
      <p className="service-stage__lede">{service.shortDescription}</p>
    </section>
  );
}
