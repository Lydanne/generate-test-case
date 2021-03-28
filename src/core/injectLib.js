const { readFileSync } = require("fs");
const { createFile } = require("../tools/file");

function injectLib(filePath, injectLibs) {
  if (!injectLibs.length) {
    return;
  }
  let text = readFileSync(filePath, {
    encoding: "utf-8",
  });

  injectLibs.forEach((filePath) => {
    if (text.includes(`/*======= ${filePath} =======*/`)) {
      return;
    }
    text += `\n/*======= ${filePath} =======*/\n`;
    text += readFileSync(filePath, {
      encoding: "utf-8",
    });
  });

  createFile(filePath, text);
}

module.exports = { injectLib };
