# Mokshith Balidi — Portfolio

Personal portfolio of **Mokshith Balidi**, Forward Deployed AI Engineer (AI agents, RAG & production systems).

An enhanced build of the [vCard](https://github.com/codewithsadee/vcard-personal-portfolio) template — restructured, restyled, and extended with:

- 🌗 **Light & dark themes** (gold accent) with a toggle, system-preference detection, and persistence
- 🧭 Tabbed layout: **About · Resume · Portfolio · Research · Contact**
- 🗂️ **Project case-study modals** with highlights, tech stacks and repo links
- 📊 Animated stat counters, categorized skill chips, experience timeline
- 📨 Contact form that composes an email via `mailto:`
- ♿ Accessible focus states, reduced-motion support, responsive down to mobile

Pure **HTML + CSS + vanilla JS** — no build step.

## Structure

```
index.html              # single-page app (tabbed)
assets/
  css/style.css         # dual-theme design system
  js/script.js          # data (projects/skills/orgs) + all behavior
  images/               # avatar, org logos, favicon
  Mokshith-Balidi-Resume.pdf
```

To edit content, update the `PROJECTS`, `SKILLS` and `ORGS` data at the top of `assets/js/script.js`.

## Run locally

```bash
python3 -m http.server 8777
# open http://127.0.0.1:8777
```

## Deploy

Pushing to `main` deploys to **GitHub Pages** via `.github/workflows/deploy.yml`
(enable Pages → Source: *GitHub Actions* in repo settings).

## License

Template: MIT © [codewithsadee](https://github.com/codewithsadee). Content © Mokshith Balidi.
