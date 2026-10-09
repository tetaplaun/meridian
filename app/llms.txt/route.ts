import { site, gaps, horizon, principles } from "@/app/data";

export function GET() {
  const lines = [
    `# ${site.name}`,
    `> ${site.tagline}`,
    "",
    site.intro,
    "",
    "## Gaps",
    ...gaps.map((g) => `- ${g.title} [${g.status}; for ${g.for.join(", ")}]: ${g.need} ${g.why}`),
    "",
    "## Horizon",
    ...horizon.flatMap((h) => [`### ${h.when}`, ...h.items.map((i) => `- ${i}`)]),
    "",
    "## Principles",
    ...principles.map((p) => `- ${p.title}: ${p.body}`),
    "",
    "## Machine endpoints",
    "- /api/manifest : this content as JSON",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
