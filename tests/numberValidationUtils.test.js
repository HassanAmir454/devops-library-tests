/**
 * Unit tests for src/validation/numberValidationUtils.js.
 */

import { describe, expect, it } from "vitest";
import { isNumber } from "../src/validation/numberValidationUtils.js";

describe("isNumber", () => {
  it("accepts a positive integer", () => {
    expect(isNumber(25)).toBe(true);
  });

  it("accepts a negative decimal", () => {
    expect(isNumber(-19.95)).toBe(true);
  });

  it("accepts zero", () => {
    expect(isNumber(0)).toBe(true);
  });

  it("accepts Infinity", () => {
    expect(isNumber(Infinity)).toBe(true);
  });

  it("rejects NaN", () => {
    expect(isNumber(Number.NaN)).toBe(false);
  });

  it("rejects a numeric string", () => {
    expect(isNumber("25")).toBe(false);
  });

  it("rejects null", () => {
    expect(isNumber(null)).toBe(false);
  });

  it("rejects a Number object", () => {
    expect(isNumber(new Number(25))).toBe(false);
  });
});
