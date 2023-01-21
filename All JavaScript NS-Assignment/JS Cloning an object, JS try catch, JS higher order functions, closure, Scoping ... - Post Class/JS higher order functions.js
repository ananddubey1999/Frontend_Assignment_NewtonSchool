function calculate(operation) {
    //  write your code here 
    function sum(a, b) {
        console.log(a + b);
    }
    function difference(a, b) {
        console.log(a - b);
    }
    if (operation === "ADD") {
        return sum;
    } else {
        return difference;
    }

//     return function op(num1,num2){
//        if(operation == "ADD")
//             console.log(num1+num2)
//        if(operation == "SUBTRACT")
//             console.log(num1-num2)
//    }
}
