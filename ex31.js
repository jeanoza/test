/**
 *
 * @param {string} str
 * @returns {boolean}
 */
function isLowerCase(str = "") {
  let i = -1;
  while (str[++i]) {
    const ascii = str.charCodeAt(i);
    if (ascii < 97 || ascii > 122) {
      return false;
    }
  }
  return true;
}

console.log(isLowerCase("chopper"));
console.log(isLowerCase("Chopper"));
console.log(isLowerCase("ch0pper"));
