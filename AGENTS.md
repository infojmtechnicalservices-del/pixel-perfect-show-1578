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

- Vercel deploys via the Build Output API: `npm run build` runs `scripts/vercel-output.mjs`, which (only when `VERCEL` is set) copies prerendered `dist/client` into `.vercel/output/static`; Vercel ignores `outputDirectory` once its build leaves an empty `.vercel/output`. New public routes need no extra config. Do not re-add netlify.toml — the user switched to Vercel.
