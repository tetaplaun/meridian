# Meridian

A field guide to the gaps between humans and machines. Next.js 16, Tailwind 4, no other dependencies.

The site is written for two readers. One source file (`app/data.ts`) renders three ways:

| Route | Reader |
|---|---|
| `/` | Humans. Toggle "I am an agent" in the header to see the structured view. |
| `/llms.txt` | Agents, plain text. |
| `/api/manifest` | Agents, JSON. |

```sh
npm install
npm run dev
```

Edit `app/data.ts` to add a gap, horizon item or principle. Every rendering updates.
