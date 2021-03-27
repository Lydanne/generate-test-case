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

function randomStr(strs) {
  if (!strs) {
    return gather[random(0, gather.length)];
  }
  return strs[Math.floor(Math.random() * strs.length)];
}

function randomNStr(n) {
  return repeat(() => randomStr(), n).join("");
}

function randomEnWord(n) {
  return repeat(() => randomNStr(random(3, 7)), n).join(" ");
}

function repeatRandomStr(strs, n, separator = "") {
  return repeat(randomStr.bind(null, strs), n).join(separator);
}
function repeatStr(str, n, separator = "") {
  return repeatRandomStr([str], n, separator);
}
module.exports = {
  randomStr,
  repeatRandomStr,
  repeatStr,
  randomNStr,
  randomEnWord,
};
