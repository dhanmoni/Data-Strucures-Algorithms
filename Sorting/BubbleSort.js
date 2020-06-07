//BAD WAY===
function bubbleSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr
}

console.log(bubbleSort([20, 78, 10, 6, 5]))

//GOOD WAY===
function bubbleSort2(arr) {

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr
}

console.log(bubbleSort2([20, 78, 10, 6, 5]))

//OPTIMIZED WITH NOSWAPS
function bubbleSort3(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      noSwaps = false
    }
    if (noSwaps) break;
  }

  return arr
}
console.log(bubbleSort3([20, 78, 10, 6, 5]))

