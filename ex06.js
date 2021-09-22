/**
 * kebabCase
 * @param {string} str
 * @returns {string}
 */
function kebabCase(str = "") {
  let result = "";

  for (let i = 0; str[i]; ++i) {
    let ascii = str.charCodeAt(i);
    let ascii_previous = str.charCodeAt(i - 1);

    if (ascii === 32) {
      result += "-";
    } else if (type(ascii) === "upper") {
      if (i !== 0 && ascii_previous !== 45) {
        result += "-";
      }
      result += String.fromCharCode(ascii + 32);
    } else if (ascii === 45 && (i === 0 || i === str.length - 1)) {
      result += "";
    } else {
      result += str[i];
    }
  }
  return result;
}

const ex1 = "love one code";
const ex2 = "LoveOneCode";
const ex3 = "-Love-One-Code-";
console.log(ex1, ":", kebabCase(ex1));
console.log(ex2, ":", kebabCase(ex2));
console.log(ex3, ":", kebabCase(ex3));

/**
 * @param {number} ascii
 * @returns {string || boolean}
 */
function type(ascii) {
  if (ascii >= 65 && ascii <= 90) return "upper";
  else if (ascii >= 97 && ascii <= 122) return "lower";
  else if (ascii === 32) return "space";
  return false;
}
