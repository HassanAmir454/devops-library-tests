/**
 * Unit tests for src/validation/emailValidationUtils.js.
 */

import { describe, expect, it } from "vitest";
import { isEmail } from "../src/validation/emailValidationUtils.js";

describe("isEmail", () => {
  it("accepts a basic email containing a local and domain part", () => {
    expect(isEmail("customer@example.com")).toBe(true);
  });

  it("accepts a plus-addressed email", () => {
    expect(isEmail("customer+shop@example.co.uk")).toBe(true);
  });

  it("rejects an address without an at sign", () => {
    expect(isEmail("customer.example.com")).toBe(false);
  });

  it("rejects an address with an empty domain", () => {
    expect(isEmail("customer@")).toBe(false);
  });

  it("rejects an empty string", () => {
    expect(isEmail("")).toBe(false);
  });
});
