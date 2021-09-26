/**
 * Need explication for patternopt and flagsopt => maybe for combinate with regex??
 * @param {string} str
 * @param {*} patternopt
 * @param {*} flagsopt
 * @returns {Array}
 */

function words(str = "", patternopt, flagsopt = "") {
  let result = [];
  let word = "";
  let i = -1;
  while (str[++i]) {
    let ascii = str.charCodeAt(i);
    const ascii_previous = str.charCodeAt(i - 1);
    const ascii_next = str.charCodeAt(i + 1);

    if (isUpper(ascii) || isLower(ascii) || isNumber(ascii)) {
      ascii = isUpper(ascii) && isUpper(ascii_previous) ? ascii + 32 : ascii;
      word += String.fromCharCode(ascii);
    }
    if (
      isLower(ascii) &&
      (i === str.length - 1 || ascii_next === 32 || isUpper(ascii_next))
    ) {
      result.push(word);
      word = "";
    }
  }
  return result;
}

function isNumber(ascii) {
  if (ascii >= 48 && ascii <= 57) return true;
  return false;
}
function isUpper(ascii) {
  if (ascii >= 65 && ascii <= 90) return true;
  return false;
}
function isLower(ascii) {
  if (ascii >= 97 && ascii <= 122) return true;
  return false;
}

console.log(words("Tony Tony Ch0pper"));
console.log(words("TonyTonyCH0pper"));
console.log(words("Tony - Tony - CH0pper"));
