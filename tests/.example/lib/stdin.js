const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const buffer = [];
var getLineCount = 0;

rl.on("line", function lineEvent(v) {
  buffer.push(v);
});

rl.on("close", function closeEvent() {
  setImmediate(function closeProcess() {
    if (buffer.length === 0 || getLineCount === 0) {
      process.exit(0);
    } else {
      setImmediate(closeProcess);
    }
  });
});

function getLine() {
  getLineCount++;
  return new Promise((resolve) => {
    setImmediate(function run() {
      if (buffer.length !== 0) {
        resolve(buffer.shift());
        getLineCount--;
      } else {
        setImmediate(run);
      }
    });
  });
}

function close() {
  rl.close();
}

module.exports = { getLine, close };
