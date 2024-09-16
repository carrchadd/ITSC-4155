const { math_operations } = require("./home");

describe("home js test", () => {
  // it("should test json  ", async () => {
  //   expect(await print_json()).toBe(true);
  // });

  it("should test arithmetic", () => {
    expect(math_operations(1, 4, 6, 3)).toBe(74)
  });
});