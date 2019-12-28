/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/

var evenOccurrence = function (arr) {
    let counterObj = {};
    let result = null;

    arr.forEach((i) => {
        let key = JSON.stringify(i);
        if (!counterObj[key]) {
            counterObj[key] = 1;
        } else {
            counterObj[key] = counterObj[key] + 1;
        }
    });

    for (let i in counterObj) {
        if (counterObj[i] % 2 === 0) {
            try {
                result = JSON.parse(i);
            } catch (e) {
                result = i;
            }
            break;
        }
    }
    return result;
}
