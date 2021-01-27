/** write a function, isEven, where zero is even; one is odd; and for any another number (n), n-2 is even. the function accepts a single parameter (a positive, whole number) and returns a Boolean */

function isEven(n) {
  if (n === 0) return true;
  if (n === 1) return false;
  return isEven(n - 2);
}


console.log(isEven(0)) //true
console.log(isEven(5)) //false
console.log(isEven(55)) //false
console.log(isEven(10)) //true
// console.log(isEven(0))