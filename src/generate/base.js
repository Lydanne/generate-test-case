function repeat(cb, n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(cb());
  }
  return res;
}
module.exports = { repeat };
