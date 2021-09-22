/**
 *
 * @param {string} str
 * @param {number} start
 * @param {number} len
 * @returns
 */
function substr(str = "", start, len) {
  let result = "";
  let end = len ? start + len : str.length;

  for (let i = start; i < end; ++i) {
    result += str[i];
  }
  return result;
}

console.log(substr("tony tony chopper", 10));
console.log(substr("ch0pper", 2, 2));
