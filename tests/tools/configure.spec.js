const { configure } = require("../../src/core/configure");

describe("configure.js", () => {
  // 注入优先级
  // cli options > Env > config file > default config

  // 过程
  // 1、读取所有可以获取到配置到位置
  // 2、处理配置, 合并默认配置
  // 3、注入到Global
  it("inject config to global", () => {
    const cliOptions = {};

    process.env.GTC_ROOT = "./";

    const config = configure(cliOptions, "./tests/.tempData/config.js");

    expect(config.root).toBe("./");

    expect(config.count).toBe(10);
  });
});
