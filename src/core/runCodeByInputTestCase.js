const { execSync } = require("child_process");
const { join, resolve } = require("path");
const { createFile } = require("../tools/file");

function runCodeByInputTestCase(source, inputs) {
  const tempDataPath = resolve("./", ".tempData");
  const execBinPath = "node";
  const sourcePath = createFile(join(tempDataPath, "source.js"), source);

  return inputs.map((inp, index) => {
    const inputTestCasePath = createFile(
      join(tempDataPath, "data", index + 1 + ".in"),
      inp
    );
    const output = execSync(
      execBinPath + " " + sourcePath + " < " + inputTestCasePath
    ).toString();

    createFile(join(tempDataPath, "data", index + 1 + ".out"), output);
    return output;
  });
}

module.exports = { runCodeByInputTestCase };
