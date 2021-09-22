function countWords(str = "", patternopt) {
  let count = 0;

  for (let i = 0; i < str.length; ++i) {
    let ascii = str.charCodeAt(i);
    if (isUpperCase(ascii)) ++count;
  }
  return count;
}

function isUpperCase(ascii) {
  return ascii >= 65 && ascii <= 90;
}

console.log(countWords("Tony Tony Ch0pper"));
console.log(countWords("TonyTonyCh0pper"));
console.log(countWords("Tony Tony - Ch0pper"));
