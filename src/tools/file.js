const { writeFileSync, mkdirSync } = require("fs");
const { dirname, join } = require("path");

function createFile(path, context) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, context);
  return path;
}

function createInputTestCases(inputs, outDir) {
  return inputs.map((inp, index) =>
    createFile(join(outDir, index + 1 + ".in"), inp)
  );
}
function createOutputTestCases(outputs, outDir) {
  return outputs.map((inp, index) =>
    createFile(join(outDir, index + 1 + ".out"), inp)
  );
}

module.exports = {
  createFile,
  createInputTestCases,
  createOutputTestCases,
};
