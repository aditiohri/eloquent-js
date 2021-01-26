function fizzBuzz() {
  let i = 1;
  while (i < 101) {
    if (multipleOfThree(i) && multipleOfFive(i)) {
      console.log(i, "FizzBuzz");
    } else if (multipleOfThree(i)) {
      console.log(i, "Fizz");
    } else if (multipleOfFive(i)) {
      console.log(i, "Buzz");
    }
    i++;
  }
}

const multipleOfThree = (num) => num % 3 === 0 ? true : false;
const multipleOfFive = (num) => num % 5 === 0 ? true : false;

fizzBuzz();

// can be refactored into a for loop or switch statements --- which is most efficient?