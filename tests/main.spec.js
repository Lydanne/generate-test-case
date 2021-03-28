const main = require("../src/main");

describe("main.js", () => {
  it("main", () => {
    const result = main({
      configPath: "./tests/.example/config.js",
      root: "./tests/.example/",
      count: 2,
    });

    expect(result).toEqual([
      { stdin: "AB", stdout: "4\n" },
      { stdin: "ABAB", stdout: "16\n" },
    ]);
  });
});
