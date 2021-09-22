function countSubstrings(str = "", substring) {
  // return str.split(" ").filter((el) => el === substring).length;
  let count = 0;
  let i = -1;
  let j = 0;
  while (str[++i]) {
    if (j === substring.length) {
      j = 0;
      count++;
    }
    // console.log(str[i], substring[j], i, j, count);
    if (str[i] === substring[j]) {
      ++j;
    }
  }
  return count;
}

console.log(countSubstrings("TonyTony Chopper", "Tony"));
console.log(countSubstrings("gomu gomu no bazooka", "gatling"));
