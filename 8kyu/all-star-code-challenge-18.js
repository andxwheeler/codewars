// Description:

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

// Solution:

function strCount(str, letter) {
  let occurrence = 0
  for(let i = 0; i < str.length; i++) {
    if(str[i] === letter) {
      occurrence += 1
    }else {
      occurrence += 0
    }
  }
  return occurrence
}