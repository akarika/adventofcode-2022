import { describe, it, expect } from "vitest";
import { sum } from "../src";

describe("add", () => {
  it("should sum of 2 and 3 equals to 5", () => {
    expect(sum(2, 3)).toEqual(5);
  });
});
