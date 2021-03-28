#!/usr/bin/env node

const { Command } = require("commander");
const package = require("../package.json");
const main = require("../src/main");

function cli() {
  const program = new Command();
  program.version(package.version);

  program.option(
    "-c, --config [path]",
    "Config file path (default: ./config.json)"
  );

  program.option("-r, --root [path]", "Root path (default: ./)");
  program.option("-co, --compile [command]", "Compiler command or path");
  program.option("-e, --exec [command]", "Execute the command of a program");
  program.option(
    "-cfp, --compileFilePath [path]",
    "The path to the compiled file"
  );
  program.option(
    "-efp, --execFilePath [path]",
    "The path to the file to execute"
  );
  program.option("-s, --source [string]", "Source string");
  program.option("-il, --injectLibs [path...]", "Inject lib file path");
  program.option(
    "-stp, --stdinTemplatePath [path]",
    "Stdin template path (default: ./template)"
  );
  program.option("-st, --stdinTemplate [string]", "Stdin template");
  program.option("-od, --outDir [dir]", "Test case dir (default: ./data)");
  program.option("-co, --count [number]", "Test case count (default: 10)");
  program.option("-sdc, --setDefaultConfig", "set default config");
  program.option("-i, --init", "create config file");

  program.parse(process.argv);
  const options = program.opts();

  return options;
}

main(cli());

console.log("GTC OK");
