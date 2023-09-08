function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let newArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }
  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }

  return newArr;
}

function mergeSort() {}

let arr1 = [1, 3, 4, 5];
let arr2 = [2, 4, 6, 8];
console.log(merge(arr1, arr2)); // [1,2,3,4,4,5,6,8]

arr1; // [1,3,4,5];
arr2; // [2,4,6,8];

let arr3 = [-2, -1, 0, 4, 5, 6];
let arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];

console.log(merge(arr3, arr4)); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

let arr5 = [3, 4, 5];
let arr6 = [1, 2];

console.log(merge(arr5, arr6)); // [1,2,3,4,5]

module.exports = { merge, mergeSort };
