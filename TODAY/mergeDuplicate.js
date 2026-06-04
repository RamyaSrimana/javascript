let arr1  = [1,2,3,2,4,4,5];
let arr2 = [6,7,8 ,9,9,10,10];
let merged = arr1.concat(arr2);
let unique = [];
for(let i = 0 ; i < merged.length; i++){
    if(!unique.includes(merged[i])){
        unique.push(merged[i]);
    }
}
console.log(unique);




let sentence="i am learning javascript";
let count=0;
for(let i=0; i<sentence.length; i++){
    if(sentence[i] === " "){
        count++;
    }
}
console.log(count +1);

let sentence = "i am learning javascript"
let result= sentence.split("").length
console.log(result)