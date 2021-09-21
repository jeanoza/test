function snakeCase(str = "") {
  let count = 0;
  return str
    .split("")
    .map((char, index, table) => {
      let char_current = char.charCodeAt();
      let char_groupe = isPrintable(char_current);

      if (char_groupe === "upper" || char_groupe === "lower") {
        count++;
      }
      if (char_groupe === "space") return "_";
      if (char_groupe !== "upper" && char_groupe !== "lower") {
        return;
      }
      if (char_groupe === "upper") {
        return count > 1
          ? `_${String.fromCharCode(char_current + 32)}`
          : String.fromCharCode(char_current + 32);
      }
      return char;
    })
    .join("");
}

const ex1 = "gold d roger";
const ex2 = "GoldDRoger";
const ex3 = "---Gold---D----Roger----";
console.log(ex1, ":", snakeCase(ex1));
console.log(ex2, ":", snakeCase(ex2));
console.log(ex3, ":", snakeCase(ex3));

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
