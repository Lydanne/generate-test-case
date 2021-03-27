const { Command } = require("commander");
const package = require("../package.json");
const main = require("./main");

function cli() {
  const program = new Command();
  program.version(package.version);
  program.option(
    "-c, --config [filePath]",
    "config file path (default: ./config.js)"
  );
  program.parse(process.argv);
  const options = program.opts();

  const configPath = options.config || "./config.js";

  return {
    configPath,
  };
}

main(cli());

console.log("GTC OK");
