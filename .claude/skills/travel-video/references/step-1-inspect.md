## Check for an existing inspection

Store inspection results in `inspected/` inside the user's footage
folder. Create this directory if it does not exist.
Exclude this directory when searching for input footage.

Before decoding videos or sampling frames:

1. Look for `inspected/manifest.json` and `inspected/inspection.md`.
2. List the current input files and compare their relative paths,
   file sizes in bytes, and last-modified timestamps with the manifest.
3. Reuse saved findings for files whose values have not changed.
4. Inspect only new or changed files.
5. Remove entries for files that no longer exist.
6. If either saved file is missing or unreadable, inspect again.
7. If the user explicitly asks to refresh the inspection, inspect
   every input file again.

Reusing an inspection must preserve its limitations:
- "Audio not assessed" remains unassessed.
- Sampled frames do not mean the full video was visually reviewed.
- Retry a previously unavailable inspection only when the user
  requests it or the required tool becomes available.

## Save the results

After inspection:

1. Write the readable findings to `inspected/inspection.md`,
   organized by each file's relative path.
2. Write `inspected/manifest.json` containing:
   - Inspection rules version: 1
   - Inspection timestamp
   - Each input file's relative path
   - File size in bytes
   - Last-modified timestamp
   - Whether technical, visual, and audio inspection succeeded
3. Save the manifest only after successfully saving the report.
4. If the inspection rules version changes, refresh the inspection.
5. If saving fails, tell the user the results were not cached.

Return the findings in the conversation and state how many files
were reused, newly inspected, changed, or removed.

# Step 1: Inspect the trip footage

Inspect the user-provided folder to understand what footage is
available. Do not modify or overwrite original files.

## What to look for

Inspect these in priority order:

1. **User instructions**
   Identify the desired length, mood, vertical or landscape format,
   and any must-include or excluded moments.
   If no input folder was provided, ask for its location.

2. **Video files — `.mp4` and `.mov`**
   List the files in the input folder.
   For each file, inspect:
   - Duration
   - Width and height
   - Orientation: landscape, vertical, or square
   - Frame rate
   - Whether an audio track exists
   - Whether the file can be opened and decoded

   Exclude previous output videos from the input list.
   Report unreadable files rather than silently skipping them.

3. **Visible content**
   If visual inspection is available, sample frames near the
   beginning, middle, and end of each clip.
   Describe what is actually visible.
   Do not infer the content or location from filenames alone.
   Label clips that have not been visually inspected.
   
5. **Original audio**
   If listening is available, check for speech, ambient sound,
   music, wind, or distracting noise.
   Having an audio track does not mean it contains useful sound.
   Label audio that has not been assessed.

5. **Optional supporting material**
   Note any user-provided trip notes, photos, music, or title text.
   Do not add these to the first version unless requested.


