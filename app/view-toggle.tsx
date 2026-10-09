"use client";

import { useEffect, useState } from "react";

// Swaps the page between a prose rendering and a structured one.
// A data attribute on <html> plus CSS does the work; nothing re-renders.
export function ViewToggle() {
  const [view, setView] = useState<"human" | "agent">("human");
  useEffect(() => {
    document.documentElement.dataset.view = view;
  }, [view]);

  return (
    <div role="radiogroup" aria-label="Reader" className="inline-flex rounded-full border border-line p-1 font-mono text-xs">
      {(["human", "agent"] as const).map((v) => (
        <button
          key={v}
          role="radio"
          aria-checked={view === v}
          onClick={() => setView(v)}
          className="rounded-full px-3 py-1 text-muted transition-colors hover:text-ink aria-checked:bg-ink aria-checked:text-paper"
        >
          {v === "human" ? "I am human" : "I am an agent"}
        </button>
      ))}
    </div>
  );
}
