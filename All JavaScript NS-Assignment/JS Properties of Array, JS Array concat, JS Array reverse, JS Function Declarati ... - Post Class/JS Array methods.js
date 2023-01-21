function getNumbersGreaterThan5(nums) {
    // write code here
    // return the output , do not use console.log here
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 5) {
            arr.push(nums[i]);
        }
    }
    return arr;

}
