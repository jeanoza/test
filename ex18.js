/**
 *
 * @param {string} str
 * @param {string} search
 * @param {number} fromIndexot
 * @returns
 */
function lastIndexOf(str = "", search, fromIndexot = str.length - 1) {
  for (let i = str.length - 1; i >= 0; --i) {
    if (i >= fromIndexot && str[i] === search) {
      return i;
    }
  }
  return -1;
}

console.log(lastIndexOf("ch0pper", "p", 2));
console.log(lastIndexOf("ch0pper", "o"));
