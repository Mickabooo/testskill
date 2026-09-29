---
name: travel-vlog
description: Assemble trip clips into a short travel video. Use when the user asks for a travel video or trip montage.
---

## Step 1: Inspect the project folder

When invoked:

1. Ask the user for the footage folder if they have not provided it.
2. Read and follow [the inspection guide](references/step-1-inspect.md).
3. Return the findings directly in the conversation.

Include:
- A summary of the user's requested video.
- A table listing each video's filename, duration, resolution,
  orientation, frame rate, and audio-track availability.
- A brief description of each clip's visible content and audio,
  if inspected.
- Any supporting photos, music, or notes.
- Unreadable files, missing information, and inspection limitations.

Use "not inspected" or "unknown" for anything you could not verify.
Do not invent results.

Stop after reporting. Do not edit clips, create a plan, or render a video.
