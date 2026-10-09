import { test } from "node:test";
import assert from "node:assert/strict";
import { gaps, horizon, principles } from "./data.ts";

test("every gap is complete and unique", () => {
  const ids = new Set(gaps.map((g) => g.id));
  assert.equal(ids.size, gaps.length, "duplicate gap id");
  for (const g of gaps) {
    assert.ok(g.title && g.need && g.why, `${g.id} missing text`);
    assert.ok(g.for.length > 0, `${g.id} has no audience`);
    assert.ok(["missing", "emerging", "fragmented"].includes(g.status));
  }
});

test("horizon and principles are non-empty", () => {
  assert.deepEqual(horizon.map((h) => h.when), ["Now", "Next", "Later"]);
  assert.ok(horizon.every((h) => h.items.length > 0));
  assert.ok(principles.length >= 3);
});
