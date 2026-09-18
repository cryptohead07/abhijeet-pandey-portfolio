# Abhijeet Pandey — Portfolio

Personal portfolio for Abhijeet Pandey: founder, developer, and product builder.

## Run locally

This project requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

## Deploy to Cloudflare Workers

Build the Worker bundle, then deploy the generated Wrangler configuration from `dist/server`.

```bash
npm run build
npx wrangler deploy --config dist/server/wrangler.json
```

The site has no authentication, database, or runtime bindings. It is intended to be publicly accessible once deployed through your Cloudflare account.
