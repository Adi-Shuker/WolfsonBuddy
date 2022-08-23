import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import React, { useState } from "react";
import { DoctorsByDepartmentDiv } from "./style-DoctorsByDepartment";
import { DepartmentsContext, NewsContext, StaffMembersContext } from "../App";

const DoctorsByDepartment = ({ setData, setDepartment, hideDoctors, setSelectedDoctorDetails }) => {
  const { staffMembers, setStaffMembers } =
      React.useContext(StaffMembersContext);
  const { departments, setDepartments } = React.useContext(DepartmentsContext);
  let defaultDoctorsTitle = "בחר רופא";
  const [departmentsTitle, setDepartmentsTitle] = useState("בחר מחלקה");
  const [doctorsTitle, setDoctorsTitle] = useState(defaultDoctorsTitle);
  const [doctorsByDepartment, setDoctorsByDepartment] = useState(staffMembers);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const departmentSelect = (e) => {
    setDepartmentsTitle(e);
    setDoctorsByDepartment(staffMembers.filter((doctor) => doctor.department_name === e));
    setDoctorsTitle(defaultDoctorsTitle);
    setSelectedDoctor(null);
    setData && setData(null);

    const depId = departments.filter((department) => department.name === e)[0]
        .id;

    setDepartment && setDepartment(depId);
  };
  const doctorSelect = (e) => {
    setDoctorsTitle(e);
    setSelectedDoctor(e);
    if(setSelectedDoctorDetails){
      setSelectedDoctorDetails(staffMembers.filter((member) => member.member_name === e)[0])
    }
    setData && setData(e);
    console.log(e)
  };

  return (
      <DoctorsByDepartmentDiv className="DoctorsByDepartment">
        <DropdownButton
            className="DropdownButton"
            id="dropdown-departments"
            onSelect={departmentSelect}
            title={departmentsTitle}
            dir="rtl"
        >
          {departments.map(function (department, index) {
            return (
                <Dropdown.Item key={department.id} eventKey={department.name}>
                  {department.name}
                </Dropdown.Item>
            );
          })}
        </DropdownButton>
        {hideDoctors ? null : (
            <DropdownButton
                id="dropdown-doctores"
                onSelect={doctorSelect}
                title={doctorsTitle}
                dir="rtl"
            >
              {doctorsByDepartment.map(function (staffMember, index) {
                return (
                    <Dropdown.Item key={index} eventKey={staffMember.member_name}>
                      {staffMember.member_name}
                    </Dropdown.Item>
                );
              })}
            </DropdownButton>
        )}
      </DoctorsByDepartmentDiv>
  );
};
export default DoctorsByDepartment;
