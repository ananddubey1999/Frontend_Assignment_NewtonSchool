function sum_array(arr) {
// write code here
// use console.log for displaying the output
let sum = 0;
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        sum += arr[i][j];
    }
}
console.log(sum);
}
