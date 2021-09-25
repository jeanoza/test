/**
 *
 * @param {string} str
 * @returns {Array}
 */
function chars(str = "") {
  let result = [];
  let i = -1;
  while (str[++i]) {
    result.push(str[i]);
  }
  return result;
}

console.log(chars("ch0pper"));
