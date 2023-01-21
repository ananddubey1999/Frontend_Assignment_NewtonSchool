
const con = require("./connector");
const { slot_data,data } = require('./data')

const refreshAll = async () => {

    await con.query("DROP TABLE IF EXISTS events, user;",
        (err, result) => {
            if (err) {
                console.log(err)
            }
        });

    await con.query("CREATE TABLE events (id INT AUTO_INCREMENT NOT NULL, date DATE NOT NULL,slot1 INT, slot2 INT, slot3 INT, slot4 INT, slot5 INT, slot6 INT, slot7 INT, slot8 INT, slot9 INT, slot10 INT,slot11 INT, slot12 INT, slot13 INT, slot14 INT, primary key (id));",
        (err, result) => {
            if (err) {
                console.log(err)
            }
        });

    await con.query("CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, name TEXT(65535), primary key (id));",
    (err, result) => {
        if (err) {
            console.log(err)
        }
    });
    var i = 1;
    await slot_data.forEach(element => {
        i++;
        con.query("INSERT INTO events VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);", [i].concat(Object.values(element)), (err, result) => {
            if (err) {
                console.log(err)
            }
        })
    });
    i = 1;
    await data.forEach(element => {
        i++;
        con.query("INSERT INTO user  VALUES (?,?);",[i].concat(Object.values(element)), (err, result) => {
            if (err) {
                console.log(err)
            }
        })
    });
    console.log("data refreshed");
}
refreshAll();