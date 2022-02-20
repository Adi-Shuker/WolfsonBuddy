import express from 'express'
import mysql from 'mysql'


const PORT = 3001;
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors())
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

// check if the user exist
app.post("/isExist", (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    executeQuery("SELECT * FROM users WHERE user_name =" + "'" + email + "'" + " AND user_password =" + "'" + password + "'")
        .then(data => {
            res.json(data)
        })
        .catch(err => console.log(err))
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});