const { math_operations } = require("./home");

describe("client math js test", () => {

  it("should test arithmetic", () => {
    expect(math_operations(1, 1, 1, 1)).toBe(2)
  });
});