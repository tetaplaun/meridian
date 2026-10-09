# Meridian

**A field guide to the gaps between humans and AI agents.**

[![CI](https://github.com/tetaplaun/meridian/actions/workflows/ci.yml/badge.svg)](https://github.com/tetaplaun/meridian/actions/workflows/ci.yml)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tetaplaun/meridian)

Models got smart faster than the world around them got ready. Meridian maps what is still missing: portable memory, agent identity, consent as a protocol, attention budgets, off-switches that work, goals that survive the session, and more.

## The site is written for two readers

One source file, `app/data.ts`, renders three ways:

| Route | Reader |
|---|---|
| `/` | Humans. Toggle **"I am an agent"** in the header to flip the page into its structured view. |
| `/llms.txt` | Agents, plain text. |
| `/api/manifest` | Agents, JSON. |

This is the pattern Meridian argues for: if a human can read it, an agent should be able to parse it. Same source, two renderings.

## Run it

```sh
npm install
npm run dev
```

Next.js 16, Tailwind 4, zero other runtime dependencies. Tests use Node's built-in runner.

```sh
npm test
```

## Contribute a gap

Edit `app/data.ts`. Add an entry with a `title`, what is missing (`need`), why it matters (`why`), who it is for, and a status of `missing`, `emerging` or `fragmented`. Every rendering updates. Open a PR.

## License

MIT
