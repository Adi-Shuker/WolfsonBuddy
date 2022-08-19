import React, { useState } from "react";
import DoctorsByDepartment from "../DoctorsByDepartment";
import PresentDoctor from "../PresentDoctor";
import Header from "../UsersComponents/Header";
import BackIcon from "../UsersComponents/Icons/BackIcon";
import styled from "styled-components";
import { Redirect, useHistory } from "react-router-dom";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import SecretariatInfo from "../UsersComponents/secretariatInfo";
import { Modal } from "react-bootstrap";
import {
  DepartmentsContext,
  IsAuthenticateContext,
  StaffMembersContext,
  UserDetailsContext,
} from "../../App";
import Footer from "../UsersComponents/Footer";

const GetToKnowTheTeamDiv = styled.div`
  .content {
    display: inline-grid;
    justify-content: center;
  }
  .secretariatInfoButton {
    bottom: 150px;
  }
  .PresentDoctorWrapper {
  }
`;

const GetToKnowTheTeam = ({ departmentsList, doctorsList }) => {
  const [showSecretariatInfo, setShowSecretariatInfo] = useState(false);
  const [data, setData] = useState("");
  const history = useHistory();
  const { departments } = React.useContext(DepartmentsContext);
  const { staffMembers } = React.useContext(StaffMembersContext);
  const { isAuthenticated } = React.useContext(IsAuthenticateContext);
  const { userDetails, setUserDetails } = React.useContext(UserDetailsContext);
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  } else {
    if (Object.keys(userDetails).length === 0) {
      const token = localStorage.getItem("accessToken");
      fetch("/api/user-data-from-token", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setUserDetails(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  const staffMembersList =
    staffMembers.length > 0
      ? staffMembers.map((member, index) => {
          return {
            name: member.member_name,
            department: member.department_name,
            image: member.picture,
            role: member.role,
            description: member.description,
            phone_number: member.phone_number,
            clinical_practice: member.clinical_practice,
            scientific_practice: member.scientific_practice,
            academic_experience: member.academic_experience,
            professional_unions: member.professional_unions,
            education: member.education,
          };
        })
      : [];

  return (
    <GetToKnowTheTeamDiv className="GetToKnowTheTeamDiv">
      <div className={"wrapper-above-footer"}>
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
            href="https://www.gov.il/he/service/wolfson-book-medical-appointment"
            target="_blank"
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
        </div>
      </div>
      <Footer showBackIcon={true} />
    </GetToKnowTheTeamDiv>
  );
};
export default GetToKnowTheTeam;
