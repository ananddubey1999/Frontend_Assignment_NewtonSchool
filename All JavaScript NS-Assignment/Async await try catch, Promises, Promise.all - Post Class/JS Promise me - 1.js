function promiseMe(delay, value) {
    // return the output using return keyword
    // do not console.log it
    return new Promise(resolve => setTimeout(resolve, delay, value));
}
