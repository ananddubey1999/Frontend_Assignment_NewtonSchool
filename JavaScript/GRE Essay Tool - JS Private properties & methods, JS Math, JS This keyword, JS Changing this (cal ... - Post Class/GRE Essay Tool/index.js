// JS code here
function countWord() {
    var words = document.getElementById("evaluatedText").value;

    var count = 0;
    var split = words.split(' ');

    for (var i = 0; i < split.length; i++) {
        if (split[i] != "") {
            count += 1;
        }
    }
    document.getElementById("wordCount").innerHTML = count;
}
