# Official GTE Grievance Intake Portal

The GTE Complaint Hotline — a public service for the riders of GTE, who are
always complaining. File a complaint or send a text. Both paths receive the
same world-class support experience.

Live site: https://gruppo-tu-fast.github.io/

## How it works

- React + Vite single-page app. The home page is the classic Two Buttons
  meme with invisible tap targets over **File Complaint** and **Send Text**.
- Tapping either button fades in an autoplaying YouTube embed of the senior
  grievance officer, centered over the meme.
- No complaint is stored, transmitted, or read. Ever.

## Development

```sh
npm install
npm run dev
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
Vite app and publishes it to GitHub Pages. Requirements:

- Repo is named `gruppo-tu-fast.github.io` and owned by the
  `gruppo-tu-fast` org, so the site serves at the root URL.
- Pages source is set to **GitHub Actions** (Settings → Pages → Source).
- `base` in `vite.config.js` stays `/`.
