PIRATE DOG BUDGET v1.8 — RESPONSIVE INTRO EDITION

WHAT CHANGED
- The intro screen is now automatic and non-interactive.
- It appears for exactly 3 seconds.
- There is no "Tap to Set Sail" button.
- After 3 seconds, it automatically fades to the Setting Sail loading screen.
- When loading finishes, it fades directly to the dashboard.
- No Tucker fly/shrink transition.

SEPARATE INTRO COMPOSITIONS
- intro-cover-v18.jpg is optimized for the folded cover display.
- intro-open-v18.jpg is optimized for the unfolded inner display.
- The app chooses the correct intro automatically using screen width.
- Both versions fill the screen and keep the approved Pirate Dog / ocean / title / tagline look.

LOADING
- setting-sail-cover-v17.jpg remains optimized for the folded cover display.
- setting-sail-open-v17.jpg remains optimized for the open inner display.

UPLOAD THESE FILES TO YOUR GITHUB REPOSITORY ROOT
1. index.html
2. manifest.webmanifest
3. service-worker.js
4. icon-180.png
5. icon-192.png
6. icon-512.png
7. intro-cover-v18.jpg
8. intro-open-v18.jpg
9. setting-sail-cover-v17.jpg
10. setting-sail-open-v17.jpg
11. ocean-waves-v15.png
12. tucker-pixel.png
13. tucker-sprite-sheet.png
14. README.txt

DELETE THIS OLD INTRO FILE AFTER v1.8 IS WORKING
- intro-ocean-v15.jpg

YOU MAY ALSO DELETE ANY OLDER UNUSED LOADING/TRANSITION FILES IF THEY STILL EXIST
- setting-sail-wide-v16.jpg
- setting-sail-ocean-v15.jpg
- tucker-transition-v15.png
- tucker-transition-v14.png

STARTUP SEQUENCE
0.0s–3.0s: Pirate Dog Budget intro
3.0s: automatic fade to Setting Sail
~5.7s: automatic fade to dashboard

TESTING
1. Upload all v1.8 files and commit directly to main.
2. Wait for GitHub Pages to deploy.
3. Test the Pages URL in a NEW Chrome Incognito window.
4. Test once with the Fold closed.
5. Test once with the Fold open.
6. If the installed PWA is stale, uninstall it and reinstall from the updated Pages URL.

PRIVACY
Transactions remain stored locally in IndexedDB and are not uploaded to GitHub.
