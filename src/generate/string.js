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
  if (!strList || !strList.length) {
    return gather[random(0, gather.length)];
  }
  return strList[Math.floor(Math.random() * strList.length)];
}

/**
 *
 * @param {number} len 随机生成长度为len的字符串
 * @param {string[]} strList 待选字符数组，如果不传入表示随机生产一个字母
 */
function randomStr(len, strList = []) {
  return repeat(() => randomChar(strList), len).join("");
}

/**
 *
 * @param {number} n 生成由n个单词组成的字符串，没有.号。
 * @param {string[]} strList 待选字符数组，如果不传入表示随机生产一个字母
 */
function randomWord(n, strList = []) {
  return repeat(() => randomStr(random(3, 7), strList), n).join(" ");
}

module.exports = {
  randomChar,
  randomStr,
  randomWord,
};
