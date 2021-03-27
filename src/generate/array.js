const { repeat } = require("./base");
const { random } = require("./number");

function randomArray(start, end, n, separator = ",") {
  return repeat(random.bind(null, start, end), n).join(separator);
}

module.exports = {
  randomArray,
};
