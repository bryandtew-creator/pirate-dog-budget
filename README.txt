PIRATE DOG BUDGET v2.0 — FINAL CONCEPT / Z FOLD BUILD

THIS BUILD
- Uses the user's final approved Pirate Dog Budget concept as the design baseline.
- No alternate concept direction is introduced.
- Responsive specifically for a narrow Fold cover display and wide/open inner display.
- The app reflows live when the phone is opened or closed.
- Uses width + aspect-ratio breakpoints instead of assuming one fixed pixel density.
- Includes optional CSS viewport-segment support if the browser exposes fold segments.
- PWA standalone mode, safe-area padding, offline service worker.
- Local IndexedDB transaction storage.
- CSV import/export.
- Reimbursed/parent-paid charges can be excluded from personal spending.
- Editable income/debt settings.
- 3-second automatic intro.
- Loading screen has one app-generated "Setting sail..." label.
- No Tucker fly/shrink transition.

GITHUB REPOSITORY ROOT SHOULD CONTAIN
index.html
manifest.webmanifest
service-worker.js
icon-180.png
icon-192.png
icon-512.png
intro-cover-v20.jpg
intro-open-v20.jpg
loading-cover-v20.jpg
loading-open-v20.jpg
ocean-waves-v15.png
tucker-pixel.png
tucker-sprite-sheet.png
README.txt

UPLOAD
1. Unzip the package.
2. Upload ALL individual files above into the ROOT of the existing pirate-dog-budget repository.
3. Replace files with matching names.
4. Commit directly to main.
5. Wait for GitHub Pages to redeploy.
6. Test in a new Chrome Incognito tab with the Fold CLOSED.
7. Open the Fold while the site is running and verify the inner layout.
8. If the installed PWA is stale, uninstall it and reinstall from the updated Pages URL.

OLD FILES
After this version is confirmed working, older version-specific intro/loading assets (v14-v19)
are no longer required by v2.0. Keep only the files listed above for a clean repository.

IMPORTANT DATA NOTE
Transactions are stored locally in IndexedDB. Export a CSV backup before clearing browser
site data or uninstalling/reinstalling the app.
