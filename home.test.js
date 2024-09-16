const { math_operations } = require("./home");

describe("math js test", () => {
  it("should test arithmetic", () => {
    expect(math_operations(2, 2, 2, 2)).toBe(10)
  });
});