PIRATE DOG BUDGET v4.4 — NO OVERLAP

FOUND CAUSE:
dashboard-wood-hd-v43.jpg was not a blank wood texture.
It contained baked-in dashboard text and values including Month Overview,
Income, Spent, Quick Actions, and Debt Payoff.

v4.4:
- Completely removes dashboard-wood-hd-v43.jpg.
- Replaces it with a clean CSS-only dark wood texture.
- No financial labels or values are baked into card backgrounds.
- Adds overflow/containment rules for long live values.
- Folded dashboard stacks Quick Actions and Debt Payoff instead of squeezing
  them side-by-side.
- Open dashboard remains information-rich.
- Correct HD Tucker hero remains.
- Eye patch remains on viewer's LEFT.
- HD intro/loading and real 0–100% loading bar remain.

IMPORTANT:
Delete dashboard-wood-hd-v43.jpg from GitHub if it still exists.
Upload every file in this ZIP and replace matching files.
