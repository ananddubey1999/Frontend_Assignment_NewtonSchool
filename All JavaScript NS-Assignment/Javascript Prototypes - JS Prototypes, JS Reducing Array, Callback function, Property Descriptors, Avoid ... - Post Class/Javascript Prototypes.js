// Array.prototype
Array.prototype.contains = function (val) {
    return this.some(string => JSON.stringify(string) === JSON.stringify(val));
}
Array.prototype.includesOneof = function (array) {
    for (let i = 0; i < array.length; i++) {
        if (this.contains(array[i])) {
            return true;
        }
    }
    return false;
}
