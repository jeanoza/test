/**
 * TODO:modifier avec cette condition
 * @param {string} str
 * @param {boolean} restToLoweropt : true => only first character is majuscule
 * @returns {string}
 */

function capitalize(str = "", restToLoweropt = false) {
  let newStr = "";
  for (let i = 0; str[i] !== undefined; ++i) {
    let ascii = str.charCodeAt(i);
    let previousAscii = str.charCodeAt(i - 1);
    if (
      asciiType(ascii) === "lower" &&
      (i === 0 || asciiType(previousAscii) === "space")
    ) {
      newStr += String.fromCharCode(ascii - 32);
    } else if (i !== 0 && asciiType(ascii) === "upper" && restToLoweropt) {
      newStr += String.fromCharCode(ascii + 32);
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
/**
 * @param {number} ascii
 * @returns {string || boolean}
 */
function asciiType(ascii) {
  if (ascii >= 65 && ascii <= 90) return "upper";
  else if (ascii >= 97 && ascii <= 122) return "lower";
  else if (ascii === 32) return "space";
  return false;
}

const ex01 = "one code";
const ex02 = "one Code";
const ex03 = "One CODE";
console.log(ex01, "=>", capitalize(ex01));
console.log(ex02, "=>", capitalize(ex02));
console.log(ex03, "(with true)=>", capitalize(ex03, true));
