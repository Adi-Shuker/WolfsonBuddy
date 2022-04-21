import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import DoctorsByDepartment from "../DoctorsByDepartment";
import PresentDoctor from "../PresentDoctor";
import "./style";

const GetToKnowTheTeam = ({ departmentsList, doctorsList }) => {
  departmentsList = ["dep1", "dep2", "dep3"];
  doctorsList = [
    { name: "doc1", department: "dep1" },
    { name: "doc2", department: "dep1" },
    { name: "doc3", department: "dep2" },
  ];

  const [data, setData] = useState("");
  const renderDoctor = () => {
    if (data) {
      return <PresentDoctor doctor={data} />;
    }
  };
  console.log("GetToKnowTheTeam render");
  return (
    <div>
      <DoctorsByDepartment
        id="something"
        setData={setData}
        departmentsList={departmentsList}
        doctorsList={doctorsList}
      />
      {renderDoctor()}
    </div>
  );
};
export default GetToKnowTheTeam;
