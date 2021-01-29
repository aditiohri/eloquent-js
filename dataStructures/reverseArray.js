/** create your own implementation of the reverse array method, without using the native method.
 *
 * write two functions: reverseArray and reverseArrayInPlace.
 *
 * reverseArray takes an array as an argumend and produces a new array that has the same elements in inverse order.
 * reveseArrayInPlace does what the reverse method does: it modifies the array given as argument by reversing its elements.
 */

function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log("reverseArray: ", reverseArray([11, 22, 33, 44, 55, 66]));

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let oldValue = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = oldValue;
  }
  return arr;
}

console.log("reverseArrayInPlace: ", reverseArrayInPlace([1, 2, 3, 4, 5, 6]));
