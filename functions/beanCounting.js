/** write a function, countBs, that takes a string as its only argument and returns a number that indicates how many uppercase "B" characters there are in the string */

function countBs(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "B") count++
    }
    return count;
}

console.log(countBs("BumbleBees")) //2
console.log(countBs("wedidit")) //0
console.log(countBs("suBpar")) //1

/** write a function, countChar, that behaves like countBs except it takes a second argument that indicates the character that is to be counted rather than only uppercase "B" characters. rewrite countBs to make use of this new function */