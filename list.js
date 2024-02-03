function arrayToList(arr) {
  return arr.length <= 0 ? null : {"value": arr.shift(), "rest": arrayToList(arr)}; // god of messy one liners :>
}
function popArrayToList(arr) {
  let obj;
  while (arr.length > 0) {
    let val = arr.pop();
    if (obj) {
      obj = { value: val, rest: obj };
    } else {
      obj = { value: val, rest: null };
    }
  }
  return obj;
}

function listToArray(list, arr = []) {
  if (list == null) {
    return arr;
  }
  arr.push(list.value);
  return listToArray(list.rest, arr);

}
function prepend(val, rest = null) {
  return { "value": val, "rest": rest };
}
function nth(list, index) {
  if (index == 0) {
    return list.value;
  }
  return nth(list.rest, index - 1)
}
// tests
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
//→ 20
