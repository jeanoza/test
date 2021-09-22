function slice(str = "", start, endopt = str.length) {
  let result = "";

  if (start < 0) {
    start = endopt + start;
  }
  for (let i = start; i < endopt; ++i) {
    result += str[i];
  }

  return result;
}

console.log(slice("ch0pper", 1));
console.log(slice("ch0pper", -4));
console.log(slice("ch0pper", 1, 4));
