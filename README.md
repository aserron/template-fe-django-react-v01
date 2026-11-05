# demo-fe-django-react

Cross-platform full-stack workspace configured for **Python 3.15 / Django 6.1** backend and **React 19 / React Native 0.88** with **TypeScript 7.0+ (Go-based compiler & LSP)**.

## Toolchain & Versions

| Layer | Technology | Version | Notes |
| :--- | :--- | :--- | :--- |
| **Python Runtime** | Python | `3.15.2` (also `3.14.10`) | Managed via Python Install Manager (`py`) & `uv` |
| **Python Package/Env** | `uv` | `0.13.7` | Fast cross-platform environment & lockfile manager |
| **Python Typechecker/LSP** | `pyrefly` | `1.4.1` | High-performance Rust-based Python typechecker & IDE LSP |
| **Python Linter/Formatter** | `ruff` | `0.17.3` | Native LSP (`ruff server`) with Django lint rules (`DJ`) |
| **Backend Framework** | `Django` | `6.1.3` | With `djangorestframework 3.18.3`, `django-ninja 1.7.3`, `django-stubs` |
| **Node Runtime** | Node.js (`nvm`) | `26.13.0` (LTS) | Pinned in `.nvmrc` and `.node-version` |
| **Node Package Manager** | `pnpm` | `12.16.1` | Fast, disk-efficient package manager |
| **TypeScript (Go)** | `typescript` (`tsgo`) | `7.0.2` | Native Go compiler (`@typescript/typescript-*`) + IDE LSP (`typescriptteam.native-preview`) |
| **Frontend / Mobile** | `react` / `react-native` | `19.3.1` / `0.88.1` | Strict TypeScript 7 configuration |

## Cross-Platform Git & Line Endings

Configured to work seamlessly across **Windows 11, Linux, and macOS**:
- `.gitattributes` enforces `LF` (`eol=lf`) for all source, config, and POSIX shell files, while keeping `CRLF` (`eol=crlf`) exclusively for Windows-only scripts (`*.ps1`, `*.cmd`, `*.bat`).
- `.editorconfig` and `.vscode/settings.json` enforce UTF-8 encoding and `LF` line endings across editors.
- Global Git config enforces `core.autocrlf=input`, `core.eol=lf`, `core.filemode=false`, `core.ignorecase=false`, and `core.longpaths=true`.

