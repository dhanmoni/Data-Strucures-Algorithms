//Calculate fibanaci sequence---
//Naive way===
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(40))

//Using memoization---
function fib_memo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
  memo[n] = res;
  return res;
}

//console.log(fib_memo(40))

//Using indeces beforehand---
function fib_memo2(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  let res = fib_memo2(n - 1, memo) + fib_memo2(n - 2, memo);
  memo[n] = res;
  return res;
}

//Tabulation method

function fib_table(n) {
  if (n <= 2) return 1;
  let arr = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n]
}

console.log(fib_table(100))
