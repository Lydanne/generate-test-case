const { incrNumArr } = require("../../src/generate/array");

describe("array.js", () => {
  it("incrNumArr", () => {
    expect(incrNumArr(1, 5, 2)).toEqual([1, 3, 5, 7, 9]);
  });
});
