import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
} from "react-bootstrap";
import styled from "styled-components";
import PresentDoctor from "../../PresentDoctor";

const AddTeamMemberDiv = styled.div`
  justify-content: space-evenly;
  align-items: baseline;
  display: flex;
  .title {
    text-align: right;
    direction: rtl;
    margin-bottom: 10px;
  }
  .rightDiv {
    .dropdown-toggle {
      margin-bottom: 10px;
      width: 100%;
      background-color: white;
      color: grey;
      border-color: lightgrey;
    }

    .show > .btn-primary.dropdown-toggle {
      color: grey;
      background-color: white;
      border-color: lightgrey;
      box-shadow: 0px 0px 5px 2px;
    }
    .btn-primary:focus {
      box-shadow: 0px 0px 5px 2px;
    }
  }
  .leftDiv {
    display: grid;
    .PresentDoctor {
      border: 1px solid black;
    }
  }
`;

const Title = styled.div`{
    display: flex;
    justify-content: space-around;
    direction: rtl;
}`;

const AddTeamMember = () => {
  const departmentsList = [
    "dep1",
    "dep2",
    "dep3",
    "היחידה לאורוגינקולוגיה וכירורגית רצפת האגן",
  ];
  function submitHandle() {}
  const [departmentsTitle, setDepartmentsTitle] = useState("בחר מחלקה");

  const departmentSelect = (e) => {
    console.log(e);
    setDepartmentsTitle(e);
  };
  const fields = [
    "שם",
    "מחלקה",
    "תיאור",
    "טלפון",
    "תחומי עיסוקי קליני",
    "תחומי עיסוק מדעי",
    "ניסיון אקדמי",
    "חברות באיגודים מקצועיים",
    "השכלה",
    "תמונה",
  ];
  return (
    <div className="allcomponent">
      <AddTeamMemberDiv className="AddTeamMember">
        <div className="leftDiv">
          <div className="title">תצוגה מקדימה:</div>
          <PresentDoctor className="preview" doctor={"doc1"} />
          <Button>סיום</Button>
        </div>
        <div className="rightDiv">
          <div className="title">הוספת איש צוות:</div>
          <Form onSubmit={submitHandle}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {fields.map((item) => {
                return item === "תמונה" ? (
                  <div>
                    <Form.Label>תמונה</Form.Label>
                    <Form.Control
                      className="text-right"
                      type="file"
                      label="abc"
                      title="efg"
                      placeholder="hij"
                    />
                  </div>
                ) : item === "מחלקה" ? (
                  <div>
                    <DropdownButton
                      className="DropdownButton"
                      id="dropdown-departments"
                      onSelect={departmentSelect}
                      title={departmentsTitle}
                      dir="rtl"
                    >
                      {departmentsList.map(function (name, index) {
                        return (
                          <Dropdown.Item key={index} eventKey={name}>
                            {name}
                          </Dropdown.Item>
                        );
                      })}
                    </DropdownButton>
                  </div>
                ) : (
                  <div>
                    <Form.Control
                      className="text-right"
                      type="text"
                      placeholder={item}
                    />
                  </div>
                );
              })}
            </Form.Group>

            <Button>תצוגה מקדימה</Button>
          </Form>
        </div>
      </AddTeamMemberDiv>
    </div>
  );
};

export default AddTeamMember;
