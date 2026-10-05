// Packages the prerendered site in Vercel's Build Output API format.
// Runs only on Vercel (VERCEL env var is set there); a no-op everywhere else.
// Called from vite.config.ts when the build process exits (so it runs no matter
// which build command Vercel uses) and from the npm "build" script as a backup.
import { cpSync, mkdirSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

export function writeVercelOutput(root = process.cwd()) {
  if (!process.env.VERCEL) return;
  const client = resolve(root, "dist/client");
  if (!existsSync(resolve(client, "index.html"))) {
    console.error("[vercel-output] dist/client/index.html missing — skipping");
    return;
  }
  const out = resolve(root, ".vercel/output");
  rmSync(out, { recursive: true, force: true });
  mkdirSync(out, { recursive: true });
  cpSync(client, resolve(out, "static"), { recursive: true });
  writeFileSync(
    resolve(out, "config.json"),
    JSON.stringify(
      {
        version: 3,
        routes: [
          // /about -> /about/ (pages live at <route>/index.html)
          { src: "^/((?:[^/]+/)*[^/.]+)$", status: 308, headers: { Location: "/$1/" } },
          { handle: "filesystem" },
        ],
      },
      null,
      2,
    ),
  );
  console.log("[vercel-output] Wrote .vercel/output with static site");
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  writeVercelOutput();
}
