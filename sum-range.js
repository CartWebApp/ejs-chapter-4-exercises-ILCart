function range(start, end, step = 1) {
  let rangeArray = [];
  if(step < 0){
    for (let i = start; i >= end; i += step) {
      rangeArray.push(i);
    }
    return rangeArray
  }
  for (let i = start; i <= end; i += step) {
    rangeArray.push(i);
  }

  return rangeArray
}

function sum(numbers) {
  let sumNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumNum += numbers[i];
  }
  return sumNum;
}



// tests
console.log(range(1, 10));

// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
