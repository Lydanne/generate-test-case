const { getLine } = require("../../src/tools/stdin");

describe("stdin.js", () => {
  it("sync readline", () => {
    getLine().then((v) => {
      expect(v).toBe("111");
      close();
    });
    setTimeout(() => {
      process.stdin._write("111", "utf8", (err) => {});
    });
  });
});
