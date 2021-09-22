// function first(str = "", len = 1) {
//   return str.slice(0, len);
// }

/**
 * first
 * @param {string} str
 * @param {number} len
 * @returns {string}
 */
function first(str = "", len = 1) {
  let result = "";

  // ++opti more than put condition in for loop
  if (len > str.length) {
    return str;
  }
  for (let i = 0; i < len; ++i) {
    result += str[i];
  }

  return result;
}

console.log(first("chopper"));
console.log(first("chopper", 2));
console.log(first("tony", 5));
