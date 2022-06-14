import React, {useCallback, useEffect} from "react";
import * as Survey from "survey-react";
import { useParams } from "react-router-dom";
import "survey-react/modern.css";
import {DepartmentsContext, IsAdminContext, IsAuthenticateContext} from "../../../App";
import {useHistory} from "react-router-dom";

Survey.StylesManager.applyTheme("modern");

const DropdownQuestion = (name, title, choices) => {
    return {
        "type": "dropdown",
        "name": name,
        "title": title,
        "colCount": 0,
        "hasNone": true,
        "choices": choices.map(item => item.toString())
    };
}

const MatrixQuestion = (rows) => {
    return {
        "type": "matrix",
        "name": "matrix",
        "title": "מלאו כמה אתם מסכימים עם כל משפט",
        "rightIndent": "50",
        "columns": [
            {
                "value": "במידה רבה מאוד",
                "text": "במידה רבה מאוד"
            },
            {
                "value": "במידה רבה",
                "text": "במידה רבה"
            },
            {
                "value": "במידה בינונית",
                "text": "במידה בינונית"
            },
            {
                "value": "במידה מועטה",
                "text": "במידה מועטה"
            },
            {
                "value": "בכלל לא",
                "text": "בכלל לא"
            },
            {
                "value": "לא רלוונטי",
                "text": "לא רלוונטי"
            }
        ],
        "rows": rows
    }
}

const RatingQuestions = (name, title) => {
    return {
        "type": "rating",
        "name": name,
        "title": title,
        "rateMin": 1,
        "rateMax": 5,
    }
}

const CommentQuestion = (name, title) => {
    return {
        "type": "comment",
        "name": name,
        "title": title
    }
}

const UserSurvey = () => {
    const [result, setResult] = React.useState(null);
    const [surveyQuestions, setSurveyQuestions] = React.useState([]);
    const [surveyModel, setSurveyModel] = React.useState(null);
    const history = useHistory();

    let questions = [];
    let { department_id } = useParams();

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        fetch(`/api/survey/${department_id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json", "x-access-token": token },
        })
            .then((res) => res.json())
            .then((res) => {
                questions = [];
                let matrixRows=[];
                res.map(item => {
                    if (item.question_type === "dropdown") {
                        questions.push(DropdownQuestion(item.question_id.toString(), item.question_text.toString(), Array.from(item.suggested_answers.split(","))));
                    } else if (item.question_type === "matrix") {
                        matrixRows.push({
                            "value": item.question_id.toString(),
                            "text": item.question_text.toString()
                        });
                    } else if (item.question_type === "rating") {
                        questions.push(RatingQuestions(item.question_id.toString(), item.question_text.toString()));
                    } else if (item.question_type === "comment") {
                        questions.push(CommentQuestion(item.question_id.toString(), item.question_text.toString()));
                    }
                })
                questions.push(MatrixQuestion(matrixRows));
                setSurveyQuestions(questions);
            })
            .catch((err) => {
                console.log(err);
        })
    }, []);
    const handleSubmit = (result) => {
        console.log("result", result);
        if(result && result.length>0){
            const token = localStorage.getItem("accessToken");
            fetch(`/api/survey/result`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "x-access-token": token },
                body: JSON.stringify({
                    "answers": result,
                }),
            }).then((res) => res.json())
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    useEffect(() => {
        if(surveyQuestions){
            const model = new Survey.Model({
                "title": "סקר שביעות רצון",
                "showProgressBar": "top",
                "pages": [
                    {
                        "questions": surveyQuestions
                    }
                ]
            });
            model.onComplete.add(function (sender) {
                const results = JSON.stringify(sender.data);
                const answers = [];
                for (var key in sender.data){
                    const value = sender.data[key];
                    if(key === "matrix"){
                        for (var question_id in sender.data[key]) {
                            answers.push({"question_id":question_id.toString(),"answer": sender.data[key][question_id].toString()});
                        }
                    }else{
                        answers.push({"question_id":key.toString(),"answer": value.toString()});
                    }
                }
                console.log([...answers]);
                console.log(answers);
                handleSubmit(answers);
                alert(results);

                history.push("/usersHomePage");
            });
            setSurveyModel(model);
        }
    }, [surveyQuestions]);

    return (
        <div>
            {surveyModel? <Survey.Survey model={surveyModel}/>:null}
        </div>
    );
};


export default UserSurvey;
