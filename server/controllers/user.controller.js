import dbconfig from '../config/db.config.js';
import config from '../config/auth.config.js';
import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from 'uuid';

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

const addStaffMember =(req, res) => {
    const {name, department_id, role, description, phone_number, clinical_practice,
        scientific_practice, academic_experience, professional_unions,education } = req.body;
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    const file = req.files.picture;
    const img_name = uuidv4().toString() + "." + file.name.split(".")[1];
    if(file.mimetype === "image/jpeg" ||file.mimetype === "image/png"||file.mimetype === "image/gif" ){
        file.mv('./images/teamMembersImages/'+img_name, function(err) {
            if (err)
                return res.status(500).send(err);
            var query = "insert into staff(name, department_id, role, description, picture, phone_number, clinical_practice,scientific_practice, academic_experience, professional_unions,education)" +
                " values ('"+name+"', '"+ department_id+"', '"+
                role+"', '"+ description+"', '" + img_name+"', '"+ phone_number+"', '"+ clinical_practice+"', '"+
                scientific_practice+"', '"+ academic_experience+"', '"+ professional_unions+"', '"+education+"')";
            executeQuery(query)
                .then(resData => {
                    res.status(200).json(resData);
                })
                .catch(err => console.log(err))
        });
    } else {
        res.status(400).send("This format is not allowed , please upload file with '.png','.gif','.jpg'");
    }
}

const getStaffMembers = (req, res) => {
    executeQuery("select s.id as id, s.name as member_name, d.name as department_name, s.role,description, s.picture as picture," +
        " s.phone_number,s.clinical_practice,s.scientific_practice, s.academic_experience, s.professional_unions, s.education " +
        "from departments as d join staff as s where d.id=s.department_id;")
        .then(staffMembers => {
            res.status(200).json(staffMembers);
        })
        .catch(err => console.log(err))
};

const addUpdate =(req, res) => {
    const {title, postDate, content, link } = req.body;
    const date = postDate.slice(0, 19).replace('T', ' ');
    const query = "insert into announcements_and_updates(title, post_date, content, link) values('"+title+"','"
        +date+"','"+content+"','"+link+"')";
    executeQuery(query)
        .then(resData => {
            res.status(200).json(resData);
        })
        .catch(err => console.log(err))
}

const getAllUpdates =(req, res) => {
    const query = "select * from announcements_and_updates";
    executeQuery(query)
        .then(resData => {
            res.status(200).json(resData);
        })
        .catch(err => console.log(err))
}

const deleteNews =(req, res) => {
    const news_id = req.params.news_id;
    const query = "delete from announcements_and_updates where id="+news_id+";";
    executeQuery(query)
        .then(resData => {
            res.status(200).json(resData);
        })
        .catch(err => console.log(err))
}

const deleteStaffMember =(req, res) => {
    const member_id = req.params.member_id;
    const query = "delete from staff where id="+member_id+";";
    executeQuery(query)
        .then(resData => {
            res.status(200).json(resData);
        })
        .catch(err => console.log(err))
}

const updateStaffMember = (req, res) => {
    const member_id = req.params.member_id;
    const {name, department_id, role, description, phone_number, clinical_practice,
        scientific_practice, academic_experience, professional_unions,education } = req.body;
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    const file = req.files.picture;
    const img_name = uuidv4().toString() + "." + file.name.split(".")[1];
    if(file.mimetype === "image/jpeg" ||file.mimetype === "image/png"||file.mimetype === "image/gif" ){
        file.mv('./images/teamMembersImages/'+img_name, function(err) {
            if (err)
                return res.status(500).send(err);
            var query = `update staff set name = "${name}", department_id = "${department_id}", role="${role}", description="${description}", picture="${img_name}",
                     phone_number="${phone_number}", clinical_practice="${clinical_practice}",scientific_practice="${scientific_practice}", 
                        academic_experience="${academic_experience}", professional_unions="${professional_unions}",education="${education}" where id="${member_id}"`
            executeQuery(query)
                .then(resData => {
                    res.status(200).json(resData);
                })
                .catch(err => console.log(err))
        });
    } else {
        res.status(400).send("This format is not allowed , please upload file with '.png','.gif','.jpg'");
    }
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
    addStaffMember,
    getStaffMembers,
    addUpdate,
    getAllUpdates,
    deleteNews,
    deleteStaffMember,
    updateStaffMember,
};



export default userController;