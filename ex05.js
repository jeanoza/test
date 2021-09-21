function decapitalize(str = "") {
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

console.log(decapitalize("Wooman El Drago "));
