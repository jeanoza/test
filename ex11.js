/**
 *
 * @param {string} str
 * @param {number} len
 * @returns {string}
 */
function last(str = "", len = 1) {
  let result = "";

  if (str.length < len) {
    return str;
  }
  for (let i = str.length - len; str[i]; ++i) {
    result += str[i];
  }
  return result;
}

console.log(last("chopper"));
console.log(last("chopper", 2));
console.log(last("chopper", 3));
console.log(last("chopper", 4));
console.log(last("chopper", 5));
console.log(last("chopper", 6));
console.log(last("chopper", 7));
console.log(last("tony", 5));
