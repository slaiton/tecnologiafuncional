import { solutions, type Solution } from "../data/solutions";

export const SITE_URL = "https://tecnologiafuncional.com";
export const SITE_NAME = "Tecnología Funcional";
export const CONTACT_EMAIL = "contacto@tecnologiafuncional.com";
export const DEFAULT_IMAGE = "/og-image.jpg";

export const SOCIAL_PROFILES = {
  facebook: "https://www.facebook.com/people/Tecnologia-Funcional/61590317302280/",
};

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
  jsonLd: Record<string, unknown>[];
}

const absolute = (path: string) => new URL(path, SITE_URL).href;

const ORG_ID = `${SITE_URL}/#organization`;

const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: absolute("/tf.png"),
  email: CONTACT_EMAIL,
  description:
    "Empresa colombiana de tecnología que crea soluciones digitales a la medida.",
  areaServed: { "@type": "Country", name: "Colombia" },
  sameAs: Object.values(SOCIAL_PROFILES),
};

const homeMeta: PageMeta = {
  path: "/",
  title: "Tecnología Funcional | Desarrollo de software en Colombia",
  description:
    "Empresa colombiana de tecnología. Software a la medida y soluciones de riesgo logístico, firma electrónica (TFirma) y beneficios para conductores.",
  jsonLd: [
    organization,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      inLanguage: "es-CO",
      publisher: { "@id": ORG_ID },
    },
  ],
};

const solutionMeta = (solution: Solution): PageMeta => ({
  path: solution.path,
  title: solution.seo.title,
  description: solution.seo.description,
  jsonLd: [
    organization,
    {
      "@type": "Service",
      "@id": `${absolute(solution.path)}#service`,
      name: solution.name,
      serviceType: solution.headline,
      description: solution.seo.description,
      url: absolute(solution.path),
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "Colombia" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: solution.name,
          item: absolute(solution.path),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: solution.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
});

export const notFoundMeta: PageMeta = {
  path: "/404.html",
  title: "Página no encontrada | Tecnología Funcional",
  description: "La página que buscas no existe o fue movida.",
  noindex: true,
  jsonLd: [],
};

/** Páginas indexables: alimentan el prerender y el sitemap */
export const pages: PageMeta[] = [homeMeta, ...solutions.map(solutionMeta)];

export const getPageMeta = (pathname: string): PageMeta => {
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return pages.find((page) => page.path === normalized) ?? notFoundMeta;
};

type HeadTag =
  | { tag: "meta"; key: string; attrs: Record<string, string> }
  | { tag: "link"; key: string; attrs: Record<string, string> };

const headTags = (meta: PageMeta): HeadTag[] => {
  const url = absolute(meta.path);
  const image = absolute(meta.image ?? DEFAULT_IMAGE);
  const tags: HeadTag[] = [
    { tag: "meta", key: "name=description", attrs: { name: "description", content: meta.description } },
    {
      tag: "meta",
      key: "name=robots",
      attrs: { name: "robots", content: meta.noindex ? "noindex, follow" : "index, follow" },
    },
    { tag: "meta", key: "property=og:type", attrs: { property: "og:type", content: "website" } },
    { tag: "meta", key: "property=og:site_name", attrs: { property: "og:site_name", content: SITE_NAME } },
    { tag: "meta", key: "property=og:locale", attrs: { property: "og:locale", content: "es_CO" } },
    { tag: "meta", key: "property=og:title", attrs: { property: "og:title", content: meta.title } },
    { tag: "meta", key: "property=og:description", attrs: { property: "og:description", content: meta.description } },
    { tag: "meta", key: "property=og:url", attrs: { property: "og:url", content: url } },
    { tag: "meta", key: "property=og:image", attrs: { property: "og:image", content: image } },
    { tag: "meta", key: "property=og:image:width", attrs: { property: "og:image:width", content: "1200" } },
    { tag: "meta", key: "property=og:image:height", attrs: { property: "og:image:height", content: "630" } },
    { tag: "meta", key: "name=twitter:card", attrs: { name: "twitter:card", content: "summary_large_image" } },
    { tag: "meta", key: "name=twitter:title", attrs: { name: "twitter:title", content: meta.title } },
    { tag: "meta", key: "name=twitter:description", attrs: { name: "twitter:description", content: meta.description } },
    { tag: "meta", key: "name=twitter:image", attrs: { name: "twitter:image", content: image } },
  ];

  if (!meta.noindex) {
    tags.push({ tag: "link", key: "rel=canonical", attrs: { rel: "canonical", href: url } });
  }

  return tags;
};

const jsonLdText = (meta: PageMeta) =>
  meta.jsonLd.length
    ? JSON.stringify({ "@context": "https://schema.org", "@graph": meta.jsonLd }).replace(
        /</g,
        "\\u003c",
      )
    : "";

const escapeAttr = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/** HTML del <head> para el prerender */
export const renderHead = (meta: PageMeta): string => {
  const tags = headTags(meta).map(({ tag, attrs }) => {
    const attrText = Object.entries(attrs)
      .map(([name, value]) => `${name}="${escapeAttr(value)}"`)
      .join(" ");
    return `<${tag} ${attrText} />`;
  });

  const ld = jsonLdText(meta);

  return [
    `<title>${escapeAttr(meta.title)}</title>`,
    ...tags,
    ld ? `<script type="application/ld+json" id="ld-json">${ld}</script>` : "",
  ]
    .filter(Boolean)
    .join("\n    ");
};

/** Actualiza el <head> al navegar en el navegador */
export const applyHead = (meta: PageMeta) => {
  document.title = meta.title;

  const wanted = headTags(meta);
  const wantedKeys = new Set(wanted.map((tag) => tag.key));

  // Quita el canonical si la página nueva no lo lleva (ej. 404)
  if (!wantedKeys.has("rel=canonical")) {
    document.head.querySelector('link[rel="canonical"]')?.remove();
  }

  for (const { tag, key, attrs } of wanted) {
    const [attr, value] = key.split("=");
    let element = document.head.querySelector(`${tag}[${attr}="${value}"]`);

    if (!element) {
      element = document.createElement(tag);
      document.head.appendChild(element);
    }

    for (const [name, attrValue] of Object.entries(attrs)) {
      element.setAttribute(name, attrValue);
    }
  }

  const ld = jsonLdText(meta);
  let script = document.getElementById("ld-json");

  if (!ld) {
    script?.remove();
    return;
  }

  if (!script) {
    script = document.createElement("script");
    script.id = "ld-json";
    script.setAttribute("type", "application/ld+json");
    document.head.appendChild(script);
  }

  script.textContent = ld;
};
