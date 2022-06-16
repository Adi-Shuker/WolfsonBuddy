import React, { useState } from "react";
import DoctorsByDepartment from "../DoctorsByDepartment";
import PresentDoctor from "../PresentDoctor";
import Header from "../UsersComponents/Header";
import BackIcon from "../UsersComponents/Icons/BackIcon";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import SecretariatInfo from "../UsersComponents/secretariatInfo";
import { Modal } from "react-bootstrap";

const GetToKnowTheTeamDiv = styled.div`
  .BackIconDiv {
    width: 60px;
    height: 60px;
    border-radius: 150px;
    display: block;
    position: fixed;
    left: 26px;
    bottom: 85px;
    right: 0;
  }
  .content {
    display: inline-grid;
    justify-content: center;
  }
  .secretariatInfoButton {
    position: fixed;
    bottom: 150px;
  }
  .PresentDoctorWrapper {
  }
`;

const GetToKnowTheTeam = ({ departmentsList, doctorsList }) => {
  departmentsList = ["dep1", "dep2", "dep3"];
  doctorsList = [
    { name: "doc1", department: "dep1" },
    { name: "doc2", department: "dep1" },
    { name: "doc3", department: "dep2" },
  ];
  const [showSecretariatInfo, setShowSecretariatInfo] = useState(false);
  const [data, setData] = useState("");
  const history = useHistory();
  return (
    <GetToKnowTheTeamDiv className="GetToKnowTheTeamDiv">
      <Header />
      <div className={"content"}>
        <div className={"upperDiv"}>
          <DoctorsByDepartment
            id="something"
            setData={setData}
            departmentsList={departmentsList}
            doctorsList={doctorsList}
          />
          <div className={"PresentDoctorWrapper"}>
            <PresentDoctor doctor={data} />
          </div>
        </div>
        <Button
          className={"secretariatInfoButton"}
          onClick={() => {
            setShowSecretariatInfo(true);
          }}
        >
          מזכירות וקבלה
        </Button>
        <Modal
          className="secretariatInfoModal"
          show={showSecretariatInfo}
          onHide={() => setShowSecretariatInfo(false)}
          centered
        >
          <Modal.Header className="border-0" closeButton />
          <SecretariatInfo />
        </Modal>
        <div
          className="BackIconDiv iconWrapper lightGreyBorder"
          onClick={() => history.push("/usersHomePage")}
        >
          <BackIcon />
        </div>
      </div>
    </GetToKnowTheTeamDiv>
  );
};
export default GetToKnowTheTeam;
