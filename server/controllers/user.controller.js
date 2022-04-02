import dbconfig from '../config/db.config.js';
import config from '../config/auth.config.js';
import CryptoJS from "crypto-js";

const executeQuery = dbconfig.executeQuery;
//return public & protected content
const userBoard = (req, res) => {
    res.status(200).send("User Content.");
};
const adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};
const updatePassword = (req ,res) => {
    const email = req.body.email;
    const password = CryptoJS.AES.encrypt(req.body.password, config.passwordKey).toString();
    executeQuery("UPDATE users SET password =" + "'" + password + "'" + " WHERE email =" + "'" + email + "'").then(() => {
        executeQuery("select row_count() as row_count")
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => console.log(err))
    }).catch(err => console.log(err))
}

const userController = {
    userBoard,
    adminBoard,
    updatePassword,
};



export default userController;