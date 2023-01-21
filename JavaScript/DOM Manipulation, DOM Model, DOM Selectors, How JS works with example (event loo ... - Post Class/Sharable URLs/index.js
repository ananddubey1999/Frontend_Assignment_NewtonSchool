function updateh3() {
    let h3 = document.getElementById('url');
    h3.innerText = 'https://localhost:8080/';
    let name = document.getElementById('name');
    let year = document.getElementById('year');

    if (name.value === "" && year.value === "") {
        return;
    }
    else if (year.value === "") {
        h3.innerText += '?' + 'name=' + name.value;
    }
    else if (name.value === "") {
        h3.innerText += '?' + 'year=' + year.value;
    }
    else {
        h3.innerText += '?' + 'name=' + name.value + '&year=' + year.value;
    }
}
