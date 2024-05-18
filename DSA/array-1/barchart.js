function getMaxElement(arr) {
    var maxElement = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }
    return maxElement;
}
function barChart(arr) {
    var height = getMaxElement(arr);
    var width = arr.length;
    for (var currentFloor = height; currentFloor >= 1; currentFloor--) {
        var s = "";
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] >= currentFloor)
                s += "*";
            else
                s += "";
        }
        console.log(s);
    }
}
barChart([7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7]);
