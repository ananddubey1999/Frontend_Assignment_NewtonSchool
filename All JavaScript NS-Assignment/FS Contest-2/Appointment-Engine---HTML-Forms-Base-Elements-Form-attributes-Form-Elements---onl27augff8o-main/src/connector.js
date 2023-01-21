
var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "a",
    database: "test",
    multipleStatements: true
});


con.connect(function (err) {
    if (err) return console.log("failed to connect to mysql server/ database", err);
    else return console.log("connection establish with Datebase!!!!");
});

module.exports = con;