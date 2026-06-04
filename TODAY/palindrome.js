let str = "mom";
let left = 0;
let right = str.length-1;
let ispalindrome = true;
while(left < right){
    if(str[left] != str[right]){
        ispalindrome = false;
        break;
    }
    left++;
    right--;
}
(ispalindrome) ? console.log("The Given String is Palindrome") : console.log("The Given is not palindrome") ;