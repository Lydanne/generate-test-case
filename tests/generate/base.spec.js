const { repeat } = require("../../src/generate/base");

describe("base.js", () => {
  it("repeat", () => {
    const fn = jest.fn();
    repeat(fn, 11);
    expect(fn).toBeCalledTimes(11);
  });
});
