function reverseArray(arr) {
  let reversed = [];
  for (const num of arr) {
    reversed.unshift(num);
  }
  return reversed
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr.unshift(...arr.splice(i,1));
  }
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]