const { generateTestCase } = require("../../src/core/generateTestCase");
/**
 * 1、通过函数接收一个输入模版文件和待执行源码文件来生成输入与输出的测试用例子的函数
 * 2、解析这个模版来生成输入测试用例
 * 3、逐条输入输入实例来运行待执行的程序，并且得到输出实例
 * 4、将输入实例和输出实例保存为文件
 * 5、封装为命令行工具
 */

describe("generateTestCase.js", () => {
  const source = `
  /**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  return 1 << s.length;
};

async function main() {
  const input = await getLine();
  const output = calculate(input);
  console.log(output);
  close();
}

main();

  `;
  const stdinTemplate = `{ repeatStr("AB", ($i+1)) }`;

  it("A function that takes an input template file and an executable source file to generate input and output test examples.", () => {
    const datas = generateTestCase({ source, stdinTemplate, count: 2 });

    expect(datas).toEqual([
      {
        stdin: `AB`,
        stdout: `4\n`,
      },
      {
        stdin: `ABAB`,
        stdout: `16\n`,
      },
    ]);
  });
});
