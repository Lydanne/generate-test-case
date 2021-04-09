const { toBST } = require("../../src/transform/tree");
describe("tree.js", () => {
  it("toBST", () => {
    const arr = [1, 2, 3, 4];
    const tree = toBST(arr);

    console.log(tree + "");

    expect(tree).toEqual({
      val: 3,
      left: {
        val: 2,
        left: {
          val: 1,
          left: null,
          right: null,
        },
        right: null,
      },
      right: {
        val: 4,
        left: null,
        right: null,
      },
    });
  });
});
