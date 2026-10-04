# Tanzania Student Portal — AI Assistance setup

The website is hosted on GitHub Pages, so the AI model should run behind a server-side endpoint. Do not put an AI API key or secret in index.html or other browser JavaScript.

Files included:
- ai-assistance.html — student-facing AI Assistance centre.
- ai-worker.js — Cloudflare Worker endpoint at /api/ai.
- wrangler.jsonc — Workers AI binding configuration.

## Cloudflare connection

1. Open Cloudflare and create/deploy a Worker for this project.
2. Use the included wrangler.jsonc configuration. Workers AI requires an AI binding named AI.
3. Deploy the Worker and note its workers.dev URL.
4. In ai-assistance.html, set AI_API_URL to the Worker endpoint, for example:
   https://tanzania-student-ai.your-subdomain.workers.dev/api/ai
5. Commit and redeploy the GitHub Pages site.
6. Open AI Assistance and test Study Assistant first.

The Worker restricts browser requests to the GitHub Pages origin and keeps the model connection server-side.

## Important

AI output is a draft and learning aid, not an official exam, admissions, scholarship or employment authority. Students should verify official information with the relevant provider. Never put passwords or sensitive personal information into prompts.

## Future upgrades

The same endpoint can later support richer document exports, authenticated accounts, usage limits, saved drafts and a site knowledge base.
