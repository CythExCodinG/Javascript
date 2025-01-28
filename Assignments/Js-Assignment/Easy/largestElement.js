function largestElement(numbers) {
  let max = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i]
    }
  }
  return max
}
numbers = [2, 3, 2, 6, 8, 4, 8, 9, 2, 1, 5]
console.log(largestElement(numbers))