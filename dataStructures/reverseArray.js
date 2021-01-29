/** create your own implementation of the reverse array method, without using the native method.
 *
 * write two functions: reverseArray and reverseArrayInPlace.
 *
 * reverseArray takes an array as an argumend and produces a new array that has the same elements in inverse order.
 * reveseArrayInPlace does what the reverse method does: it modifies the array given as argument by reversing its elements.
 */

function reverseArray(arr) {
  let newArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
      newArr.push(arr[i])
  }
  return newArr;
}

console.log('reverseArray: ', reverseArray([11, 22, 33, 44, 55, 66]));

function reverseArrayInPlace(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[arr.length - (1 + i)] = arr[i];
  }
  arr = newArr;
  return arr;
}

console.log('reverseArrayInPlace: ', reverseArrayInPlace([1, 2, 3, 4, 5, 6]));
