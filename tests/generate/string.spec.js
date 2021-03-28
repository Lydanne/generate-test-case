const { randomStr } = require("../../src/generate/string");

describe("string.js", () => {
  it("randomStr", () => {
    Math.random = () => 0;
    expect(randomStr(1, ["A", "B"])).toBe("A");
    Math.random = () => 0.8;
    expect(randomStr(1, ["A", "B"])).toBe("B");
  });
});
