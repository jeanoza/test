function reverse(str = "") {
  let result = "";
  for (let i = str.length - 1; str[i]; --i) {
    result += str[i];
  }
  return result;
}

console.log(reverse("ch0pper"));
