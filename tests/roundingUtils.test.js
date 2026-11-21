/**
 * Unit tests for src/math/roundingUtils.js.
 */

import { describe, expect, it } from "vitest";
import { roundTo } from "../src/math/roundingUtils.js";

describe("roundTo", () => {
  it("rounds an invoice amount to two decimal places", () => {
    expect(roundTo(19.956, 2)).toBe(19.96);
  });

  it("returns the whole number at zero decimal places", () => {
    expect(roundTo(19.6, 0)).toBe(20);
  });

  it("rounds negative numbers", () => {
    expect(roundTo(-1.235, 2)).toBe(-1.24);
  });

  it("handles a value that is already at the requested precision", () => {
    expect(roundTo(42.5, 2)).toBe(42.5);
  });
});
