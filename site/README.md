# Website

Static landing page plus one Cloudflare Pages Function for the early-access list.

## Deploy on Cloudflare Pages

1. Create a Pages project connected to this repo.
2. Build settings: no build command. Root directory: `site`. Output directory: `/` (the root directory itself).
3. Create a KV namespace (e.g. `pa-handshake-waitlist`) and bind it to the Pages project as `WAITLIST`.
4. Add your custom domain in the Pages project.

## Local preview

```
npx wrangler pages dev site --kv WAITLIST
```

## Read the waitlist

```
npx wrangler kv key list --namespace-id <id> --prefix email:
```
