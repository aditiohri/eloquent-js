/** write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.
 *
 * next, write a sum function that takes an array of numbers and returns the sum of these numbers. try with the range of numbers from 1-10 and see if it returns 55.
 *
 * last, modify your range function to take an optional third argument that indicates the "step" value used when building the array. if no step is given, the elements go up by increments of one, as before. the function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. it should also work with negative step values so that range(5, 2, -1) returns [5,4,3,2]
 */

function range(start, end) {
    let nums = [start];
    for (let i = 1; i <= (end-start); i++) {
        nums.push(start+i);
    }
    return nums
}

// console.log(range(1,100))

function sum([...numbers]) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

console.log(sum(range(1, 10)))