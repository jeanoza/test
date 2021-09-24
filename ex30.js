/**
 *
 * @param {string} str
 * @returns {boolean}
 */
function isEmpty(str = "") {
  let i = -1;
  while (str[++i]);
  if (i > 0) {
    return false;
  }
  return true;
}

console.log(isEmpty(""));
console.log(isEmpty(" "));
console.log(isEmpty("ch0pper!"));
