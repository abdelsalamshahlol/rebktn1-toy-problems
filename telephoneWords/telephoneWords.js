/*
Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!

Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number (you should return all permutations, not only English words).


telephoneWords("0002") // [ "000A", "000B", "000C" ]
telephoneWords("1123") // [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]
*/

console.clear();
function telephoneWords(digitString) {
  const alpha = {
    2:['a','b','c']
  }
  let result = ''
  for(let num of digitString){
    // let result = '';
    if(num==='0'|| num === '1'){
      result += num;
    }else{
      console.log({alpha: alpha[num]})
      for(let letter of alpha[num]){
        result += alpha[num];
      }
    }
  }
  return result;
}

console.log(telephoneWords('0002'));
