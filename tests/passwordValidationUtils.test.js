/**
 * Unit tests for src/validation/passwordValidationUtils.js.
 */

import { describe, expect, it } from "vitest";
import { hasMinimumLength } from "../src/validation/passwordValidationUtils.js";

describe("hasMinimumLength", () => {
  it("accepts a password at the exact minimum length", () => {
    expect(hasMinimumLength("12345678", 8)).toBe(true);
  });

  it("accepts a password longer than the minimum", () => {
    expect(hasMinimumLength("123456789", 8)).toBe(true);
  });

  it("rejects a password one character below the minimum", () => {
    expect(hasMinimumLength("1234567", 8)).toBe(false);
  });

  it("handles an empty password with zero minimum", () => {
    expect(hasMinimumLength("", 0)).toBe(true);
  });
});
