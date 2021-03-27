const { injectStdin } = require("./injectStdin");
const { parseTemplate } = require("./parseTemplate");
const { runCodeByInputTestCase } = require("./runCodeByInputTestCase");
const { merge } = require("../tools/merge");

function generateTestCase({ source, stdinTemplate, count }) {
  source = injectStdin(source);
  const inputs = parseTemplate(stdinTemplate, count);
  const outputs = runCodeByInputTestCase(source, inputs);
  return merge(inputs, outputs);
}

module.exports = {
  generateTestCase,
};
