/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
*/

let zeroSum = function (arr) {
    let ob = {};
    for (let i = 0; i < arr.length; i++) {
        if (!ob[arr[i]]) {
            ob[-arr[i]] = -arr[i];
        }
        if (ob[arr[i]]) {
            return true;
        }
    }
    return false;
};

