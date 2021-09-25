/**
 *
 * @param {string} str
 * @returns {boolean}
 */
function isUpperCase(str = "") {
  let i = -1;
  while (str[++i]) {
    const ascii = str.charCodeAt(i);
    if (ascii < 65 || ascii > 90) {
      return false;
    }
  }
  return true;
}

console.log(isUpperCase("CHOPPER"));
console.log(isUpperCase("Chopper"));
