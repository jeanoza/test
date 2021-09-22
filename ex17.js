/**
 *
 * @param {string} str
 * @param {string} search
 * @param {number} fromIndexot
 * @returns
 */
function indexOf(str = "", search, fromIndexot = 0) {
  for (let i = fromIndexot; i < str.length; ++i) {
    if (str[i] === search) {
      return i;
    }
  }
  return -1;
}

console.log(indexOf("ch0pper", "0"));
console.log(indexOf("ch0pper", "o"));
