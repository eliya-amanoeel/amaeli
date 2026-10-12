# amaeli.se

Source code for [amaeli.se](https://amaeli.se), the personal CV site of Eliya Amanoeel, a senior full-stack .NET developer based in Stockholm.

It is a single-page React application, built with Vite and served as static files.

## Features

- **English and Swedish.** The language follows the browser on the first visit and is remembered after that.
- **Light and dark themes**, switched with an animated light bulb.
- **Print-ready.** A dedicated print stylesheet turns the page into a clean, light CV.
- **No tracking.** No analytics, no cookies and no third-party requests; fonts are self-hosted.

## Tech stack

React 18 · TypeScript · Vite · Tailwind CSS 4 · react-spring

## Getting started

Requires Node.js 24 (see [`.nvmrc`](.nvmrc)).

```bash
npm ci          # install dependencies
npm run dev     # start the dev server
npm run build   # production build to dist/
```

## Project structure

```
src/
  app/components/   one component per page section
  i18n/             all page text: en.ts, sv.ts and the shared types.ts
  hooks/            theme and language state
  styles/           Tailwind, theme tokens, fonts and print styles
public/             fonts, favicon, Open Graph image, robots.txt, sitemap
deploy/             web server configuration
```

Text is kept in `src/i18n`, so English and Swedish are edited side by side. Tags, dates and links for each entry sit next to the component that renders them.

## Deployment

The **Build & Deploy** GitHub Actions workflow is started manually. It builds the site on a GitHub-hosted runner, then copies the output to a [Caddy](https://caddyserver.com) web server running in a Proxmox container. HTTPS is handled in front of that server. See [`deploy/`](deploy/) for the server configuration.

## License

Released under the [MIT License](LICENSE).

The bundled fonts, [Inter](https://rsms.me/inter/) and [JetBrains Mono](https://www.jetbrains.com/lp/mono/), are licensed under the SIL Open Font License 1.1.
