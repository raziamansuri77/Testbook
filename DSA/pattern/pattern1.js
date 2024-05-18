function pattern1(n) {
    for (var i = 1; i <= n; i++) {
        var currRow = "";
        for (var j = 1; j <= i; j++) {
            currRow += "*";
        }
        console.log(currRow);
    }
}
pattern1(5);
