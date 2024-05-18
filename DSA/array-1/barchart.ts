function getMaxElement(arr: number[]): number {
  let maxElement = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}

function barChart(arr: number[]) {
  let height = getMaxElement(arr);
  let width = arr.length;
  for (let currentFloor = height; currentFloor >= 1; currentFloor--) {
    let s = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= currentFloor) s += "*";
      else s += "";
    }
    console.log(s);
  }
}
barChart([7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7]);
