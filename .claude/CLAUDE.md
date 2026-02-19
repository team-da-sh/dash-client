# Project Overview

DASH (Da/sh) — a Korean-language dance class discovery and booking platform built with Next.js 15 App Router. Targets mobile viewports (375–430px). The app connects dance students with instructor/dancer profiles and classes.

## Commands

| Command | Description |
|---|---|
| `pnpm dev` | Start Next.js dev server |
| `pnpm build` | Production build |
| `pnpm lint` | ESLint (`eslint .`) |
| `pnpm storybook` | Storybook on port 6006 |
| `pnpm svgr` | Convert SVGs in `public/svg/` → TSX components in `src/shared/assets/svg/` |

## Architecture

### Directory Structure

- **`src/app/`** — Next.js App Router: pages, layouts, and BFF API routes
- **`src/common/`** — React-level shared code: reusable UI components, hooks, Zustand stores
- **`src/shared/`** — Domain-specific shared code: API clients, constants, types, utils
- **`src/mocks/`** — MSW v2 mock handlers and data for development

### Feature Colocation

Each route directory under `src/app/` colocates its own:
- `apis/` — data fetching functions and query hooks
- `components/` — page-specific components
- `hooks/`, `types/`, `constants/`, `utils/`, `schema/` (Zod) as needed

### Route Groups

- `src/app/(home)/` — home page
- `src/app/my/(student)/` — student sub-pages (classes, edit-profile)
- `src/app/my/(instructor)/` — instructor sub-pages (create-class, manage-classes, manage-profile, manage-account)

### BFF Proxy

`src/app/api/[...path]/route.ts` — catch-all proxy that forwards browser requests to the backend, injecting the `Authorization: Bearer` header from cookies. Auth-specific endpoints live under `src/app/api/auth/`.

## Key Patterns

### Data Fetching

- **HTTP client**: `ky`
- Two instances in `src/shared/apis/kyInstance.ts`:
  - `kyInstance` — unauthenticated (public/SSG)
  - `kyInstanceWithToken` — authenticated (injects token on SSR via `next/headers` cookies, handles 401 refresh)
- **Server state**: TanStack React Query v5 with `@lukemorales/query-key-factory`
  - Query keys centralized in `src/shared/constants/queryKey.ts`
  - QueryClient configured in `src/app/queryClient.ts` (1min staleTime, throwOnError: true)
- **API URL constants**: `src/shared/constants/apiURL.ts` — the `API_URL` object

### Styling

- **Vanilla Extract CSS** (`.css.ts` files) 
- Design tokens in `src/shared/styles/theme.css.ts` using `vars.colors`, `vars.fonts`, `vars.zIndex`
- Uses `@vanilla-extract/recipes` for variant styles and `clsx` for conditional classes

### State Management

- **Server state**: React Query (primary)
- **Global Client state**: Zustand v5 (stores in `src/common/stores/`)
- **Form state**: react-hook-form + Zod via `@hookform/resolvers`

### Auth

Cookie-based JWT (`ACCESS_TOKEN`, `TEMP_ACCESS_TOKEN` for onboarding). Enforced via:
- `src/middleware.ts` — route guards (auth-required, guest-only, onboarding, reservation, withdraw)
- BFF proxy — injects token from cookies into API requests

### Error Handling

Custom `ApiError` class in `src/shared/types/ApiError.ts` wraps ky `HTTPError`, named by status code for Sentry grouping. Mutation errors show toast notifications via `mutation.meta`.

## Conventions

### Naming

- Components/classes: `PascalCase`
- Files (non-component), folders, variables, functions: `camelCase`
- Constants: `BIG_SNAKE_CASE`
- Event handlers: `handle + feature + event` (e.g., `handleBtnClick`); prop keys: `on + event`
- Booleans: `is/can/should/has + state`
- API functions: `HTTP method + noun` (e.g., `getList`, `postReservation`)
- Props types: `ComponentName + PropTypes`; response types: `OOO + ResponseTypes`
- Use `interface` for objects, `type` alias for single values

### Coding

- Arrow functions only (no `function` keyword for components/handlers)
- `const` before `let`; no `var`
- Template literals for string composition (no `+`)
- Strict `===`/`!==` comparison
- `async/await` over `.then/.catch`
- Early return pattern encouraged
- `<button>` must have explicit `type` attribute
- No `index` as `key` in `.map()` — use server-provided `id` or uuid
- SVGs: run `pnpm svgr` then import from `src/shared/assets/svg/`

### Git

- **Default branch**: `develop`
- **Branch naming**: `feat/#issue/description`, `fix/#issue/description`, `refactor/#issue/description`
- **Commit prefixes**: `feat:`, `fix:`, `refactor:`, `style:`, `api:`, `chore:`, `setting:`, `docs:`, `rename:`, `remove:`, `test:`, `!HOTFIX:`, `!BREAKING CHANGE:`
