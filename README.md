Balance4Profit — Simple website template

Files created / reorganized:
- `index.html` — main static page (edit content, replace placeholders)
- `css/styles.css` — styling (moved)
- `script.js` — small interactivity (nav, accordion, contact => mailto)
- `images/logo.svg` — small placeholder logo (moved)
- `images/balance4profit.jpg` — logo/photo (moved)

How to preview locally

Open a terminal in this folder and run a simple static server (Python 3):

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

Placeholders / things to fill

- Replace the contact email in `index.html` and `script.js` (kadnazik95@gmail.com).
 - (Optional) Enable client-side form submissions with Formspree:
	 1. Create a free form at https://formspree.io and copy the form endpoint (it looks like `https://formspree.io/f/abcd1234`).
	 2. Open `script.js` and replace the `FORM_ENDPOINT` placeholder with your endpoint.
	 3. The form will then send JSON POST requests to Formspree and show success/error messages in the page.
- Fill real office address, phone number.
- If you want form submissions handled server-side, integrate a backend endpoint or a service (Formspree, Netlify Forms, etc.).

Suggested next steps

- Add translations (Kyrgyz/Russian) if you want bilingual site.
- Add a privacy policy page and link real contact details.
- Add real map iframe and social links.

If you'd like, I can:
- Add a serverless contact endpoint for form submissions (Node/Python) or integrate Formspree.
- Produce translated Kyrgyz/Russian text.
- Create a deploy-ready config (GitHub Pages or Netlify) and CI.

Questions before I continue

1. Do you want the contact form to send emails directly (server-side) or is a mailto link acceptable?
2. Do you want a bilingual site (Kyrgyz/Russian) up front?
3. Any preferred color or logo you'd like me to use instead of the placeholder?
