let arr = [1, 2, 4, 5, 6];
let arrsum = 0;
let n  = arr.length + 1;
let totalsum = (n*(n+1))/2 ;
for(let i = 0 ; i < arr.length ; i++){
    arrsum = arrsum + arr[i];
}
let missing = totalsum - arrsum ; 
console.log(missing);