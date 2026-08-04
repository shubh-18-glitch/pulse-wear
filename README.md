# PULSE editable website

This folder is the editable version of the saved PULSE page.

## Files

- `index.html` — page text, links, and sections
- `styles.css` — colors, typography, spacing, layout, and mobile styles
- `script.js` — mobile menu, reservation toast, and product-detail tabs
- `assets/` — the three website images

## Make a change

1. Open this folder in Visual Studio Code.
2. Edit the appropriate file and save it.
3. Open `index.html` in a browser to preview the result.

Examples:

- Change a heading or paragraph in `index.html`.
- Change the lime accent by editing `--lime` near the top of `styles.css`.
- Replace an image by putting the replacement in `assets/` and keeping the same filename, or update its path in `index.html`/`styles.css`.
- Adjust mobile layout inside the `@media(max-width:800px)` rules in `styles.css`.

## Current prototype behavior

The reservation buttons show the original confirmation toast. They do not yet submit a form or save customer details. Privacy, Terms, and the contact address are also placeholders from the original page.
