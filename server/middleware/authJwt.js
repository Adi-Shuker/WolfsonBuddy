//verify Token, check User roles in database
import jwt from 'jsonwebtoken';
import authConfig from '../config/auth.config.js'


export const verify = (token) => jwt.verify(token, authConfig.secret);

const verifyTokenMiddleware = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }
    try{
        const decoded = jwt.verify(token, authConfig.secret);
        next();
    }catch (err){
        return res.status(401).send({
            message: "Unauthorized!"
        });
    }
};

const authJwt = {
    verifyTokenMiddleware,
    verify
};

export default authJwt;