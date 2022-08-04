import React, { useState } from "react";
import DoctorsByDepartment from "../DoctorsByDepartment";
import PresentDoctor from "../PresentDoctor";
import Header from "../UsersComponents/Header";
import BackIcon from "../UsersComponents/Icons/BackIcon";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {Button, Dropdown, DropdownButton} from "react-bootstrap";
import SecretariatInfo from "../UsersComponents/secretariatInfo";
import { Modal } from "react-bootstrap";
import {DepartmentsContext, StaffMembersContext} from "../../App";

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
  const { departments, setDepartments } = React.useContext(DepartmentsContext);
  const { staffMembers, setStaffMembers } = React.useContext(StaffMembersContext);
  const staffMembersList =staffMembers.map(function (member, index) {
    return (
        {name: member.member_name, department: member.department_name, image: member.picture, role:member.role,
          description:member.description, phone_number:member.phone_number, clinical_practice:member.clinical_practice,
          scientific_practice:member.scientific_practice, academic_experience:member.academic_experience,
          professional_unions:member.professional_unions, education:member.education}
    );
  })
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
            departmentsList={departments}
            doctorsList={staffMembersList}
          />
          <div className={"PresentDoctorWrapper"}>
            <PresentDoctor doctor={data} />
          </div>
        </div>
        <Button
          className={"secretariatInfoButton"}
          onClick={() => {
            //setShowSecretariatInfo(true);
          }}
          href="https://www.gov.il/he/service/wolfson-book-medical-appointment" target="_blank"
        >
          לזימון תור
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
