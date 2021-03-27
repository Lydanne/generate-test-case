const { injectStdin } = require("./injectStdin");
const { parseTemplate } = require("./parseTemplate");
const { runCodeByInputTestCase } = require("./runCodeByInputTestCase");
const { mergeArray } = require("../tools/mergeArray");

function generateTestCase({ source, stdinTemplate, count }) {
  source = injectStdin(source);
  const inputs = parseTemplate(stdinTemplate, count);
  const outputs = runCodeByInputTestCase(source, inputs);
  return mergeArray(inputs, outputs);
}

module.exports = {
  generateTestCase,
};
