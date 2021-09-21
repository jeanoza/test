// function lowerCase(str = "") {
//   array = str.split("");
//   console.log(array);
//   for (let i = 0; i < str.length; ++i) {
//     let ascii = str[i].charCodeAt();
//     if (ascii >= 65 && ascii <= 90) {
//       ascii += 32;
//       array[i] = String.fromCharCode(ascii);
//     } else {
//       array[i] = str[i];
//     }
//   }
//   return array.join("");
// }

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

let str = "HELLo";

console.log(lowerCase(str));
