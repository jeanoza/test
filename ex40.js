function unescapeHtml(str = "") {
  const leftRegex = /&lt;/g;
  const rightRegex = /&gt;/g;
  return str.replace(leftRegex, "<").replace(rightRegex, ">");
}

console.log(unescapeHtml("&lt;p&gt;I love programming&lt;/p&gt;"));

//TODO: find a method this function with while instead of use replace
// let result = "";
// let i = 0;
// console.log(leftRegex.lastIndex);//0
// leftRegex.test(str);
// console.log(leftRegex.lastIndex); //4
// leftRegex.test(str);
// console.log(leftRegex.lastIndex); //31
// leftRegex.test(str);
// console.log(leftRegex.lastIndex); //0
// leftRegex.test(str);
// rightRegex.test(str);
// while (str[i]) {
//   console.log(i);
//   if (leftRegex.test(str)) {
//     result += "<";
//     i += leftRegex.lastIndex;
//     console.log(i);
//   }
//   if (rightRegex.test(str)) {
//     result += ">";
//     i += rightRegex.lastIndex;
//     console.log(i);
//   }
//   console.log(str[i]);
//   result += str[i++];
// }
