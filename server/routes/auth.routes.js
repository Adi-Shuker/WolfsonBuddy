import verifySignUp from '../middleware/verifySignUp.js';
import authController from '../controllers/auth.controller.js';

const authRoutes = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post(
        "/api/auth/signup",
        [verifySignUp.checkDuplicateEmail],
        authController.signup
    );
    app.post("/api/auth/signin", (req, res) => {
        authController.signin(req, res)
    });
    app.get("/api/verify-token", (req, res) => {
        authController.verifyToken(req,res)
    })
    app.get("/api/user-data-from-token", (req, res) => {
        authController.getUserDataFromToken(req,res)
    })
};

export default authRoutes;