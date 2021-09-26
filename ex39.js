const HTML_NAME = {
  "<": "&lt;",
  ">": "&gt;",
};

function escapeHtml(str = "") {
  let result = "";
  let i = -1;
  while (str[++i]) {
    if (str[i] === "<" || str[i] === ">") {
      result += HTML_NAME[str[i]];
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(escapeHtml("<p>I love programming</p>"));
