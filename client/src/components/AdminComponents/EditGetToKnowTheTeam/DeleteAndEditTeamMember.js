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
  const history = useHistory();
  const departmentsList = ["doc1", "doc2", "doc3"];
  const [data, setData] = useState("");
  function handleClick(path) {
    history.push(path);
  }

  return (
    <div className="allcomponent">
      <DeleteAndEditTeamMemberDiv className="DeleteAndEditTeamMember">
        <div className="leftDiv">
          <PresentDoctor className="preview" doctor={"doc1"} />
        </div>
        <div className="rightDiv">
          <DoctorsByDepartment setData={setData} />
          <div className={"buttonLine"}>
            <Button
              onClick={() => {
                handleClick("/editGetToKnowTheTeam");
              }}
            >
              {" עריכת איש צוות"}
            </Button>
            <Button
              onClick={() => {
                //TO-DO delete it from DB
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
