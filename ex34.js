/**
 *
 * @param {string} str
 * @returns {boolean}
 */
function isString(str) {
  if (typeof str === "string") return true;
  return false;
}

console.log(isString("chopper"));
console.log(isString(1337));
