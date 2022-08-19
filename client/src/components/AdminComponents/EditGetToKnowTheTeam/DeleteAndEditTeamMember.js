import React, { useState } from "react";
import Header from "../../UsersComponents/Header";
import EditForm from "../EditForm";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form, Modal,
  Row,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import GetToKnowTheTeam from "../../GetToKnowTheTeam/GetToKnowTheTeam";
import PresentDoctor from "../../PresentDoctor";
import DoctorsByDepartment from "../../DoctorsByDepartment";
import LogoutIcon from "../../UsersComponents/Icons/LogoutIcon";
import {StaffMembersContext} from "../../../App";
import EditTeamMemberModal from "./EditTeamMemberModal";
import NavigationDiv from "../../UsersComponents/HomePage/NavigationDiv";

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
  const { staffMembers, setStaffMembers } = React.useContext(StaffMembersContext);
  const [data, setData] = useState("");
  const [selectedDoctorDetails, setSelectedDoctorDetails] = useState(null);
  const [editStaffMemberModal, setEditStaffMemberModal] = useState(false);

  const deleteTeamMember = () => {
    if(selectedDoctorDetails && selectedDoctorDetails.id !== undefined){
      const token = localStorage.getItem("accessToken");
      fetch(`/api/staff-member/${selectedDoctorDetails.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json", "x-access-token": token },
      })
          .then((res) => {
            if(res.status===200){
              setStaffMembers(staffMembers.filter((member) => member.member_name !==  data));
              alert("חבר צוות הוסר בהצלחה")
            }
          }).catch((err) => {
            console.log(err);
          });
    }
  };
  const editTeamMember = () => {
    if(selectedDoctorDetails && selectedDoctorDetails.id !== undefined){
      setEditStaffMemberModal(true)
    }else{
      alert("יש לבחור מחלקה + רופא")
    }
    console.log(selectedDoctorDetails)
  };

  return (
    <div className="allcomponent">
      <DeleteAndEditTeamMemberDiv className="DeleteAndEditTeamMember">
        <div className="leftDiv">
          <PresentDoctor className="preview" doctor={data} />
        </div>
        <div className="rightDiv">
          <DoctorsByDepartment setData={setData} setSelectedDoctorDetails={setSelectedDoctorDetails}
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
        <Modal
            className="navModal"
            show={editStaffMemberModal}
            onHide={() => setEditStaffMemberModal(false)}
            centered
        >
          <Modal.Header className="border-0" closeButton></Modal.Header>
          <EditTeamMemberModal setTrigger={setEditStaffMemberModal} selectedDoctorDetails={selectedDoctorDetails} />
        </Modal>
      </DeleteAndEditTeamMemberDiv>
    </div>
  );
};

export default DeleteAndEditTeamMember;
