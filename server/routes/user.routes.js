import authJwt from '../middleware/authJwt.js';
import userController from '../controllers/user.controller.js'


const userRoutes = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post("/api/update_password", (req, res) => {
        userController.updatePassword(req, res)
    });
    app.get(
        "/api/get_all_departments",
        [authJwt.verifyTokenMiddleware],
        userController.getAllDepartments
    );
    app.get(
        "/api/get_all_survey_questions_types",
        [authJwt.verifyTokenMiddleware],
        userController.getAllSurveyQuestionsTypes
    );
    app.get(
        "/api/example/user",
        [authJwt.verifyTokenMiddleware],
        userController.userBoard
    );
    app.get(
        "/api/example/admin",
        [authJwt.verifyTokenMiddleware],
        userController.adminBoard
    );
};

export default userRoutes;