const { repeat } = require("./base");
const { random } = require("./number");

const gather = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
/**
 *随机生成字符串
 * @param {string[]} strList 待选字符数组，如果不传入表示随机生产一个字母
 */
function randomChar(strList = []) {
  if (!strList) {
    return gather[random(0, gather.length)];
  }
  return strList[Math.floor(Math.random() * strList.length)];
}

/**
 *
 * @param {number} len 随机生成长度为len的字符串
 */
function randomStr(len) {
  return repeat(() => randomChar(), len).join("");
}

/**
 *
 * @param {number} n 生成由n个单词组成的字符串，没有.号。
 */
function randomWord(n) {
  return repeat(() => randomStr(random(3, 7)), n).join(" ");
}

/**
 *
 * @param {string[]} strList 待选择的字符串数组
 * @param {number} n 产生多少个
 * @param {string} separator 分割符
 */
function repeatRandomChar(strList, n, separator = "") {
  return repeat(randomChar.bind(null, strList), n).join(separator);
}

module.exports = {
  randomChar,
  repeatRandomChar,
  randomStr,
  randomWord,
};
