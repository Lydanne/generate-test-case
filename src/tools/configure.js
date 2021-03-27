const { resolve } = require("path");

function configure(cliOptions, filePath) {
  const defaultConfig = {
    root: ".",
    compile: "",
    exec: "node",

    sourcePath: "./source.js",
    source: "",
    injectLibs: [],

    stdinTemplatePath: "./stdinTemplate.js",
    stdinTemplate: "",

    outDir: "./data",
    count: 10,
  };
  const envConfig = getEnvConfig();
  const configFile = getConfigFile(filePath);
  const config = Object.assign(
    defaultConfig,
    configFile,
    envConfig,
    cliOptions
  );

  config.count = Number(config.count);

  globalThis.config = config;

  return config;
}
function getEnvConfig() {
  return Object.keys(process.env).reduce((prev, current) => {
    if (current.includes("GTC")) {
      prev[toCamel(current.substr(4))] = process.env[current];
    }
    return prev;
  }, {});
}

function toCamel(str = "") {
  return str.toLowerCase().replace(/_([a-z])/g, (_, p1) => p1.toUpperCase());
}

function getConfigFile(filePath) {
  return require(resolve("./", filePath));
}

module.exports = { configure };
