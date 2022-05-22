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
import { Link } from "react-router-dom";
import styled from "styled-components";
import GetToKnowTheTeam from "../../GetToKnowTheTeam/GetToKnowTheTeam";
import PresentDoctor from "../../PresentDoctor";
import DoctorsByDepartment from "../../DoctorsByDepartment";

const DeleteAndEditTeamMemberDiv = styled.div`
  justify-content: space-evenly;
  align-items: baseline;
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
      border: 1px solid black;
    }
  }
`;

const Title = styled.div`
    display: flex;
    justify-content: space-around;
    direction: rtl;
}`;

const DeleteAndEditTeamMember = () => {
  const departmentsList = ["doc1", "doc2", "doc3"];
  return (
    <div className="allcomponent">
      <Header />
      <DeleteAndEditTeamMemberDiv className="DeleteAndEditTeamMember">
        <div className="leftDiv">
          <PresentDoctor className="preview" doctor={"doc1"} />
        </div>
        <div className="rightDiv">
          <DoctorsByDepartment />
          <div className={"buttonLine"}>
            <Button> עריכת איש צוות </Button>
            <Button> מחיקת איש צוות </Button>
          </div>
        </div>
      </DeleteAndEditTeamMemberDiv>
    </div>
  );
};

export default DeleteAndEditTeamMember;
