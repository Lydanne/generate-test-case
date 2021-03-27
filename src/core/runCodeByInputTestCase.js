const { execSync } = require("child_process");

function runCodeByInputTestCase(exec, execFilePath, inputTestCasePaths) {
  return inputTestCasePaths.map((inputTestCasePath) => {
    const output = execSync(
      exec + " " + execFilePath + " < " + inputTestCasePath
    ).toString();

    return output;
  });
}

module.exports = { runCodeByInputTestCase };
