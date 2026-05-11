# TnL Studio Official Website

TnL Studio 공식 웹사이트 프로젝트입니다.

## Tech Stack

- React
- Vite
- Framer Motion
- GitHub Pages

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

This project is deployed with GitHub Actions and GitHub Pages.

When changes are pushed to the `main` branch, GitHub Actions installs dependencies, builds the project, and deploys the generated `dist` output to GitHub Pages.

## Security Notes

- Do not commit `.env` files.
- Do not commit `node_modules`.
- Do not commit `dist` directly.
- Do not commit private keys, passwords, tokens, or internal documents.
