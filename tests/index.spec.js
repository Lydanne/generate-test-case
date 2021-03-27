describe("index.js", () => {
  it("global", () => {
    process.env.TEST = "1";
    expect(process.env.TEST).toBe("1");
  });
});
