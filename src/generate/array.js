const { repeat } = require("./base");
const { random } = require("./number");
const { randomStr } = require("./string");

/**
 * 生成 `[start,end)` 个随机数的数组
 * @param {number} start 开始数
 * @param {number} end 结束的数
 * @param {number} len 数组个数
 * @param {string} separator 分割符
 */
function randomNumArr(start, end, len, separator = ",") {
  return repeat(() => random(start, end), len).join(separator);
}

/**
 * 生成长度为strLen的字符串数组
 * @param {number} strLen 字符串长度
 * @param {number} len 数组个数
 * @param {string} separator 分割符号
 */
function randomStrArr(strLen, len, separator = ",") {
  return repeat(() => randomStr(strLen), len).join(separator);
}

module.exports = {
  randomNumArr,
  randomStrArr,
};
