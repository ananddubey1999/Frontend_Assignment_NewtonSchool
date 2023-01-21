function mul(x) {
    // write your code  here
    return function (y) {
        return function (z) {
            console.log(x*y*z)
        }
    }
}
