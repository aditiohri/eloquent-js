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
  console.log(type1, type2);
  if (type1 === type2) {
    if (type1 === "object") {
      let value1Keys = Object.keys(value1);
      let value2Keys = Object.keys(value2);
      console.log("let's look through the object keys");
      value1Keys.forEach((val, idx) => {
        console.log(val, idx, value2Keys[idx] === val);
        return deepEqual(val, value2Keys[idx])
          ? deepEqual(value1[val], value2[val])
          : false;
      });
    }
    if (value1 === value2) {
      console.log("they are the smae");
      return true;
    } else {
      return false;
    }
  }
  //   console.log("i tried everything");
  //   return false;
}

console.log(deepEqual({ cool: true, pool: true }, { cool: true, pool: true }));
