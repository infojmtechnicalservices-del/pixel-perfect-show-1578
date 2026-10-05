// Packages the prerendered site in Vercel's Build Output API format.
// Runs only on Vercel (VERCEL env var is set there); a no-op everywhere else.
import { cpSync, mkdirSync, rmSync, writeFileSync, existsSync } from "node:fs";

if (process.env.VERCEL) {
  if (!existsSync("dist/client/index.html")) {
    console.error("[vercel-output] dist/client/index.html missing — build failed?");
    process.exit(1);
  }
  rmSync(".vercel/output", { recursive: true, force: true });
  mkdirSync(".vercel/output", { recursive: true });
  cpSync("dist/client", ".vercel/output/static", { recursive: true });
  writeFileSync(
    ".vercel/output/config.json",
    JSON.stringify(
      {
        version: 3,
        routes: [
          // /about -> /about/ (pages live at <route>/index.html)
          { src: "^/((?:[^/]+/)*[^/.]+)$", status: 308, headers: { Location: "/$1/" } },
          { handle: "filesystem" },
          { src: "/.*", status: 404, dest: "/404.html" },
        ],
      },
      null,
      2,
    ),
  );
  console.log("[vercel-output] Wrote .vercel/output with static site");
}
