function validateAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    lookup[char] ? lookup[char] += 1 : lookup[char] = 1
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!(lookup[char])) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }
  return true;

}

console.log(validateAnagram('abcdd', 'ddbca'))
console.log(validateAnagram('abcdd', 'ddbcg'))
// validateAnagram('sbbaba', 'bbbsaa')
