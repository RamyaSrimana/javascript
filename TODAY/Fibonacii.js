let n = 10;
function fiboo(n){
    if(n <= 1){
        return n;
    }
    return fiboo(n-1)+ fiboo(n-2);

}
for(let i = 0 ; i < n ; i++){
console.log(fiboo(i));
}