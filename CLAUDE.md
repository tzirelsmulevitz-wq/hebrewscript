# Notes for Claude

This repo holds Hebrew practice material for Jack, built from photos of his homework.

When a new homework photo arrives:
1. Read the Hebrew. Worksheets are often printed in a cursive-style font: in it, א looks like "lc", ל looks like "δ", מ looks like "N", ד looks like a reversed "?", and ע looks like "ɣ". Zoom in on any word that is unclear.
2. Give the parent a table with: word, transliteration, root, translation. Flag any word you are unsure of.
3. Save the photo to `homework/YYYY-MM-DD-short-name.jpg`.
4. Add a lesson at the top of `window.LESSONS` in `lessons.js` (see the field list at the top of that file). Mark uncertain readings with `check: true`.
5. Don't change `index.html` unless asked; the games read `lessons.js` automatically.
6. Commit, push, and republish the Artifact page if one exists.
