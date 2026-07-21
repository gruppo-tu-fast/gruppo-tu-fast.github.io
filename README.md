# GTE Complaint Hotline

Official Grievance Intake Portal of the GTE cycling group. Riders may file a
complaint or send a text. Both paths receive the same world-class support
experience.

Live site: https://gruppo-tu-slow.github.io/

## Development

```sh
npm install
npm run dev
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which builds the Vite app and publishes it to
GitHub Pages. The repo's Pages source must be set to **GitHub Actions**
(Settings → Pages → Source).
