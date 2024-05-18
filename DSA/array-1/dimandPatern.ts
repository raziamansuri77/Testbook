function diamondPattern(n: number): void {
  // first line
  let stars = 1;
  let spaces = Math.floor(n / 2);
  for (let i = 1; i <= n; i++) {
    let s = "";
    for (let j = 1; j <= spaces; j++) s += " ";
    for (let j = 1; j <= spaces; j++) s += "*";
    console.log(s);
    if (i <= 2) {
      //incsrease
      stars += 2;
      spaces -= 1;
    } else {
      stars -= 2;
      spaces += 1;
    }
  }
}
diamondPattern(21);
