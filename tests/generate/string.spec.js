const {
  randomStr,
  repeatRandomStr,
  repeatStr,
} = require("../../src/generate/string");

describe("string.js", () => {
  it("randomStr", () => {
    Math.random = () => 0;
    expect(randomStr(["A", "B"])).toBe("A");
    Math.random = () => 0.8;
    expect(randomStr(["A", "B"])).toBe("B");
  });

  it("repeatRandomStr", () => {
    Math.random = () => 0;
    expect(repeatRandomStr(["A", "B"], 2)).toEqual("AA");
  });

  it("repeat str", () => {
    expect(repeatStr("AB", 2)).toEqual("ABAB");
  });
});
