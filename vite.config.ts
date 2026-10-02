import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Every public page is prerendered to static HTML for Netlify/Google.
const PAGES = [
  "/",
  "/electrical/",
  "/plumbing/",
  "/welding/",
  "/building/",
  "/about/",
  "/contact/",
  "/quote/",
];

export default defineConfig({
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: false,
      autoSubfolderIndex: true,
    },
    pages: PAGES.map((path) => ({
      path,
      prerender: { enabled: true },
    })),
  },
});
