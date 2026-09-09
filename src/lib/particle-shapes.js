export const PARTICLE_COUNT = 1700;

function rng(i, salt) {
  const x = Math.sin(i * 12.9898 * salt + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

class ShapeBuilder {
  constructor(salt) {
    this.points = [];
    this.pairs = [];
    this.salt = salt;
  }

  add(x, y, z) {
    this.points.push(x, y, z);
    return this.points.length / 3 - 1;
  }

  chain(pts, close = false) {
    if (pts.length < 2) return;
    const ids = pts.map((p) => this.add(p[0], p[1], p[2]));
    for (let i = 0; i < ids.length - 1; i += 1) {
      this.pairs.push(ids[i], ids[i + 1]);
    }
    if (close) this.pairs.push(ids[ids.length - 1], ids[0]);
  }

  ribbon(path, close = true, halfDepth = 0.07, strutEvery = 10) {
    const dense = densify(close ? [...path, path[0]] : path, 0.038);
    if (close && dense.length > 1) dense.pop();
    const front = dense.map(([x, y]) => [x, y, halfDepth]);
    const back = dense.map(([x, y]) => [x, y, -halfDepth]);
    this.chain(front, close);
    this.chain(back, close);
    const step = Math.max(1, strutEvery);
    for (let i = 0; i < dense.length; i += step) {
      this.chain(
        [
          [dense[i][0], dense[i][1], halfDepth],
          [dense[i][0], dense[i][1], -halfDepth],
        ],
        false,
      );
    }
  }

  ring(cx, cy, rx, ry, count, z = 0) {
    const path = [];
    for (let i = 0; i < count; i += 1) {
      const a = (i / count) * Math.PI * 2;
      path.push([cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]);
    }
    this.ribbon(path, true, 0.05, 8);
    if (z !== 0) {
      this.chain(
        path.map(([x, y]) => [x, y, z]),
        true,
      );
    }
  }

  line(a, b, count, z = 0) {
    const pts = [];
    for (let i = 0; i < count; i += 1) {
      const t = count === 1 ? 0 : i / (count - 1);
      pts.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, z]);
    }
    this.chain(pts, false);
  }

  fill(test, bounds, count, zSpread = 0.04) {
    const [minX, minY, maxX, maxY] = bounds;
    let placed = 0;
    let guard = 0;
    while (placed < count && guard < count * 18) {
      const i = placed + this.salt * 17 + guard;
      const x = minX + rng(i, 3) * (maxX - minX);
      const y = minY + rng(i, 5) * (maxY - minY);
      guard += 1;
      if (!test(x, y)) continue;
      const z = (rng(i, 7) - 0.5) * zSpread;
      this.add(x, y, z);
      placed += 1;
    }
  }

  finish() {
    const raw = this.points;
    const n = raw.length / 3;
    const positions = new Float32Array(PARTICLE_COUNT * 3);

    if (n === 0) return { positions, pairs: new Uint32Array() };

    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (let i = 0; i < n; i += 1) {
      minX = Math.min(minX, raw[i * 3]);
      maxX = Math.max(maxX, raw[i * 3]);
      minY = Math.min(minY, raw[i * 3 + 1]);
      maxY = Math.max(maxY, raw[i * 3 + 1]);
    }
    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;
    const scale = 1.42 / Math.max((maxX - minX) / 2, (maxY - minY) / 2, 0.001);

    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
      const src = n === PARTICLE_COUNT ? i : Math.floor((i / PARTICLE_COUNT) * n);
      positions[i * 3] = (raw[src * 3] - cx) * scale;
      positions[i * 3 + 1] = (raw[src * 3 + 1] - cy) * scale;
      positions[i * 3 + 2] = raw[src * 3 + 2] * scale;
    }

    const remap = (id) =>
      Math.min(PARTICLE_COUNT - 1, Math.round((id / Math.max(n - 1, 1)) * (PARTICLE_COUNT - 1)));
    const pairs = [];
    const seen = new Set();
    for (let i = 0; i < this.pairs.length; i += 2) {
      const a = remap(this.pairs[i]);
      const b = remap(this.pairs[i + 1]);
      if (a === b) continue;
      const token = a < b ? `${a}:${b}` : `${b}:${a}`;
      if (seen.has(token)) continue;
      seen.add(token);
      pairs.push(a, b);
    }

    return { positions, pairs: Uint32Array.from(pairs) };
  }
}

function roundedRect(cx, cy, w, h, r, steps = 6) {
  const hw = w / 2;
  const hh = h / 2;
  const radius = Math.min(r, hw, hh);
  const pts = [];
  const corners = [
    [cx + hw - radius, cy + hh - radius, 0, Math.PI / 2],
    [cx - hw + radius, cy + hh - radius, Math.PI / 2, Math.PI],
    [cx - hw + radius, cy - hh + radius, Math.PI, (Math.PI * 3) / 2],
    [cx + hw - radius, cy - hh + radius, (Math.PI * 3) / 2, Math.PI * 2],
  ];
  for (const [x, y, a0, a1] of corners) {
    for (let i = 0; i <= steps; i += 1) {
      const a = a0 + (a1 - a0) * (i / steps);
      pts.push([x + Math.cos(a) * radius, y + Math.sin(a) * radius]);
    }
  }
  return pts;
}

function densify(path, spacing = 0.045) {
  if (path.length < 2) return path;
  const out = [];
  for (let i = 0; i < path.length - 1; i += 1) {
    const ax = path[i][0];
    const ay = path[i][1];
    const bx = path[i + 1][0];
    const by = path[i + 1][1];
    const dist = Math.hypot(bx - ax, by - ay);
    const steps = Math.max(1, Math.ceil(dist / spacing));
    for (let k = 0; k < steps; k += 1) {
      const t = k / steps;
      out.push([ax + (bx - ax) * t, ay + (by - ay) * t]);
    }
  }
  out.push(path[path.length - 1]);
  return out;
}

function rotate2(x, y, angle) {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return [x * c - y * s, x * s + y * c];
}

function makeAi() {
  const s = new ShapeBuilder(2);
  s.ring(0, 0, 0.22, 0.22, 48);
  s.fill((x, y) => x * x + y * y < 0.16 * 0.16, [-0.16, -0.16, 0.16, 0.16], 90, 0.05);

  const orbits = [
    [1.15, 0.38, 0],
    [1.15, 0.38, 1.05],
    [1.15, 0.38, -1.05],
  ];
  orbits.forEach(([rx, ry, angle], index) => {
    const path = [];
    for (let i = 0; i < 90; i += 1) {
      const a = (i / 90) * Math.PI * 2;
      path.push(rotate2(Math.cos(a) * rx, Math.sin(a) * ry, angle));
    }
    s.ribbon(path, true, 0.04, 12);
    const electron = (index / orbits.length) * Math.PI * 2;
    const [ex, ey] = rotate2(Math.cos(electron) * rx, Math.sin(electron) * ry, angle);
    s.ring(ex, ey, 0.08, 0.08, 18);
  });
  return s.finish();
}

function makeWeb() {
  const s = new ShapeBuilder(3);
  s.ribbon(roundedRect(0, 0, 2.05, 1.42, 0.1, 7), true, 0.07, 8);
  s.ribbon(roundedRect(0, -0.06, 1.86, 1.12, 0.05, 6), true, 0.04, 10);
  s.line([-0.96, 0.52], [0.96, 0.52], 36, 0.05);
  s.line([-0.96, 0.52], [0.96, 0.52], 36, -0.05);

  const dots = [-0.82, -0.68, -0.54];
  dots.forEach((x) => s.ring(x, 0.6, 0.045, 0.045, 14));

  [
    [-0.62, 0.22, 0.42, 0.18],
    [0.22, 0.18, 0.58, 0.26],
    [-0.55, -0.18, 0.7, 0.12],
    [0.32, -0.22, 0.48, 0.22],
  ].forEach(([x, y, w, h]) => {
    s.ribbon(roundedRect(x, y, w, h, 0.03, 3), true, 0.03, 20);
  });
  return s.finish();
}

function makeMobile() {
  const s = new ShapeBuilder(4);
  s.ribbon(roundedRect(0, 0, 0.92, 1.78, 0.16, 8), true, 0.08, 6);
  s.ribbon(roundedRect(0, 0.02, 0.76, 1.5, 0.08, 6), true, 0.04, 8);
  s.ribbon(roundedRect(0, 0.78, 0.28, 0.05, 0.025, 4), true, 0.03, 12);
  s.ring(0, 0.62, 0.035, 0.035, 12);
  s.ribbon(roundedRect(0, -0.68, 0.22, 0.035, 0.016, 4), true, 0.03, 12);
  s.fill(
    (x, y) => Math.abs(x) < 0.32 && Math.abs(y) < 0.62,
    [-0.32, -0.62, 0.32, 0.62],
    160,
    0.03,
  );
  return s.finish();
}

function makeCloud() {
  const s = new ShapeBuilder(5);
  const balls = [
    { x: -0.62, y: 0.04, r: 0.48 },
    { x: -0.06, y: 0.4, r: 0.58 },
    { x: 0.6, y: 0.08, r: 0.5 },
    { x: -0.28, y: -0.34, r: 0.42 },
    { x: 0.3, y: -0.36, r: 0.44 },
  ];

  const inside = (x, y, inset = 0) =>
    balls.some((b) => {
      const dx = x - b.x;
      const dy = y - b.y;
      return dx * dx + dy * dy <= (b.r - inset) * (b.r - inset);
    });

  balls.forEach((ball) => {
    const path = [];
    for (let i = 0; i < 72; i += 1) {
      const a = (i / 72) * Math.PI * 2;
      const x = ball.x + Math.cos(a) * ball.r;
      const y = ball.y + Math.sin(a) * ball.r;
      const buried = balls.some((other) => {
        if (other === ball) return false;
        const dx = x - other.x;
        const dy = y - other.y;
        return dx * dx + dy * dy < (other.r - 0.012) * (other.r - 0.012);
      });
      if (!buried) path.push([x, y]);
      else if (path.length > 2) {
        s.ribbon(path, false, 0.08, 7);
        path.length = 0;
      }
    }
    if (path.length > 2) s.ribbon(path, false, 0.08, 7);
  });

  s.fill((x, y) => inside(x, y, 0.04), [-1.15, -0.85, 1.15, 1.05], 220, 0.06);
  return s.finish();
}

function makeAnalytics() {
  const s = new ShapeBuilder(6);
  s.line([-1.05, -0.72], [-1.05, 0.92], 40, 0.04);
  s.line([-1.05, -0.72], [1.12, -0.72], 48, 0.04);
  const heights = [0.38, 0.62, 0.5, 0.98, 0.78, 1.22];
  const tops = [];
  heights.forEach((height, index) => {
    const x = -0.72 + index * 0.34;
    const cy = -0.72 + height / 2;
    s.ribbon(roundedRect(x, cy, 0.2, height, 0.03, 3), true, 0.06, 6);
    tops.push([x, -0.72 + height + 0.04]);
  });
  s.chain(
    tops.map(([x, y]) => [x, y, 0.08]),
    false,
  );
  tops.forEach(([x, y]) => s.ring(x, y, 0.045, 0.045, 12));
  return s.finish();
}

function makeSecurity() {
  const s = new ShapeBuilder(7);
  const outer = [];
  for (let i = 0; i <= 90; i += 1) {
    const t = i / 90;
    const y = 1 - t * 2.05;
    const width =
      y > 0.35
        ? 0.78 * Math.sqrt(Math.max(0, 1 - ((y - 0.55) / 0.7) ** 2))
        : 0.78 * Math.sqrt(Math.max(0, (y + 1.05) / 1.4));
    outer.push([-width, y]);
  }
  for (let i = 90; i >= 0; i -= 1) {
    const t = i / 90;
    const y = 1 - t * 2.05;
    const width =
      y > 0.35
        ? 0.78 * Math.sqrt(Math.max(0, 1 - ((y - 0.55) / 0.7) ** 2))
        : 0.78 * Math.sqrt(Math.max(0, (y + 1.05) / 1.4));
    outer.push([width, y]);
  }

  s.ribbon(outer, true, 0.08, 8);
  s.ribbon(
    outer.map(([x, y]) => [x * 0.62, y * 0.62]),
    true,
    0.04,
    12,
  );

  const check = [
    [-0.28, 0.02],
    [-0.08, -0.22],
    [0.34, 0.28],
  ];
  s.line(check[0], check[1], 20, 0.05);
  s.line(check[1], check[2], 28, 0.05);
  s.line(check[0], check[1], 20, -0.05);
  s.line(check[1], check[2], 28, -0.05);
  return s.finish();
}

function makeIntegration() {
  const s = new ShapeBuilder(8);
  const hex = [];
  for (let i = 0; i < 6; i += 1) {
    const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
    hex.push([Math.cos(a) * 0.32, Math.sin(a) * 0.32]);
  }
  s.ribbon(hex, true, 0.06, 4);

  for (let i = 0; i < 6; i += 1) {
    const a = (i / 6) * Math.PI * 2;
    const x = Math.cos(a) * 1.12;
    const y = Math.sin(a) * 0.72;
    s.ring(x, y, 0.16, 0.16, 28);
    s.line([Math.cos(a) * 0.36, Math.sin(a) * 0.36], [x * 0.82, y * 0.82], 16, 0.03);
    s.line([Math.cos(a) * 0.36, Math.sin(a) * 0.36], [x * 0.82, y * 0.82], 16, -0.03);
  }
  return s.finish();
}

const makers = {
  "ai-solutions": makeAi,
  "web-development": makeWeb,
  "seo-ai-search": makeWeb,
  "mobile-development": makeMobile,
  "cloud-solutions": makeCloud,
  "data-analytics": makeAnalytics,
  cybersecurity: makeSecurity,
  "system-integration": makeIntegration,
};

const cache = new Map();

function getShape(slug) {
  const maker = makers[slug] ?? makers["ai-solutions"];
  const hit = cache.get(slug);
  if (hit) return hit;
  const shape = maker();
  cache.set(slug, shape);
  return shape;
}

export function getServiceParticlePositions(slug) {
  return getShape(slug).positions;
}

export function getServiceParticlePairs(slug) {
  return getShape(slug).pairs;
}

export function randomSpherePositions(count = PARTICLE_COUNT, radius = 2.2) {
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const u = rng(i, 31);
    const v = rng(i, 37);
    const theta = u * Math.PI * 2;
    const phi = Math.acos(2 * v - 1);
    const r = radius * Math.cbrt(rng(i, 41));
    const i3 = i * 3;
    out[i3] = r * Math.sin(phi) * Math.cos(theta);
    out[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    out[i3 + 2] = r * Math.cos(phi);
  }
  return out;
}
