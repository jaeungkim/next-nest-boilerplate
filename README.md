# next-nest-boilerplate

pnpm workspace with a Next.js app and a NestJS API.

```
apps/web   Next.js 16 (App Router, Tailwind 4, shadcn/ui)   :3000
apps/api   NestJS 12 (ESM, oxlint, Swagger)                 :3001, routes under /api
```

## Run

```bash
pnpm install
pnpm dev        # both apps, in parallel
pnpm build
pnpm lint
```

Open http://localhost:3000. Next rewrites `/api/*` to Nest, so the browser never needs CORS. Swagger UI is at http://localhost:3000/api/docs.

## Web stack

| Need               | Library                                               |
| ------------------ | ----------------------------------------------------- |
| Server state       | `@tanstack/react-query` + `@suspensive/react-query-5` |
| API client         | `openapi-fetch` with types from `openapi-typescript`  |
| Forms              | `react-hook-form` + `@hookform/resolvers` + `zod`     |
| UI                 | shadcn/ui (Radix), `lucide-react`, `cn`               |
| Toasts / theme     | `sonner`, `next-themes`                               |
| Client / URL state | `zustand`, `nuqs`                                     |
| Utils              | `es-toolkit`                                          |
| Format             | Prettier + Tailwind plugin                            |

`src/app/page.tsx` uses each one once. Delete it when you start building.

## API types

Nest serves its OpenAPI spec at `/api/docs-json`, built from `*.dto.ts` classes and explicit controller return types (swagger CLI plugin). After changing an endpoint, with `pnpm dev` running:

```bash
pnpm --filter @repo/web gen:api
```

This regenerates `apps/web/src/lib/schema.d.ts`. Commit it. If it fails with `ECONNREFUSED`, the API is not running.

## Env

| Var       | App | Default                 | Notes                                                            |
| --------- | --- | ----------------------- | ---------------------------------------------------------------- |
| `PORT`    | api | `3001`                  | Next reads `PORT` too, so set it per app, not on root `pnpm dev` |
| `API_URL` | web | `http://localhost:3001` | Read by `next.config.ts`, so set it at build                     |
