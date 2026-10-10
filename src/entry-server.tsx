import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App.tsx";

export { pages, notFoundMeta, renderHead, SITE_URL } from "./seo/seo";

/** Renderiza la app para una URL. Lo usa scripts/prerender.mjs en el build. */
export const render = (url: string) =>
  renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>,
  );
