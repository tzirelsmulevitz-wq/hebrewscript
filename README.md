# Shoresh Cards

Hebrew practice for Jack's Chumash homework: flashcards, a matching game, a root and meaning quiz, and a print-to-script letter chart.

Open `index.html` in a browser, or serve the folder with any static host such as GitHub Pages.

## Files

- `index.html`: the practice site.
- `lessons.js`: every homework word list. This is the only file that changes when new homework comes in.
- `homework/`: the original photos of each worksheet.

## Adding new homework

Add a new lesson at the top of `window.LESSONS` in `lessons.js`, and save the photo in `homework/` as `YYYY-MM-DD-short-name.jpg`. Each word needs `he` (with nikud), `say`, `en`, `root` and `hint`. `source` is optional. Set `check: true` on any word that was hard to read from the photo.

Script letters use the Gveret Levin font, and print uses Noto Serif Hebrew. Both load from Google Fonts.
