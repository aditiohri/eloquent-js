/** write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.
 * to find out whether the values should be compared directly (use the === operator) or have their properties compared, you can use the typeof operator. if it produces "object" for both values, you should do a deep comparison. but you have to take one silly exception into account: because of a historical accident, typeof null also produces "object"
 * the Object.keys function will be useful when you need to go over the properties of objects to compare them.
 *
 */

function deepEqual(one, two) {
  if (one === two) return true;

  if (isNull(one) || isNull(two)) return false;

  let oneKeys = Object.keys(one),
    twoKeys = Object.keys(two);

  if (oneKeys.length !== twoKeys.length) return false;

  for (let key of oneKeys) {
      if (!twoKeys.includes(key) || !deepEqual(one[key], two[key])) return false;
  }

  return true
}

console.log(deepEqual({ cool: true, pool: true }, { cool: true, pool: true }));

function isNull(x) {
  if (x === null || typeof x !== "object") return true;
  return false;
}

// console.log(isNull(null));
// console.log(isNull({}));
