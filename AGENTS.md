<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Vercel deploys via the Build Output API: when `VERCEL` is set, `scripts/vercel-output.mjs` copies prerendered `dist/client` into `.vercel/output/static`; it is hooked into vite.config.ts on process exit (Vercel may bypass the npm build script) and also called by `npm run build`. New public routes need no extra config. Do not re-add netlify.toml — the user switched to Vercel.
