function findUniq(arr) {
  //   do magic
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0]
}
console.log('first')
findUniq([1, 1, 1, 2, 1, 1])

console.log('second')
findUniq([1, 1, 2, 1, 1])

console.log('third')
findUniq([3, 3, 3, 10])
