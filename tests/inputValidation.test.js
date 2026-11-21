/**
 * Assumed wrong-input validation tests for the selected utility functions.
 */

import { describe, expect, it } from "vitest";
import { add, divide, multiply, subtract } from "../src/math/basicMathUtils.js";
import { roundTo } from "../src/math/roundingUtils.js";
import { isEmail } from "../src/validation/emailValidationUtils.js";
import { hasMinimumLength } from "../src/validation/passwordValidationUtils.js";
import { isNumber } from "../src/validation/numberValidationUtils.js";
import { differenceInDays, isBefore } from "../src/dates/compareDateUtils.js";

describe.skip("input validation (assumed)", () => {
  it("rejects string inputs for add", () => {
    expect(() => add("2", "3")).toThrow(TypeError);
  });

  it("rejects string inputs for subtract", () => {
    expect(() => subtract("8", "3")).toThrow(TypeError);
  });

  it("rejects string inputs for multiply", () => {
    expect(() => multiply("3", "19.95")).toThrow(TypeError);
  });

  it("rejects string inputs for divide", () => {
    expect(() => divide("12", "3")).toThrow(TypeError);
  });

  it("rejects string numbers for roundTo", () => {
    expect(() => roundTo("19.956", 2)).toThrow(TypeError);
  });

  it("rejects string decimal counts for roundTo", () => {
    expect(() => roundTo(19.956, "2")).toThrow(TypeError);
  });

  it("rejects null for isEmail", () => {
    expect(() => isEmail(null)).toThrow(TypeError);
  });

  it("rejects a number for isEmail", () => {
    expect(() => isEmail(123)).toThrow(TypeError);
  });

  it("rejects a non-string password", () => {
    expect(() => hasMinimumLength(12345678, 8)).toThrow(TypeError);
  });

  it("rejects a negative minimum length", () => {
    expect(() => hasMinimumLength("123", -1)).toThrow(RangeError);
  });

  it("rejects a string minimum length", () => {
    expect(() => hasMinimumLength("123", "8")).toThrow(TypeError);
  });

  it("rejects a numeric string for isNumber", () => {
    expect(isNumber("25")).toBe(false);
  });

  it("rejects null for isNumber", () => {
    expect(isNumber(null)).toBe(false);
  });

  it("rejects invalid dates for isBefore", () => {
    expect(() => isBefore({}, new Date())).toThrow(TypeError);
  });

  it("rejects invalid dates for differenceInDays", () => {
    expect(() => differenceInDays({}, new Date())).toThrow(TypeError);
  });
});
