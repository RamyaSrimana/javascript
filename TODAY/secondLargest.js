let arr = [12, 35, 1, 10, 34, 35];
let largest = -Infinity;
let second = -Infinity;
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] > largest){
        second = largest;
        largest = arr[i];
    }
    else if(arr[i] > second && arr[i] !== largest){
        second = arr[i];
    }
}
console.log(second);