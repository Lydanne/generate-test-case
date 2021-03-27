const { execSync } = require("child_process");
const { join } = require("path");
const { createFile } = require("../tools/file");

function runCodeByInputTestCase(source, inputs) {
  const tempDataPath = join(__dirname, ".tempData");
  const execBinPath = "node";
  const sourcePath = createFile(join(tempDataPath, "source.js"), source);

  return inputs.map((inp, index) => {
    const inputTestCasePath = createFile(
      join(tempDataPath, "data", index + 1 + ".in"),
      inp
    );
    const log = execSync(
      execBinPath + " " + sourcePath + " < " + inputTestCasePath
    ).toString();

    createFile(join(tempDataPath, "data", index + 1 + ".out"), log);
    return log;
  });
}

module.exports = { runCodeByInputTestCase };
