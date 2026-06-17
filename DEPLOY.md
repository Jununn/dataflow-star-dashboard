# DataFlow Star Dashboard Deployment

This dashboard is deployed as a static GitHub Pages site. The GitHub Actions workflow updates `app.js`, copies the public files into `site-public/`, commits the new snapshot, and deploys `site-public/` to Pages.

## Files to publish

- `site-public/index.html`
- `site-public/styles.css`
- `site-public/app.js`

Local token files are ignored by `.gitignore` and must not be committed.

## GitHub setup

1. Create a GitHub repository for this dashboard.
2. Push this folder to the repository.
3. Open repository settings, then `Secrets and variables` -> `Actions`.
4. Add a repository secret named `GH_TOKEN`.
5. Paste a GitHub token that can read public repo metadata and has enough API quota.
6. Open `Settings` -> `Pages`, and set the build/deploy source to `GitHub Actions`.
7. Run the `Update and deploy dashboard` workflow manually once.

The workflow also runs at 10:30 and 19:00 Beijing time every day.
