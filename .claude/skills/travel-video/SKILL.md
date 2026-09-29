---
name: travel-video
description: Inspect trip footage and report available clips. Use when the user asks to inspect footage or prepare a travel video.
---

## Step 1: Inspect the project folder

When invoked:

1. Ask the user for the footage folder if they have not provided it.
2. Read and follow [the inspection guide](references/step-1-inspect.md).
3. Follow the guide's cache rules before inspecting videos:
   - Reuse saved findings for unchanged files.
   - Inspect new or changed files.
   - Refresh all findings if the user explicitly requests it.
4. Save updated inspection notes and the manifest in `inspected/`
   inside the footage folder, as described in the guide.
5. Return the findings directly in the conversation.

Include:

- A summary of the user's requested video.
- A table listing each video's filename, duration, resolution,
  orientation, frame rate, and audio-track availability.
- A brief description of each clip's visible content and audio,
  if inspected.
- Any supporting photos, music, or notes.
- Unreadable files, missing information, and inspection limitations.
- How many inspections were reused, how many files were inspected
  this run, and whether the results were successfully saved.

Use "not inspected" or "unknown" for anything you could not verify.
Do not invent results.

Creating or updating inspection notes is allowed.
Do not modify original footage.

Stop after reporting. Do not edit clips, create a plan, or render a video.
