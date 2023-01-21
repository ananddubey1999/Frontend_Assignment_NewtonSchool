const billItems = [{
  id: 1,
  itemName: "Bread",
  price: 20
}, {
  id: 2,
  itemName: "Butter",
  price: 50
}, {
  id: 3,
  itemName: "Tomatoes",
  price: 30
}, {
  id: 4,
  itemName: "Onion",
  price: 40
}, {
  id: 5,
  itemName: "Pomegranate",
  price: 60
}, {
  id: 6,
  itemName: "Apple",
  price: 40
}, {
  id: 7,
  itemName: "Grapes",
  price: 30
}, {
  id: 8,
  itemName: "Mango",
  price: 100
}]
var t;
window.onload = function () {
  t = document.getElementsByTagName("table").item(0);
  var r = document.createElement("tr");
  var d1 = document.createElement("th");
  var d2 = document.createElement("th");
  var d3 = document.createElement("th");
  d1.innerHTML = "<b>id</b>";
  d2.innerHTML = "<b>itemName</b>";
  d3.innerHTML = "<b>price</b>";
  r.appendChild(d1);
  r.appendChild(d2);
  r.appendChild(d3);
  t.appendChild(r);
  for (let i = 0; i < 8; i++) {
    var r = document.createElement("tr");
    var d1 = document.createElement("td");
    var d2 = document.createElement("td");
    var d3 = document.createElement("td");
    d1.innerText = billItems[i]["id"];
    d2.innerText = billItems[i]["itemName"];
    d3.innerText = billItems[i]["price"];
    r.appendChild(d1);
    r.appendChild(d2);
    r.appendChild(d3);
    t.appendChild(r);
  }
}

function update() {
  t.innerHTML = "";
  var text = document.getElementById("search-bar").value;
  text = text.toLowerCase();
  var a = [];
  for (let i = 0; i < 8; i++) {
    var p = billItems[i]["itemName"].toLowerCase();
    if (p.indexOf(text) != -1) a.push(i);
  }
  if (a.length == 0) {
    t.innerText = "No items found!";
    return;
  }
  var r = document.createElement("tr");
  var d1 = document.createElement("th");
  var d2 = document.createElement("th");
  var d3 = document.createElement("th");
  d1.innerHTML = "<b>id</b>";
  d2.innerHTML = "<b>itemName</b>";
  d3.innerHTML = "<b>price</b>";
  r.appendChild(d1);
  r.appendChild(d2);
  r.appendChild(d3);
  t.appendChild(r);
  for (let i = 0; i < a.length; i++) {
    var r = document.createElement("tr");
    var d1 = document.createElement("td");
    var d2 = document.createElement("td");
    var d3 = document.createElement("td");
    d1.innerText = billItems[a[i]]["id"];
    d2.innerText = billItems[a[i]]["itemName"];
    d3.innerText = billItems[a[i]]["price"];
    r.appendChild(d1);
    r.appendChild(d2);
    r.appendChild(d3);
    t.appendChild(r);
  }
}
