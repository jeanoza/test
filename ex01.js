/*
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
*/
function lowerCase(str = "") {
  let newStr = "";
  let i = 0;
  while (str[i]) {
    let ascii = str.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
      newStr += String.fromCharCode(ascii + 32);
    } else {
      newStr += str[i];
    }
    ++i;
  }
  return newStr;
}

let str = "HELLo";

console.log(lowerCase(str));
