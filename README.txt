PIRATE DOG BUDGET v3.0 — CLEAN REWRITE

This version was rewritten from scratch instead of patching the v2.x code.

STARTUP DESIGN
- The first script in the document is a standalone startup controller.
- It does not use IndexedDB.
- It does not use the $ helper.
- It does not use the service worker.
- It does not wait for app initialization.
- 0–3.0 seconds: intro
- 3.0–5.7 seconds: loading
- 5.7 seconds onward: dashboard

FINAL CONCEPT
- Uses intro-cover-final.jpg / intro-open-final.jpg.
- Uses loading-cover-final.jpg / loading-open-final.jpg.
- Folded dashboard: Chase balance + 3x3 categories + navigation.
- Open dashboard: Month Overview + Chase Balance, 9 categories, Budget / Debt / Recent.
- Layout reacts live when the Fold is opened or closed.

DATA
- Uses the existing database name pirate-dog-budget-db to preserve prior data.
- Reimbursed / parent-paid transactions are excluded from personal monthly spending.
- CSV import/export included.

CACHE BUSTING
- All core assets use ?v=300 URLs.
- Service worker cache is pirate-dog-budget-v3.0-clean-rewrite.
- This helps prevent GitHub Pages/Chrome from silently reusing a broken v2.x file.

GITHUB ROOT SHOULD CONTAIN ONLY
index.html
manifest.webmanifest
service-worker.js
icon-180.png
icon-192.png
icon-512.png
intro-cover-final.jpg
intro-open-final.jpg
loading-cover-final.jpg
loading-open-final.jpg
ocean-waves-v15.png
README.txt

UPLOAD
1. Unzip this file.
2. In your existing GitHub repository, upload all 12 individual files to the root.
3. Replace existing same-name files.
4. You may delete old version-specific v14-v23 artwork/files after v3.0 works.
5. Commit to main.
6. Wait for GitHub Pages to finish deploying.
7. Test the URL in a brand-new Chrome Incognito tab.
8. The intro must disappear after 3 seconds even if the rest of the app has a problem.
