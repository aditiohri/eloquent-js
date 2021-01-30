/** let list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null }}}
 * write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as an argument.
 * also write a listToArray function that produces an array from a list.
 * then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list,
 * and nth, a function that takes a list and a number and retuns the element at the given position in the list or undefined when there is no such element.
 * write a recursive version of nth as well.
 * https://eloquentjavascript.net/code/#4.3
 */

function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}
// console.log(arrayToList([1, 2, 3]));

function listToArray(list) {
  let arr = [];
  for (let object = list; object; object = object.rest) {
    arr.push(object.value);
  }
  return arr;
}
let list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };
// console.log(listToArray(list));

function prepend(value, list) {
  return { value, rest: list };
}
// console.log(prepend(10, prepend(20, null)))

function nth(n, list) {
  if (n === 0) return list.value;
  if (n > 0) {
    while (n > 0) {
      list = list.rest;
      if (!list) return undefined;
      n--;
    }
    return list.value;
  }
}

// console.log(nth(1, list));

function nthRecursive(n, list) {
  if (!list) return undefined;
  if (n === 0) return list.value;
  if (n > 0) return nthRecursive(n - 1, list.rest);
}

// console.log(nthRecursive(1, list));