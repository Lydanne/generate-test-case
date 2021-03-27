const { resolve } = require("path");
const { generateTestCase } = require("./core/generateTestCase");
const { configure } = require("./core/configure");
const { createFile } = require("./tools/file");

function main({ configPath = "./", ...cliConfig }) {
  let {
    root,
    compile,
    exec,

    compileFilePath,
    execFilePath,
    source,
    injectLibs,

    stdinTemplatePath,
    stdinTemplate,

    outDir,
    count,
  } = configure(cliConfig, resolve("./", configPath));

  if (!compileFilePath) compileFilePath = execFilePath;

  compileFilePath = resolve(root, compileFilePath);
  execFilePath = resolve(root, execFilePath);
  injectLibs = injectLibs.map((item) => resolve(root, item));
  stdinTemplatePath = resolve(root, stdinTemplatePath);
  outDir = resolve(root, outDir);

  if (source) createFile(compileFilePath, source);
  if (stdinTemplate) createFile(stdinTemplatePath, stdinTemplate);

  return generateTestCase({
    compileFilePath,
    execFilePath,
    compile,
    exec,
    injectLibs,
    stdinTemplatePath,
    outDir,
    count,
  });
}

module.exports = main;
