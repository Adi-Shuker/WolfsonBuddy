import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import React, { useState } from "react";
import { DoctorsByDepartmentDiv } from "./style-DoctorsByDepartment";

const DoctorsByDepartment = ({ setData, departmentsList, doctorsList }) => {
  departmentsList = departmentsList || ["dep1"];
  doctorsList = doctorsList || ["doc1"];
  let defaultDoctorsTitle = "בחר רופא";
  const [departmentsTitle, setDepartmentsTitle] = useState("בחר מחלקה");
  const [doctorsTitle, setDoctorsTitle] = useState(defaultDoctorsTitle);
  const [value, setValue] = useState(doctorsList);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const departmentSelect = (e) => {
    console.log(e);
    setDepartmentsTitle(e);
    setValue(doctorsList.filter((doctor) => doctor.department === e));
    setDoctorsTitle(defaultDoctorsTitle);
    setSelectedDoctor(null);
    setData(null);
  };
  const doctorSelect = (e) => {
    console.log(e);
    setDoctorsTitle(e);
    setSelectedDoctor(e);
    setData(doctorsList.find(o => o.name === e));
  };

  console.log("DoctorsByDepartment render");
  return (
    <DoctorsByDepartmentDiv className="DoctorsByDepartment">
      <DropdownButton
        className="DropdownButton"
        id="dropdown-departments"
        onSelect={departmentSelect}
        title={departmentsTitle}
        dir="rtl"
      >
        {departmentsList.map(function (department, index) {
          return (
            <Dropdown.Item key={department.id} eventKey={department.name}>
              {department.name}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
      <DropdownButton
        id="dropdown-doctores"
        onSelect={doctorSelect}
        title={doctorsTitle}
        dir="rtl"
      >
        {value.map(function (anObjectMapped, index) {
          return (
            <Dropdown.Item key={index} eventKey={anObjectMapped.name}>
              {anObjectMapped.name}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </DoctorsByDepartmentDiv>
  );
};
export default DoctorsByDepartment;
