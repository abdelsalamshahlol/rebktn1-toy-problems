/*
Implement Operators

Write three functions to replace the multiply, divide, and modulo operators. 
The only operators you may only use in your solution are addition and subtraction. 
Your functions will only have to handle integer math.

EXAMPLES:
  multiply(5, 2) // 10
  divide(5, 2) // 2
  modulo(5, 2) // 1
*/

var multiply = function (x, y) {
  let result = 0;
  while (y > 0) {
    result += x;
    y--;
  }
  return result;
};

var divide = function (x, y) {
  let result = 0;
  while (x > 0) {
    if (x === 1)
      return result;
    result += 1;
    x -= y;
  }
  return result;
};

var modulo = function (x, y) {
  while (x >= y) {
    x -= y;
  }
  return x;
};
