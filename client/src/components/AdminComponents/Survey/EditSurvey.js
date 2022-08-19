import { Container, Button, Row, Col, Modal, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "./Survey.css";
import NavigationDiv from "../../UsersComponents/HomePage/NavigationDiv";
import { MDBContainer, MDBIframe } from "mdbreact";
import { DepartmentsContext } from "../../../App";
import AddQuestion from "./AddQuestion";
import DeleteQuestion from "./DeleteQuestion";
import styled from "styled-components";
import DoctorsByDepartment from "../../DoctorsByDepartment";

const EditSurveyDiv = styled.div`
    display: flex;
    justify-content: space-around;
     .DoctorsByDepartment {
    display: flex;
    justify-content: center;
  }
  
  
    
}`;

const EditSurvey = () => {
  const [showUserSurvey, setShowUserSurvey] = useState(false);
  const [addQuestionModal, setAddQuestionModal] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [questionTypes, setQuestionTypes] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    fetch(`/api/survey/${selectedDepartment}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", "x-access-token": token },
    })
      .then((res) => res.json())
      .then((res) => {
        setQuestions(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedDepartment]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    fetch(`/api/survey/question_types`, {
      method: "GET",
      headers: { "Content-Type": "application/json", "x-access-token": token },
    })
      .then((res) => res.json())
      .then((res) => {
        setQuestionTypes(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <EditSurveyDiv
      className="edit-survey"
      style={{ display: "block", padding: 30 }}
    >
      <DoctorsByDepartment
        hideDoctors={true}
        setDepartment={setSelectedDepartment}
      />
      <Container>
        {selectedDepartment ? (
          <MDBContainer className="text-center" style={{ height: "500px" }}>
            <MDBIframe
              src={"/userSurvey/" + selectedDepartment}
              style={{ height: "400px" }}
            />
          </MDBContainer>
        ) : null}
      </Container>
      <div>
        <AddQuestion
          questionTypes={questionTypes}
          selectedDepartment={selectedDepartment}
        />
        <DeleteQuestion questions={questions} setQuestions={setQuestions} />
      </div>
      <Modal
        className="navModal"
        show={addQuestionModal}
        onHide={() => setAddQuestionModal(false)}
        centered
      >
        <Modal.Header className="border-0" closeButton></Modal.Header>
        <NavigationDiv setTrigger={setAddQuestionModal} />
      </Modal>
    </EditSurveyDiv>
  );
};

export default EditSurvey;
