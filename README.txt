PIRATE DOG BUDGET v2.3 — STARTUP FIX

CAUSE OF THE STUCK INTRO
v2.2 called startStartupSequence() before the $() DOM helper had been defined.
That throws a JavaScript ReferenceError immediately, so the intro never received
the "hide" class.

v2.3 FIX
- Moves const $ = ... before startup code.
- Adds a separate hard fail-safe timer using document.getElementById directly.
- At 3 seconds, intro is hidden and loading is shown.
- At 5.7 seconds, loading is hidden and dashboard is revealed.
- Even if IndexedDB or later application JavaScript fails, the splash screens
  cannot remain stuck permanently.
- Keeps the v2.2 FINAL CONCEPT artwork/layout unchanged.
- New cache key: pirate-dog-budget-v2.3-startupfix.

GITHUB ROOT FILES
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
tucker-pixel.png
tucker-sprite-sheet.png
README.txt
