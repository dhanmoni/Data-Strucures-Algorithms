function slidigWindow(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum

  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j - num] + arr[j];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum
}

console.log(slidigWindow([1, 2, 0, 6, 6, 0, 3, 2, 6], 3))
