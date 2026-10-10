// Genera un HTML estático por cada página (SEO) a partir del build de servidor.
// Uso: se ejecuta en "npm run build" después de los builds de cliente y servidor.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render, pages, notFoundMeta, renderHead, SITE_URL } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf8");


const writePage = (meta, url, file) => {
  const html = template
    .replace("<!--app-head-->", renderHead(meta))
    .replace("<!--app-html-->", render(url));

  const target = path.join(distDir, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);
  console.log(`  ✓ ${file}`);
};

console.log("Pre-renderizando páginas:");

for (const meta of pages) {
  writePage(meta, meta.path, path.join(meta.path, "index.html"));
}

writePage(notFoundMeta, "/404.html", "404.html");

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (meta) => `  <url>
    <loc>${SITE_URL}${meta.path}</loc>
    <lastmod>${today}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
console.log("  ✓ sitemap.xml");

fs.rmSync(ssrDir, { recursive: true, force: true });
