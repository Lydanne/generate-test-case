const { repeat } = require("./base");
const { random } = require("./number");
const { randomStr } = require("./string");

/**
 * 生成 `[start,end)` 个随机数的数组
 * @param {number} start 开始数
 * @param {number} end 结束的数
 * @param {number} len 数组个数
 */
function randomNumArr(start, end, len) {
  return repeat(() => random(start, end), len);
}

/**
 * 生成长度为strLen的字符串数组
 * @param {number} strLen 字符串长度
 * @param {number} len 数组个数
 */
function randomStrArr(strLen, len) {
  return repeat(() => randomStr(strLen), len);
}

/**
 * 生成一个顺序数列
 * @param {number} start 初始值
 * @param {number} len 长度
 * @param {number} step 步长
 */
function incrNumArr(start, len, step = 1) {
  const result = [];
  for (let i = 0; i < len; i++) {
    result.push(start);
    start += step;
  }
  return result;
}

module.exports = {
  randomNumArr,
  randomStrArr,
  incrNumArr,
};
