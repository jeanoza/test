/**
 *
 * @param {string} str
 * @returns {boolean}
 */
function isBlank(str = "") {
  let i = -1;
  while (str[++i]) {
    const ascii = str.charCodeAt(i);
    if (ascii !== 32) {
      return false;
    }
  }
  return true;
}

console.log(isBlank(" "));
console.log(isBlank(" "));
console.log(isBlank("Ch0pper!"));
