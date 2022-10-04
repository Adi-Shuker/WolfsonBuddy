import React, { useState } from "react";
import { DepartmentsContext } from "../../../App";
import PresentDoctor from "../../PresentDoctor";
import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";

const EditTeamMemberModal = ({ selectedDoctorDetails }) => {
  const [departmentsTitle, setDepartmentsTitle] = useState(
    selectedDoctorDetails.department_name
  );
  const [selectedDepartment, setSelectedDepartment] = useState(1);
  const [name, setName] = useState(selectedDoctorDetails.member_name);
  const [role, setRole] = useState(selectedDoctorDetails.role);
  const [description, setDescription] = useState(
    selectedDoctorDetails.description
  );
  const [picture, setPicture] = useState("");
  const [phone_number, setPhone_number] = useState(
    selectedDoctorDetails.phone_number
  );
  const [clinical_practice, setClinical_practice] = useState(
    selectedDoctorDetails.clinical_practice
  );
  const [scientific_practice, setScientific_practice] = useState(
    selectedDoctorDetails.scientific_practice
  );
  const [academic_experience, setAcademic_experience] = useState(
    selectedDoctorDetails.academic_experience
  );
  const [professional_unions, setProfessional_unions] = useState(
    selectedDoctorDetails.professional_unions
  );
  const [education, setEducation] = useState(selectedDoctorDetails.education);
  const { departments, setDepartments } = React.useContext(DepartmentsContext);

  const submitHandle = (event) => {
    const token = localStorage.getItem("accessToken");
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
    fetch(`/api/staff-member/${selectedDoctorDetails.id}`, {
      method: "POST",
      headers: { "x-access-token": token },
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        alert("חבר צוות עודכן בהצלחה");
        setSelectedDepartment(1);
        event.target.reset();
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
      defaultValue: name,
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
      defaultValue: role,
    },
    {
      name: "תיאור",
      evenHandler: (event) => {
        setDescription(event.target.value);
      },
      defaultValue: description,
    },
    {
      name: "טלפון",
      evenHandler: (event) => {
        setPhone_number(event.target.value);
      },
      defaultValue: phone_number,
    },
    {
      name: "תחומי עיסוקי קליני",
      evenHandler: (event) => {
        setClinical_practice(event.target.value);
      },
      defaultValue: clinical_practice,
    },
    {
      name: "תחומי עיסוק מדעי",
      evenHandler: (event) => {
        setScientific_practice(event.target.value);
      },
      defaultValue: scientific_practice,
    },
    {
      name: "ניסיון אקדמי",
      evenHandler: (event) => {
        setAcademic_experience(event.target.value);
      },
      defaultValue: academic_experience,
    },
    {
      name: "חברות באיגודים מקצועיים",
      evenHandler: (event) => {
        setProfessional_unions(event.target.value);
      },
      defaultValue: professional_unions,
    },
    {
      name: "השכלה",
      evenHandler: (event) => {
        setEducation(event.target.value);
      },
      defaultValue: education,
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
      <Form onSubmit={(e) => submitHandle(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {fields.map((item, i) => {
            return item.name === "תמונה" ? (
              <div key={i}>
                <Form.Label>תמונה</Form.Label>
                <Form.Control
                  className="text-right"
                  type="file"
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
                  defaultValue={item.defaultValue}
                />
              </div>
            );
          })}
        </Form.Group>
        <Button type="submit">שמור שינויים</Button>
      </Form>
    </div>
  );
};
export default EditTeamMemberModal;
