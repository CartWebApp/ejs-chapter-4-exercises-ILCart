function deepEqual(value, reference) {
  if(value === reference){
    return true;
  }
  for(const [key, entry] of Object.entries(reference)){
    console.log(value[key] == entry,value[key],entry,"e");
  }
  return true;
}






// tests
let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
