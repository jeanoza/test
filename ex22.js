function splice(
  str = "",
  start,
  deleteCountopt = str.length - start,
  toAddopt = ""
) {
  let result = "";
  start = start < 0 ? str.length + start : start;

  for (let i = 0; i < str.length; ++i) {
    if (toAddopt.length > 0 && i === start) {
      result += toAddopt;
    }
    if (i >= start && deleteCountopt > 0) {
      --deleteCountopt;
    } else {
      result += str[i];
    }
    // console.log(
    //   "start: ",
    //   start,
    //   "length: ",
    //   str.length,
    //   "deleteCount :",
    //   deleteCountopt,
    //   "toAddopt :",
    //   toAddopt,
    //   "index :",
    //   i,
    //   "result: ",
    //   result
    // );
  }
  return result;
}

console.log(1, splice("Tony Tony Ch0pper", 0, 10));
console.log(2, splice("Tony Ch0pper", 0, 4, "Tony Tony"));
console.log(3, splice("Tony Tony Usopp", -5, 5, "Ch0pper"));
