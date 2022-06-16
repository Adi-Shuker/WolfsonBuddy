import dbconfig from '../config/db.config.js';
import config from '../config/auth.config.js';
import CryptoJS from "crypto-js";

const executeQuery = dbconfig.executeQuery;

const getAllDepartments = (req, res) => {
    executeQuery("SELECT * FROM departments;")
        .then(departments => {
            res.status(200).json(departments);
        })
        .catch(err => console.log(err))
};

const getQuestionTypes = (req, res) => {
    executeQuery("SELECT * FROM question_types;")
        .then(SurveyQuestionsTypes => {
            res.status(200).json(SurveyQuestionsTypes);
        })
        .catch(err => console.log(err))
};

const getSurvey =(req, res) => {
    var department_id = req.params.department_id;
    executeQuery("select q.id as question_id, q.text as question_text,qt.type as question_type, group_concat(qsa.suggested_answer) as suggested_answers " +
        "from surveys as s join questions as q on s.department_id=" + department_id +
        " and s.id=q.survey_id left join question_suggested_answers as qsa on qsa.question_id=q.id " +
        "left join question_types as qt on qt.id=q.type_id "+
        "group by 1;")
        .then(survey => {
            res.status(200).json(survey);
        })
        .catch(err => console.log(err))
}

const addQuestion = (req, res)=>{
    const department_id = req.body.department_id;
    var survey_id;
    const question_type_id = req.body.question_type_id;
    const text = req.body.text;
    const suggested_answers = req.body.suggested_answers;
    var query = "select id from surveys where department_id="+department_id;

    executeQuery(query).then(data=>{
        survey_id = data[0].id;
    }).then(()=>{
        query = "insert into questions(type_id, survey_id,text) values("+question_type_id+","+survey_id+", '"+text+"');   ";
        executeQuery(query).then(data=>{
            query="";
            if(suggested_answers!==null&&suggested_answers.length>0){
                query += 'insert into question_suggested_answers(question_id, suggested_answer) values ';
                suggested_answers.forEach((element,index)=> {
                    suggested_answers[index]= '( LAST_INSERT_ID(), '+"'" + element + "') ";
                });
                query+= suggested_answers.join(', ') + ';';
                executeQuery(query).then(resData => {
                    res.status(200).json(resData);
                })

            }else{
                res.status(200).json(data);
            }

        }).catch(err => console.log(err))
    })
}


const deleteQuestion = (req, res)=>{
    const question_id = req.params.question_id;
    var query = "delete from question_suggested_answers as qsa where qsa.question_id="+question_id+";";
    executeQuery(query).then(data=>{
        query="delete from users_answers as ua where ua.question_id="+question_id+";";
        executeQuery(query).then(resData => {
            query="delete from questions as q where q.id="+question_id+";";
            executeQuery(query).then(resData => {
                res.status(200).json(resData);
            })
        })
            .catch(err => console.log(err))
    })
}

const addSurveyResult =(req, res) => {
    const answers = req.body.answers;
    var query = "insert into users_answers(question_id, answer) values ";
    if(answers!==null&&answers.length>0){
        answers.forEach((answer,index)=> {
            answers[index]= '( '+answer.question_id+", '"+answer.answer+"') ";
        });
        query+= answers.join(', ') + ';';
        executeQuery(query)
            .then(resData => {
                res.status(200).json(resData);
            })
            .catch(err => console.log(err))
    }
}

const getSurveyResult =(req, res) => {
    const department_id = req.params.department_id;
    executeQuery("select ua.question_id, group_concat(ua.answer) as answers,qt.type as question_type, q.text as " +
        "question_text, group_concat(qsa.suggested_answer) as suggested_answers from surveys as s " +
        "join questions as q on s.department_id=" + department_id + " and q.survey_id=s.id " +
        "join users_answers as ua on q.id=ua.question_id " +
        "left join question_types as qt on qt.id=q.type_id " +
        "left join question_suggested_answers as qsa on qsa.question_id=q.id " +
        "group by 1;")
        .then(SurveyResult => {
            res.status(200).json(SurveyResult);
        })
        .catch(err => console.log(err))
}

const updatePassword = (req ,res) => {
    const email = req.body.email;
    const password = CryptoJS.AES.encrypt(req.body.password, config.passwordKey).toString();
    executeQuery("UPDATE users SET password =" + "'" + password + "'" + " WHERE email =" + "'" + email + "'").then(() => {
        executeQuery("select row_count() as row_count")
            .then(resData => {
                res.status(200).json(resData);
            })
            .catch(err => console.log(err))
    }).catch(err => console.log(err))
}

const userController = {
    updatePassword,
    getAllDepartments,
    getQuestionTypes,
    getSurvey,
    addSurveyResult,
    getSurveyResult,
    addQuestion,
    deleteQuestion,
};



export default userController;