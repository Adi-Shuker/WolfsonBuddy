import React, { useEffect, useState } from "react";
import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";
import styled from "styled-components";
import PresentDoctor from "../../PresentDoctor";
import { DepartmentsContext } from "../../../App";

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
      margin-right: 0px;
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
    margin-top: auto;
    .PresentDoctor {
      border: 1px solid black;
    }
  }
`;

const Title = styled.div`
   {
    display: flex;
    justify-content: space-around;
    direction: rtl;
  }
`;

const AddTeamMember = () => {
  const [departmentsTitle, setDepartmentsTitle] = useState("בחר מחלקה");
  const [selectedDepartment, setSelectedDepartment] = useState(1);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [clinical_practice, setClinical_practice] = useState("");
  const [scientific_practice, setScientific_practice] = useState("");
  const [academic_experience, setAcademic_experience] = useState("");
  const [professional_unions, setProfessional_unions] = useState("");
  const [education, setEducation] = useState("");
  const { departments, setDepartments } = React.useContext(DepartmentsContext);

  const submitHandle = () => {
    console.log("submitHandel of AddingTeamMember");
    const token = localStorage.getItem("accessToken");
    console.log(token);
    const data = new FormData();
    data.append("name", name);
    data.append("department_id", selectedDepartment);
    data.append("role", role);
    data.append("description", description);
    data.append("picture", picture);
    data.append("phone_number", phone_number);
    data.append("clinical_practice", clinical_practice);
    data.append("scientific_practice", scientific_practice);
    data.append("academic_experience", academic_experience);
    data.append("professional_unions", professional_unions);
    data.append("education", education);
    fetch(`/api/staff`, {
      method: "POST",
      headers: { "x-access-token": token },
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        alert("חבר צוות נוסף בהצלחה");
      })
      .catch((err) => {
        alert("יש למלא את כל השדות על מנת להוסיף את איש הצוות");
        console.log(err);
      });
  };

  const fields = [
    {
      name: "שם",
      evenHandler: (event) => {
        setName(event.target.value);
      },
    },
    {
      name: "מחלקה",
      evenHandler: (event) => {
        setSelectedDepartment(
          departments.filter((department) => department.name === event)[0].id
        );
        setDepartmentsTitle(event);
      },
    },
    {
      name: "תפקיד",
      evenHandler: (event) => {
        setRole(event.target.value);
      },
    },
    {
      name: "תיאור",
      evenHandler: (event) => {
        setDescription(event.target.value);
      },
    },
    {
      name: "טלפון",
      evenHandler: (event) => {
        setPhone_number(event.target.value);
      },
    },
    {
      name: "תחומי עיסוקי קליני",
      evenHandler: (event) => {
        setClinical_practice(event.target.value);
      },
    },
    {
      name: "תחומי עיסוק מדעי",
      evenHandler: (event) => {
        setScientific_practice(event.target.value);
      },
    },
    {
      name: "ניסיון אקדמי",
      evenHandler: (event) => {
        setAcademic_experience(event.target.value);
      },
    },
    {
      name: "חברות באיגודים מקצועיים",
      evenHandler: (event) => {
        setProfessional_unions(event.target.value);
      },
    },
    {
      name: "השכלה",
      evenHandler: (event) => {
        setEducation(event.target.value);
      },
    },
    {
      name: "תמונה",
      evenHandler: (event) => {
        setPicture(event.target.files[0]);
      },
    },
  ];

  return (
    <div className="allcomponent">
      <AddTeamMemberDiv className="AddTeamMember">
        <div className="leftDiv">
          <div className="title">תצוגה מקדימה:</div>
          <PresentDoctor
            className="preview"
            doctor={{
              name: name,
              department:
                departmentsTitle === "בחר מחלקה" ? "" : departmentsTitle,
              role: role,
              image: picture,
              phone_number: phone_number,
              professional_unions: professional_unions,
              scientific_practice: scientific_practice,
              academic_experience: academic_experience,
              clinical_practice: clinical_practice,
              description: description,
              education: education,
            }}
          />
          <Button onClick={submitHandle}>סיום</Button>
        </div>
        <div className="rightDiv">
          <div className="title">הוספת איש צוות:</div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {fields.map((item, i) => {
                return item.name === "תמונה" ? (
                  <div key={i}>
                    <Form.Label>תמונה</Form.Label>
                    <Form.Control
                      className="text-right"
                      type="file"
                      // id="picture"
                      label="abc"
                      title="efg"
                      placeholder="hij"
                      onChange={item.evenHandler}
                    />
                  </div>
                ) : item.name === "מחלקה" ? (
                  <div key={i}>
                    <DropdownButton
                      className="DropdownButton"
                      id="dropdown-departments"
                      onSelect={item.evenHandler}
                      title={departmentsTitle}
                      dir="rtl"
                    >
                      {departments.map((department, index) => {
                        return (
                          <Dropdown.Item
                            key={department.id}
                            eventKey={department.name}
                          >
                            {department.name}
                          </Dropdown.Item>
                        );
                      })}
                    </DropdownButton>
                  </div>
                ) : (
                  <div key={i}>
                    <Form.Control
                      className="text-right"
                      type="text"
                      placeholder={item.name}
                      onChange={item.evenHandler}
                    />
                  </div>
                );
              })}
            </Form.Group>
          </Form>
        </div>
      </AddTeamMemberDiv>
    </div>
  );
};

export default AddTeamMember;
