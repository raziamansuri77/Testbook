class ListNode {
  val: number;
  next: ListNode | null;
  constructor(v) {
    this.val = v;
    this.next = null;
  }
}
let myListNode = new ListNode(10);
let mySecondListNode = new ListNode(20);
myListNode.next = mySecondListNode;
// class Human {
//   name: string;
//   age: number;
//   constructor(name: string, age: number, height: number) {
//     this.name = name;
//     this.age = age;
//     this.height = height;
//   }
// }
