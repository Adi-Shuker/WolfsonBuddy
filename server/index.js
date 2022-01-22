// import express from 'express'
//
// const path = require('path');
// import mysql from 'mysql'
//
// const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "wolfson148",
//     database: "sql_hello_world"
// });
//
// const executeQuery = (sqlQuery) => {
//     return con.connect((err) => {
//         if (err) throw err;
//         console.log("Connected!");
//         return con.query(sqlQuery, (err, result, fields) => {
//             if (err) throw err;
//             console.log(result);
//         });
//     });
// }
//
//
// const PORT = 3001;
//
// const app = express();
//
//
// // Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../client/build')));
//
// // Handle GET requests to /api route
// app.get("/api", (req, res) => {
//     res.json({message: "Hello from server!"});
// });
//
// // get list of users
// app.get("/getUsers", (req, res) => {
//     executeQuery("SELECT * FROM users")
//         .then(data => res.json(data));
// });
//
// // All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });
//
// app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
// });