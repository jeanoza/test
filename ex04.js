function capitalize(str = "", restToLoweropt = false) {
  let result;

  if (restToLoweropt) {
    result = lowerCase(str);
  } else {
    result = str;
  }
  return result
    .split("")
    .map((char, index) => {
      let char_current = char.charCodeAt();
      let char_prev = str[index - 1]?.charCodeAt();

      if (
        (index === 0 || isPrintable(char_prev) === "space") &&
        isPrintable(char_current) === "lower"
      ) {
        return String.fromCharCode(char.charCodeAt() - 32);
      }
      return char;
    })
    .join("");
}
/**
 * @param {number} ascii
 * @returns {string || boolean}
 */
function isPrintable(ascii) {
  if (ascii >= 65 && ascii <= 90) return "upper";
  else if (ascii >= 97 && ascii <= 122) return "lower";
  else if (ascii === 32) return "space";
  return false;
}

function lowerCase(str = "") {
  return str
    .split("")
    .map((alpha) => {
      const ascii = alpha.charCodeAt();
      return ascii >= 65 && ascii <= 90
        ? String.fromCharCode(ascii + 32)
        : String.fromCharCode(ascii);
    })
    .join("");
}

console.log(capitalize("He llo"));
console.log(capitalize("he Llo"));
console.log(capitalize("he LLo(true)", true));
console.log(capitalize("he LLo(false)"));
