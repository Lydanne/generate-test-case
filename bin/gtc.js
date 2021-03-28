#!/usr/bin/env node

const { Command } = require("commander");
const package = require("../package.json");
const main = require("../src/main");

function cli() {
  const program = new Command();
  program.version(package.version);

  program.option(
    "-c, --config [path]",
    "Config file path (default: ./config.js)"
  );

  program.option("-r, --root [path]", "Root path (default: ./)");
  program.option("-ce, --compile [command]", "Compiler command or path");
  program.option(
    "-e, --exec [command]",
    "Execute the command of a program (default: node)"
  );
  program.option(
    "-cfp, --compileFilePath [path]",
    "The path to the compiled file"
  );
  program.option(
    "-efp, --execFilePath [path]",
    "The path to the file to execute (default: ./source.js)"
  );
  program.option("-source, --source [string]", "Source string");
  program.option("-il, --injectLibs [path...]", "Inject lib file path");
  program.option(
    "-stp, --stdinTemplatePath [path]",
    "Stdin template path (default: ./template)"
  );
  program.option("-st, --stdinTemplate [string]", "Stdin template");
  program.option("-od, --outDir [dir]", "Test case dir (default: ./data)");
  program.option("-ct, --count [number]", "Test case count (default: 10)");
  program.option("-sdc, --setDefaultConfig", "Test case count (default: 10)");

  program.parse(process.argv);
  const options = program.opts();

  return options;
}

main(cli());

console.log("GTC OK");
