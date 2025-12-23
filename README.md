# Chart Animation Next.js Demo

This is a minimal Next.js project that renders a Chart.js line chart client-side and is ready for deployment to Vercel.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run locally:

```bash
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

- Option A: Connect this repository to Vercel (recommended). Vercel will detect Next.js and deploy automatically.
- Option B: Use the Vercel CLI:

```bash
npm install -g vercel
vercel login
vercel
```

Follow prompts to deploy.

Files added:

- `pages/index.js` — main page using a client-only chart component
- `components/AppreciationChart.js` — chart implementation (loads `chart.js` dynamically)
