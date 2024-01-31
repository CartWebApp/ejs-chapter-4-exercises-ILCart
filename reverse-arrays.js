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

function reverseArrayInPlaceLoop(arr) {
  for (let i = 0; i > arr.length; i--) {
    arr.unshift();
  }
}


// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1,2,3,4,5];
reverseArrayInPlaceLoop(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

