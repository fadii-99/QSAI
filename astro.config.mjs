// @ts-check
import { defineConfig } from "astro/config";

// Fully static site. English is served at `/`, Arabic at `/ar/`.
export default defineConfig({
  output: "static",
  devToolbar: { enabled: false },
  trailingSlash: "always",
  build: { format: "directory", inlineStylesheets: "auto" },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"],
    routing: { prefixDefaultLocale: false },
  },
  prefetch: { prefetchAll: true, defaultStrategy: "viewport" },
});
