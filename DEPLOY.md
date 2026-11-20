# Encrypted GitHub Pages dashboard

The public page contains the summary and Star charts. Everything from the visitor/Star comparison onward, the complete dashboard script, activity records and reports is encrypted with AES-256-GCM. PBKDF2-SHA-256 derives the key with 600,000 iterations and a random salt; each build uses a fresh nonce.

## Secrets and deployment

Set repository Actions secrets `DASHBOARD_PASSWORD` and `GH_TOKEN`. Never put their values in source files. The token needs repository access, access to DataFlow traffic statistics, and workflow scope when modifying the workflow. Publishing gh-pages with a personal token triggers GitHub Pages builds.

The workflow runs at 10:30 and 19:00 Beijing time. Scheduled runs and manual runs with Refresh enabled decrypt to ignored `.private/`, refresh stars, competitors, current-month regions and traffic, then encrypt again. An update failure stops publication. Existing historical reports and activity records are preserved; new activity records and overlap research require explicit source edits/research. Push-triggered runs deploy the existing encrypted snapshot without refreshing data.

Only the eight files listed in `dashboard-build.mjs` are published. Decrypted sources, tokens, cache files and reports must never be committed or uploaded as Actions artifacts. Both branch deployments preserve Git history.

## Local editing

1. Set `DASHBOARD_PASSWORD` in the current terminal session using hidden input.
2. Run `node dashboard-build.mjs restore` to recover `.private/index.html`, `.private/app.js` and `.private/reports/`.
3. Edit those private files. Do not edit the generated public app or page.
4. Run `node dashboard-build.mjs build`, then `node --test dashboard-crypto.test.mjs`.
5. Preview only `site-public/`, e.g. `python -m http.server 8778 --bind 127.0.0.1 --directory site-public`.
6. Commit the generated public files and implementation changes, never `.private/`.

Run `node dashboard-refresh.mjs` to refresh data, or `node dashboard-refresh.mjs --deploy-only` to verify/rebuild the current encrypted snapshot. Restore overwrites private files, so build local edits before calling refresh.

## Unlock and password rotation

Unlock reconstructs the original HTML and script, preserving direct children of main and the original styles. Remembering unlock stores the derived key in this browser, not the password. Relock clears it. Treat remembered browser storage as sensitive. The salt remains stable for ordinary updates so remembered unlock continues to work.

To rotate, restore with the old password, change the environment variable and repository Secret, and build with `--rekey`. This invalidates remembered keys. Encryption cannot revoke copies previously downloaded or remove data from historical Git commits. Historical plaintext from before migration remains in history; history rewriting requires a separate explicit decision.
