/**
 *
 * @param {string} str
 * @param {string} toInsertopt
 * @param {number} positionopt
 */
function insert(str = "", toInsertopt = "", positionopt = 0) {
  let result = "";

  if (str.length <= positionopt) {
    return str + toInsertopt;
  }
  for (let i = 0; i < str.length; ++i) {
    if (i === positionopt) {
      result += toInsertopt;
    }
    result += str[i];
  }
  return result;
}

console.log(insert("chpper", "0", 2));
console.log(insert("Tony", " Tony Ch0pper", 4));
