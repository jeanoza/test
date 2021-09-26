/**
 *
 * @param {string} str
 * @returns {string}
 */
function escapeRegExp(str = "") {
  // const regex = /[\[\]\(\)\{\}]/g;
  const regex = /[\W]/g;
  let result = "";
  let array;
  let prev; //for save next index which will be used in the next loop for slice function.
  while ((array = regex.exec(str))) {
    // console.log(array[0], array.index, regex.lastIndex);
    // result += str.slice(prev, array.index);
    // result += "\\" + array[0];
    result += `${str.slice(prev, array.index)}\\${array[0]}`;
    prev = regex.lastIndex;
  }

  return result;
}

console.log(escapeRegExp("(Tony)[Tony]{Ch0pper}"));
