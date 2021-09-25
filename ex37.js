/**
 *
 * @param {string} str
 * @param {string or regex} seperatoropt
 * @param {number} limitopt
 * @returns {Array}
 */
function split(str = "", seperatoropt, limitopt) {
  let result = [];
  let word = "";
  let i = -1;
  seperatoropt = str.match(seperatoropt)[0];
  // console.log("regex:", str.match(seperatoropt)[0]);
  while (str[++i]) {
    if (str[i] !== seperatoropt) {
      word += str[i];
    }
    if (str[i] === seperatoropt || i === str.length - 1) {
      result.push(word);
      word = "";
    }
  }

  if (limitopt !== undefined) {
    return result.slice(0, limitopt);
  }
  return result;
}

console.log(split("Tony Tony Ch0pper", " "));
console.log(split("Tony-Tony-Usop", "-"));
console.log(split("Gomu Gomu no bazooka", /\s/, 2));
