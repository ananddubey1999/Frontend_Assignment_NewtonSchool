function test_divisors(low, high) {
    //write code here
    // use console.log to display the output
    let s = "";
    for (let i = low; i <= high; i++) {
        if (i % 3 == 0) {
            s = s + i + " " + "div3" + " ";
        }
        else {
            s = s + i + " ";
        }
    }
    console.log(s);
}
