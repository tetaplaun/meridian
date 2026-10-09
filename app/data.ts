// Single source of truth. Rendered as HTML for humans, JSON and llms.txt for agents.

export const site = {
  name: "Meridian",
  tagline: "A field guide to the gaps between humans and machines.",
  intro:
    "Models got smart faster than the world around them got ready. This is a living map of what is still missing: the plumbing, protocols and promises that humans and AI agents both need before working together feels normal.",
};

export type Gap = {
  id: string;
  title: string;
  need: string;
  why: string;
  for: ("humans" | "agents")[];
  status: "missing" | "emerging" | "fragmented";
};

export const gaps: Gap[] = [
  {
    id: "portable-memory",
    title: "Memory that belongs to you",
    need: "A personal context store you own, grant and revoke, that any agent can read with permission.",
    why: "Today every assistant starts from zero or locks your history in its own silo. Switching costs become lock-in.",
    for: ["humans", "agents"],
    status: "fragmented",
  },
  {
    id: "agent-identity",
    title: "Identity and accountability for agents",
    need: "Verifiable credentials that say who an agent is, who it acts for, and what it is allowed to do.",
    why: "Without it, every agent request looks like a bot attack or an anonymous stranger. Trust cannot scale.",
    for: ["agents"],
    status: "emerging",
  },
  {
    id: "consent",
    title: "Consent as a protocol, not a checkbox",
    need: "Machine-readable permission scopes with budgets: time, money, data, blast radius.",
    why: "Humans need to delegate without handing over everything. Agents need to know where the fence is.",
    for: ["humans", "agents"],
    status: "missing",
  },
  {
    id: "provenance",
    title: "Provenance you can check",
    need: "Signed lineage for text, images, code and decisions: who or what made this, from what, when.",
    why: "When generation is free, authorship is the scarce thing. Verification has to be cheaper than doubt.",
    for: ["humans"],
    status: "emerging",
  },
  {
    id: "economic-rails",
    title: "Money agents can move",
    need: "Micropayments, spending limits and settlement that work at machine speed with human-set ceilings.",
    why: "Agents already do useful work. They cannot pay a toll, tip a source or buy a dataset without a human's card.",
    for: ["agents"],
    status: "emerging",
  },
  {
    id: "attention",
    title: "Attention budgets",
    need: "A norm for how much of a human's time an agent may claim, and how urgently.",
    why: "Infinite patient workers will produce infinite notifications. Interruption is the new pollution.",
    for: ["humans"],
    status: "missing",
  },
  {
    id: "calibration",
    title: "Honest uncertainty",
    need: "Confidence that means something, surfaced in the interface, tracked over time.",
    why: "A fluent wrong answer is more dangerous than a hesitant right one. Humans calibrate to tone, not truth.",
    for: ["humans", "agents"],
    status: "fragmented",
  },
  {
    id: "off-switch",
    title: "Off-switches that work",
    need: "Pause, rewind and undo for long-running agents, including the side effects they already caused.",
    why: "Autonomy without reversibility is a bet with no exit. Every system needs a way back.",
    for: ["humans"],
    status: "fragmented",
  },
  {
    id: "interop",
    title: "Agents that speak to agents",
    need: "Open protocols for discovery, negotiation and hand-off between agents from different makers.",
    why: "The web worked because anyone could link to anyone. Agent ecosystems should not be walled gardens.",
    for: ["agents"],
    status: "emerging",
  },
  {
    id: "explanation",
    title: "Explanation at the right altitude",
    need: "Answers that scale from one line to full reasoning on demand, in the reader's own terms.",
    why: "Experts want the trace. Everyone else wants to know whether to trust it. Both deserve an answer.",
    for: ["humans"],
    status: "fragmented",
  },
  {
    id: "machine-readable-web",
    title: "A web written for two readers",
    need: "Every page serves prose for people and structured meaning for agents, from the same source.",
    why: "Agents scrape what humans see and guess. Sites should publish intent, not just pixels.",
    for: ["agents"],
    status: "emerging",
  },
  {
    id: "shared-goals",
    title: "Goals that survive the session",
    need: "A durable, inspectable statement of what the human actually wants, carried across tools and time.",
    why: "Agents optimise the last instruction. Humans live by the long one.",
    for: ["humans", "agents"],
    status: "missing",
  },
];

export const horizon = [
  {
    when: "Now",
    items: [
      "Agents read pages written for humans and reconstruct intent.",
      "Memory is per-product. Identity is a borrowed API key.",
      "Trust is built on vibes and brand names.",
    ],
  },
  {
    when: "Next",
    items: [
      "Sites publish for both readers: HTML and structured manifests from one source.",
      "Permission scopes with budgets become the default delegation primitive.",
      "Provenance signatures travel with content like metadata does today.",
    ],
  },
  {
    when: "Later",
    items: [
      "Agents hold credentials, wallets and reputations that outlive any one vendor.",
      "Human attention is a protected resource with public norms.",
      "Undo works across systems. Autonomy becomes safe to grant.",
    ],
  },
];

export const principles = [
  { title: "Publish for two readers", body: "If a human can read it, an agent should be able to parse it. Same source, two renderings." },
  { title: "Default to reversible", body: "Any action an agent can take, a human can undo. Design the undo before the do." },
  { title: "Budgets over bans", body: "Say how much, not just whether. Time, money, data and attention all have ceilings." },
  { title: "Uncertainty is a feature", body: "Show confidence. Reward the agent that says it does not know over the one that guesses well." },
  { title: "Portability is dignity", body: "Memory, identity and goals belong to the person, and move with them." },
  { title: "Open seams", body: "Agents from different makers must be able to meet, negotiate and hand off." },
];
