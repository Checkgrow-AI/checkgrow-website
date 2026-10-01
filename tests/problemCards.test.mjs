import test from "node:test";
import assert from "node:assert/strict";
import { problemTools, problemCardState } from "../src/lib/problemCards.ts";

test("the five tools form the reference staircase without occupied-slot collisions", () => {
  assert.equal(problemTools.length, 5);
  assert.equal(new Set(problemTools.map(tool => tool.id)).size, 5);
  assert.equal(new Set(problemTools.map(tool => `${tool.column}:${tool.row}`)).size, 5);
  assert.deepEqual(problemTools.filter(tool => tool.column === 0).map(tool => tool.row), [1, 2]);
  assert.deepEqual(problemTools.filter(tool => tool.column === 1).map(tool => tool.row), [0, 1, 2]);
  for (const tool of problemTools) assert.equal(tool.bullets.length, 4);
});

for (const selected of problemTools) {
  test(`${selected.name} takes only its own column and leaves the other column available`, () => {
    for (const tool of problemTools) {
      const state = problemCardState(tool, selected.id, true);
      assert.equal(state.expanded, tool.id === selected.id);
      assert.equal(state.covered, tool.column === selected.column && tool.id !== selected.id);
      assert.equal(state.top, state.expanded ? 0 : tool.row * 100 / 3);
      assert.equal(state.height, state.expanded ? 100 : 100 / 3);
      assert.ok(state.top + state.height <= 100 + Number.EPSILON * 100);
    }
  });
}

test("phone accordions keep every other tool available, including after resizing", () => {
  for (const selected of problemTools) {
    for (const tool of problemTools) {
      const state = problemCardState(tool, selected.id, false);
      assert.equal(state.covered, false);
      assert.equal(state.expanded, tool.id === selected.id);
    }
  }
});

test("closing or an unknown selection restores every original tile slot", () => {
  for (const active of [null, "missing"]) {
    for (const tool of problemTools) {
      assert.deepEqual(problemCardState(tool, active, true), {
        expanded: false, covered: false, top: tool.row * 100 / 3, height: 100 / 3,
      });
    }
  }
});
