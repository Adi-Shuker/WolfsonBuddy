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
        "/api/departments",
        [authJwt.verifyTokenMiddleware],
        userController.getAllDepartments
    );
    app.get(
        "/api/survey/question_types",
        [authJwt.verifyTokenMiddleware],
        userController.getQuestionTypes
    );
    app.get(
        "/api/survey/:department_id",
        [authJwt.verifyTokenMiddleware],
        userController.getSurvey
    );
    app.get(
        "/api/survey/result/:department_id",
        [authJwt.verifyTokenMiddleware],
        userController.getSurveyResult
    );
    app.post(
        "/api/survey/questions",
        [authJwt.verifyTokenMiddleware],
        userController.addQuestion
    );
    app.delete(
        "/api/survey/questions/:question_id",
        [authJwt.verifyTokenMiddleware],
        userController.deleteQuestion
    );
    app.post(
        "/api/survey/result",
        [authJwt.verifyTokenMiddleware],
        userController.addSurveyResult
    );
    app.get(
        "/api/survey/result/:department_id",
        [authJwt.verifyTokenMiddleware],
        userController.getSurveyResult
    );
};

export default userRoutes;