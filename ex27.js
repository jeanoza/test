/**
 *
 * @param {string} str
 * @returns {boolean}
 */
function isAlphaDigit(str = "") {
  let i = -1;
  while (str[++i]) {
    const ascii = str.charCodeAt(i);
    if (
      ascii < 48 ||
      (ascii > 57 && ascii < 65) ||
      (ascii > 90 && ascii < 97) ||
      ascii > 122
    ) {
      return false;
    }
  }
  return true;
}

console.log(isAlphaDigit("Ch0pper"));
console.log(isAlphaDigit("1986"));
console.log(isAlphaDigit("1337-42"));
