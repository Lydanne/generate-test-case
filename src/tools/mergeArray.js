function mergeArray(inputs, outputs) {
  return inputs.map((item, index) => ({ stdin: item, stdout: outputs[index] }));
}

module.exports = { mergeArray };
