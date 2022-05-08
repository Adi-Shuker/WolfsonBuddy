//handle signup & signin actions
import config from "../config/auth.config.js";
import dbconfig from "../config/db.config.js";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import authJwt from "../middleware/authJwt.js";

const executeQuery = dbconfig.executeQuery;

const signup = (req, res) => {
  // Save User to Database
  const userName = req.body.username;
  const email = req.body.email;
  const role = req.body.role;
  const password = CryptoJS.AES.encrypt(
    req.body.password,
    config.passwordKey
  ).toString();
  executeQuery(
    "INSERT INTO users (user_name, email, password, role) VALUES ('" +
      userName +
      "', '" +
      email +
      "', '" +
      password +
      "', '" +
      role +
      "')"
  )
    .then((data) => {
      res.status(200).send({ message: "User was registered successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
const signin = (req, res) => {
  const email = req.body.email;
  console.log("line 26");
  return executeQuery("SELECT * FROM users WHERE email ='" + email + "'")
    .then((user) => {
      if (user.length === 0) {
        return res.status(404).send({ message: "User Not found." });
      }
      const bytes = CryptoJS.AES.decrypt(user[0].password, config.passwordKey);
      const decryptPassword = bytes.toString(CryptoJS.enc.Utf8);
      if (decryptPassword !== req.body.password) {
        return res.status(500).send({ message: "Incorrect password" });
      }
      const { id, user_name: userName, email, role } = user[0];
      const token = jwt.sign({ email }, config.secret, {
        expiresIn: 86400, // 24 hours
      });
      return res.status(200).send({
        id,
        userName,
        email,
        role,
        accessToken: token,
      });
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message });
    });
};

const verifyToken = (req, res) => {
  const token = req.headers["x-access-token"];
  try {
    authJwt.verify(token);
    res.send({
      isAuthenticated: true,
    });
  } catch (err) {
    res.send({ isAuthenticated: false });
  }
};

const authController = {
  signup,
  signin,
  verifyToken,
};

export default authController;
