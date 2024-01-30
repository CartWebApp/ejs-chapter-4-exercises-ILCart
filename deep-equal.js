function deepEqual(value, reference) {
  //console.log(reference,value)

  if(value === reference){
    return true;
  }
  for (const key of Object.keys(value)) {
    if(typeof(value) == "object" && reference[key]){
      return deepEqual(value[key],reference[key])
    }
  }
  return false
}






// tests
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
//→ false
console.warn(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
