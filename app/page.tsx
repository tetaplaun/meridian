import { site, gaps, horizon, principles } from "./data";
import { ViewToggle } from "./view-toggle";

const statusColor = {
  missing: "bg-accent",
  emerging: "bg-ink",
  fragmented: "bg-muted",
} as const;

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 pb-24">
      <header className="relative overflow-hidden pt-20 pb-16 sm:pt-32 sm:pb-24">
        <div aria-hidden className="grid-bg absolute inset-0 -z-10 opacity-60" />
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <span className="font-mono text-sm uppercase tracking-widest">{site.name}</span>
          <ViewToggle />
        </div>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
          {site.tagline}
        </h1>
        <p className="for-human mt-8 max-w-2xl text-lg text-muted">{site.intro}</p>
        <pre className="for-agent mt-8 max-w-2xl overflow-x-auto font-mono text-sm text-muted">
          {JSON.stringify({ name: site.name, tagline: site.tagline, manifest: "/api/manifest", llms: "/llms.txt" }, null, 2)}
        </pre>
      </header>

      <Section n="01" title="What is missing">
        <ul className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {gaps.map((g) => (
            <li key={g.id} id={g.id} className="flex flex-col gap-3 bg-paper p-6 transition-colors hover:bg-line/40">
              <div className="flex items-center justify-between font-mono text-xs text-muted">
                <span className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${statusColor[g.status]}`} />
                  {g.status}
                </span>
                <span>{g.for.join(" + ")}</span>
              </div>
              <h3 className="text-xl font-medium leading-tight">{g.title}</h3>
              <p className="for-human text-sm">{g.need}</p>
              <p className="for-human text-sm text-muted">{g.why}</p>
              <pre className="for-agent whitespace-pre-wrap font-mono text-xs text-muted">
                {JSON.stringify({ id: g.id, need: g.need, why: g.why }, null, 1)}
              </pre>
            </li>
          ))}
        </ul>
      </Section>

      <Section n="02" title="Horizon">
        <ol className="grid gap-10 sm:grid-cols-3">
          {horizon.map((h, i) => (
            <li key={h.when} className="border-t border-line pt-5">
              <div className="mb-4 flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted">{String(i).padStart(2, "0")}</span>
                <h3 className="text-2xl font-medium">{h.when}</h3>
              </div>
              <ul className="space-y-3 text-sm">
                {h.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-accent" />
                    {it}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section n="03" title="Principles for builders">
        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title}>
              <dt className="text-lg font-medium">{p.title}</dt>
              <dd className="mt-1 text-sm text-muted">{p.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <footer className="mt-24 flex flex-wrap justify-between gap-4 border-t border-line pt-8 font-mono text-xs text-muted">
        <span>This page is written for two readers.</span>
        <span className="flex gap-4">
          <a className="hover:text-ink" href="/llms.txt">/llms.txt</a>
          <a className="hover:text-ink" href="/api/manifest">/api/manifest</a>
        </span>
      </footer>
    </main>
  );
}

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-24">
      <div className="mb-8 flex items-baseline gap-4">
        <span className="font-mono text-xs text-accent">{n}</span>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
