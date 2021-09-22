/*
function upperCase(str = "") {
  return str
    .split("")
    .map((alpha) => {
      const ascii = alpha.charCodeAt();
      return ascii >= 97 && ascii <= 122
        ? String.fromCharCode(ascii - 32)
        : String.fromCharCode(ascii);
    })
    .join("");
}
*/
function upperCase(str = "") {
  let newStr = "";
  let i = 0;
  while (str[i]) {
    let ascii = str.charCodeAt(i);
    if (ascii >= 97 && ascii <= 122) {
      newStr += String.fromCharCode(ascii - 32);
    } else {
      newStr += str[i];
    }
    ++i;
  }
  return newStr;
}
let str = "hello";

console.log(upperCase(str));
