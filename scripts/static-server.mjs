import { createReadStream, existsSync, statSync } from "node:fs";
import http from "node:http";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const DIST = resolve(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const HOST = process.env.HOST || "0.0.0.0";
const PORT = Number(process.env.PORT || 3000);

const MIME = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

function isInsideDist(absPath) {
  const rel = relative(DIST, absPath);
  return rel !== "" && !rel.startsWith("..") && !rel.includes("\0");
}

function sendFile(res, status, filePath) {
  const type = MIME[extname(filePath).toLowerCase()] || "application/octet-stream";
  const { size } = statSync(filePath);
  res.writeHead(status, {
    "Content-Type": type,
    "Content-Length": size,
    "X-Content-Type-Options": "nosniff",
  });
  createReadStream(filePath).pipe(res);
}

function sendNotFound(res) {
  const file = join(DIST, "404.html");
  if (existsSync(file) && statSync(file).isFile()) {
    sendFile(res, 404, file);
    return;
  }
  const body = "Not found";
  res.writeHead(404, {
    "Content-Type": "text/plain; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
    "X-Content-Type-Options": "nosniff",
  });
  res.end(body);
}

export function createStaticServer() {
  return http.createServer((req, res) => {
    let url;
    try {
      url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
    } catch {
      res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Bad request");
      return;
    }

    let pathname;
    try {
      pathname = decodeURIComponent(url.pathname);
    } catch {
      res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Bad request");
      return;
    }

    if (pathname.length > 1 && pathname.endsWith("/")) {
      res.writeHead(301, { Location: `${pathname.slice(0, -1)}${url.search}` });
      res.end();
      return;
    }

    const candidates =
      pathname === "/"
        ? [join(DIST, "index.html")]
        : [join(DIST, pathname), join(DIST, pathname, "index.html")];

    for (const candidate of candidates) {
      const abs = resolve(candidate);
      if (!isInsideDist(abs)) continue;
      if (existsSync(abs) && statSync(abs).isFile()) {
        sendFile(res, 200, abs);
        return;
      }
    }

    sendNotFound(res);
  });
}

const isDirect =
  process.argv[1] &&
  (process.argv[1].endsWith("static-server.mjs") || process.argv[1].includes("static-server"));

if (isDirect) {
  const server = createStaticServer();
  server.listen(PORT, HOST, () => {
    console.log(`Serving ${DIST} on http://${HOST}:${PORT}`);
  });
}
