function repeat(str = "", timesopt = 1) {
  let result = "";
  for (let i = 0; i < timesopt; ++i) {
    result += str;
  }
  return result;
}

console.log(repeat("w", 3));
console.log(repeat("gomu", 0));
