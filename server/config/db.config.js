//configure MySQL database & Sequelize
import mysql from "mysql";

const con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123456",
  database: "wolfson_db",
});

const executeQuery = (sqlQuery) => {
  return new Promise((resolve, reject) => {
    con.query(sqlQuery, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
const dbConfig = {
  executeQuery: executeQuery,
};

export default dbConfig;
