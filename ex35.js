/**
 *
 * @param {*} str
 * @returns {boolean}
 */
function startsWith(str = "", start, positionopt = 0) {
  let i = positionopt - 1;
  let j = 0;
  while (str[++i] && j < start.length) {
    if (str[i] !== start[j]) {
      return false;
    } else {
      // console.log(str[i], start[j], i - positionopt, j);
      ++j;
    }
  }
  return true;
}

console.log(
  startsWith("I gotta give my all for everyone in my crew", "I gotta")
);
console.log(startsWith("Tony Tony Ch0pper", "on", 1));
console.log(startsWith("Tony Tony Ch0pper", "Ch0pper"));
