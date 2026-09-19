# SeniorInsight Web Portal

Initial React website setup using the latest Vite + React + TypeScript stack.

## Requirements

- Node.js 22+ (latest LTS recommended)

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Configure environment variables:

   ```bash
   cp .env.example .env
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

## Java Spring backend integration

The frontend reads the backend base URL from:

- `VITE_API_BASE_URL` (default: `http://localhost:8080/api`)

The initial app checks backend health by calling:

- `GET {VITE_API_BASE_URL}/health`

Make sure your Spring backend exposes this endpoint and has CORS enabled for the frontend origin (`http://localhost:5173` by default).

## Scripts

- `npm run dev` – start local dev server
- `npm run build` – type-check and build for production
- `npm run lint` – run lint checks
- `npm run preview` – preview production build locally
