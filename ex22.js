function splice(
  str = "",
  start,
  deleteCountopt = str.length - start,
  toAddopt = ""
) {
  let result = "";
  start = start < 0 ? str.length + start : start;

  console.log(
    "start: ",
    start,
    "length: ",
    str.length,
    "deleteCount :",
    deleteCountopt,
    "toAddopt :",
    toAddopt
  );
  for (let i = 0; i < str.length && deleteCountopt; ++i) {
    if (toAddopt.length > 0 && i === start) {
      result += toAddopt;
    }
    if (i > start) {
      --deleteCountopt;
    } else {
      result += str[start + i];
    }
  }
  return result;
}

console.log(splice("Tony Tony Ch0pper", 0, 10));
console.log(splice("Tony Ch0pper", 0, 4, "Tony Tony"));
console.log(splice("Tony Tony Usopp", -5, 5, "Ch0pper"));
