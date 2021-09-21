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

let str = "hello";

console.log(str);
console.log(upperCase(str));
