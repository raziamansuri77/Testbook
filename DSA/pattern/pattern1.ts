function pattern1(n: number) {
  for (let i = 1; i <= n; i++) {
    let currRow = "";
    for (let j = 1; j <= i; j++) {
      currRow += "*";
    }
    console.log(currRow);
  }
}

pattern1(5);
