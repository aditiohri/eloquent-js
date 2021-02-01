/** write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.
 * to find out whether the values should be compared directly (use the === operator) or have their properties compared, you can use the typeof operator. if it produces "object" for both values, you should do a deep comparison. but you have to take one silly exception into account: because of a historical accident, typeof null also produces "object"
 * the Object.keys function will be useful when you need to go over the properties of objects to compare them.
 *
 */

function deepEqual(value1, value2) {
  if (value1 === null || value2 === null) {
    if (value1 === null && value2 === null) return true;
    return false;
  }
  let type1 = typeof value1;
  let type2 = typeof value2;
  if (type1 === type2) {
    if (type1 === "object") {
      let value1Keys = Object.keys(value1);
      let value2Keys = Object.keys(value2);
      for (let val1 of value1Keys) {
        for (let val2 of value2Keys) {
          console.log(value1[val1], value2[val2]);
          return deepEqual(value1[val1], value2[val2]);
        }
      }
    } else if (value1 === value2) {
      return true;
    }
  }
  return false;
}

console.log(
  deepEqual({ cool: false, pool: true }, { cool: true, rule: "cool" })
);
console.log(typeof []);
