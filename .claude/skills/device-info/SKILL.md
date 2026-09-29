---
name: device-info
description: Report browser and device information when the user asks about their browser or computer.
---

1. Read the browser information script (scripts/browser-info.js)
2. If a browser tool supports running JavaScript in a page,
   execute the script in the browser the user wants inspected.
3. Otherwise, explain that the script must run in a browser
   and ask the user to provide its output.
4. Present the returned information as a short table.
5. Explain that these values describe the browser's environment,
   which may differ from the user's computer if run remotely.
6. Report unavailable values as unknown. Do not invent details.

