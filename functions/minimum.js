/** write  a function, min, that takes two arguments and returns their minimum */

function min(a, b) {
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(a)))
    return "Only numbers allowed as arguments";
  return a > b ? b : a;
}

console.log(min(3, 4));
console.log(min(33, 409));
console.log(min("three", "four"));
