//NAIVE WAY OF DOING THINGS
function multiPointers(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// console.log(multiPointers([-2, -1, -0, 1, 2]))
// console.log(multiPointers([-1, -0, 1, 2]))

//REFACTOR
function multiPointers2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    else if (sum > 0) {
      right--;
    }
    else {
      left++
    }
  }
}

console.log(multiPointers2([-2, -1, -0, 1, 2]));
console.log(multiPointers2([-1, -0, 2]));
