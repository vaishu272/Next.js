# Next.js UI Demo

A Next.js App Router demo built with `next@16`, `react@19`, and Tailwind CSS v4 via `@tailwindcss/postcss`.

## What’s included

- App Router page and layout structure with route groups
- Nested layouts for shared navigation and section-level theming
- Static, dynamic, and catch-all route examples
- Server and client component data fetching examples
- Global UI styling with cards, buttons, and motion transitions

## Project highlights

- `app/layout.js` defines the site shell and primary navigation
- `app/globals.css` provides Tailwind base imports plus custom button and card styles
- `postcss.config.mjs` supports Tailwind v4 processing
- `app/(users)` route group demonstrates nested and reusable layouts

## Getting started

From the `01-intro` folder, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Key routes

- `/` - Homepage overview with feature cards
- `/about` - About section
- `/about/teams` - Nested teams page inside the about section
- `/contact` - Contact demo page
- `/blog` - Blog overview
- `/blog/blogCSR` - Client-side rendering demo
- `/blog/blogSSR` - Server-side rendering demo
- `/blog/blogSSG` - Static generation demo
- `/blog/blogISR` - Incremental static regeneration demo
- `/admin` - Admin layout example
- `/admin/about` - Admin about page
- `/products` - Products page
- `/users/[username]` - Dynamic user profile example
- `/users/[username]/posts/[postId]` - Nested dynamic post example
- `/slugs/[...slug]` - Catch-all route example, e.g. `/slugs/foo/bar`
- `/datafetch` - Data fetching route group
- `/datafetch/clientcomp` - Client component data fetch example
- `/datafetch/servercomp` - Server component data fetch example

## Notes

This project is a lightweight Next.js starter for learning modern routing and layout patterns. It is intentionally structured to showcase route groups, nested layouts, dynamic paths, and Tailwind-driven styling.

Feel free to extend the pages, update the theme, or add new route examples for your own demo.
