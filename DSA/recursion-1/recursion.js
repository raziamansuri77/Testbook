// function func(n: number): void {
//   if (n == 0) return;
//   console.log(n);
//   func(n - 1);
//   console.log(n);
// }
// func(5);
// define function
// function add(a, b): number {
//   return a + b;
// }
// function adder(a, b): number {
//   return add(a, b);
// }
// let ans = adder(10, 20);
// every programming is use call stack
// function func(n: number): void {
//   if (n == 0) return;
//   console.log(n);
//   func(n - 1);
//   console.log(n);
// }
// func(5);
function func(n) {
    if (n == 101)
        return;
    console.log(n);
    func(n + 1);
    console.log(n);
}
func(95);
