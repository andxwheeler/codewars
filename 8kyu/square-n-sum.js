// Description:

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Solution:

function squareSum(numbers) {
  let sum = 0
  numbers.forEach( number => {
    sum += (number * number)
  })
  return sum
}

// A better method would be to use .reduce

function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}