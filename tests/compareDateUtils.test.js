/**
 * Unit tests for src/dates/compareDateUtils.js.
 */

import { describe, expect, it } from "vitest";
import { differenceInDays, isBefore } from "../src/dates/compareDateUtils.js";

describe("isBefore", () => {
  it("returns true when date1 is earlier than date2", () => {
    expect(isBefore(new Date("2026-11-20T00:00:00Z"), new Date("2026-11-21T00:00:00Z"))).toBe(true);
  });

  it("returns false when date1 is later than date2", () => {
    expect(isBefore(new Date("2026-11-21T00:00:00Z"), new Date("2026-11-20T00:00:00Z"))).toBe(false);
  });

  it("returns false when both dates are equal", () => {
    const date = new Date("2026-11-20T00:00:00Z");
    expect(isBefore(date, new Date(date))).toBe(false);
  });

  it("compares timestamps across month boundaries", () => {
    expect(isBefore(new Date("2026-11-30T23:59:59Z"), new Date("2026-12-01T00:00:00Z"))).toBe(true);
  });
});

describe("differenceInDays", () => {
  it("returns a positive whole day when date1 is one day after date2", () => {
    expect(differenceInDays(
      new Date("2026-11-21T00:00:00Z"),
      new Date("2026-11-20T00:00:00Z")
    )).toBe(1);
  });

  it("returns a negative whole day when date1 is one day before date2", () => {
    expect(differenceInDays(
      new Date("2026-11-20T00:00:00Z"),
      new Date("2026-11-21T00:00:00Z")
    )).toBe(-1);
  });

  it("returns zero for identical dates", () => {
    const date = new Date("2026-11-20T00:00:00Z");
    expect(differenceInDays(date, new Date(date))).toBe(0);
  });

  it("returns fractional days for partial-day differences", () => {
    expect(differenceInDays(
      new Date("2026-11-21T12:00:00Z"),
      new Date("2026-11-20T00:00:00Z")
    )).toBe(1.5);
  });
});
