/**
 * Unit tests for src/math/basicMathUtils.js.
 */

import { describe, expect, it } from "vitest";
import { add, divide, multiply, subtract } from "../src/math/basicMathUtils.js";

describe("add", () => {
  it("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("adds zero", () => {
    expect(add(10, 0)).toBe(10);
  });

  it("adds negative numbers", () => {
    expect(add(-4, -6)).toBe(-10);
  });

  it("adds decimal numbers", () => {
    expect(add(1.25, 2.5)).toBe(3.75);
  });
});

describe("subtract", () => {
  it("subtracts two positive numbers", () => {
    expect(subtract(8, 3)).toBe(5);
  });

  it("subtracts zero", () => {
    expect(subtract(10, 0)).toBe(10);
  });

  it("subtracts negative numbers", () => {
    expect(subtract(-4, -6)).toBe(2);
  });

  it("subtracts decimal numbers", () => {
    expect(subtract(5.75, 2.5)).toBe(3.25);
  });
});

describe("divide", () => {
  it("divides two positive numbers", () => {
    expect(divide(12, 3)).toBe(4);
  });

  it("divides decimal numbers", () => {
    expect(divide(7.5, 2.5)).toBe(3);
  });

  it("handles negative operands", () => {
    expect(divide(-8, 2)).toBe(-4);
  });

  it("returns Infinity when dividing by zero", () => {
    expect(divide(5, 0)).toBe(Infinity);
  });
});

describe("multiply", () => {
  it("calculates quantity times unit price", () => {
    expect(multiply(3, 19.95)).toBeCloseTo(59.85);
  });

  it("returns zero when one operand is zero", () => {
    expect(multiply(25, 0)).toBe(0);
  });

  it("multiplies negative operands", () => {
    expect(multiply(-4, 3)).toBe(-12);
  });

  it("returns positive for two negative operands", () => {
    expect(multiply(-4, -3)).toBe(12);
  });
});
