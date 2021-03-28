/**
 * 生成 [start, end) 区间内的随机数
 * @param {number} start
 * @param {number} end
 */
function random(start, end) {
  switch (arguments.length) {
    case 1:
      return Math.floor(Math.random() * start);
    case 2:
      return Math.floor(Math.random() * (end - start) + start);
    default:
      return 0;
  }
}

module.exports = {
  random,
};
