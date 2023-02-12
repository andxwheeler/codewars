// Description:

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// Solution:

function solution(string) {
  let splitStr = string.split("")
  let newStr = ""
  splitStr.forEach(e => {
    if(e === e.toUpperCase()) newStr +=" "+e
    else newStr += e
  })
  return newStr
}
