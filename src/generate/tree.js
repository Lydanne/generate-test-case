const { randomNumArr } = require("./array");
const { repeat } = require("./base");
const { random } = require("./number");

/**
 * 生成一个随机的二叉树
 * @param {number} start 开始值
 * @param {number} end 结束值
 * @param {number} len 数组长度
 * @param {number} vacancy 空节点概率 0 是100% 1是50% 2是33%
 */
function randomBinaryTree(start = 0, end = 100, len = 100, vacancy = 5) {
  return randomNumArr(start, end, len)
    .map((v, i, arr) =>
      random(0, vacancy) === 0 && i > 1 && i < arr.length - 1 ? "null" : v
    )
    .join(",");
}

/**
 * 生成对称二叉树
 * @param {number} base 基础值
 * @param {number} dep 深度
 */
function symmetryBinaryTree(base = 0, dep = 10) {
  return repeat(
    (p) =>
      repeat(
        (i) =>
          Math.floor(Math.pow(2, p) / 2) > i
            ? i + 1 + base
            : Math.pow(2, p) - i + base,
        Math.pow(2, p)
      ).join(","),
    dep
  ).join(",");
}

module.exports = {
  randomBinaryTree,
  symmetryBinaryTree,
};
