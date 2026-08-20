function OrbitDots({ accent }) {
  return (
    <div className="orbit-field" aria-hidden="true">
      <span className="orbit-ring r1" style={{ borderColor: `${accent}44` }} />
      <span className="orbit-ring r2" style={{ borderColor: `${accent}33` }} />
      <span className="orbit-ring r3" style={{ borderColor: `${accent}22` }} />
      <span className="orbit-dot d1" style={{ background: accent }} />
      <span className="orbit-dot d2" style={{ background: accent }} />
      <span className="orbit-dot d3" style={{ background: accent }} />
    </div>
  );
}

function Globe({ accent }) {
  return (
    <svg className="stage-globe" viewBox="0 0 400 400" aria-hidden="true">
      <defs>
        <radialGradient id="globe-fade" cx="38%" cy="32%" r="62%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.4" />
          <stop offset="55%" stopColor={accent} stopOpacity="0.1" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="156" fill="url(#globe-fade)" />
      <circle cx="200" cy="200" r="148" fill="none" stroke={accent} strokeOpacity="0.4" />
      {[0.32, 0.58, 1, 0.58, 0.32].map((rx, i) => (
        <ellipse
          key={`lat-${i}`}
          cx="200"
          cy={86 + i * 57}
          rx={148 * rx}
          ry="16"
          fill="none"
          stroke={accent}
          strokeOpacity="0.28"
        />
      ))}
      {[-80, -40, 0, 40, 80].map((x) => (
        <ellipse
          key={x}
          cx="200"
          cy="200"
          rx={Math.abs(x) < 8 ? 6 : 78}
          ry="148"
          fill="none"
          stroke={accent}
          strokeOpacity="0.2"
          transform={`rotate(${x} 200 200)`}
        />
      ))}
      {[
        [200, 58],
        [128, 112],
        [274, 112],
        [96, 200],
        [304, 200],
        [140, 286],
        [260, 286],
        [200, 338],
      ].map(([x, y], i) => (
        <circle key={i} className="globe-node" cx={x} cy={y} r="3.4" fill={accent} />
      ))}
      <path
        d="M200 58 L274 112 L304 200 L260 286 L200 338 L140 286 L96 200 L128 112 Z"
        fill="none"
        stroke={accent}
        strokeOpacity="0.5"
      />
    </svg>
  );
}

export function AiScene({ accent }) {
  return (
    <div className="product-scene">
      <OrbitDots accent={accent} />
      <Globe accent={accent} />
      <div className="glass-panel copilot-panel">
        <div className="copilot-head">
          <span className="live-dot" style={{ background: accent }} />
          AI copilot live
        </div>
        <div className="copilot-row user delay-1">Summarize this week’s sales.</div>
        <div
          className="copilot-row ai delay-2"
          style={{ background: `${accent}33`, borderColor: `${accent}55` }}
        >
          Revenue is up 18%. Top region: West.
        </div>
        <div className="copilot-row ghost delay-3">Draft a follow-up for the team.</div>
        <span className="copilot-caret" style={{ background: accent }} />
        <div className="copilot-menu" aria-hidden>
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export function WebScene({ accent }) {
  return (
    <div className="product-scene">
      <OrbitDots accent={accent} />
      <div className="browser-frame glass-panel">
        <div className="browser-chrome">
          <span />
          <span />
          <span />
          <div className="browser-url">techeeez.com</div>
        </div>
        <div
          className="browser-hero"
          style={{ background: `linear-gradient(135deg, ${accent}55, transparent 70%)` }}
        >
          <em style={{ color: accent }}>Launch</em>
          <b>A site that feels instant.</b>
        </div>
        <div className="browser-grid">
          <div className="browser-block delay-1" />
          <div className="browser-block delay-2" />
          <div className="browser-block delay-3" />
        </div>
        <div className="browser-bar">
          <span style={{ background: accent }} />
        </div>
      </div>
    </div>
  );
}

export function MobileScene({ accent }) {
  return (
    <div className="product-scene">
      <OrbitDots accent={accent} />
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen">
          <p className="phone-kicker" style={{ color: accent }}>
            Today
          </p>
          <p className="phone-title">Your operations, in one tap.</p>
          <div className="phone-card delay-1">
            <span>Orders</span>
            <strong>248</strong>
          </div>
          <div className="phone-card delay-2">
            <span>Active users</span>
            <strong>1,204</strong>
          </div>
          <div className="phone-cta" style={{ background: accent }}>
            Open workspace
          </div>
        </div>
      </div>
    </div>
  );
}

export function CloudScene({ accent }) {
  return (
    <div className="product-scene">
      <OrbitDots accent={accent} />
      <div className="cloud-scene">
        {["Edge", "AWS", "Azure"].map((label, i) => (
          <article
            key={label}
            className={`glass-panel cloud-card delay-${i + 1}`}
            style={{ borderColor: `${accent}55` }}
          >
            <p>{label}</p>
            <div className="cloud-pulse">
              <span style={{ background: accent }} />
              <span style={{ background: accent }} />
              <span style={{ background: accent }} />
            </div>
            <small>Healthy</small>
          </article>
        ))}
      </div>
    </div>
  );
}

export function AnalyticsScene({ accent }) {
  const bars = [38, 56, 44, 78, 62, 90];
  return (
    <div className="product-scene">
      <OrbitDots accent={accent} />
      <div className="glass-panel chart-panel">
        <div className="chart-meta">
          <p>Revenue velocity</p>
          <strong style={{ color: accent }}>+18.4%</strong>
        </div>
        <div className="chart-bars">
          {bars.map((h, i) => (
            <span
              key={h + i}
              className={`delay-${(i % 3) + 1}`}
              style={{ height: `${h}%`, background: accent }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function SecurityScene({ accent }) {
  return (
    <div className="product-scene">
      <div className="shield-scene">
        <span className="shield-halo" style={{ borderColor: `${accent}33` }} />
        <span className="shield-halo delayed" style={{ borderColor: `${accent}22` }} />
        <svg className="shield-svg" viewBox="0 0 200 230" aria-hidden="true">
          <defs>
            <linearGradient id="shield-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={accent} stopOpacity="0.22" />
              <stop offset="100%" stopColor={accent} stopOpacity="0.04" />
            </linearGradient>
          </defs>
          <path
            className="shield-outline"
            d="M100 12 L178 42 V108 C178 164 142 204 100 218 C58 204 22 164 22 108 V42 Z"
            fill="url(#shield-fill)"
            stroke={accent}
            strokeWidth="2.4"
          />
          <path
            className="shield-check"
            d="M72 112 L92 132 L132 84"
            fill="none"
            stroke={accent}
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect className="shield-scan" x="28" y="20" width="144" height="8" fill={accent} opacity="0.45" />
        </svg>
        <div className="glass-panel scan-chip">
          <span className="live-dot" style={{ background: accent }} />
          Threat scan complete
        </div>
      </div>
    </div>
  );
}

export function IntegrationScene({ accent }) {
  const nodes = ["CRM", "ERP", "API", "App"];
  return (
    <div className="product-scene">
      <OrbitDots accent={accent} />
      <div className="network-map">
        {nodes.map((node, i) => (
          <div
            key={node}
            className={`network-node delay-${i + 1}`}
            style={{ borderColor: accent, color: accent }}
          >
            {node}
          </div>
        ))}
        <svg className="network-lines" viewBox="0 0 320 220" aria-hidden>
          <path className="flow-line" d="M60 40 C160 40, 160 180, 260 180" stroke={accent} fill="none" />
          <path className="flow-line alt" d="M260 40 C160 40, 160 180, 60 180" stroke={accent} fill="none" />
        </svg>
      </div>
    </div>
  );
}

export function ServiceScene({ slug, accent }) {
  if (slug === "web-development") return <WebScene accent={accent} />;
  if (slug === "mobile-development") return <MobileScene accent={accent} />;
  if (slug === "cloud-solutions") return <CloudScene accent={accent} />;
  if (slug === "data-analytics") return <AnalyticsScene accent={accent} />;
  if (slug === "cybersecurity") return <SecurityScene accent={accent} />;
  if (slug === "system-integration") return <IntegrationScene accent={accent} />;
  return <AiScene accent={accent} />;
}
