/**
 *
 * @param {string} str
 * @returns {string}
 */
function snakeCase(str = "") {
  let newStr = "";

  for (let i = 0; str[i]; ++i) {
    let ascii = str.charCodeAt(i);
    if (ascii === 45) {
      continue;
    }
    if (ascii === 32) {
      newStr += "_";
    } else if (type(ascii) === "upper") {
      if (i > 1) {
        newStr += "_";
      }
      newStr += String.fromCharCode(ascii + 32);
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

const ex1 = "gold d roger";
const ex2 = "GoldDRoger";
const ex3 = "-Gold-D-Roger-";
console.log(ex1, ":", snakeCase(ex1));
console.log(ex2, ":", snakeCase(ex2));
console.log(ex3, ":", snakeCase(ex3));

/**
 * @param {number} ascii
 * @returns {string || boolean}
 */
function type(ascii) {
  if (ascii >= 65 && ascii <= 90) return "upper";
  else if (ascii >= 97 && ascii <= 122) return "lower";
  return false;
}
