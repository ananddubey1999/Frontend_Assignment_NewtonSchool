var count = 0;

$("#increment").on("click", function () {
    count += 1;
    document.getElementById("counter").innerHTML = count;
})

$("#decrement").on("click", function () {
    if (count > 0) {
        count -= 1;
    }
    else {
        count = 0;
    }
    document.getElementById("counter").innerHTML = count;
})
