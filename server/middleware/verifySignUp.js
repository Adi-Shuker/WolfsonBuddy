import dbConfig from '../config/db.config.js';

const executeQuery = dbConfig.executeQuery;

const checkDuplicateEmail = (req, res, next) => {
    console.log ("in checkDuplicateEmail")
    const email = req.body.email;
    executeQuery("SELECT * FROM users WHERE email = '" + email + "'")
        .then(user => {
            if(user.length === 1){
                res.status(400).send({
                     message: "Failed! Email is already in use!"
                });
                return;
            }
            next();
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

const verifySignUp = {
    checkDuplicateEmail: checkDuplicateEmail,
};
export default verifySignUp;