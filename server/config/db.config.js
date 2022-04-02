//configure MySQL database & Sequelize
import mysql from "mysql";

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
const dbConfig = {
    executeQuery:executeQuery
}

export default dbConfig;