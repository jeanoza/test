/**
 *
 * @param {string} str
 * @returns {boolean}
 */
function isDigit(str = "") {
  let i = -1;
  while (str[++i]) {
    const ascii = str.charCodeAt(i);
    if (ascii < 48 || ascii > 57) {
      return false;
    }
  }
  return true;
}

console.log(isDigit("42"));
console.log(isDigit("9.4"));
console.log(isDigit("ch0pper!"));
