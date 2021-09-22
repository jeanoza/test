/*
function swapCase(str = "") {
  return str
    .split("")
    .map((char) => {
      const ascii_current = char.charCodeAt();
      if (ascii_current >= 65 && ascii_current <= 90) {
        return String.fromCharCode(ascii_current + 32);
      } else if (ascii_current >= 97 && ascii_current <= 122) {
        return String.fromCharCode(ascii_current - 32);
      }
      return char;
    })
    .join("");
}
*/

/**
 *
 * @param {string} str
 * @returns {string}
 */

function swapCase(str = "") {
  let result = "";
  let i = -1;
  while (str[++i]) {
    const ascii = str.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
      result += String.fromCharCode(ascii + 32);
    } else if (ascii >= 97 && ascii <= 122) {
      result += String.fromCharCode(ascii - 32);
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(swapCase("One Code"));
console.log(swapCase("1337 Fruits"));
