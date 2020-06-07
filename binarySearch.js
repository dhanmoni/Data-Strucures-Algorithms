function binarySearch(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return null;
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== num && left <= right) {

    if (arr[middle] > num) {
      right = middle - 1;
    }
    else {
      left = middle + 1
    }
    middle = Math.floor((left + right) / 2);
  }
  // if (arr[middle] === num) return middle;
  // else return -1
  return arr[middle] === num ? middle : -1

}
console.log(binarySearch([1, 2, 3, 4, 6, 8, 10, 55, 71, 78, 108], -7))