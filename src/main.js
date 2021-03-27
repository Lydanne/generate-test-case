const { resolve } = require("path");
const { generateTestCase } = require("./core/generateTestCase");
const { configure } = require("./tools/configure");
const { createFile } = require("./tools/file");
const { Command } = require("commander");
const package = require("../package.json");

function main() {
  const program = new Command();
  program.version(package.version);
  program.option(
    "-c, --config [filePath]",
    "请输入配置文件的位置(default: ./config.js)"
  );
  program.parse(process.argv);
  const options = program.opts();

  let configPath = "./config.js";
  if (options.config) {
    configPath = options.config;
  }

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
  } = configure({}, resolve("./", configPath));

  if (!compileFilePath) compileFilePath = execFilePath;

  compileFilePath = resolve(root, compileFilePath);
  execFilePath = resolve(root, execFilePath);
  injectLibs = injectLibs.map((item) => resolve(root, item));
  stdinTemplatePath = resolve(root, stdinTemplatePath);
  outDir = resolve(root, outDir);

  if (source) createFile(compileFilePath, source);
  if (stdinTemplate) createFile(stdinTemplatePath, stdinTemplate);

  generateTestCase({
    compileFilePath,
    execFilePath,
    compile,
    exec,
    injectLibs,
    stdinTemplatePath,
    outDir,
    count,
  });

  console.log("GTC OK");
}

main();
