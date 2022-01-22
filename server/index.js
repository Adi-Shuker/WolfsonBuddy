import mysql from 'mysql'
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "wolfson148",
    database: "sql_hello_world"
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM users", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});