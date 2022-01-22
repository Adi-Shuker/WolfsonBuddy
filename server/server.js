import express from 'express'
import path from 'path'
import mysql from 'mysql'


const PORT = 3001;

const app = express();

// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, './')));
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "wolfson148",
    database: "sql_hello_world"
});

const executeQuery = (sqlQuery) => {
    return new Promise((resolve, reject) => {
            con.query(sqlQuery, (err, result) => {
                if (err) return reject(err)
                resolve(result)
            })
        }
    )
}


// Handle GET requests to /api route
app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"});
});

// get list of users
app.get("/getUsers", (req, res) => {
    executeQuery("SELECT * FROM users")
        .then(data => res.json(data))
        .catch(err => console.log(err))
});

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});