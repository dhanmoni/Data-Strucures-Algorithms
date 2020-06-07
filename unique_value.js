function uniqueValue(arr) {
  let pointer1 = 0;
  let pointer2 = 1;
  if (arr.length === 0) return 0

  while (pointer2 < arr.length) {

    if (arr[pointer1] === arr[pointer2]) {
      pointer2++;
    } else {
      pointer1++;
      arr[pointer1] = arr[pointer2];
    }
  }
  return pointer1 + 1
  //return new Set(arr).size
}



console.log(uniqueValue([2, 2, 3, 4, 4, 22, 33, 33]))


