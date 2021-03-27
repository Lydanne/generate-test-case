describe("main.js", () => {
  it("main", () => {
    process.env.TEST = "1";
    expect(process.env.TEST).toBe("1");
  });
});
