function random(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return Math.floor(Math.random() * minNum);
      break;
    case 2:
      return Math.floor(Math.random() * (maxNum - minNum) + minNum);
      break;
    default:
      return 0;
      break;
  }
}

module.exports = {
  random,
};
