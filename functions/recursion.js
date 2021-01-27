/** write a function, isEven, where zero is even; one is odd; and for any another number (n), n-2 is even. the function accepts a single parameter (a positive, whole number) and returns a Boolean */

function isEven(n) {
  n = parseInt(n);
  if (n < 0 || Number.isNaN(n))
    return "Only positive, whole numbers allowed as arguments";
  if (n === 0) return true;
  if (n === 1) return false;
  return isEven(n - 2);
}

console.log(isEven(50)); //true
console.log(isEven(75)); //false
console.log(isEven(-1))// error msg
console.log(isEven("5"))// false
console.log(isEven("22"))// true
console.log(isEven("twenty"))// error msg

