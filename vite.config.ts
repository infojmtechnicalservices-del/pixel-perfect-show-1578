import { defineConfig } from "@lovable.dev/vite-tanstack-config";
// @ts-expect-error plain JS helper without type declarations
import { writeVercelOutput } from "./scripts/vercel-output.mjs";

// On Vercel, package the prerendered pages for Vercel once the whole build
// (including prerendering) has finished, whatever build command Vercel runs.
const g = globalThis as { __vercelOutputHooked?: boolean };
if (process.env.VERCEL && process.argv.includes("build") && !g.__vercelOutputHooked) {
  g.__vercelOutputHooked = true;
  process.once("exit", () => writeVercelOutput());
}

export default defineConfig({
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: false,
      autoSubfolderIndex: true,
    },
  },
});
