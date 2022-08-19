import React, { useState } from "react";
import Header from "../../UsersComponents/Header";
import EditForm from "../EditForm";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Row,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import GetToKnowTheTeam from "../../GetToKnowTheTeam/GetToKnowTheTeam";
import PresentDoctor from "../../PresentDoctor";
import DoctorsByDepartment from "../../DoctorsByDepartment";
import LogoutIcon from "../../UsersComponents/Icons/LogoutIcon";
import { StaffMembersContext } from "../../../App";

const DeleteAndEditTeamMemberDiv = styled.div`
  justify-content: space-evenly;
  padding-top: 2%;
  display: flex;
  .title {
    text-align: right;
    direction: rtl;
    margin-bottom: 10px;
  }
  .rightDiv {
    .buttonLine {
      .btn-primary {
        width: 43%;
      }
    }
  }
  .leftDiv {
    display: grid;
    .PresentDoctor {
    }
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-around;
  direction: rtl;
`;

const DeleteAndEditTeamMember = () => {
  const { staffMembers, setStaffMembers } =
    React.useContext(StaffMembersContext);
  const [data, setData] = useState("");
  const [selectedDoctorDetails, setSelectedDoctorDetails] = useState(null);
  const [membersByDepartment, setMembersByDepartment] = useState(staffMembers);

  const deleteTeamMember = (data) => {
    if (selectedDoctorDetails.id !== undefined) {
      const token = localStorage.getItem("accessToken");
      fetch(`/api/staff-member/${selectedDoctorDetails.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            setMembersByDepartment(
              staffMembers.filter(
                (member) => member.id !== selectedDoctorDetails.id
              )
            );
            alert("חבר צוות הוסר בהצלחה");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    console.log(selectedDoctorDetails);
  };
  const editTeamMember = (data) => {};

  return (
    <div className="allcomponent">
      <DeleteAndEditTeamMemberDiv className="DeleteAndEditTeamMember">
        <div className="leftDiv">
          <PresentDoctor className="preview" doctor={data} />
        </div>
        <div className="rightDiv">
          <DoctorsByDepartment
            setData={setData}
            setSelectedDoctorDetails={setSelectedDoctorDetails}
            membersByDepartment={membersByDepartment}
            setMembersByDepartment={setMembersByDepartment}
          />
          <div className={"buttonLine"}>
            <Button
              onClick={() => {
                editTeamMember(data);
              }}
            >
              {" עריכת איש צוות"}
            </Button>
            <Button
              onClick={() => {
                deleteTeamMember(data);
              }}
            >
              {"מחיקת איש צוות"}
            </Button>
          </div>
        </div>
      </DeleteAndEditTeamMemberDiv>
    </div>
  );
};

export default DeleteAndEditTeamMember;
