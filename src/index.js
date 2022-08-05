module.exports = function reverse(n) {
    if (n >= 0) {
  const strReverse = n.toString().split('').reverse().join('');
  return +strReverse;
    } else {
        const strMinReverse = n.toString().split('').slice(1).reverse().join('');
  return +strMinReverse;
    }
}