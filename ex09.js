/**
 *
 * @param {string} str
 * @param {number} position
 * @returns {string} char
 */
function charAt(str = "", position) {
  return str[position];
}

const ex01 = "chopper";

for (let i = 0; ex01[i]; ++i) {
  console.log("i:", i, "=>", charAt(ex01, i));
}
