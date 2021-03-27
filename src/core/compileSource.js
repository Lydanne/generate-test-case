const { execSync } = require("child_process");

function compileSource(compile, compileFilePath) {
  if (!compile) return;
  return execSync(compile + " " + compileFilePath).toString();
}
module.exports = { compileSource };
