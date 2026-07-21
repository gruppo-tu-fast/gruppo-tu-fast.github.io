# GTE Complaint Hotline — Design

Date: 2026-07-21

## Purpose

A mobile-friendly meme landing page for the GTE cycling group, whose riders
are always complaining. The page is a joke: filing a complaint rickrolls you.

## Requirements

- Title at the top: **GTE Complaint Hotline**.
- The home page body is the supplied "Two Buttons" meme image
  (sweating guy choosing between **File Complaint** and **Send Email**).
- Tapping the **File Complaint** button region plays the rickroll.
- The **Send Email** region also rickrolls (there is no escape); easy to
  remove or repoint later.
- No text inputs or form fields.
- The rickroll is an embedded, autoplaying YouTube player for
  `https://www.youtube.com/watch?v=dQw4w9WgXcQ`. No video files are
  downloaded or rehosted (copyright). Autoplay with sound is permitted by
  browsers because it is triggered by the user's tap.
- React (Vite), hosted on GitHub Pages.

## Architecture

- Vite + React SPA, `base: '/complaint-hotline/'` for the GitHub Pages subpath
  (repo: `gruppo-tu-slow/complaint-hotline`).
- `App.jsx` — title, meme image with two percentage-positioned invisible
  hotspot buttons, and a `submitted` boolean; when true, renders `RickRoll`.
- `RickRoll.jsx` — full-viewport YouTube iframe embed
  (`autoplay=1&playsinline=1`) with a deadpan caption
  ("Your complaint has been escalated to our senior grievance officer:").
- Meme image lives in `src/assets/` and is bundled by Vite.
- Deploy: GitHub Actions workflow builds on push to `main` and publishes
  `dist/` to GitHub Pages.

## Data flow

None. No storage, no network calls besides the YouTube embed.

## Error handling

If YouTube is blocked or fails, the iframe shows YouTube's own error state —
acceptable for a meme page.

## Testing

Manual: run dev server, verify layout at phone width, tap File Complaint,
confirm the video autoplays with sound.
