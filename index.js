var express = require('express');
var app = express();
var mysql = require('mysql');
var dt = require('./crud.js');

var con = mysql.createConnection({
    host : "95.217.158.21",
    user : "husen_lokhandwala",
    password : "woj5SFLc!PWT",
    database:"husen_test"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


app.get('/' , (req, res) => {
    res.send("Hello World!");
});

//Creating GET Router to fetch all the learner details from the MySQL Database
app.get('/user' , function(req, res) {
    const sql = "Select * from user"
    con.query(sql, (err, rows) => {
    if (!err){
        res.send(rows);
    }
    else
    console.log(err);
    })
});

app.post('/user-insert' , function(req, res) {
    const sql = "Insert into user(name,age) values('Test',30)";
    con.query(sql, (err, rows) => {
    if (!err)
    res.send("successfuly inserted");
    else
    console.log(err);
    })
});

app.delete('/user-delete' , function(req, res) {
    const sql = "delete from user where id = 1";
    con.query(sql, (err, rows) => {
    if (!err)
    res.send("successfuly deleted");
    else
    console.log(err);
    })
});

app.put('/user-update' , function(req, res) {
    const sql = "update user set name = 'Husain' where id = 2";
    con.query(sql, (err, rows) => {
    if (!err)
    res.send("successfuly updated");
    else
    console.log(err);
    })
});

app.listen(5000, () => {
    console.log("Server is running on port 5000.");
});