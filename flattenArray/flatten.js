/*
Given an array of arrays, return all elements in a single array. You must use recursion.

Hint: Use Array.isArray(elem) to see if something is an array.

Example: 
flatten([[1, 1], [4], 3, [3], 4, [6, 7]]) // [1, 1, 4, 3, 3, 4, 6, 7]
*/
function flatten(arr) {
  let result = arguments[1] || [];
  if (arr.length === 0) {
    return result;
  }

  if (Array.isArray(arr[0])) {
    flatten(arr[0], result);
  } else {
    result.push(arr[0]);
  }
  return flatten(arr.slice(1), result);
}