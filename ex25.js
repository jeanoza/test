/**
 *
 * @param {string} str
 * @param {string} search
 * @param {number} positionopt
 * @returns
 */
function includes(str = "", search, positionopt = 0) {
  let i = positionopt - 1;
  let j = 0;

  while (str[++i]) {
    if (str[i] === search[j]) {
      ++j;
    } else {
      j = 0;
    }
    if (j === search.length) {
      return true;
    }
  }
  return false;
}

console.log(includes("Ch0pper", "pper"));
console.log(includes("Ch0pper", "0", 3));
