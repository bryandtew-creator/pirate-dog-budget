PIRATE DOG BUDGET — GALAXY Z FOLD INSTALL

This build is responsive and optimized for:
- narrow cover-screen use
- unfolded Galaxy Z Fold inner displays
- portrait and landscape orientations
- large tablet-style layouts
- browser viewport-segment/fold support where available

INSTALL ON GITHUB PAGES
1. Create a new GitHub repository.
2. Upload ALL files from this ZIP into the repository root.
3. GitHub > repository Settings > Pages.
4. Under Build and deployment choose "Deploy from a branch".
5. Select main / (root), then Save.
6. Wait for the HTTPS Pages URL.
7. Open that URL in Chrome on the Galaxy Z Fold.
8. Chrome menu > Install app / Add to Home screen.

IMPORTANT IF REPLACING AN OLD VERSION
- Upload every file from this package.
- If the old ClearSpend app is installed, uninstall it first.
- In Chrome, revisit the GitHub Pages URL and install Pirate Dog Budget.
- If GitHub Pages still shows the old app, refresh once or clear that site's cached data.

DATA & PRIVACY
- Transactions are stored locally using IndexedDB.
- GitHub Pages hosts only the app files; it does not receive transaction entries from this app.
- Use Export CSV regularly as a backup.
- Browser/site data deletion can remove locally stored transactions.

FOLD-SPECIFIC BEHAVIOR
- Cover display: one-column phone layout.
- Inner display: two-column layouts beginning around 700 CSS px.
- Wide unfolded/landscape display: three-column dashboard beginning around 1000 CSS px.
- The layout uses safe-area environment variables and optional CSS viewport-segment support.
- No fixed-width outer app container restricts the unfolded display; it expands up to 1600px.


V1.1 ART UPDATE
- Replaced the old pixel intro image with the newly approved Tucker pirate pixel artwork.
- tucker-pixel.png is the intro portrait.
- tucker-sprite-sheet.png contains the full approved Pirate Dog sprite sheet for future animation work.
