/**
 *
 * @param {string} str
 * @returns {boolean}
 */
function isAlpha(str = "") {
  let i = -1;
  while (str[++i]) {
    const ascii = str.charCodeAt(i);
    if (ascii < 65 || (ascii > 90 && ascii < 97) || ascii > 122) return false;
  }
  return true;
}

console.log(isAlpha("Chopper"));
console.log(isAlpha("Chopper!"));
console.log(isAlpha("Chopper and Usopp"));
