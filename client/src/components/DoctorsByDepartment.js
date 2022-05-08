import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import React, { useState } from "react";
import { DoctorsByDepartmentDiv } from "./style-DoctorsByDepartment";

const DoctorsByDepartment = ({ setData, departmentsList, doctorsList }) => {
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
    setData(e);
  };

  console.log("DoctorsByDepartment render");
  return (
    <DoctorsByDepartmentDiv className="DoctorsByDepartment">
      <DropdownButton
        className="DropdownButton"
        id="dropdown-departments"
        onSelect={departmentSelect}
        title={departmentsTitle}
      dir="rtl">
        {departmentsList.map(function (name, index) {
          return (
            <Dropdown.Item key={index} eventKey={name}>
              {name}
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
