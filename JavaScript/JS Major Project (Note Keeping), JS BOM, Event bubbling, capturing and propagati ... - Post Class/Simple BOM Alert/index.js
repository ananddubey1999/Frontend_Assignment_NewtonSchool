const text = document.getElementById("word");
const btn = document.getElementById("click");

btn.addEventListener("click", () => {
    if (text.value.length == 0) {
        alert("message");
        return false;
    }
    return true;
});
