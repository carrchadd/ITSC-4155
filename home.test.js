const { math_operations } = require("./home");

describe("home js test", () => {

  it("should test arithmetic", () => {
    expect(math_operations(1, 4, 6, 3)).toBe(73)
  });
});