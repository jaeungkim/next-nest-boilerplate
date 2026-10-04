# next-nest-boilerplate

pnpm workspace with a Next.js app and a NestJS API.

```
apps/web   Next.js 16 (App Router, Tailwind, ESLint)   :3000
apps/api   NestJS 12 (ESM, Vitest, oxlint)              :3001, routes under /api
```

## Run

```bash
pnpm install
pnpm dev      # both apps, in parallel
pnpm build
pnpm lint
pnpm test
```

Open http://localhost:3000. The page fetches `/api/health`; Next rewrites `/api/*` to the Nest server, so the browser never needs CORS.

## Env

| Var       | App | Default                 | Notes                                                            |
| --------- | --- | ----------------------- | ---------------------------------------------------------------- |
| `PORT`    | api | `3001`                  | Next reads `PORT` too, so set it per app, not on root `pnpm dev` |
| `API_URL` | web | `http://localhost:3001` | Read by `next.config.ts`, so set it at build                     |
