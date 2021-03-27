function merge(inputs, outputs) {
  return inputs.map((item, index) => ({ stdin: item, stdout: outputs[index] }));
}

module.exports = { merge };
