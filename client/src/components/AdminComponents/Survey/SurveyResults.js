import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { DepartmentsContext } from "../../../App";
import QuestionChart from "./QuestionChart.js";
import UserAnswersTable from "./UserAnswersTable.js";
import styled from "styled-components";
import DoctorsByDepartment from "../../DoctorsByDepartment";

const SurveyResultsDiv = styled.div`
  justify-content: center;
  .DoctorsByDepartment {
    display: flex;
    justify-content: center;
  }
`;

const ResultWrapperDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
`;

const GraphWithText = styled.div`
  direction: rtl;
  height: 370px;
  width: 535px;
  border: 1px solid #00138e;
  border-radius: 50px;
  overflow: hidden;
  margin: 35px;
  padding: 50px;
  h1 {
    font-size: 20px;
  }
  &.type-dropdown {
    max-width: 535px;
    padding-right: 120px;
    padding-bottom: 100px;
    padding-left: 110px;
    padding-top: 16px;
  }
  img {
    height: 100px;
    width: 100px;
  }
`;

const SurveyResults = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(1);

  const [data, setData] = useState("");
  const [chartsData, setChartsData] = useState({ items: [] });
  const [commentUserAnswers, setCommentUserAnswers] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const addCommentUserAnswer = (newCommentUserAnswer) =>
    setCommentUserAnswers((state) => [...state, newCommentUserAnswer]);
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
        res.forEach((item) => {
          const answers = new Map();
          if (item.question_type !== "comment") {
            if (item.suggested_answers !== null) {
              item.suggested_answers.split(",").forEach((ans) => {
                if (!answers.has(ans)) {
                  answers.set(ans, 0);
                }
              });
            }
            if (item.answers !== undefined) {
              item.answers.split(",").forEach((ans) => {
                if (answers.has(ans)) {
                  answers.set(ans, answers.get(ans) + 1);
                }
              });
              setTotalCount(item.answers.split(",").length);
            }
            list = [
              ...list,
              {
                title: item.question_text,
                question_type: item.question_type,
                labels: Array.from(answers.keys()),
                values: Array.from(answers.values()),
              },
            ];
          } else {
            setTotalCount(item.answers.split(",").length);
            addCommentUserAnswer({
              title: item.question_text,
              answers: Array.from(item.answers.split(",")),
            });
          }
        });
        setChartsData(list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedDepartment]);

  return (
    <SurveyResultsDiv className="SurveyResults">
      <DoctorsByDepartment
        hideDoctors={true}
        setDepartment={setSelectedDepartment}
      />
      <div> סה"כ ענו: {totalCount} מטופלים </div>
      <ResultWrapperDiv className="result-wrapper">
        {chartsData.length > 0 &&
          chartsData.map((item, index) => {
            return (
              <GraphWithText
                key={index}
                className={"graph-wrapper type-" + item.question_type}
              >
                <QuestionChart
                  className={item.question_type}
                  title={item.title}
                  question_type={item.question_type}
                  labels={item.labels}
                  values={item.values === undefined ? [] : item.values}
                />
              </GraphWithText>
            );
          })}
        {commentUserAnswers.length > 0 &&
          commentUserAnswers.map((ans, i) => {
            return (
              <div key={i} className="w-50 col-6 md-6">
                <UserAnswersTable
                  title={ans.title}
                  answers={ans.answers.length > 0 ? ans.answers : []}
                />
              </div>
            );
          })}
      </ResultWrapperDiv>
    </SurveyResultsDiv>
  );
};
export default SurveyResults;
