# Resuelvex

Plataforma de gestión y trámite de constitución de compañías en Venezuela (Gran Caracas). Monorepo con el landing, el portal de clientes y el panel de administración.

## Stack

- **Frontend:** Next.js (App Router) + React + Mantine
- **Backend:** Node.js + Express
- **Base de datos:** MongoDB (Atlas)
- **Autenticación:** Auth0
- **Monorepo:** Turborepo + npm workspaces

## Estructura

```
resuelvex/
├── apps/
│   ├── web/      # Frontend — landing, portal de cliente, panel de admin
│   └── api/      # Backend — lógica de negocio, MongoDB, autenticación
├── packages/
│   └── shared/   # Tipos y constantes compartidas entre web y api
```

## Alcance de la Fase 1 (MVP actual)

- Landing page.
- Panel de administrador: crear clientes, crear trámites, cambiar su estado.
- Portal de cliente: ver el estado de su trámite.
- Los pagos se coordinan por WhatsApp, fuera de la plataforma — el sistema no maneja pagos en esta fase.

## Requisitos

- Node.js 20 LTS
- Cuenta de [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Tenant de [Auth0](https://auth0.com/signup)

## Setup

Ver la guía completa de instalación paso a paso en `docs/setup.md` (o pídesela a Andrea/[nombre del novio] si no está en el repo todavía).

Resumen rápido:

```bash
npm install
npm run dev
```

Esto levanta `apps/web` en `http://localhost:3000` y `apps/api` en `http://localhost:4000` al mismo tiempo.

### Variables de entorno

Cada app necesita su propio archivo de entorno, que **no se sube a Git**:

- `apps/api/.env` — `MONGODB_URI`, `AUTH0_DOMAIN`, `AUTH0_AUDIENCE`, `CORS_ORIGIN`
- `apps/web/.env.local` — `AUTH0_DOMAIN`, `AUTH0_CLIENT_ID`, `AUTH0_CLIENT_SECRET`, `AUTH0_SECRET`, `AUTH0_AUDIENCE`, `APP_BASE_URL`, `NEXT_PUBLIC_API_URL`

Pide los valores reales a quien tenga acceso a Auth0 y MongoDB Atlas — nunca se comparten por chat ni se commitean.

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Levanta `apps/web` y `apps/api` en modo desarrollo |
| `npm run build` | Compila ambas apps para producción |
| `npm run lint` | Corre el linter en todo el monorepo |

## Convenciones

- Ramas de trabajo (`git checkout -b nombre`) + Pull Request hacia `master` — no se sube directo a `master`.
- Commits en español, descriptivos de qué cambia y por qué.

---

*Documento de trabajo — no sustituye asesoría legal, fiscal o societaria específica.*
