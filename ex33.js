/**
 *
 * @param {string} str
 * @returns {boolean}
 */
function isNumeric(str = "") {
  let i = -1;
  // when minus operator exist in first index of string, move index
  if (i === -1 && str[i + 1] == "-") {
    ++i;
  }
  while (str[++i]) {
    const ascii = str.charCodeAt(i);
    const previous_ascii = str.charCodeAt(i - 1);
    if (ascii === 46 && isNumber(previous_ascii)) continue;
    if (
      (str[i] === "E" || str[i] === "e") &&
      isNumber(previous_ascii) &&
      str[i + 1] === "+"
    ) {
      ++i;
      continue;
    }
    if (ascii < 48 || ascii > 57) {
      return false;
    }
  }
  return true;
}
function isNumber(ascii) {
  if (ascii >= 48 && ascii <= 57) return true;
  return false;
}

console.log(isNumeric("1986"));
console.log(isNumeric("-7.5"));
console.log(isNumeric("1.9E+2"));
console.log(isNumeric("five"));
