/*
Implement a function that finds the longest palindrome in a given string. 
For example, in the string "My dad is a racecar athlete", the longest palindrome is "a racecar a". 
Count whitespaces as valid characters. 
Other palindromes in the above string include "dad", "ete", " dad " (including whitespace on each side of dad).
*/
console.clear();

function longestPalindrome(string) {
  let longest = '';
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      let slicedStr = string.slice(i, j);
      if (slicedStr === slicedStr.split('').reverse().join('') && slicedStr.length > longest.length) {
        longest = slicedStr;
      }
    }
  }
  return longest;
}

console.log(longestPalindrome('My dad is a racecar athlete'));
console.log(longestPalindrome('ليبيا'));
