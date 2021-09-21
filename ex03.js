function length(str = "") {
  const arr = str.split("");
  let count = 0;
  while (arr[count]) {
    ++count;
  }
  return count;
}

console.log(length("he0llo"));
