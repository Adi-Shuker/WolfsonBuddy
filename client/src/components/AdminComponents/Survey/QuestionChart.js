import {Doughnut, Bar, Pie} from "react-chartjs-2";
import React from "react";
import Chart from 'chart.js/auto';

const QuestionChart = ({title, question_type, labels, values})=>{
    const data = {
        labels: labels,
        datasets: [{
            label: 'מספר הצבעות',
            data: values,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderWidth: 1
        }]
    };
    return(
        <div>
            <h1>{title}</h1>
            <div>{
                question_type === 'dropdown' ? <Pie data={data} />:<Bar data={data}/>
            }
            </div>
        </div>
    );
}

export default QuestionChart;