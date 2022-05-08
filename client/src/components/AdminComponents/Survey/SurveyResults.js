import React, {useEffect, useState} from "react";
import { Chart, registerables } from 'chart.js';
import {Dropdown, Button, DropdownButton} from "react-bootstrap";
import {DepartmentsContext} from "../../../App";
import {DoctorsByDepartmentDiv} from "../../style-DoctorsByDepartment";

const SurveyResults = () => {
    const [selectedQuestion, setSelectedQuestion] = useState("בחר");
    const { departments, setDepartments } = React.useContext(DepartmentsContext);
    const questionTypes = [
        {
            "id": 1,
            "type": "matrix",
            "name": "מטריצה"
        },
        {
            "id": 2,
            "type": "dropdown",
            "name": "בחירה מתוך רשימה"
        },
        {
            "id": 3,
            "type": "rating",
            "name": "דירוג 1-5"
        },
        {
            "id": 4,
            "type": "comment",
            "name": "שאלה פתוחה"
        }
    ];

    useEffect(()=>{
        //chars for matrix
        Chart.register(...registerables);
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['במידה רבה מאוד', 'במידה רבה', 'במידה בינונית', 'במידה מועטה', 'בכלל לא', 'לא רלוונטי'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        });
        //rating
        const ctx2 = document.getElementById('myChart2').getContext('2d');
        const myChart2 = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: ['1', '2', '3', '4', '5'],
                datasets: [{
                    label: 'מספר הצבעות: ',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        });
        // when component unmounts
        return () => {
            myChart.destroy()
            myChart2.destroy()
        }
        }, [])

const totalCount = 100;
    return(
        <DoctorsByDepartmentDiv className="DoctorsByDepartment">
        <div className="SurveyResults">
                <DropdownButton
                    className="DropdownButton"
                    id="dropdown-departments"
                    title='בחר מחלקה'
                    dir="rtl">
                    {
                        departments.map((item)=>{
                            return (
                                <Dropdown.Item className="dropdown"  key = {item.id} eventKey={item.name}>{item.name}</Dropdown.Item>
                            )
                        })
                    }
                </DropdownButton>
            <DropdownButton
                className="DropdownButton"
                id="dropdown-question-type"
                title='בחר סוג שאלות'
                dir="rtl">
                {
                    questionTypes.map((item)=>{
                        return (
                            <Dropdown.Item className="dropdown"  key = {item.id} eventKey={item.name}>{item.name}</Dropdown.Item>
                        )
                    })
                }
            </DropdownButton>
            <div> סה"כ ענו: {totalCount} מטופלים </div>
            <div style={{ position: "relative", width: 400, height: 400 }}>
                <canvas id="myChart"></canvas>
            </div>
            <div style={{ position: "relative", width: 400, height: 400 }}>
                <canvas id="myChart2"></canvas>
            </div>
        </div>
        </DoctorsByDepartmentDiv>

    )
}
 export default SurveyResults;