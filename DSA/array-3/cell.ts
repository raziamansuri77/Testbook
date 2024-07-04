function findCell(arr:number[],target:number):number(){
    let l=0;
let r=arr.length-1;
let ans=-1;
while(l<=r){
    let mid=Math.floor((l+r)/2);
    if(arr[mid]==target) return arr[mid];
}

}