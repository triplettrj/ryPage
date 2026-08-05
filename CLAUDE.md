# ryPage

Personal site plus a set of static demo sites, built with Create React App
and deployed to GitHub Pages.

Live: https://triplettrj.github.io/ryPage/

## Never edit the gh-pages branch

`gh-pages` is **build output only**. Treat it as disposable.

All site content lives in `public/`. The deploy replaces the `gh-pages`
branch wholesale, so anything committed there and not mirrored in `public/`
is destroyed on the next deploy.

This has already happened once. In Aug 2026, 14 sites existed only on
`gh-pages` -- 8 with no copy in `public/` at all, and 6 whose live versions
were two months newer than source. A routine `npm run deploy` would have
deleted all of them. The deploy failed for an unrelated reason, which is the
only thing that saved them.

To edit a site: change it in `public/<site>/`, then build and deploy.

## Deploying

```bash
npm run deploy
```

`predeploy` builds and then runs `scripts/predeploy-guard.sh`, which
compares `build/` against what is live on `gh-pages` and aborts if the
deploy would delete anything. Files under `static/` are exempt -- their
names carry content hashes, so old ones are meant to disappear.

If a deletion is genuinely intended:

```bash
ALLOW_GHPAGES_DELETE=1 npm run deploy
```

The guard fails closed: if it cannot reach the remote, it blocks rather
than deploying blind.

## homepage in package.json

Must stay `"."`. Setting it to an absolute URL makes CRA emit
root-absolute asset paths (`/static/js/main.*.js`). Those 404 under the
`/ryPage/` path prefix, React never mounts, and the page renders blank with
no error. This was the cause of the Aug 2026 blank-landing-page bug -- it
had been set to `https://www.ryrydev.com`, a domain that does not serve
this project.

## Pushing

This repo hits `HTTP 400` on push over HTTP/2. Fixed repo-locally with:

```bash
git config http.version HTTP/1.1
```

If a push fails with `RPC failed; HTTP 400`, that setting is missing.
