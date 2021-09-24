/**
 *
 * @param {string} str
 * @param {string} end
 * @param {number} positionopt
 * @return {boolean}
 */
function endsWith(str = "", end, positionopt = str.length) {
  let i = -1;
  let j = 0;
  while (++i < positionopt) {
    if (str[i] === end[j]) {
      ++j;
    } else {
      j = 0;
    }
  }
  if (j === end.length) {
    return true;
  }
  return false;
}

console.log(endsWith("Tony Tony Ch0pper", "Ch0pper"));
console.log(endsWith("Tony Tony Ch0pper", "Tony"));
console.log(endsWith("Ch0pper", "h0", 3));
