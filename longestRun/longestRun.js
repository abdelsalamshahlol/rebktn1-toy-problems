/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/
function longestRun(string) {
    let runs = {};
    let result;
    for (let index = 0; index < string.length; index++) {
        if(!runs[string[index]]){
            runs[string[index]] = [];
            runs[string[index]].push(index);
        }else{
            runs[string[index]].push(index);
        }
    }
    console.log(runs);
    runs = Object.values(runs);
    console.log(runs);
    result =  runs[0];
    for(let run of runs.slice(1)){
        if(run.length > result.length){
            result = run;
        }
    }
    console.log(result);
}
// longestRun("abbbcc");
// longestRun("abccccccc");
longestRun("mississippi")
// longestRun("abcdefgh")
