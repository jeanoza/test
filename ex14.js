function count(str = "") {
  let count = -1;

  while (str[++count]);

  return count;
}

console.log(count("ch0pper"));
