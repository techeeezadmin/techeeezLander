import { useEffect } from "react";
import { usePinnedProgress } from "../lib/parallax";
import { prefersReducedMotion } from "../lib/motion";
import { services } from "../data/services";

const COLUMNS = [
  { speed: 1.18, offset: 40, items: ["phone", "chart", "chat", "cloud"] },
  { speed: 0.52, offset: -80, items: ["browser", "shield", "phone", "nodes"] },
  { speed: 0.88, offset: 10, items: ["chat", "cloud", "chart", "browser"] },
  { speed: 0.38, offset: -40, items: ["nodes", "phone", "shield", "chat"] },
  { speed: 1.08, offset: 70, items: ["chart", "browser", "cloud", "phone"] },
];

const MOCKUPS = {
  phone: { slug: "mobile-development", tilt: "4deg -7deg" },
  browser: { slug: "web-development", tilt: "6deg 8deg" },
  chat: { slug: "ai-solutions", tilt: "3deg -4deg" },
  chart: { slug: "data-analytics", tilt: "5deg 6deg" },
  cloud: { slug: "cloud-solutions", tilt: "4deg -5deg" },
  shield: { slug: "cybersecurity", tilt: "7deg 4deg" },
  nodes: { slug: "system-integration", tilt: "5deg -8deg" },
};

function accentFor(slug) {
  return services.find((item) => item.slug === slug)?.accent ?? "#c4b5fd";
}

function PhoneMock({ accent }) {
  return (
    <div className="mock-phone">
      <span className="mock-phone__notch" />
      <p className="mock-kicker" style={{ color: accent }}>
        Live ops
      </p>
      <p className="mock-title">Today’s pulse</p>
      <div className="mock-row">
        <span>Orders</span>
        <b>248</b>
      </div>
      <div className="mock-row">
        <span>Active</span>
        <b>1,204</b>
      </div>
      <div className="mock-cta" style={{ background: accent }}>
        Open workspace
      </div>
    </div>
  );
}

function BrowserMock({ accent }) {
  return (
    <div className="mock-browser">
      <div className="mock-chrome">
        <span />
        <span />
        <span />
        <em>techeeez.com</em>
      </div>
      <div
        className="mock-hero"
        style={{ background: `linear-gradient(135deg, ${accent}66, transparent 72%)` }}
      >
        <small style={{ color: accent }}>Launch</small>
        <b>A site that feels instant.</b>
      </div>
      <div className="mock-blocks">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

function ChatMock({ accent }) {
  return (
    <div className="mock-chat">
      <div className="mock-chat__head">
        <span className="live-dot" style={{ background: accent }} />
        AI copilot
      </div>
      <p className="mock-bubble user">Summarize this week’s sales.</p>
      <p className="mock-bubble ai" style={{ background: `${accent}33` }}>
        Revenue is up 18%. West is leading.
      </p>
      <p className="mock-bubble ghost">Draft a follow-up for the team.</p>
    </div>
  );
}

function ChartMock({ accent }) {
  const bars = [38, 56, 44, 78, 62, 90];
  return (
    <div className="mock-chart">
      <div className="mock-chart__meta">
        <span>Revenue velocity</span>
        <b style={{ color: accent }}>+18.4%</b>
      </div>
      <div className="mock-bars">
        {bars.map((height, index) => (
          <span key={index} style={{ height: `${height}%`, background: accent }} />
        ))}
      </div>
    </div>
  );
}

function CloudMock({ accent }) {
  return (
    <div className="mock-stack">
      {["Edge", "AWS", "Azure"].map((label) => (
        <div key={label} className="mock-cloud" style={{ borderColor: `${accent}44` }}>
          <span>{label}</span>
          <em style={{ color: accent }}>Healthy</em>
        </div>
      ))}
    </div>
  );
}

function ShieldMock({ accent }) {
  return (
    <div className="mock-shield">
      <svg viewBox="0 0 200 230" aria-hidden="true">
        <path
          d="M100 12 L178 42 V108 C178 164 142 204 100 218 C58 204 22 164 22 108 V42 Z"
          fill={`${accent}22`}
          stroke={accent}
          strokeWidth="3"
        />
        <path
          d="M72 112 L92 132 L132 84"
          fill="none"
          stroke={accent}
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p>
        <span className="live-dot" style={{ background: accent }} />
        Threat scan complete
      </p>
    </div>
  );
}

function NodesMock({ accent }) {
  return (
    <div className="mock-nodes">
      {["CRM", "ERP", "API", "App"].map((node) => (
        <span key={node} style={{ borderColor: accent, color: accent }}>
          {node}
        </span>
      ))}
    </div>
  );
}

function Mockup({ kind }) {
  const meta = MOCKUPS[kind];
  const accent = accentFor(meta.slug);
  const [rx, ry] = meta.tilt.split(" ");

  return (
    <article
      className="parallax-card"
      style={{
        "--accent": accent,
        transform: `rotateX(${rx}) rotateY(${ry})`,
      }}
    >
      {kind === "phone" && <PhoneMock accent={accent} />}
      {kind === "browser" && <BrowserMock accent={accent} />}
      {kind === "chat" && <ChatMock accent={accent} />}
      {kind === "chart" && <ChartMock accent={accent} />}
      {kind === "cloud" && <CloudMock accent={accent} />}
      {kind === "shield" && <ShieldMock accent={accent} />}
      {kind === "nodes" && <NodesMock accent={accent} />}
    </article>
  );
}

export function ParallaxGallery() {
  const pinRef = usePinnedProgress();

  useEffect(() => {
    const node = pinRef.current;
    if (!node || prefersReducedMotion()) return undefined;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return undefined;

    const onMove = (event) => {
      const x = ((event.clientX / window.innerWidth) - 0.5) * 36;
      node.style.setProperty("--mx", `${x.toFixed(1)}px`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [pinRef]);

  return (
    <section
      ref={pinRef}
      className="parallax-gallery"
      aria-label="Product snapshots"
    >
      <div className="parallax-gallery__pin">
        <div className="parallax-gallery__fade parallax-gallery__fade--top" />
        <div className="parallax-gallery__track" aria-hidden="true">
          {COLUMNS.map((column, index) => (
            <div
              key={index}
              className={`parallax-col parallax-col--${index}`}
              style={{
                "--speed": column.speed,
                "--offset": `${column.offset}px`,
              }}
            >
              {column.items.map((kind, itemIndex) => (
                <Mockup key={`${kind}-${itemIndex}`} kind={kind} />
              ))}
            </div>
          ))}
        </div>
        <div className="parallax-gallery__fade parallax-gallery__fade--bottom" />
      </div>
    </section>
  );
}
