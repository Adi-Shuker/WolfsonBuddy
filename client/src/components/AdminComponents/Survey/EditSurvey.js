import {
  Dropdown,
  Container,
  Button,
  Row,
  Col,
  DropdownButton,
} from "react-bootstrap";
import React, { useState } from "react";
import "./Survey.css";
import UserSurvey from "./UserSurvey.js";
import { DoctorsByDepartmentDiv } from "../../style-DoctorsByDepartment";
import Header from "../../UsersComponents/Header";

const EditSurvey = () => {
  const [showUserSurvey, setShowUserSurvey] = useState(false);
  const questionTypes = [
    {
      id: 1,
      type: "matrix",
      name: "מטריצה",
    },
    {
      id: 2,
      type: "dropdown",
      name: "בחירה מתוך רשימה",
    },
    {
      id: 3,
      type: "rating",
      name: "דירוג 1-5",
    },
    {
      id: 4,
      type: "comment",
      name: "שאלה פתוחה",
    },
  ];

  return (
    <div>
      <Header />
      <div className="edit-survey" style={{ display: "block", padding: 30 }}>
        <Row>
          <Col>
            <Container>{showUserSurvey ? <UserSurvey /> : null}</Container>
            <Button
              onClick={() => {
                setShowUserSurvey(!showUserSurvey);
              }}
              className="button"
              variant="outline-primary"
            >
              תצוגה מקדימה
            </Button>{" "}
          </Col>
          <Col>
            <DoctorsByDepartmentDiv className="DoctorsByDepartment">
              <DropdownButton
                className="DropdownButton"
                id="dropdown-question-type"
                title="בחר סוג שאלה"
                dir="rtl"
              >
                {questionTypes.map((item) => {
                  return (
                    <Dropdown.Item
                      className="dropdown"
                      key={item.id}
                      eventKey={item.name}
                    >
                      {item.name}
                    </Dropdown.Item>
                  );
                })}
              </DropdownButton>
              <DropdownButton
                className="DropdownButton"
                id="dropdown-question-type"
                title="בחר שאלה"
                dir="rtl"
              >
                {questionTypes.map((item) => {
                  return (
                    <Dropdown.Item
                      className="dropdown"
                      key={item.id}
                      eventKey={item.name}
                    >
                      {item.name}
                    </Dropdown.Item>
                  );
                })}
              </DropdownButton>
              <Button className="button-add-question" variant="outline-primary">
                הוסף שאלה
              </Button>{" "}
              <Button
                className="button-remove-question"
                variant="outline-primary"
              >
                מחק שאלה
              </Button>{" "}
            </DoctorsByDepartmentDiv>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default EditSurvey;
