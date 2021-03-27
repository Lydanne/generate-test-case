const { injectLib } = require("./injectLib");
const { parseTemplate } = require("./parseTemplate");
const { runCodeByInputTestCase } = require("./runCodeByInputTestCase");
const { mergeArray } = require("../tools/mergeArray");
const {
  createInputTestCases,
  createOutputTestCases,
} = require("../tools/file");
const { compileSource } = require("./compileSource");

function generateTestCase({
  compile,
  exec,

  compileFilePath,
  execFilePath,

  stdinTemplatePath,
  injectLibs,

  outDir,
  count,
}) {
  injectLib(compileFilePath, injectLibs);
  compileSource(compile, compileFilePath);
  const inputs = parseTemplate(stdinTemplatePath, count);
  const inputTestCasePaths = createInputTestCases(inputs, outDir);
  const outputs = runCodeByInputTestCase(
    exec,
    execFilePath,
    inputTestCasePaths
  );
  createOutputTestCases(outputs, outDir);
  return mergeArray(inputs, outputs);
}

module.exports = {
  generateTestCase,
};
