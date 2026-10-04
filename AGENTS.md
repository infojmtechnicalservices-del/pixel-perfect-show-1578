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

- Keep Vercel configured as a static deployment with `dist/client` as its explicit output directory and framework detection disabled; public pages prerender to `dist/client/<route>/index.html`, so new public routes need no extra deployment config. Do not re-add netlify.toml — the user switched to Vercel.
