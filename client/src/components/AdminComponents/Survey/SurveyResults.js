import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import {DepartmentsContext} from "../../../App";
import QuestionChart from './QuestionChart.js';
import UserAnswersTable from "./UserAnswersTable.js";


const SurveyResults = () => {
    const [selectedDepartment, setSelectedDepartment] = useState(1);
    const [chartsData, setChartsData] = useState({ items: [] })
    const [commentUserAnswers, setCommentUserAnswers] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const addCommentUserAnswer = (newCommentUserAnswer) => setCommentUserAnswers(state => [...state, newCommentUserAnswer])
    let list = [];
    const { departments, setDepartments } = React.useContext(DepartmentsContext);
    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        fetch(`/api/survey/result/${selectedDepartment}`, {
            method: "GET",
            headers: { "Content-Type": "application/json", "x-access-token": token },
        })
            .then((res) => res.json())
            .then((res) => {
                setTotalCount(0);
                setCommentUserAnswers([]);
                res.forEach((item)=>{
                    const answers = new Map();
                    if(item.question_type !== "comment"){
                        if(item.suggested_answers !==null){
                            item.suggested_answers.split(',').forEach((ans)=>{
                                if(!answers.has(ans)){
                                    answers.set(ans, 0);
                                }
                            })
                        }
                        if(item.answers !== undefined){
                            item.answers.split(',').forEach((ans)=>{
                                if(answers.has(ans)){
                                    answers.set(ans, answers.get(ans)+1)
                                }
                            })
                            setTotalCount(item.answers.split(',').length);
                        }
                        list=[...list, {"title":item.question_text,"question_type":item.question_type,"labels":Array.from(answers.keys()), "values":Array.from(answers.values())}]

                    }else{
                        setTotalCount(item.answers.split(',').length);
                        addCommentUserAnswer({"title":item.question_text, "answers" : Array.from(item.answers.split(','))});
                    }
                })
                setChartsData(list)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [selectedDepartment]);

    return(
        <div className="SurveyResults">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>בחר מחלקה</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={(e)=> {
                        setSelectedDepartment(e.target.value)
                    }} dir="rtl">
                        {departments.map((department) =>{
                            return <option value={department.id}>{department.name}</option>;
                        })}
                    </Form.Select>
                </Form.Group>
            </Form>
            <div> סה"כ ענו: {totalCount} מטופלים </div>
            <div className="d-flex justify-content-around flex-column">
                {chartsData.length > 0 && chartsData.map((item, index) => {
                    return <div className="w-50 col-6 md-6">
                            <QuestionChart title={item.title} question_type={item.question_type} labels={item.labels} values={item.values===undefined?[]:item.values}/>
                        </div>
                    }
                )}
                {commentUserAnswers.length>0 && commentUserAnswers.map(ans =>{
                    return <div className="w-50 col-6 md-6">
                            <UserAnswersTable title={ans.title} answers={ans.answers.length>0?ans.answers:[]}/>
                            </div>
                    }
                )}
            </div>
        </div>

    )
}
 export default SurveyResults;