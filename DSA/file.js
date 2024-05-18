// let n = 5;
// for (i = 0; i < n; i++) {
//   console.log("*");
//   console.log("\n");
//   for (let j = 0; j < i; j++) {}
// }
let n = 5;
for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
}
console.log(line);
