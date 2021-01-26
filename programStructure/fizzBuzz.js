function fizzBuzz() {
  let i = 1;
  while (i < 101) {
    if (multipleOfThree(i) && multipleOfFive(i)) {
      console.log("FizzBuzz");
    } else if (multipleOfThree(i)) {
      console.log("Fizz");
    } else if (multipleOfFive(i)) {
      console.log("Buzz");
    } else {
        console.log(i)
    }
    i++;
  }
}

const multipleOfThree = (num) => num % 3 === 0 ? true : false;
const multipleOfFive = (num) => num % 5 === 0 ? true : false;

fizzBuzz();

/** official answer below */
// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 === 0) output += "Fizz";
//     if (n % 5 === 0) output += "Buzz";
//     console.log(output || n)
// }