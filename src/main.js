const { generateTestCase } = require("./core/generateTestCase");

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

generateTestCase({ source, stdinTemplate, count: 10 });
