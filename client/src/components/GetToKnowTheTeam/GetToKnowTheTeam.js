import React, { useState } from "react";
import DoctorsByDepartment from "../DoctorsByDepartment";
import PresentDoctor from "../PresentDoctor";
import Header from "../UsersComponents/Header";
import BackIcon from "../UsersComponents/Icons/BackIcon";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const GetToKnowTheTeamDiv = styled.div`
  .BackIconDiv {
    width: 60px;
    height: 60px;
    margin-left: 10%;
    border-radius: 150px;
    display: block;
  }
`;

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
  const history = useHistory();
  return (
    <GetToKnowTheTeamDiv className="GetToKnowTheTeamDiv">
      <Header />
      <DoctorsByDepartment
        id="something"
        setData={setData}
        departmentsList={departmentsList}
        doctorsList={doctorsList}
      />
      {renderDoctor()}
      <div
        className="BackIconDiv iconWrapper lightGreyBorder"
        onClick={() => history.push("/usersHomePage")}
      >
        <BackIcon />
      </div>
    </GetToKnowTheTeamDiv>
  );
};
export default GetToKnowTheTeam;
