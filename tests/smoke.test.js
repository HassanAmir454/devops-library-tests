/**
 * Tiny smoke test for the utility library.
 */

import { describe, expect, it } from "vitest";
import { first } from "../src/arrays/basicArrayUtils.js";

/**
 * Verifies that a library export can be imported and used.
 * @returns {void}
 */
function smokeTest() {
  expect(first([1, 2, 3])).toBe(1);
}

describe("library import", () => {
  it("imports and calls a library function", smokeTest);
});
