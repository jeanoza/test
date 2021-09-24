const whitespace = " ";

function trim(str = "", whitespaceopt = whitespace) {
  let result = "";
  for (let i = 0; str[i]; ++i) {
    if (str[i] === whitespaceopt) {
      if (whitespaceopt === whitespace && i !== 0 && i !== str.length - 1) {
        result += str[i];
      }
      continue;
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(trim(" Tony Tony Ch0pper "));
console.log(trim("--Tony Tony Ch0pper--", "-"));
