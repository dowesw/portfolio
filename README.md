# Portfolio – Guillaume Mbella Ebongue

Portfolio personnel développé avec **React + Vite + TypeScript + Tailwind CSS v4**.

## Déploiement sur GitHub Pages (automatique)

1. Pusher le code sur votre dépôt GitHub :
   `ash
   git remote add origin https://github.com/dowesw/portfolio.git
   git push -u origin main
   `
2. Dans les **Settings** du dépôt ? **Pages** ? Source : **GitHub Actions**
3. Le workflow \.github/workflows/deploy.yml\ se déclenche à chaque push sur \main\.

> URL du portfolio : \https://dowesw.github.io/portfolio/\

## Développement local

\\\ash
npm install
npm run dev
\\\

## Build

\\\ash
npm run build
npm run preview
\\\

## Stack

- React 19 + TypeScript
- Vite 5
- Tailwind CSS v4
- GitHub Actions CI/CD
