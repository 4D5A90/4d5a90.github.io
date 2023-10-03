import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://4D5A90.github.io",
  base: "/blog",
  integrations: [mdx(), sitemap()],
});
