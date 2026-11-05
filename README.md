# demo-fe-django-react

Cross-platform **polyglot monorepo** configured for a **Python 3.15 / Django 6.1 REST** backend and **React 19 / React Native 0.88** frontend/mobile apps with **TypeScript 7.0+ (Go-based compiler & LSP)**.

## Monorepo Architecture

```text
demo-fe-django-react/
├── apps/
│   ├── backend/          # Django 6.1 REST API (uv workspace member: demo-backend)
│   │   ├── api/          # DRF endpoints, serializers, & pytest suite
│   │   ├── config/       # Django project settings, URLs, ASGI/WSGI
│   │   ├── manage.py
│   │   └── pyproject.toml
│   └── web/              # React 19 + Vite 8 + TypeScript 7 (Go) SPA (@demo/web)
│       ├── src/
│       ├── index.html
│       ├── package.json
│       ├── tsconfig.json
│       └── vite.config.ts
├── packages/
│   └── shared/           # Shared TypeScript 7 API contracts & client (@demo/shared)
│       ├── src/
│       ├── package.json
│       └── tsconfig.json
├── .vscode/              # Shared IDE profile settings, tasks, launch configs & extensions
├── pnpm-workspace.yaml   # Node/TS workspace definition (apps/web, apps/mobile, packages/*)
├── pyproject.toml        # Root Python uv workspace, Pyrefly, Ruff & Pytest config
├── tsconfig.base.json    # Shared strict TypeScript 7 (Go) compiler options
└── tsconfig.json         # Root IDE TypeScript project config
```

## Toolchain & Versions

| Layer | Technology | Version | Notes |
| :--- | :--- | :--- | :--- |
| **Python Runtime** | Python | `3.15.2` (also `3.14.10`) | Managed via Python Install Manager (`py`) & `uv` |
| **Python Package/Env** | `uv` | `0.13.7` | Fast cross-platform workspace & lockfile manager |
| **Python Typechecker/LSP** | `pyrefly` | `1.4.1` | High-performance Rust-based Python typechecker & IDE LSP |
| **Python Linter/Formatter** | `ruff` | `0.17.3` | Native LSP (`ruff server`) with Django lint rules (`DJ`) |
| **Backend Framework** | `Django` | `6.1.3` | With `djangorestframework 3.18.3`, `django-ninja 1.7.3`, `django-stubs` |
| **Node Runtime** | Node.js (`nvm`) | `26.13.0` (LTS) | Pinned in `.nvmrc` and `.node-version` |
| **Node Package Manager** | `pnpm` | `12.16.1` | Workspace-aware package manager (`pnpm-workspace.yaml`) |
| **TypeScript (Go)** | `typescript` (`tsgo`) | `7.0.2` | Native Go compiler (`@typescript/typescript-*`) + IDE LSP (`typescriptteam.native-preview`) |
| **Frontend / Build** | `react` / `vite` | `19.3.1` / `8.3.6` | Strict TypeScript 7 configuration with `/api` proxy to Django |

## Common Commands

```powershell
# Install/sync all Python and Node workspace dependencies
uv sync
pnpm install

# Run full polyglot typecheck (TypeScript 7 Go + Python Pyrefly)
pnpm run typecheck

# Run backend tests (pytest-django) and linter (Ruff)
pnpm run test:py
pnpm run lint:py

# Start development servers
pnpm run dev:backend   # Django 6.1 on http://localhost:8000
pnpm run dev:web       # React 19 + Vite on http://localhost:5173
```

## Cross-Platform Git & Line Endings

Configured to work seamlessly across **Windows 11, Linux, and macOS**:
- `.gitattributes` enforces `LF` (`eol=lf`) for all source, config, and POSIX shell files, while keeping `CRLF` (`eol=crlf`) exclusively for Windows-only scripts (`*.ps1`, `*.cmd`, `*.bat`).
- `.editorconfig` and `.vscode/settings.json` enforce UTF-8 encoding and `LF` line endings across editors.
- Global Git config enforces `core.autocrlf=input`, `core.eol=lf`, `core.filemode=false`, `core.ignorecase=false`, and `core.longpaths=true`.
