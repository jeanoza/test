function kebabCase(str = "") {
  return str
    .split("")
    .map((char, index) => {
      let char_current = char.charCodeAt();
      let char_prev = str[index - 1]?.charCodeAt();
      let char_groupe = isPrintable(char_current);

      if (char_groupe !== "upper" && char_groupe !== "lower") {
        if (char_groupe === "space") return "-";
        return;
      }
      if (char_groupe === "upper") {
        return isPrintable(char_prev) === "lower"
          ? `-${String.fromCharCode(char_current + 32)}`
          : String.fromCharCode(char_current + 32);
      }
      return char;
    })
    .join("");
}

const ex1 = "love one code";
const ex2 = "LoveOneCode";
const ex3 = "-Love One Code-";
console.log(ex1, ":", kebabCase(ex1));
console.log(ex2, ":", kebabCase(ex2));
console.log(ex3, ":", kebabCase(ex3));

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
