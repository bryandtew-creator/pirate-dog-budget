PIRATE DOG BUDGET v1.4 — CORRECTED STARTUP BUILD

THIS VERSION FIXES THE STARTUP SCREENS DIRECTLY.

WHAT YOU SHOULD SEE
1. INTRO:
   The exact approved-style Pirate Dog Budget poster:
   - Tucker portrait
   - PIRATE DOG BUDGET
   - "Chart your course. Control your treasure."

2. LOADING:
   The approved scene with pixel Tucker SITTING beside the treasure chest,
   ocean and pirate ship behind him.
   Under the scene:
   - "Setting sail..."
   - animated red/orange/gold loading bar
   - live 0% to 100% number

3. TRANSITION:
   After loading reaches 100%, Tucker flies/shrinks toward the Pirate Dog
   icon in the dashboard header and the dashboard is revealed.

4. DASHBOARD:
   Keeps the brighter v1.3 brown/gold/parchment/colorful interface.

IMPORTANT:
v1.4 uses NEW asset filenames:
- intro-approved-v14.jpg
- setting-sail-scene-v14.jpg
- tucker-transition-v14.png

This is intentional. It prevents an older browser/PWA cache from silently
reusing v1.1/v1.2 splash-screen artwork under an old filename.

FILES TO UPLOAD TO THE ROOT OF YOUR EXISTING GITHUB REPOSITORY
- index.html
- manifest.webmanifest
- service-worker.js
- icon-180.png
- icon-192.png
- icon-512.png
- intro-approved-v14.jpg
- setting-sail-scene-v14.jpg
- tucker-transition-v14.png
- tucker-pixel.png
- tucker-sprite-sheet.png
- README.txt

AFTER COMMITTING
1. Wait for GitHub Pages to redeploy.
2. Open the Pages URL in a NEW Chrome Incognito window.
3. You should see the v1.4 intro immediately.
4. Only after confirming it there, test/reinstall the home-screen PWA.
5. If the installed PWA is stale, uninstall it and reinstall from the Pages URL.
