const { writeFileSync, mkdirSync } = require("fs");
const { dirname } = require("path");

function createFile(path, context) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, context);
  return path;
}

module.exports = {
  createFile,
};
