module.exports = function reverse (n) {
    let num = Math.abs(n);
  return Number.parseInt(String(num).split('').reverse().join(''));
}
