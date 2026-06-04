let num = 389;
let isprime = true;
if(num <= 1){
    isprime = false;
}
else{
    for(let i = 2 ; i*i <= num ; i++ ){
        if(num % i === 0){
            isprime = false;
            break;
        }
    }
}
isprime ? console.log("Prime") : console.log("Not A Prime") 