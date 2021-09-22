function length(str = "") {
  let count = 0;
  while (str[count]) {
    ++count;
  }
  return count;
}

console.log(length("he0llo"));
