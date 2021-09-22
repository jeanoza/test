function decapitalize(str = "") {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    const previousCharCode = str.charCodeAt(i - 1);
    if (i === 0 && charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(charCode + 32);
    } else if (charCode >= 65 && charCode <= 90 && previousCharCode === 32) {
      result += String.fromCharCode(charCode + 32);
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(decapitalize("WooMAN El Drago"));
