module.exports = {
  root: ".",
  exec: "node",

  execFilePath: "./source.js",
  injectLibs: ["./lib/stdin.js"],

  stdinTemplatePath: "./template",

  outDir: "./data",
  count: 10,
};
